import {
    createQueryBuilder,
    OTHER_MANGO_ATTRIBUTES,
    OTHER_MANGO_OPERATORS
} from './mquery/nosql-query-builder.ts';
import type { RxPlugin, RxQuery } from '../../types/index.d.ts';
import { createRxQuery } from '../../rx-query.ts';
import { clone } from '../../plugins/utils/index.ts';
import { overwritable } from '../../overwritable.ts';
import { newRxError } from '../../rx-error.ts';

// if the query-builder plugin is used, we have to save its last path
const RXQUERY_OTHER_FLAG = 'queryBuilderPath';

export function runBuildingStep<RxDocumentType, RxQueryResult>(
    rxQuery: RxQuery<RxDocumentType, RxQueryResult>,
    functionName: string,
    value: any
): RxQuery<RxDocumentType, RxQueryResult> {
    const queryBuilder = createQueryBuilder(clone(rxQuery.mangoQuery), rxQuery.other[RXQUERY_OTHER_FLAG]);

    (queryBuilder as any)[functionName](value); // run

    const queryBuilderJson = queryBuilder.toJSON();

    return createRxQuery<RxDocumentType>(
        rxQuery.op,
        queryBuilderJson.query,
        rxQuery.collection,
        {
            ...rxQuery.other,
            [RXQUERY_OTHER_FLAG]: queryBuilderJson.path
        }
    ) as RxQuery<RxDocumentType>;
}

export function applyBuildingStep(
    proto: any,
    functionName: string
): void {
    proto[functionName] = function (this: RxQuery, value: any) {
        if (overwritable.isDevMode() && this.op === 'findByIds') {
            throw newRxError('QU17', {
                collection: this.collection.name,
                query: this.mangoQuery
            });
        }
        return runBuildingStep(this, functionName, value);
    };
}

export * from './mquery/nosql-query-builder.ts';

export const NxDBQueryBuilderPlugin: RxPlugin = {
    name: 'query-builder',
    nxdb: true,
    prototypes: {
        RxQuery(proto: any) {
            [
                'where',
                'equals',
                'eq',
                'or',
                'nor',
                'and',
                'mod',
                'exists',
                'elemMatch',
                'sort'
            ].forEach(attribute => {
                applyBuildingStep(proto, attribute);
            });
            OTHER_MANGO_ATTRIBUTES.forEach(attribute => {
                applyBuildingStep(proto, attribute);
            });
            OTHER_MANGO_OPERATORS.forEach(operator => {
                applyBuildingStep(proto, operator);
            });
        }
    }
};
