---
title: Creating Plugins
slug: plugins.html
---

# Creating Plugins

Creating your own plugin is very simple. A plugin is basically a javascript-object which overwrites or extends NxDB's internal classes, prototypes, and hooks.

A basic plugin:

```javascript

const myPlugin = {
        nxdb: true, // this must be true so nxdb knows that this is a nxdb-plugin
        /**
         * (optional) init() method
         * that is called when the plugin is added to NxDB for the first time.
         */
        init() {
            // import other plugins or initialize stuff
        },
        /**
         * every value in this object can manipulate the prototype of the keynames class
         * You can manipulate every prototype in this list:
         * @link https://github.com/nxpkg/nxdb/blob/master/src/plugin.ts#L22
         */
        prototypes: {
            /**
             * add a function to RxCollection so you can call 'myCollection.hello()'
             *
             * @param {object} prototype of RxCollection
             */
            RxCollection: (proto) => {
                proto.hello = function() {
                    return 'world';
                };
            }
        },
        /**
         * some methods are static and can be overwritten in the overwritable-object
         */
        overwritable: {
            validatePassword: function(password) {
                if (password && typeof password !== 'string' || password.length < 10)
                    throw new TypeError('password is not valid');
            }
        },
        /**
         * you can add hooks to the hook-list
         */
        hooks: {
            /**
             * add a `foo` property to each document. You can then call myDocument.foo (='bar')
             */
            createRxDocument: {
                /**
                 * You can either add the hook running 'before' or 'after'
                 * the hooks of other plugins.
                 */
                after: function(doc) {
                    doc.foo = 'bar';
                }
            }
        }
};

// now you can import the plugin into nxdb
addRxPlugin(myPlugin);
```

# Properties

## nxdb

The `nxdb`-property signals that this plugin is an nxdb-plugin. The value should always be `true`.

## prototypes

The `prototypes`-property contains a function for each of NxDB's internal prototype that you want to manipulate. Each function gets the prototype-object of the corresponding class as parameter and then can modify it. You can see a list of all available prototypes [here](https://github.com/nxpkg/nxdb/blob/master/src/plugin.ts)

## overwritable

Some of NxDB's functions are not inside of a class-prototype but are static. You can set and overwrite them with the `overwritable`-object. You can see a list of all overwritables [here](https://github.com/nxpkg/nxdb/blob/master/src/overwritable.ts).

# hooks

Sometimes you don't want to overwrite an existing NxDB-method, but extend it. You can do this by adding hooks which will be called each time the code jumps into the hooks corresponding call. You can find a list of all hooks [here](https://github.com/nxpkg/nxdb/blob/master/src/hooks.ts).

# options

RxDatabase and RxCollection have an additional options-parameter, which can be filled with any data required be the plugin.

```javascript
const collection = myDatabase.addCollections({
    foo: {
        schema: mySchema,
        options: { // anything can be passed into the options
            foo: ()=>'bar'
        }
    }
})

// Afterwards you can use these options in your plugin.

collection.options.foo(); // 'bar'
```
