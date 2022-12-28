var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __reExport = (target, module, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module) => {
  return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// node_modules/core-js/internals/global.js
var require_global = __commonJS({
  "node_modules/core-js/internals/global.js"(exports, module) {
    var check = function(it) {
      return it && it.Math == Math && it;
    };
    module.exports = check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || check(typeof self == "object" && self) || check(typeof global == "object" && global) || function() {
      return this;
    }() || Function("return this")();
  }
});

// node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "node_modules/core-js/internals/fails.js"(exports, module) {
    module.exports = function(exec) {
      try {
        return !!exec();
      } catch (error2) {
        return true;
      }
    };
  }
});

// node_modules/core-js/internals/descriptors.js
var require_descriptors = __commonJS({
  "node_modules/core-js/internals/descriptors.js"(exports, module) {
    var fails9 = require_fails();
    module.exports = !fails9(function() {
      return Object.defineProperty({}, 1, { get: function() {
        return 7;
      } })[1] != 7;
    });
  }
});

// node_modules/core-js/internals/function-bind-native.js
var require_function_bind_native = __commonJS({
  "node_modules/core-js/internals/function-bind-native.js"(exports, module) {
    var fails9 = require_fails();
    module.exports = !fails9(function() {
      var test2 = function() {
      }.bind();
      return typeof test2 != "function" || test2.hasOwnProperty("prototype");
    });
  }
});

// node_modules/core-js/internals/function-call.js
var require_function_call = __commonJS({
  "node_modules/core-js/internals/function-call.js"(exports, module) {
    var NATIVE_BIND = require_function_bind_native();
    var call3 = Function.prototype.call;
    module.exports = NATIVE_BIND ? call3.bind(call3) : function() {
      return call3.apply(call3, arguments);
    };
  }
});

// node_modules/core-js/internals/object-property-is-enumerable.js
var require_object_property_is_enumerable = __commonJS({
  "node_modules/core-js/internals/object-property-is-enumerable.js"(exports) {
    "use strict";
    var $propertyIsEnumerable = {}.propertyIsEnumerable;
    var getOwnPropertyDescriptor2 = Object.getOwnPropertyDescriptor;
    var NASHORN_BUG = getOwnPropertyDescriptor2 && !$propertyIsEnumerable.call({ 1: 2 }, 1);
    exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
      var descriptor = getOwnPropertyDescriptor2(this, V);
      return !!descriptor && descriptor.enumerable;
    } : $propertyIsEnumerable;
  }
});

// node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "node_modules/core-js/internals/create-property-descriptor.js"(exports, module) {
    module.exports = function(bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value
      };
    };
  }
});

// node_modules/core-js/internals/function-uncurry-this.js
var require_function_uncurry_this = __commonJS({
  "node_modules/core-js/internals/function-uncurry-this.js"(exports, module) {
    var NATIVE_BIND = require_function_bind_native();
    var FunctionPrototype2 = Function.prototype;
    var call3 = FunctionPrototype2.call;
    var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype2.bind.bind(call3, call3);
    module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
      return function() {
        return call3.apply(fn, arguments);
      };
    };
  }
});

// node_modules/core-js/internals/classof-raw.js
var require_classof_raw = __commonJS({
  "node_modules/core-js/internals/classof-raw.js"(exports, module) {
    var uncurryThis7 = require_function_uncurry_this();
    var toString8 = uncurryThis7({}.toString);
    var stringSlice2 = uncurryThis7("".slice);
    module.exports = function(it) {
      return stringSlice2(toString8(it), 8, -1);
    };
  }
});

// node_modules/core-js/internals/indexed-object.js
var require_indexed_object = __commonJS({
  "node_modules/core-js/internals/indexed-object.js"(exports, module) {
    var uncurryThis7 = require_function_uncurry_this();
    var fails9 = require_fails();
    var classof = require_classof_raw();
    var $Object = Object;
    var split = uncurryThis7("".split);
    module.exports = fails9(function() {
      return !$Object("z").propertyIsEnumerable(0);
    }) ? function(it) {
      return classof(it) == "String" ? split(it, "") : $Object(it);
    } : $Object;
  }
});

// node_modules/core-js/internals/is-null-or-undefined.js
var require_is_null_or_undefined = __commonJS({
  "node_modules/core-js/internals/is-null-or-undefined.js"(exports, module) {
    module.exports = function(it) {
      return it === null || it === void 0;
    };
  }
});

// node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/core-js/internals/require-object-coercible.js"(exports, module) {
    var isNullOrUndefined3 = require_is_null_or_undefined();
    var $TypeError = TypeError;
    module.exports = function(it) {
      if (isNullOrUndefined3(it))
        throw $TypeError("Can't call method on " + it);
      return it;
    };
  }
});

// node_modules/core-js/internals/to-indexed-object.js
var require_to_indexed_object = __commonJS({
  "node_modules/core-js/internals/to-indexed-object.js"(exports, module) {
    var IndexedObject = require_indexed_object();
    var requireObjectCoercible4 = require_require_object_coercible();
    module.exports = function(it) {
      return IndexedObject(requireObjectCoercible4(it));
    };
  }
});

// node_modules/core-js/internals/document-all.js
var require_document_all = __commonJS({
  "node_modules/core-js/internals/document-all.js"(exports, module) {
    var documentAll = typeof document == "object" && document.all;
    var IS_HTMLDDA = typeof documentAll == "undefined" && documentAll !== void 0;
    module.exports = {
      all: documentAll,
      IS_HTMLDDA
    };
  }
});

// node_modules/core-js/internals/is-callable.js
var require_is_callable = __commonJS({
  "node_modules/core-js/internals/is-callable.js"(exports, module) {
    var $documentAll = require_document_all();
    var documentAll = $documentAll.all;
    module.exports = $documentAll.IS_HTMLDDA ? function(argument) {
      return typeof argument == "function" || argument === documentAll;
    } : function(argument) {
      return typeof argument == "function";
    };
  }
});

// node_modules/core-js/internals/is-object.js
var require_is_object = __commonJS({
  "node_modules/core-js/internals/is-object.js"(exports, module) {
    var isCallable3 = require_is_callable();
    var $documentAll = require_document_all();
    var documentAll = $documentAll.all;
    module.exports = $documentAll.IS_HTMLDDA ? function(it) {
      return typeof it == "object" ? it !== null : isCallable3(it) || it === documentAll;
    } : function(it) {
      return typeof it == "object" ? it !== null : isCallable3(it);
    };
  }
});

// node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "node_modules/core-js/internals/get-built-in.js"(exports, module) {
    var global9 = require_global();
    var isCallable3 = require_is_callable();
    var aFunction = function(argument) {
      return isCallable3(argument) ? argument : void 0;
    };
    module.exports = function(namespace, method) {
      return arguments.length < 2 ? aFunction(global9[namespace]) : global9[namespace] && global9[namespace][method];
    };
  }
});

// node_modules/core-js/internals/object-is-prototype-of.js
var require_object_is_prototype_of = __commonJS({
  "node_modules/core-js/internals/object-is-prototype-of.js"(exports, module) {
    var uncurryThis7 = require_function_uncurry_this();
    module.exports = uncurryThis7({}.isPrototypeOf);
  }
});

// node_modules/core-js/internals/engine-user-agent.js
var require_engine_user_agent = __commonJS({
  "node_modules/core-js/internals/engine-user-agent.js"(exports, module) {
    var getBuiltIn = require_get_built_in();
    module.exports = getBuiltIn("navigator", "userAgent") || "";
  }
});

// node_modules/core-js/internals/engine-v8-version.js
var require_engine_v8_version = __commonJS({
  "node_modules/core-js/internals/engine-v8-version.js"(exports, module) {
    var global9 = require_global();
    var userAgent = require_engine_user_agent();
    var process2 = global9.process;
    var Deno2 = global9.Deno;
    var versions = process2 && process2.versions || Deno2 && Deno2.version;
    var v8 = versions && versions.v8;
    var match;
    var version;
    if (v8) {
      match = v8.split(".");
      version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
    }
    if (!version && userAgent) {
      match = userAgent.match(/Edge\/(\d+)/);
      if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match)
          version = +match[1];
      }
    }
    module.exports = version;
  }
});

// node_modules/core-js/internals/symbol-constructor-detection.js
var require_symbol_constructor_detection = __commonJS({
  "node_modules/core-js/internals/symbol-constructor-detection.js"(exports, module) {
    var V8_VERSION2 = require_engine_v8_version();
    var fails9 = require_fails();
    module.exports = !!Object.getOwnPropertySymbols && !fails9(function() {
      var symbol = Symbol();
      return !String(symbol) || !(Object(symbol) instanceof Symbol) || !Symbol.sham && V8_VERSION2 && V8_VERSION2 < 41;
    });
  }
});

// node_modules/core-js/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = __commonJS({
  "node_modules/core-js/internals/use-symbol-as-uid.js"(exports, module) {
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/core-js/internals/is-symbol.js"(exports, module) {
    var getBuiltIn = require_get_built_in();
    var isCallable3 = require_is_callable();
    var isPrototypeOf3 = require_object_is_prototype_of();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var $Object = Object;
    module.exports = USE_SYMBOL_AS_UID ? function(it) {
      return typeof it == "symbol";
    } : function(it) {
      var $Symbol = getBuiltIn("Symbol");
      return isCallable3($Symbol) && isPrototypeOf3($Symbol.prototype, $Object(it));
    };
  }
});

// node_modules/core-js/internals/try-to-string.js
var require_try_to_string = __commonJS({
  "node_modules/core-js/internals/try-to-string.js"(exports, module) {
    var $String = String;
    module.exports = function(argument) {
      try {
        return $String(argument);
      } catch (error2) {
        return "Object";
      }
    };
  }
});

// node_modules/core-js/internals/a-callable.js
var require_a_callable = __commonJS({
  "node_modules/core-js/internals/a-callable.js"(exports, module) {
    var isCallable3 = require_is_callable();
    var tryToString = require_try_to_string();
    var $TypeError = TypeError;
    module.exports = function(argument) {
      if (isCallable3(argument))
        return argument;
      throw $TypeError(tryToString(argument) + " is not a function");
    };
  }
});

// node_modules/core-js/internals/get-method.js
var require_get_method = __commonJS({
  "node_modules/core-js/internals/get-method.js"(exports, module) {
    var aCallable2 = require_a_callable();
    var isNullOrUndefined3 = require_is_null_or_undefined();
    module.exports = function(V, P) {
      var func = V[P];
      return isNullOrUndefined3(func) ? void 0 : aCallable2(func);
    };
  }
});

// node_modules/core-js/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = __commonJS({
  "node_modules/core-js/internals/ordinary-to-primitive.js"(exports, module) {
    var call3 = require_function_call();
    var isCallable3 = require_is_callable();
    var isObject6 = require_is_object();
    var $TypeError = TypeError;
    module.exports = function(input, pref) {
      var fn, val;
      if (pref === "string" && isCallable3(fn = input.toString) && !isObject6(val = call3(fn, input)))
        return val;
      if (isCallable3(fn = input.valueOf) && !isObject6(val = call3(fn, input)))
        return val;
      if (pref !== "string" && isCallable3(fn = input.toString) && !isObject6(val = call3(fn, input)))
        return val;
      throw $TypeError("Can't convert object to primitive value");
    };
  }
});

// node_modules/core-js/internals/is-pure.js
var require_is_pure = __commonJS({
  "node_modules/core-js/internals/is-pure.js"(exports, module) {
    module.exports = false;
  }
});

// node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "node_modules/core-js/internals/define-global-property.js"(exports, module) {
    var global9 = require_global();
    var defineProperty4 = Object.defineProperty;
    module.exports = function(key, value) {
      try {
        defineProperty4(global9, key, { value, configurable: true, writable: true });
      } catch (error2) {
        global9[key] = value;
      }
      return value;
    };
  }
});

// node_modules/core-js/internals/shared-store.js
var require_shared_store = __commonJS({
  "node_modules/core-js/internals/shared-store.js"(exports, module) {
    var global9 = require_global();
    var defineGlobalProperty = require_define_global_property();
    var SHARED = "__core-js_shared__";
    var store = global9[SHARED] || defineGlobalProperty(SHARED, {});
    module.exports = store;
  }
});

// node_modules/core-js/internals/shared.js
var require_shared = __commonJS({
  "node_modules/core-js/internals/shared.js"(exports, module) {
    var IS_PURE = require_is_pure();
    var store = require_shared_store();
    (module.exports = function(key, value) {
      return store[key] || (store[key] = value !== void 0 ? value : {});
    })("versions", []).push({
      version: "3.26.1",
      mode: IS_PURE ? "pure" : "global",
      copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  }
});

// node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "node_modules/core-js/internals/to-object.js"(exports, module) {
    var requireObjectCoercible4 = require_require_object_coercible();
    var $Object = Object;
    module.exports = function(argument) {
      return $Object(requireObjectCoercible4(argument));
    };
  }
});

// node_modules/core-js/internals/has-own-property.js
var require_has_own_property = __commonJS({
  "node_modules/core-js/internals/has-own-property.js"(exports, module) {
    var uncurryThis7 = require_function_uncurry_this();
    var toObject4 = require_to_object();
    var hasOwnProperty = uncurryThis7({}.hasOwnProperty);
    module.exports = Object.hasOwn || function hasOwn4(it, key) {
      return hasOwnProperty(toObject4(it), key);
    };
  }
});

// node_modules/core-js/internals/uid.js
var require_uid = __commonJS({
  "node_modules/core-js/internals/uid.js"(exports, module) {
    var uncurryThis7 = require_function_uncurry_this();
    var id = 0;
    var postfix = Math.random();
    var toString8 = uncurryThis7(1 .toString);
    module.exports = function(key) {
      return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString8(++id + postfix, 36);
    };
  }
});

// node_modules/core-js/internals/well-known-symbol.js
var require_well_known_symbol = __commonJS({
  "node_modules/core-js/internals/well-known-symbol.js"(exports, module) {
    var global9 = require_global();
    var shared = require_shared();
    var hasOwn4 = require_has_own_property();
    var uid = require_uid();
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var WellKnownSymbolsStore = shared("wks");
    var Symbol2 = global9.Symbol;
    var symbolFor = Symbol2 && Symbol2["for"];
    var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
    module.exports = function(name) {
      if (!hasOwn4(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == "string")) {
        var description = "Symbol." + name;
        if (NATIVE_SYMBOL && hasOwn4(Symbol2, name)) {
          WellKnownSymbolsStore[name] = Symbol2[name];
        } else if (USE_SYMBOL_AS_UID && symbolFor) {
          WellKnownSymbolsStore[name] = symbolFor(description);
        } else {
          WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
        }
      }
      return WellKnownSymbolsStore[name];
    };
  }
});

// node_modules/core-js/internals/to-primitive.js
var require_to_primitive = __commonJS({
  "node_modules/core-js/internals/to-primitive.js"(exports, module) {
    var call3 = require_function_call();
    var isObject6 = require_is_object();
    var isSymbol2 = require_is_symbol();
    var getMethod3 = require_get_method();
    var ordinaryToPrimitive = require_ordinary_to_primitive();
    var wellKnownSymbol6 = require_well_known_symbol();
    var $TypeError = TypeError;
    var TO_PRIMITIVE2 = wellKnownSymbol6("toPrimitive");
    module.exports = function(input, pref) {
      if (!isObject6(input) || isSymbol2(input))
        return input;
      var exoticToPrim = getMethod3(input, TO_PRIMITIVE2);
      var result;
      if (exoticToPrim) {
        if (pref === void 0)
          pref = "default";
        result = call3(exoticToPrim, input, pref);
        if (!isObject6(result) || isSymbol2(result))
          return result;
        throw $TypeError("Can't convert object to primitive value");
      }
      if (pref === void 0)
        pref = "number";
      return ordinaryToPrimitive(input, pref);
    };
  }
});

// node_modules/core-js/internals/to-property-key.js
var require_to_property_key = __commonJS({
  "node_modules/core-js/internals/to-property-key.js"(exports, module) {
    var toPrimitive2 = require_to_primitive();
    var isSymbol2 = require_is_symbol();
    module.exports = function(argument) {
      var key = toPrimitive2(argument, "string");
      return isSymbol2(key) ? key : key + "";
    };
  }
});

// node_modules/core-js/internals/document-create-element.js
var require_document_create_element = __commonJS({
  "node_modules/core-js/internals/document-create-element.js"(exports, module) {
    var global9 = require_global();
    var isObject6 = require_is_object();
    var document2 = global9.document;
    var EXISTS = isObject6(document2) && isObject6(document2.createElement);
    module.exports = function(it) {
      return EXISTS ? document2.createElement(it) : {};
    };
  }
});

// node_modules/core-js/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "node_modules/core-js/internals/ie8-dom-define.js"(exports, module) {
    var DESCRIPTORS4 = require_descriptors();
    var fails9 = require_fails();
    var createElement = require_document_create_element();
    module.exports = !DESCRIPTORS4 && !fails9(function() {
      return Object.defineProperty(createElement("div"), "a", {
        get: function() {
          return 7;
        }
      }).a != 7;
    });
  }
});

// node_modules/core-js/internals/object-get-own-property-descriptor.js
var require_object_get_own_property_descriptor = __commonJS({
  "node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports) {
    var DESCRIPTORS4 = require_descriptors();
    var call3 = require_function_call();
    var propertyIsEnumerableModule = require_object_property_is_enumerable();
    var createPropertyDescriptor = require_create_property_descriptor();
    var toIndexedObject2 = require_to_indexed_object();
    var toPropertyKey = require_to_property_key();
    var hasOwn4 = require_has_own_property();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    exports.f = DESCRIPTORS4 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor2(O, P) {
      O = toIndexedObject2(O);
      P = toPropertyKey(P);
      if (IE8_DOM_DEFINE)
        try {
          return $getOwnPropertyDescriptor(O, P);
        } catch (error2) {
        }
      if (hasOwn4(O, P))
        return createPropertyDescriptor(!call3(propertyIsEnumerableModule.f, O, P), O[P]);
    };
  }
});

// node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "node_modules/core-js/internals/v8-prototype-define-bug.js"(exports, module) {
    var DESCRIPTORS4 = require_descriptors();
    var fails9 = require_fails();
    module.exports = DESCRIPTORS4 && fails9(function() {
      return Object.defineProperty(function() {
      }, "prototype", {
        value: 42,
        writable: false
      }).prototype != 42;
    });
  }
});

// node_modules/core-js/internals/an-object.js
var require_an_object = __commonJS({
  "node_modules/core-js/internals/an-object.js"(exports, module) {
    var isObject6 = require_is_object();
    var $String = String;
    var $TypeError = TypeError;
    module.exports = function(argument) {
      if (isObject6(argument))
        return argument;
      throw $TypeError($String(argument) + " is not an object");
    };
  }
});

// node_modules/core-js/internals/object-define-property.js
var require_object_define_property = __commonJS({
  "node_modules/core-js/internals/object-define-property.js"(exports) {
    var DESCRIPTORS4 = require_descriptors();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
    var anObject4 = require_an_object();
    var toPropertyKey = require_to_property_key();
    var $TypeError = TypeError;
    var $defineProperty = Object.defineProperty;
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ENUMERABLE = "enumerable";
    var CONFIGURABLE = "configurable";
    var WRITABLE = "writable";
    exports.f = DESCRIPTORS4 ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty4(O, P, Attributes) {
      anObject4(O);
      P = toPropertyKey(P);
      anObject4(Attributes);
      if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
          O[P] = Attributes.value;
          Attributes = {
            configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
            enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
            writable: false
          };
        }
      }
      return $defineProperty(O, P, Attributes);
    } : $defineProperty : function defineProperty4(O, P, Attributes) {
      anObject4(O);
      P = toPropertyKey(P);
      anObject4(Attributes);
      if (IE8_DOM_DEFINE)
        try {
          return $defineProperty(O, P, Attributes);
        } catch (error2) {
        }
      if ("get" in Attributes || "set" in Attributes)
        throw $TypeError("Accessors not supported");
      if ("value" in Attributes)
        O[P] = Attributes.value;
      return O;
    };
  }
});

// node_modules/core-js/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "node_modules/core-js/internals/create-non-enumerable-property.js"(exports, module) {
    var DESCRIPTORS4 = require_descriptors();
    var definePropertyModule = require_object_define_property();
    var createPropertyDescriptor = require_create_property_descriptor();
    module.exports = DESCRIPTORS4 ? function(object, key, value) {
      return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
    } : function(object, key, value) {
      object[key] = value;
      return object;
    };
  }
});

// node_modules/core-js/internals/function-name.js
var require_function_name = __commonJS({
  "node_modules/core-js/internals/function-name.js"(exports, module) {
    var DESCRIPTORS4 = require_descriptors();
    var hasOwn4 = require_has_own_property();
    var FunctionPrototype2 = Function.prototype;
    var getDescriptor = DESCRIPTORS4 && Object.getOwnPropertyDescriptor;
    var EXISTS = hasOwn4(FunctionPrototype2, "name");
    var PROPER = EXISTS && function something() {
    }.name === "something";
    var CONFIGURABLE = EXISTS && (!DESCRIPTORS4 || DESCRIPTORS4 && getDescriptor(FunctionPrototype2, "name").configurable);
    module.exports = {
      EXISTS,
      PROPER,
      CONFIGURABLE
    };
  }
});

// node_modules/core-js/internals/inspect-source.js
var require_inspect_source = __commonJS({
  "node_modules/core-js/internals/inspect-source.js"(exports, module) {
    var uncurryThis7 = require_function_uncurry_this();
    var isCallable3 = require_is_callable();
    var store = require_shared_store();
    var functionToString2 = uncurryThis7(Function.toString);
    if (!isCallable3(store.inspectSource)) {
      store.inspectSource = function(it) {
        return functionToString2(it);
      };
    }
    module.exports = store.inspectSource;
  }
});

// node_modules/core-js/internals/weak-map-basic-detection.js
var require_weak_map_basic_detection = __commonJS({
  "node_modules/core-js/internals/weak-map-basic-detection.js"(exports, module) {
    var global9 = require_global();
    var isCallable3 = require_is_callable();
    var WeakMap2 = global9.WeakMap;
    module.exports = isCallable3(WeakMap2) && /native code/.test(String(WeakMap2));
  }
});

// node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "node_modules/core-js/internals/shared-key.js"(exports, module) {
    var shared = require_shared();
    var uid = require_uid();
    var keys2 = shared("keys");
    module.exports = function(key) {
      return keys2[key] || (keys2[key] = uid(key));
    };
  }
});

// node_modules/core-js/internals/hidden-keys.js
var require_hidden_keys = __commonJS({
  "node_modules/core-js/internals/hidden-keys.js"(exports, module) {
    module.exports = {};
  }
});

// node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "node_modules/core-js/internals/internal-state.js"(exports, module) {
    var NATIVE_WEAK_MAP = require_weak_map_basic_detection();
    var global9 = require_global();
    var isObject6 = require_is_object();
    var createNonEnumerableProperty3 = require_create_non_enumerable_property();
    var hasOwn4 = require_has_own_property();
    var shared = require_shared_store();
    var sharedKey = require_shared_key();
    var hiddenKeys = require_hidden_keys();
    var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
    var TypeError3 = global9.TypeError;
    var WeakMap2 = global9.WeakMap;
    var set;
    var get;
    var has;
    var enforce = function(it) {
      return has(it) ? get(it) : set(it, {});
    };
    var getterFor = function(TYPE) {
      return function(it) {
        var state;
        if (!isObject6(it) || (state = get(it)).type !== TYPE) {
          throw TypeError3("Incompatible receiver, " + TYPE + " required");
        }
        return state;
      };
    };
    if (NATIVE_WEAK_MAP || shared.state) {
      store = shared.state || (shared.state = new WeakMap2());
      store.get = store.get;
      store.has = store.has;
      store.set = store.set;
      set = function(it, metadata) {
        if (store.has(it))
          throw TypeError3(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        store.set(it, metadata);
        return metadata;
      };
      get = function(it) {
        return store.get(it) || {};
      };
      has = function(it) {
        return store.has(it);
      };
    } else {
      STATE = sharedKey("state");
      hiddenKeys[STATE] = true;
      set = function(it, metadata) {
        if (hasOwn4(it, STATE))
          throw TypeError3(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty3(it, STATE, metadata);
        return metadata;
      };
      get = function(it) {
        return hasOwn4(it, STATE) ? it[STATE] : {};
      };
      has = function(it) {
        return hasOwn4(it, STATE);
      };
    }
    var store;
    var STATE;
    module.exports = {
      set,
      get,
      has,
      enforce,
      getterFor
    };
  }
});

// node_modules/core-js/internals/make-built-in.js
var require_make_built_in = __commonJS({
  "node_modules/core-js/internals/make-built-in.js"(exports, module) {
    var fails9 = require_fails();
    var isCallable3 = require_is_callable();
    var hasOwn4 = require_has_own_property();
    var DESCRIPTORS4 = require_descriptors();
    var CONFIGURABLE_FUNCTION_NAME = require_function_name().CONFIGURABLE;
    var inspectSource = require_inspect_source();
    var InternalStateModule2 = require_internal_state();
    var enforceInternalState = InternalStateModule2.enforce;
    var getInternalState2 = InternalStateModule2.get;
    var defineProperty4 = Object.defineProperty;
    var CONFIGURABLE_LENGTH = DESCRIPTORS4 && !fails9(function() {
      return defineProperty4(function() {
      }, "length", { value: 8 }).length !== 8;
    });
    var TEMPLATE = String(String).split("String");
    var makeBuiltIn = module.exports = function(value, name, options) {
      if (String(name).slice(0, 7) === "Symbol(") {
        name = "[" + String(name).replace(/^Symbol\(([^)]*)\)/, "$1") + "]";
      }
      if (options && options.getter)
        name = "get " + name;
      if (options && options.setter)
        name = "set " + name;
      if (!hasOwn4(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS4)
          defineProperty4(value, "name", { value: name, configurable: true });
        else
          value.name = name;
      }
      if (CONFIGURABLE_LENGTH && options && hasOwn4(options, "arity") && value.length !== options.arity) {
        defineProperty4(value, "length", { value: options.arity });
      }
      try {
        if (options && hasOwn4(options, "constructor") && options.constructor) {
          if (DESCRIPTORS4)
            defineProperty4(value, "prototype", { writable: false });
        } else if (value.prototype)
          value.prototype = void 0;
      } catch (error2) {
      }
      var state = enforceInternalState(value);
      if (!hasOwn4(state, "source")) {
        state.source = TEMPLATE.join(typeof name == "string" ? name : "");
      }
      return value;
    };
    Function.prototype.toString = makeBuiltIn(function toString8() {
      return isCallable3(this) && getInternalState2(this).source || inspectSource(this);
    }, "toString");
  }
});

// node_modules/core-js/internals/define-built-in.js
var require_define_built_in = __commonJS({
  "node_modules/core-js/internals/define-built-in.js"(exports, module) {
    var isCallable3 = require_is_callable();
    var definePropertyModule = require_object_define_property();
    var makeBuiltIn = require_make_built_in();
    var defineGlobalProperty = require_define_global_property();
    module.exports = function(O, key, value, options) {
      if (!options)
        options = {};
      var simple = options.enumerable;
      var name = options.name !== void 0 ? options.name : key;
      if (isCallable3(value))
        makeBuiltIn(value, name, options);
      if (options.global) {
        if (simple)
          O[key] = value;
        else
          defineGlobalProperty(key, value);
      } else {
        try {
          if (!options.unsafe)
            delete O[key];
          else if (O[key])
            simple = true;
        } catch (error2) {
        }
        if (simple)
          O[key] = value;
        else
          definePropertyModule.f(O, key, {
            value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
          });
      }
      return O;
    };
  }
});

// node_modules/core-js/internals/math-trunc.js
var require_math_trunc = __commonJS({
  "node_modules/core-js/internals/math-trunc.js"(exports, module) {
    var ceil = Math.ceil;
    var floor = Math.floor;
    module.exports = Math.trunc || function trunc(x) {
      var n = +x;
      return (n > 0 ? floor : ceil)(n);
    };
  }
});

// node_modules/core-js/internals/to-integer-or-infinity.js
var require_to_integer_or_infinity = __commonJS({
  "node_modules/core-js/internals/to-integer-or-infinity.js"(exports, module) {
    var trunc = require_math_trunc();
    module.exports = function(argument) {
      var number = +argument;
      return number !== number || number === 0 ? 0 : trunc(number);
    };
  }
});

// node_modules/core-js/internals/to-absolute-index.js
var require_to_absolute_index = __commonJS({
  "node_modules/core-js/internals/to-absolute-index.js"(exports, module) {
    var toIntegerOrInfinity2 = require_to_integer_or_infinity();
    var max3 = Math.max;
    var min2 = Math.min;
    module.exports = function(index, length) {
      var integer = toIntegerOrInfinity2(index);
      return integer < 0 ? max3(integer + length, 0) : min2(integer, length);
    };
  }
});

// node_modules/core-js/internals/to-length.js
var require_to_length = __commonJS({
  "node_modules/core-js/internals/to-length.js"(exports, module) {
    var toIntegerOrInfinity2 = require_to_integer_or_infinity();
    var min2 = Math.min;
    module.exports = function(argument) {
      return argument > 0 ? min2(toIntegerOrInfinity2(argument), 9007199254740991) : 0;
    };
  }
});

// node_modules/core-js/internals/length-of-array-like.js
var require_length_of_array_like = __commonJS({
  "node_modules/core-js/internals/length-of-array-like.js"(exports, module) {
    var toLength2 = require_to_length();
    module.exports = function(obj) {
      return toLength2(obj.length);
    };
  }
});

// node_modules/core-js/internals/array-includes.js
var require_array_includes = __commonJS({
  "node_modules/core-js/internals/array-includes.js"(exports, module) {
    var toIndexedObject2 = require_to_indexed_object();
    var toAbsoluteIndex2 = require_to_absolute_index();
    var lengthOfArrayLike4 = require_length_of_array_like();
    var createMethod = function(IS_INCLUDES) {
      return function($this, el, fromIndex) {
        var O = toIndexedObject2($this);
        var length = lengthOfArrayLike4(O);
        var index = toAbsoluteIndex2(fromIndex, length);
        var value;
        if (IS_INCLUDES && el != el)
          while (length > index) {
            value = O[index++];
            if (value != value)
              return true;
          }
        else
          for (; length > index; index++) {
            if ((IS_INCLUDES || index in O) && O[index] === el)
              return IS_INCLUDES || index || 0;
          }
        return !IS_INCLUDES && -1;
      };
    };
    module.exports = {
      includes: createMethod(true),
      indexOf: createMethod(false)
    };
  }
});

// node_modules/core-js/internals/object-keys-internal.js
var require_object_keys_internal = __commonJS({
  "node_modules/core-js/internals/object-keys-internal.js"(exports, module) {
    var uncurryThis7 = require_function_uncurry_this();
    var hasOwn4 = require_has_own_property();
    var toIndexedObject2 = require_to_indexed_object();
    var indexOf = require_array_includes().indexOf;
    var hiddenKeys = require_hidden_keys();
    var push3 = uncurryThis7([].push);
    module.exports = function(object, names) {
      var O = toIndexedObject2(object);
      var i = 0;
      var result = [];
      var key;
      for (key in O)
        !hasOwn4(hiddenKeys, key) && hasOwn4(O, key) && push3(result, key);
      while (names.length > i)
        if (hasOwn4(O, key = names[i++])) {
          ~indexOf(result, key) || push3(result, key);
        }
      return result;
    };
  }
});

// node_modules/core-js/internals/enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "node_modules/core-js/internals/enum-bug-keys.js"(exports, module) {
    module.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf"
    ];
  }
});

// node_modules/core-js/internals/object-get-own-property-names.js
var require_object_get_own_property_names = __commonJS({
  "node_modules/core-js/internals/object-get-own-property-names.js"(exports) {
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames2(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
  }
});

// node_modules/core-js/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = __commonJS({
  "node_modules/core-js/internals/object-get-own-property-symbols.js"(exports) {
    exports.f = Object.getOwnPropertySymbols;
  }
});

// node_modules/core-js/internals/own-keys.js
var require_own_keys = __commonJS({
  "node_modules/core-js/internals/own-keys.js"(exports, module) {
    var getBuiltIn = require_get_built_in();
    var uncurryThis7 = require_function_uncurry_this();
    var getOwnPropertyNamesModule = require_object_get_own_property_names();
    var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
    var anObject4 = require_an_object();
    var concat3 = uncurryThis7([].concat);
    module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
      var keys2 = getOwnPropertyNamesModule.f(anObject4(it));
      var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
      return getOwnPropertySymbols ? concat3(keys2, getOwnPropertySymbols(it)) : keys2;
    };
  }
});

// node_modules/core-js/internals/copy-constructor-properties.js
var require_copy_constructor_properties = __commonJS({
  "node_modules/core-js/internals/copy-constructor-properties.js"(exports, module) {
    var hasOwn4 = require_has_own_property();
    var ownKeys = require_own_keys();
    var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
    var definePropertyModule = require_object_define_property();
    module.exports = function(target, source, exceptions) {
      var keys2 = ownKeys(source);
      var defineProperty4 = definePropertyModule.f;
      var getOwnPropertyDescriptor2 = getOwnPropertyDescriptorModule.f;
      for (var i = 0; i < keys2.length; i++) {
        var key = keys2[i];
        if (!hasOwn4(target, key) && !(exceptions && hasOwn4(exceptions, key))) {
          defineProperty4(target, key, getOwnPropertyDescriptor2(source, key));
        }
      }
    };
  }
});

// node_modules/core-js/internals/is-forced.js
var require_is_forced = __commonJS({
  "node_modules/core-js/internals/is-forced.js"(exports, module) {
    var fails9 = require_fails();
    var isCallable3 = require_is_callable();
    var replacement = /#|\.prototype\./;
    var isForced2 = function(feature, detection) {
      var value = data[normalize(feature)];
      return value == POLYFILL ? true : value == NATIVE ? false : isCallable3(detection) ? fails9(detection) : !!detection;
    };
    var normalize = isForced2.normalize = function(string) {
      return String(string).replace(replacement, ".").toLowerCase();
    };
    var data = isForced2.data = {};
    var NATIVE = isForced2.NATIVE = "N";
    var POLYFILL = isForced2.POLYFILL = "P";
    module.exports = isForced2;
  }
});

// node_modules/core-js/internals/export.js
var require_export = __commonJS({
  "node_modules/core-js/internals/export.js"(exports, module) {
    var global9 = require_global();
    var getOwnPropertyDescriptor2 = require_object_get_own_property_descriptor().f;
    var createNonEnumerableProperty3 = require_create_non_enumerable_property();
    var defineBuiltIn5 = require_define_built_in();
    var defineGlobalProperty = require_define_global_property();
    var copyConstructorProperties2 = require_copy_constructor_properties();
    var isForced2 = require_is_forced();
    module.exports = function(options, source) {
      var TARGET = options.target;
      var GLOBAL = options.global;
      var STATIC = options.stat;
      var FORCED3, target, key, targetProperty, sourceProperty, descriptor;
      if (GLOBAL) {
        target = global9;
      } else if (STATIC) {
        target = global9[TARGET] || defineGlobalProperty(TARGET, {});
      } else {
        target = (global9[TARGET] || {}).prototype;
      }
      if (target)
        for (key in source) {
          sourceProperty = source[key];
          if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor2(target, key);
            targetProperty = descriptor && descriptor.value;
          } else
            targetProperty = target[key];
          FORCED3 = isForced2(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
          if (!FORCED3 && targetProperty !== void 0) {
            if (typeof sourceProperty == typeof targetProperty)
              continue;
            copyConstructorProperties2(sourceProperty, targetProperty);
          }
          if (options.sham || targetProperty && targetProperty.sham) {
            createNonEnumerableProperty3(sourceProperty, "sham", true);
          }
          defineBuiltIn5(target, key, sourceProperty, options);
        }
    };
  }
});

// node_modules/core-js/internals/is-array.js
var require_is_array = __commonJS({
  "node_modules/core-js/internals/is-array.js"(exports, module) {
    var classof = require_classof_raw();
    module.exports = Array.isArray || function isArray3(argument) {
      return classof(argument) == "Array";
    };
  }
});

// node_modules/core-js/internals/does-not-exceed-safe-integer.js
var require_does_not_exceed_safe_integer = __commonJS({
  "node_modules/core-js/internals/does-not-exceed-safe-integer.js"(exports, module) {
    var $TypeError = TypeError;
    var MAX_SAFE_INTEGER = 9007199254740991;
    module.exports = function(it) {
      if (it > MAX_SAFE_INTEGER)
        throw $TypeError("Maximum allowed index exceeded");
      return it;
    };
  }
});

// node_modules/core-js/internals/create-property.js
var require_create_property = __commonJS({
  "node_modules/core-js/internals/create-property.js"(exports, module) {
    "use strict";
    var toPropertyKey = require_to_property_key();
    var definePropertyModule = require_object_define_property();
    var createPropertyDescriptor = require_create_property_descriptor();
    module.exports = function(object, key, value) {
      var propertyKey = toPropertyKey(key);
      if (propertyKey in object)
        definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
      else
        object[propertyKey] = value;
    };
  }
});

// node_modules/core-js/internals/to-string-tag-support.js
var require_to_string_tag_support = __commonJS({
  "node_modules/core-js/internals/to-string-tag-support.js"(exports, module) {
    var wellKnownSymbol6 = require_well_known_symbol();
    var TO_STRING_TAG2 = wellKnownSymbol6("toStringTag");
    var test2 = {};
    test2[TO_STRING_TAG2] = "z";
    module.exports = String(test2) === "[object z]";
  }
});

// node_modules/core-js/internals/classof.js
var require_classof = __commonJS({
  "node_modules/core-js/internals/classof.js"(exports, module) {
    var TO_STRING_TAG_SUPPORT2 = require_to_string_tag_support();
    var isCallable3 = require_is_callable();
    var classofRaw = require_classof_raw();
    var wellKnownSymbol6 = require_well_known_symbol();
    var TO_STRING_TAG2 = wellKnownSymbol6("toStringTag");
    var $Object = Object;
    var CORRECT_ARGUMENTS = classofRaw(function() {
      return arguments;
    }()) == "Arguments";
    var tryGet = function(it, key) {
      try {
        return it[key];
      } catch (error2) {
      }
    };
    module.exports = TO_STRING_TAG_SUPPORT2 ? classofRaw : function(it) {
      var O, tag, result;
      return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG2)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == "Object" && isCallable3(O.callee) ? "Arguments" : result;
    };
  }
});

// node_modules/core-js/internals/is-constructor.js
var require_is_constructor = __commonJS({
  "node_modules/core-js/internals/is-constructor.js"(exports, module) {
    var uncurryThis7 = require_function_uncurry_this();
    var fails9 = require_fails();
    var isCallable3 = require_is_callable();
    var classof = require_classof();
    var getBuiltIn = require_get_built_in();
    var inspectSource = require_inspect_source();
    var noop = function() {
    };
    var empty = [];
    var construct3 = getBuiltIn("Reflect", "construct");
    var constructorRegExp = /^\s*(?:class|function)\b/;
    var exec = uncurryThis7(constructorRegExp.exec);
    var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);
    var isConstructorModern = function isConstructor2(argument) {
      if (!isCallable3(argument))
        return false;
      try {
        construct3(noop, empty, argument);
        return true;
      } catch (error2) {
        return false;
      }
    };
    var isConstructorLegacy = function isConstructor2(argument) {
      if (!isCallable3(argument))
        return false;
      switch (classof(argument)) {
        case "AsyncFunction":
        case "GeneratorFunction":
        case "AsyncGeneratorFunction":
          return false;
      }
      try {
        return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
      } catch (error2) {
        return true;
      }
    };
    isConstructorLegacy.sham = true;
    module.exports = !construct3 || fails9(function() {
      var called;
      return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
        called = true;
      }) || called;
    }) ? isConstructorLegacy : isConstructorModern;
  }
});

// node_modules/core-js/internals/array-species-constructor.js
var require_array_species_constructor = __commonJS({
  "node_modules/core-js/internals/array-species-constructor.js"(exports, module) {
    var isArray3 = require_is_array();
    var isConstructor2 = require_is_constructor();
    var isObject6 = require_is_object();
    var wellKnownSymbol6 = require_well_known_symbol();
    var SPECIES2 = wellKnownSymbol6("species");
    var $Array2 = Array;
    module.exports = function(originalArray) {
      var C;
      if (isArray3(originalArray)) {
        C = originalArray.constructor;
        if (isConstructor2(C) && (C === $Array2 || isArray3(C.prototype)))
          C = void 0;
        else if (isObject6(C)) {
          C = C[SPECIES2];
          if (C === null)
            C = void 0;
        }
      }
      return C === void 0 ? $Array2 : C;
    };
  }
});

// node_modules/core-js/internals/array-species-create.js
var require_array_species_create = __commonJS({
  "node_modules/core-js/internals/array-species-create.js"(exports, module) {
    var arraySpeciesConstructor = require_array_species_constructor();
    module.exports = function(originalArray, length) {
      return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
    };
  }
});

// node_modules/core-js/internals/array-method-has-species-support.js
var require_array_method_has_species_support = __commonJS({
  "node_modules/core-js/internals/array-method-has-species-support.js"(exports, module) {
    var fails9 = require_fails();
    var wellKnownSymbol6 = require_well_known_symbol();
    var V8_VERSION2 = require_engine_v8_version();
    var SPECIES2 = wellKnownSymbol6("species");
    module.exports = function(METHOD_NAME) {
      return V8_VERSION2 >= 51 || !fails9(function() {
        var array = [];
        var constructor = array.constructor = {};
        constructor[SPECIES2] = function() {
          return { foo: 1 };
        };
        return array[METHOD_NAME](Boolean).foo !== 1;
      });
    };
  }
});

// node_modules/core-js/internals/object-keys.js
var require_object_keys = __commonJS({
  "node_modules/core-js/internals/object-keys.js"(exports, module) {
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    module.exports = Object.keys || function keys2(O) {
      return internalObjectKeys(O, enumBugKeys);
    };
  }
});

// node_modules/core-js/internals/object-define-properties.js
var require_object_define_properties = __commonJS({
  "node_modules/core-js/internals/object-define-properties.js"(exports) {
    var DESCRIPTORS4 = require_descriptors();
    var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
    var definePropertyModule = require_object_define_property();
    var anObject4 = require_an_object();
    var toIndexedObject2 = require_to_indexed_object();
    var objectKeys = require_object_keys();
    exports.f = DESCRIPTORS4 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
      anObject4(O);
      var props = toIndexedObject2(Properties);
      var keys2 = objectKeys(Properties);
      var length = keys2.length;
      var index = 0;
      var key;
      while (length > index)
        definePropertyModule.f(O, key = keys2[index++], props[key]);
      return O;
    };
  }
});

// node_modules/core-js/internals/html.js
var require_html = __commonJS({
  "node_modules/core-js/internals/html.js"(exports, module) {
    var getBuiltIn = require_get_built_in();
    module.exports = getBuiltIn("document", "documentElement");
  }
});

// node_modules/core-js/internals/object-create.js
var require_object_create = __commonJS({
  "node_modules/core-js/internals/object-create.js"(exports, module) {
    var anObject4 = require_an_object();
    var definePropertiesModule = require_object_define_properties();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = require_hidden_keys();
    var html = require_html();
    var documentCreateElement = require_document_create_element();
    var sharedKey = require_shared_key();
    var GT = ">";
    var LT = "<";
    var PROTOTYPE = "prototype";
    var SCRIPT = "script";
    var IE_PROTO = sharedKey("IE_PROTO");
    var EmptyConstructor = function() {
    };
    var scriptTag = function(content) {
      return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
    };
    var NullProtoObjectViaActiveX = function(activeXDocument2) {
      activeXDocument2.write(scriptTag(""));
      activeXDocument2.close();
      var temp = activeXDocument2.parentWindow.Object;
      activeXDocument2 = null;
      return temp;
    };
    var NullProtoObjectViaIFrame = function() {
      var iframe = documentCreateElement("iframe");
      var JS = "java" + SCRIPT + ":";
      var iframeDocument;
      iframe.style.display = "none";
      html.appendChild(iframe);
      iframe.src = String(JS);
      iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(scriptTag("document.F=Object"));
      iframeDocument.close();
      return iframeDocument.F;
    };
    var activeXDocument;
    var NullProtoObject = function() {
      try {
        activeXDocument = new ActiveXObject("htmlfile");
      } catch (error2) {
      }
      NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
      var length = enumBugKeys.length;
      while (length--)
        delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
      return NullProtoObject();
    };
    hiddenKeys[IE_PROTO] = true;
    module.exports = Object.create || function create(O, Properties) {
      var result;
      if (O !== null) {
        EmptyConstructor[PROTOTYPE] = anObject4(O);
        result = new EmptyConstructor();
        EmptyConstructor[PROTOTYPE] = null;
        result[IE_PROTO] = O;
      } else
        result = NullProtoObject();
      return Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
    };
  }
});

// node_modules/core-js/internals/add-to-unscopables.js
var require_add_to_unscopables = __commonJS({
  "node_modules/core-js/internals/add-to-unscopables.js"(exports, module) {
    var wellKnownSymbol6 = require_well_known_symbol();
    var create = require_object_create();
    var defineProperty4 = require_object_define_property().f;
    var UNSCOPABLES = wellKnownSymbol6("unscopables");
    var ArrayPrototype = Array.prototype;
    if (ArrayPrototype[UNSCOPABLES] == void 0) {
      defineProperty4(ArrayPrototype, UNSCOPABLES, {
        configurable: true,
        value: create(null)
      });
    }
    module.exports = function(key) {
      ArrayPrototype[UNSCOPABLES][key] = true;
    };
  }
});

// node_modules/core-js/internals/iterators.js
var require_iterators = __commonJS({
  "node_modules/core-js/internals/iterators.js"(exports, module) {
    module.exports = {};
  }
});

// node_modules/core-js/internals/correct-prototype-getter.js
var require_correct_prototype_getter = __commonJS({
  "node_modules/core-js/internals/correct-prototype-getter.js"(exports, module) {
    var fails9 = require_fails();
    module.exports = !fails9(function() {
      function F() {
      }
      F.prototype.constructor = null;
      return Object.getPrototypeOf(new F()) !== F.prototype;
    });
  }
});

// node_modules/core-js/internals/object-get-prototype-of.js
var require_object_get_prototype_of = __commonJS({
  "node_modules/core-js/internals/object-get-prototype-of.js"(exports, module) {
    var hasOwn4 = require_has_own_property();
    var isCallable3 = require_is_callable();
    var toObject4 = require_to_object();
    var sharedKey = require_shared_key();
    var CORRECT_PROTOTYPE_GETTER = require_correct_prototype_getter();
    var IE_PROTO = sharedKey("IE_PROTO");
    var $Object = Object;
    var ObjectPrototype = $Object.prototype;
    module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function(O) {
      var object = toObject4(O);
      if (hasOwn4(object, IE_PROTO))
        return object[IE_PROTO];
      var constructor = object.constructor;
      if (isCallable3(constructor) && object instanceof constructor) {
        return constructor.prototype;
      }
      return object instanceof $Object ? ObjectPrototype : null;
    };
  }
});

// node_modules/core-js/internals/iterators-core.js
var require_iterators_core = __commonJS({
  "node_modules/core-js/internals/iterators-core.js"(exports, module) {
    "use strict";
    var fails9 = require_fails();
    var isCallable3 = require_is_callable();
    var isObject6 = require_is_object();
    var create = require_object_create();
    var getPrototypeOf = require_object_get_prototype_of();
    var defineBuiltIn5 = require_define_built_in();
    var wellKnownSymbol6 = require_well_known_symbol();
    var IS_PURE = require_is_pure();
    var ITERATOR2 = wellKnownSymbol6("iterator");
    var BUGGY_SAFARI_ITERATORS = false;
    var IteratorPrototype;
    var PrototypeOfArrayIteratorPrototype;
    var arrayIterator;
    if ([].keys) {
      arrayIterator = [].keys();
      if (!("next" in arrayIterator))
        BUGGY_SAFARI_ITERATORS = true;
      else {
        PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
        if (PrototypeOfArrayIteratorPrototype !== Object.prototype)
          IteratorPrototype = PrototypeOfArrayIteratorPrototype;
      }
    }
    var NEW_ITERATOR_PROTOTYPE = !isObject6(IteratorPrototype) || fails9(function() {
      var test2 = {};
      return IteratorPrototype[ITERATOR2].call(test2) !== test2;
    });
    if (NEW_ITERATOR_PROTOTYPE)
      IteratorPrototype = {};
    else if (IS_PURE)
      IteratorPrototype = create(IteratorPrototype);
    if (!isCallable3(IteratorPrototype[ITERATOR2])) {
      defineBuiltIn5(IteratorPrototype, ITERATOR2, function() {
        return this;
      });
    }
    module.exports = {
      IteratorPrototype,
      BUGGY_SAFARI_ITERATORS
    };
  }
});

// node_modules/core-js/internals/set-to-string-tag.js
var require_set_to_string_tag = __commonJS({
  "node_modules/core-js/internals/set-to-string-tag.js"(exports, module) {
    var defineProperty4 = require_object_define_property().f;
    var hasOwn4 = require_has_own_property();
    var wellKnownSymbol6 = require_well_known_symbol();
    var TO_STRING_TAG2 = wellKnownSymbol6("toStringTag");
    module.exports = function(target, TAG, STATIC) {
      if (target && !STATIC)
        target = target.prototype;
      if (target && !hasOwn4(target, TO_STRING_TAG2)) {
        defineProperty4(target, TO_STRING_TAG2, { configurable: true, value: TAG });
      }
    };
  }
});

// node_modules/core-js/internals/iterator-create-constructor.js
var require_iterator_create_constructor = __commonJS({
  "node_modules/core-js/internals/iterator-create-constructor.js"(exports, module) {
    "use strict";
    var IteratorPrototype = require_iterators_core().IteratorPrototype;
    var create = require_object_create();
    var createPropertyDescriptor = require_create_property_descriptor();
    var setToStringTag = require_set_to_string_tag();
    var Iterators = require_iterators();
    var returnThis = function() {
      return this;
    };
    module.exports = function(IteratorConstructor, NAME2, next2, ENUMERABLE_NEXT) {
      var TO_STRING_TAG2 = NAME2 + " Iterator";
      IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next2) });
      setToStringTag(IteratorConstructor, TO_STRING_TAG2, false, true);
      Iterators[TO_STRING_TAG2] = returnThis;
      return IteratorConstructor;
    };
  }
});

// node_modules/core-js/internals/a-possible-prototype.js
var require_a_possible_prototype = __commonJS({
  "node_modules/core-js/internals/a-possible-prototype.js"(exports, module) {
    var isCallable3 = require_is_callable();
    var $String = String;
    var $TypeError = TypeError;
    module.exports = function(argument) {
      if (typeof argument == "object" || isCallable3(argument))
        return argument;
      throw $TypeError("Can't set " + $String(argument) + " as a prototype");
    };
  }
});

// node_modules/core-js/internals/object-set-prototype-of.js
var require_object_set_prototype_of = __commonJS({
  "node_modules/core-js/internals/object-set-prototype-of.js"(exports, module) {
    var uncurryThis7 = require_function_uncurry_this();
    var anObject4 = require_an_object();
    var aPossiblePrototype = require_a_possible_prototype();
    module.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
      var CORRECT_SETTER = false;
      var test2 = {};
      var setter;
      try {
        setter = uncurryThis7(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set);
        setter(test2, []);
        CORRECT_SETTER = test2 instanceof Array;
      } catch (error2) {
      }
      return function setPrototypeOf(O, proto) {
        anObject4(O);
        aPossiblePrototype(proto);
        if (CORRECT_SETTER)
          setter(O, proto);
        else
          O.__proto__ = proto;
        return O;
      };
    }() : void 0);
  }
});

// node_modules/core-js/internals/iterator-define.js
var require_iterator_define = __commonJS({
  "node_modules/core-js/internals/iterator-define.js"(exports, module) {
    "use strict";
    var $17 = require_export();
    var call3 = require_function_call();
    var IS_PURE = require_is_pure();
    var FunctionName = require_function_name();
    var isCallable3 = require_is_callable();
    var createIteratorConstructor = require_iterator_create_constructor();
    var getPrototypeOf = require_object_get_prototype_of();
    var setPrototypeOf = require_object_set_prototype_of();
    var setToStringTag = require_set_to_string_tag();
    var createNonEnumerableProperty3 = require_create_non_enumerable_property();
    var defineBuiltIn5 = require_define_built_in();
    var wellKnownSymbol6 = require_well_known_symbol();
    var Iterators = require_iterators();
    var IteratorsCore = require_iterators_core();
    var PROPER_FUNCTION_NAME2 = FunctionName.PROPER;
    var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
    var IteratorPrototype = IteratorsCore.IteratorPrototype;
    var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
    var ITERATOR2 = wellKnownSymbol6("iterator");
    var KEYS = "keys";
    var VALUES = "values";
    var ENTRIES = "entries";
    var returnThis = function() {
      return this;
    };
    module.exports = function(Iterable, NAME2, IteratorConstructor, next2, DEFAULT, IS_SET, FORCED3) {
      createIteratorConstructor(IteratorConstructor, NAME2, next2);
      var getIterationMethod = function(KIND) {
        if (KIND === DEFAULT && defaultIterator)
          return defaultIterator;
        if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype)
          return IterablePrototype[KIND];
        switch (KIND) {
          case KEYS:
            return function keys2() {
              return new IteratorConstructor(this, KIND);
            };
          case VALUES:
            return function values2() {
              return new IteratorConstructor(this, KIND);
            };
          case ENTRIES:
            return function entries2() {
              return new IteratorConstructor(this, KIND);
            };
        }
        return function() {
          return new IteratorConstructor(this);
        };
      };
      var TO_STRING_TAG2 = NAME2 + " Iterator";
      var INCORRECT_VALUES_NAME = false;
      var IterablePrototype = Iterable.prototype;
      var nativeIterator = IterablePrototype[ITERATOR2] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
      var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
      var anyNativeIterator = NAME2 == "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
      var CurrentIteratorPrototype, methods, KEY2;
      if (anyNativeIterator) {
        CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
        if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
          if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
            if (setPrototypeOf) {
              setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
            } else if (!isCallable3(CurrentIteratorPrototype[ITERATOR2])) {
              defineBuiltIn5(CurrentIteratorPrototype, ITERATOR2, returnThis);
            }
          }
          setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG2, true, true);
          if (IS_PURE)
            Iterators[TO_STRING_TAG2] = returnThis;
        }
      }
      if (PROPER_FUNCTION_NAME2 && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
        if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
          createNonEnumerableProperty3(IterablePrototype, "name", VALUES);
        } else {
          INCORRECT_VALUES_NAME = true;
          defaultIterator = function values2() {
            return call3(nativeIterator, this);
          };
        }
      }
      if (DEFAULT) {
        methods = {
          values: getIterationMethod(VALUES),
          keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
          entries: getIterationMethod(ENTRIES)
        };
        if (FORCED3)
          for (KEY2 in methods) {
            if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY2 in IterablePrototype)) {
              defineBuiltIn5(IterablePrototype, KEY2, methods[KEY2]);
            }
          }
        else
          $17({ target: NAME2, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
      }
      if ((!IS_PURE || FORCED3) && IterablePrototype[ITERATOR2] !== defaultIterator) {
        defineBuiltIn5(IterablePrototype, ITERATOR2, defaultIterator, { name: DEFAULT });
      }
      Iterators[NAME2] = defaultIterator;
      return methods;
    };
  }
});

// node_modules/core-js/internals/create-iter-result-object.js
var require_create_iter_result_object = __commonJS({
  "node_modules/core-js/internals/create-iter-result-object.js"(exports, module) {
    module.exports = function(value, done) {
      return { value, done };
    };
  }
});

// node_modules/core-js/modules/es.array.iterator.js
var require_es_array_iterator = __commonJS({
  "node_modules/core-js/modules/es.array.iterator.js"(exports, module) {
    "use strict";
    var toIndexedObject2 = require_to_indexed_object();
    var addToUnscopables4 = require_add_to_unscopables();
    var Iterators = require_iterators();
    var InternalStateModule2 = require_internal_state();
    var defineProperty4 = require_object_define_property().f;
    var defineIterator2 = require_iterator_define();
    var createIterResultObject2 = require_create_iter_result_object();
    var IS_PURE = require_is_pure();
    var DESCRIPTORS4 = require_descriptors();
    var ARRAY_ITERATOR = "Array Iterator";
    var setInternalState2 = InternalStateModule2.set;
    var getInternalState2 = InternalStateModule2.getterFor(ARRAY_ITERATOR);
    module.exports = defineIterator2(Array, "Array", function(iterated, kind) {
      setInternalState2(this, {
        type: ARRAY_ITERATOR,
        target: toIndexedObject2(iterated),
        index: 0,
        kind
      });
    }, function() {
      var state = getInternalState2(this);
      var target = state.target;
      var kind = state.kind;
      var index = state.index++;
      if (!target || index >= target.length) {
        state.target = void 0;
        return createIterResultObject2(void 0, true);
      }
      if (kind == "keys")
        return createIterResultObject2(index, false);
      if (kind == "values")
        return createIterResultObject2(target[index], false);
      return createIterResultObject2([index, target[index]], false);
    }, "values");
    var values2 = Iterators.Arguments = Iterators.Array;
    addToUnscopables4("keys");
    addToUnscopables4("values");
    addToUnscopables4("entries");
    if (!IS_PURE && DESCRIPTORS4 && values2.name !== "values")
      try {
        defineProperty4(values2, "name", { value: "values" });
      } catch (error2) {
      }
  }
});

// node_modules/core-js/internals/object-to-string.js
var require_object_to_string = __commonJS({
  "node_modules/core-js/internals/object-to-string.js"(exports, module) {
    "use strict";
    var TO_STRING_TAG_SUPPORT2 = require_to_string_tag_support();
    var classof = require_classof();
    module.exports = TO_STRING_TAG_SUPPORT2 ? {}.toString : function toString8() {
      return "[object " + classof(this) + "]";
    };
  }
});

// node_modules/core-js/internals/array-slice-simple.js
var require_array_slice_simple = __commonJS({
  "node_modules/core-js/internals/array-slice-simple.js"(exports, module) {
    var toAbsoluteIndex2 = require_to_absolute_index();
    var lengthOfArrayLike4 = require_length_of_array_like();
    var createProperty3 = require_create_property();
    var $Array2 = Array;
    var max3 = Math.max;
    module.exports = function(O, start, end) {
      var length = lengthOfArrayLike4(O);
      var k = toAbsoluteIndex2(start, length);
      var fin = toAbsoluteIndex2(end === void 0 ? length : end, length);
      var result = $Array2(max3(fin - k, 0));
      for (var n = 0; k < fin; k++, n++)
        createProperty3(result, n, O[k]);
      result.length = n;
      return result;
    };
  }
});

// node_modules/core-js/internals/object-get-own-property-names-external.js
var require_object_get_own_property_names_external = __commonJS({
  "node_modules/core-js/internals/object-get-own-property-names-external.js"(exports, module) {
    var classof = require_classof_raw();
    var toIndexedObject2 = require_to_indexed_object();
    var $getOwnPropertyNames = require_object_get_own_property_names().f;
    var arraySlice2 = require_array_slice_simple();
    var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    var getWindowNames = function(it) {
      try {
        return $getOwnPropertyNames(it);
      } catch (error2) {
        return arraySlice2(windowNames);
      }
    };
    module.exports.f = function getOwnPropertyNames2(it) {
      return windowNames && classof(it) == "Window" ? getWindowNames(it) : $getOwnPropertyNames(toIndexedObject2(it));
    };
  }
});

// node_modules/core-js/internals/array-buffer-non-extensible.js
var require_array_buffer_non_extensible = __commonJS({
  "node_modules/core-js/internals/array-buffer-non-extensible.js"(exports, module) {
    var fails9 = require_fails();
    module.exports = fails9(function() {
      if (typeof ArrayBuffer == "function") {
        var buffer = new ArrayBuffer(8);
        if (Object.isExtensible(buffer))
          Object.defineProperty(buffer, "a", { value: 8 });
      }
    });
  }
});

// node_modules/core-js/internals/object-is-extensible.js
var require_object_is_extensible = __commonJS({
  "node_modules/core-js/internals/object-is-extensible.js"(exports, module) {
    var fails9 = require_fails();
    var isObject6 = require_is_object();
    var classof = require_classof_raw();
    var ARRAY_BUFFER_NON_EXTENSIBLE = require_array_buffer_non_extensible();
    var $isExtensible = Object.isExtensible;
    var FAILS_ON_PRIMITIVES3 = fails9(function() {
      $isExtensible(1);
    });
    module.exports = FAILS_ON_PRIMITIVES3 || ARRAY_BUFFER_NON_EXTENSIBLE ? function isExtensible(it) {
      if (!isObject6(it))
        return false;
      if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) == "ArrayBuffer")
        return false;
      return $isExtensible ? $isExtensible(it) : true;
    } : $isExtensible;
  }
});

// node_modules/core-js/internals/freezing.js
var require_freezing = __commonJS({
  "node_modules/core-js/internals/freezing.js"(exports, module) {
    var fails9 = require_fails();
    module.exports = !fails9(function() {
      return Object.isExtensible(Object.preventExtensions({}));
    });
  }
});

// node_modules/core-js/internals/internal-metadata.js
var require_internal_metadata = __commonJS({
  "node_modules/core-js/internals/internal-metadata.js"(exports, module) {
    var $17 = require_export();
    var uncurryThis7 = require_function_uncurry_this();
    var hiddenKeys = require_hidden_keys();
    var isObject6 = require_is_object();
    var hasOwn4 = require_has_own_property();
    var defineProperty4 = require_object_define_property().f;
    var getOwnPropertyNamesModule = require_object_get_own_property_names();
    var getOwnPropertyNamesExternalModule = require_object_get_own_property_names_external();
    var isExtensible = require_object_is_extensible();
    var uid = require_uid();
    var FREEZING2 = require_freezing();
    var REQUIRED = false;
    var METADATA = uid("meta");
    var id = 0;
    var setMetadata = function(it) {
      defineProperty4(it, METADATA, { value: {
        objectID: "O" + id++,
        weakData: {}
      } });
    };
    var fastKey = function(it, create) {
      if (!isObject6(it))
        return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
      if (!hasOwn4(it, METADATA)) {
        if (!isExtensible(it))
          return "F";
        if (!create)
          return "E";
        setMetadata(it);
      }
      return it[METADATA].objectID;
    };
    var getWeakData = function(it, create) {
      if (!hasOwn4(it, METADATA)) {
        if (!isExtensible(it))
          return true;
        if (!create)
          return false;
        setMetadata(it);
      }
      return it[METADATA].weakData;
    };
    var onFreeze2 = function(it) {
      if (FREEZING2 && REQUIRED && isExtensible(it) && !hasOwn4(it, METADATA))
        setMetadata(it);
      return it;
    };
    var enable = function() {
      meta.enable = function() {
      };
      REQUIRED = true;
      var getOwnPropertyNames2 = getOwnPropertyNamesModule.f;
      var splice = uncurryThis7([].splice);
      var test2 = {};
      test2[METADATA] = 1;
      if (getOwnPropertyNames2(test2).length) {
        getOwnPropertyNamesModule.f = function(it) {
          var result = getOwnPropertyNames2(it);
          for (var i = 0, length = result.length; i < length; i++) {
            if (result[i] === METADATA) {
              splice(result, i, 1);
              break;
            }
          }
          return result;
        };
        $17({ target: "Object", stat: true, forced: true }, {
          getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
        });
      }
    };
    var meta = module.exports = {
      enable,
      fastKey,
      getWeakData,
      onFreeze: onFreeze2
    };
    hiddenKeys[METADATA] = true;
  }
});

// node_modules/core-js/internals/function-uncurry-this-clause.js
var require_function_uncurry_this_clause = __commonJS({
  "node_modules/core-js/internals/function-uncurry-this-clause.js"(exports, module) {
    var classofRaw = require_classof_raw();
    var uncurryThis7 = require_function_uncurry_this();
    module.exports = function(fn) {
      if (classofRaw(fn) === "Function")
        return uncurryThis7(fn);
    };
  }
});

// node_modules/core-js/internals/function-bind-context.js
var require_function_bind_context = __commonJS({
  "node_modules/core-js/internals/function-bind-context.js"(exports, module) {
    var uncurryThis7 = require_function_uncurry_this_clause();
    var aCallable2 = require_a_callable();
    var NATIVE_BIND = require_function_bind_native();
    var bind = uncurryThis7(uncurryThis7.bind);
    module.exports = function(fn, that) {
      aCallable2(fn);
      return that === void 0 ? fn : NATIVE_BIND ? bind(fn, that) : function() {
        return fn.apply(that, arguments);
      };
    };
  }
});

// node_modules/core-js/internals/is-array-iterator-method.js
var require_is_array_iterator_method = __commonJS({
  "node_modules/core-js/internals/is-array-iterator-method.js"(exports, module) {
    var wellKnownSymbol6 = require_well_known_symbol();
    var Iterators = require_iterators();
    var ITERATOR2 = wellKnownSymbol6("iterator");
    var ArrayPrototype = Array.prototype;
    module.exports = function(it) {
      return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR2] === it);
    };
  }
});

// node_modules/core-js/internals/get-iterator-method.js
var require_get_iterator_method = __commonJS({
  "node_modules/core-js/internals/get-iterator-method.js"(exports, module) {
    var classof = require_classof();
    var getMethod3 = require_get_method();
    var isNullOrUndefined3 = require_is_null_or_undefined();
    var Iterators = require_iterators();
    var wellKnownSymbol6 = require_well_known_symbol();
    var ITERATOR2 = wellKnownSymbol6("iterator");
    module.exports = function(it) {
      if (!isNullOrUndefined3(it))
        return getMethod3(it, ITERATOR2) || getMethod3(it, "@@iterator") || Iterators[classof(it)];
    };
  }
});

// node_modules/core-js/internals/get-iterator.js
var require_get_iterator = __commonJS({
  "node_modules/core-js/internals/get-iterator.js"(exports, module) {
    var call3 = require_function_call();
    var aCallable2 = require_a_callable();
    var anObject4 = require_an_object();
    var tryToString = require_try_to_string();
    var getIteratorMethod = require_get_iterator_method();
    var $TypeError = TypeError;
    module.exports = function(argument, usingIterator) {
      var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
      if (aCallable2(iteratorMethod))
        return anObject4(call3(iteratorMethod, argument));
      throw $TypeError(tryToString(argument) + " is not iterable");
    };
  }
});

// node_modules/core-js/internals/iterator-close.js
var require_iterator_close = __commonJS({
  "node_modules/core-js/internals/iterator-close.js"(exports, module) {
    var call3 = require_function_call();
    var anObject4 = require_an_object();
    var getMethod3 = require_get_method();
    module.exports = function(iterator, kind, value) {
      var innerResult, innerError;
      anObject4(iterator);
      try {
        innerResult = getMethod3(iterator, "return");
        if (!innerResult) {
          if (kind === "throw")
            throw value;
          return value;
        }
        innerResult = call3(innerResult, iterator);
      } catch (error2) {
        innerError = true;
        innerResult = error2;
      }
      if (kind === "throw")
        throw value;
      if (innerError)
        throw innerResult;
      anObject4(innerResult);
      return value;
    };
  }
});

// node_modules/core-js/internals/iterate.js
var require_iterate = __commonJS({
  "node_modules/core-js/internals/iterate.js"(exports, module) {
    var bind = require_function_bind_context();
    var call3 = require_function_call();
    var anObject4 = require_an_object();
    var tryToString = require_try_to_string();
    var isArrayIteratorMethod = require_is_array_iterator_method();
    var lengthOfArrayLike4 = require_length_of_array_like();
    var isPrototypeOf3 = require_object_is_prototype_of();
    var getIterator = require_get_iterator();
    var getIteratorMethod = require_get_iterator_method();
    var iteratorClose = require_iterator_close();
    var $TypeError = TypeError;
    var Result = function(stopped, result) {
      this.stopped = stopped;
      this.result = result;
    };
    var ResultPrototype = Result.prototype;
    module.exports = function(iterable, unboundFunction, options) {
      var that = options && options.that;
      var AS_ENTRIES = !!(options && options.AS_ENTRIES);
      var IS_RECORD = !!(options && options.IS_RECORD);
      var IS_ITERATOR = !!(options && options.IS_ITERATOR);
      var INTERRUPTED = !!(options && options.INTERRUPTED);
      var fn = bind(unboundFunction, that);
      var iterator, iterFn, index, length, result, next2, step;
      var stop = function(condition) {
        if (iterator)
          iteratorClose(iterator, "normal", condition);
        return new Result(true, condition);
      };
      var callFn = function(value) {
        if (AS_ENTRIES) {
          anObject4(value);
          return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
        }
        return INTERRUPTED ? fn(value, stop) : fn(value);
      };
      if (IS_RECORD) {
        iterator = iterable.iterator;
      } else if (IS_ITERATOR) {
        iterator = iterable;
      } else {
        iterFn = getIteratorMethod(iterable);
        if (!iterFn)
          throw $TypeError(tryToString(iterable) + " is not iterable");
        if (isArrayIteratorMethod(iterFn)) {
          for (index = 0, length = lengthOfArrayLike4(iterable); length > index; index++) {
            result = callFn(iterable[index]);
            if (result && isPrototypeOf3(ResultPrototype, result))
              return result;
          }
          return new Result(false);
        }
        iterator = getIterator(iterable, iterFn);
      }
      next2 = IS_RECORD ? iterable.next : iterator.next;
      while (!(step = call3(next2, iterator)).done) {
        try {
          result = callFn(step.value);
        } catch (error2) {
          iteratorClose(iterator, "throw", error2);
        }
        if (typeof result == "object" && result && isPrototypeOf3(ResultPrototype, result))
          return result;
      }
      return new Result(false);
    };
  }
});

// node_modules/core-js/internals/an-instance.js
var require_an_instance = __commonJS({
  "node_modules/core-js/internals/an-instance.js"(exports, module) {
    var isPrototypeOf3 = require_object_is_prototype_of();
    var $TypeError = TypeError;
    module.exports = function(it, Prototype) {
      if (isPrototypeOf3(Prototype, it))
        return it;
      throw $TypeError("Incorrect invocation");
    };
  }
});

// node_modules/core-js/internals/check-correctness-of-iteration.js
var require_check_correctness_of_iteration = __commonJS({
  "node_modules/core-js/internals/check-correctness-of-iteration.js"(exports, module) {
    var wellKnownSymbol6 = require_well_known_symbol();
    var ITERATOR2 = wellKnownSymbol6("iterator");
    var SAFE_CLOSING = false;
    try {
      called = 0;
      iteratorWithReturn = {
        next: function() {
          return { done: !!called++ };
        },
        "return": function() {
          SAFE_CLOSING = true;
        }
      };
      iteratorWithReturn[ITERATOR2] = function() {
        return this;
      };
      Array.from(iteratorWithReturn, function() {
        throw 2;
      });
    } catch (error2) {
    }
    var called;
    var iteratorWithReturn;
    module.exports = function(exec, SKIP_CLOSING) {
      if (!SKIP_CLOSING && !SAFE_CLOSING)
        return false;
      var ITERATION_SUPPORT = false;
      try {
        var object = {};
        object[ITERATOR2] = function() {
          return {
            next: function() {
              return { done: ITERATION_SUPPORT = true };
            }
          };
        };
        exec(object);
      } catch (error2) {
      }
      return ITERATION_SUPPORT;
    };
  }
});

// node_modules/core-js/internals/inherit-if-required.js
var require_inherit_if_required = __commonJS({
  "node_modules/core-js/internals/inherit-if-required.js"(exports, module) {
    var isCallable3 = require_is_callable();
    var isObject6 = require_is_object();
    var setPrototypeOf = require_object_set_prototype_of();
    module.exports = function($this, dummy, Wrapper) {
      var NewTarget, NewTargetPrototype;
      if (setPrototypeOf && isCallable3(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject6(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype)
        setPrototypeOf($this, NewTargetPrototype);
      return $this;
    };
  }
});

// node_modules/core-js/internals/collection.js
var require_collection = __commonJS({
  "node_modules/core-js/internals/collection.js"(exports, module) {
    "use strict";
    var $17 = require_export();
    var global9 = require_global();
    var uncurryThis7 = require_function_uncurry_this();
    var isForced2 = require_is_forced();
    var defineBuiltIn5 = require_define_built_in();
    var InternalMetadataModule = require_internal_metadata();
    var iterate = require_iterate();
    var anInstance = require_an_instance();
    var isCallable3 = require_is_callable();
    var isNullOrUndefined3 = require_is_null_or_undefined();
    var isObject6 = require_is_object();
    var fails9 = require_fails();
    var checkCorrectnessOfIteration2 = require_check_correctness_of_iteration();
    var setToStringTag = require_set_to_string_tag();
    var inheritIfRequired2 = require_inherit_if_required();
    module.exports = function(CONSTRUCTOR_NAME, wrapper, common) {
      var IS_MAP = CONSTRUCTOR_NAME.indexOf("Map") !== -1;
      var IS_WEAK = CONSTRUCTOR_NAME.indexOf("Weak") !== -1;
      var ADDER = IS_MAP ? "set" : "add";
      var NativeConstructor = global9[CONSTRUCTOR_NAME];
      var NativePrototype = NativeConstructor && NativeConstructor.prototype;
      var Constructor = NativeConstructor;
      var exported = {};
      var fixMethod = function(KEY2) {
        var uncurriedNativeMethod = uncurryThis7(NativePrototype[KEY2]);
        defineBuiltIn5(NativePrototype, KEY2, KEY2 == "add" ? function add(value) {
          uncurriedNativeMethod(this, value === 0 ? 0 : value);
          return this;
        } : KEY2 == "delete" ? function(key) {
          return IS_WEAK && !isObject6(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
        } : KEY2 == "get" ? function get(key) {
          return IS_WEAK && !isObject6(key) ? void 0 : uncurriedNativeMethod(this, key === 0 ? 0 : key);
        } : KEY2 == "has" ? function has(key) {
          return IS_WEAK && !isObject6(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
        } : function set(key, value) {
          uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
          return this;
        });
      };
      var REPLACE2 = isForced2(CONSTRUCTOR_NAME, !isCallable3(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails9(function() {
        new NativeConstructor().entries().next();
      })));
      if (REPLACE2) {
        Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
        InternalMetadataModule.enable();
      } else if (isForced2(CONSTRUCTOR_NAME, true)) {
        var instance = new Constructor();
        var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
        var THROWS_ON_PRIMITIVES = fails9(function() {
          instance.has(1);
        });
        var ACCEPT_ITERABLES = checkCorrectnessOfIteration2(function(iterable) {
          new NativeConstructor(iterable);
        });
        var BUGGY_ZERO = !IS_WEAK && fails9(function() {
          var $instance = new NativeConstructor();
          var index = 5;
          while (index--)
            $instance[ADDER](index, index);
          return !$instance.has(-0);
        });
        if (!ACCEPT_ITERABLES) {
          Constructor = wrapper(function(dummy, iterable) {
            anInstance(dummy, NativePrototype);
            var that = inheritIfRequired2(new NativeConstructor(), dummy, Constructor);
            if (!isNullOrUndefined3(iterable))
              iterate(iterable, that[ADDER], { that, AS_ENTRIES: IS_MAP });
            return that;
          });
          Constructor.prototype = NativePrototype;
          NativePrototype.constructor = Constructor;
        }
        if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
          fixMethod("delete");
          fixMethod("has");
          IS_MAP && fixMethod("get");
        }
        if (BUGGY_ZERO || HASNT_CHAINING)
          fixMethod(ADDER);
        if (IS_WEAK && NativePrototype.clear)
          delete NativePrototype.clear;
      }
      exported[CONSTRUCTOR_NAME] = Constructor;
      $17({ global: true, constructor: true, forced: Constructor != NativeConstructor }, exported);
      setToStringTag(Constructor, CONSTRUCTOR_NAME);
      if (!IS_WEAK)
        common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
      return Constructor;
    };
  }
});

// node_modules/core-js/internals/define-built-ins.js
var require_define_built_ins = __commonJS({
  "node_modules/core-js/internals/define-built-ins.js"(exports, module) {
    var defineBuiltIn5 = require_define_built_in();
    module.exports = function(target, src, options) {
      for (var key in src)
        defineBuiltIn5(target, key, src[key], options);
      return target;
    };
  }
});

// node_modules/core-js/internals/set-species.js
var require_set_species = __commonJS({
  "node_modules/core-js/internals/set-species.js"(exports, module) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    var definePropertyModule = require_object_define_property();
    var wellKnownSymbol6 = require_well_known_symbol();
    var DESCRIPTORS4 = require_descriptors();
    var SPECIES2 = wellKnownSymbol6("species");
    module.exports = function(CONSTRUCTOR_NAME) {
      var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
      var defineProperty4 = definePropertyModule.f;
      if (DESCRIPTORS4 && Constructor && !Constructor[SPECIES2]) {
        defineProperty4(Constructor, SPECIES2, {
          configurable: true,
          get: function() {
            return this;
          }
        });
      }
    };
  }
});

// node_modules/core-js/internals/collection-strong.js
var require_collection_strong = __commonJS({
  "node_modules/core-js/internals/collection-strong.js"(exports, module) {
    "use strict";
    var defineProperty4 = require_object_define_property().f;
    var create = require_object_create();
    var defineBuiltIns = require_define_built_ins();
    var bind = require_function_bind_context();
    var anInstance = require_an_instance();
    var isNullOrUndefined3 = require_is_null_or_undefined();
    var iterate = require_iterate();
    var defineIterator2 = require_iterator_define();
    var createIterResultObject2 = require_create_iter_result_object();
    var setSpecies = require_set_species();
    var DESCRIPTORS4 = require_descriptors();
    var fastKey = require_internal_metadata().fastKey;
    var InternalStateModule2 = require_internal_state();
    var setInternalState2 = InternalStateModule2.set;
    var internalStateGetterFor = InternalStateModule2.getterFor;
    module.exports = {
      getConstructor: function(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
        var Constructor = wrapper(function(that, iterable) {
          anInstance(that, Prototype);
          setInternalState2(that, {
            type: CONSTRUCTOR_NAME,
            index: create(null),
            first: void 0,
            last: void 0,
            size: 0
          });
          if (!DESCRIPTORS4)
            that.size = 0;
          if (!isNullOrUndefined3(iterable))
            iterate(iterable, that[ADDER], { that, AS_ENTRIES: IS_MAP });
        });
        var Prototype = Constructor.prototype;
        var getInternalState2 = internalStateGetterFor(CONSTRUCTOR_NAME);
        var define2 = function(that, key, value) {
          var state = getInternalState2(that);
          var entry = getEntry(that, key);
          var previous, index;
          if (entry) {
            entry.value = value;
          } else {
            state.last = entry = {
              index: index = fastKey(key, true),
              key,
              value,
              previous: previous = state.last,
              next: void 0,
              removed: false
            };
            if (!state.first)
              state.first = entry;
            if (previous)
              previous.next = entry;
            if (DESCRIPTORS4)
              state.size++;
            else
              that.size++;
            if (index !== "F")
              state.index[index] = entry;
          }
          return that;
        };
        var getEntry = function(that, key) {
          var state = getInternalState2(that);
          var index = fastKey(key);
          var entry;
          if (index !== "F")
            return state.index[index];
          for (entry = state.first; entry; entry = entry.next) {
            if (entry.key == key)
              return entry;
          }
        };
        defineBuiltIns(Prototype, {
          clear: function clear() {
            var that = this;
            var state = getInternalState2(that);
            var data = state.index;
            var entry = state.first;
            while (entry) {
              entry.removed = true;
              if (entry.previous)
                entry.previous = entry.previous.next = void 0;
              delete data[entry.index];
              entry = entry.next;
            }
            state.first = state.last = void 0;
            if (DESCRIPTORS4)
              state.size = 0;
            else
              that.size = 0;
          },
          "delete": function(key) {
            var that = this;
            var state = getInternalState2(that);
            var entry = getEntry(that, key);
            if (entry) {
              var next2 = entry.next;
              var prev = entry.previous;
              delete state.index[entry.index];
              entry.removed = true;
              if (prev)
                prev.next = next2;
              if (next2)
                next2.previous = prev;
              if (state.first == entry)
                state.first = next2;
              if (state.last == entry)
                state.last = prev;
              if (DESCRIPTORS4)
                state.size--;
              else
                that.size--;
            }
            return !!entry;
          },
          forEach: function forEach2(callbackfn) {
            var state = getInternalState2(this);
            var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : void 0);
            var entry;
            while (entry = entry ? entry.next : state.first) {
              boundFunction(entry.value, entry.key, this);
              while (entry && entry.removed)
                entry = entry.previous;
            }
          },
          has: function has(key) {
            return !!getEntry(this, key);
          }
        });
        defineBuiltIns(Prototype, IS_MAP ? {
          get: function get(key) {
            var entry = getEntry(this, key);
            return entry && entry.value;
          },
          set: function set(key, value) {
            return define2(this, key === 0 ? 0 : key, value);
          }
        } : {
          add: function add(value) {
            return define2(this, value = value === 0 ? 0 : value, value);
          }
        });
        if (DESCRIPTORS4)
          defineProperty4(Prototype, "size", {
            get: function() {
              return getInternalState2(this).size;
            }
          });
        return Constructor;
      },
      setStrong: function(Constructor, CONSTRUCTOR_NAME, IS_MAP) {
        var ITERATOR_NAME = CONSTRUCTOR_NAME + " Iterator";
        var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
        var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
        defineIterator2(Constructor, CONSTRUCTOR_NAME, function(iterated, kind) {
          setInternalState2(this, {
            type: ITERATOR_NAME,
            target: iterated,
            state: getInternalCollectionState(iterated),
            kind,
            last: void 0
          });
        }, function() {
          var state = getInternalIteratorState(this);
          var kind = state.kind;
          var entry = state.last;
          while (entry && entry.removed)
            entry = entry.previous;
          if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
            state.target = void 0;
            return createIterResultObject2(void 0, true);
          }
          if (kind == "keys")
            return createIterResultObject2(entry.key, false);
          if (kind == "values")
            return createIterResultObject2(entry.value, false);
          return createIterResultObject2([entry.key, entry.value], false);
        }, IS_MAP ? "entries" : "values", !IS_MAP, true);
        setSpecies(CONSTRUCTOR_NAME);
      }
    };
  }
});

// node_modules/core-js/modules/es.set.constructor.js
var require_es_set_constructor = __commonJS({
  "node_modules/core-js/modules/es.set.constructor.js"() {
    "use strict";
    var collection = require_collection();
    var collectionStrong = require_collection_strong();
    collection("Set", function(init) {
      return function Set2() {
        return init(this, arguments.length ? arguments[0] : void 0);
      };
    }, collectionStrong);
  }
});

// node_modules/core-js/internals/to-string.js
var require_to_string = __commonJS({
  "node_modules/core-js/internals/to-string.js"(exports, module) {
    var classof = require_classof();
    var $String = String;
    module.exports = function(argument) {
      if (classof(argument) === "Symbol")
        throw TypeError("Cannot convert a Symbol value to a string");
      return $String(argument);
    };
  }
});

// node_modules/core-js/internals/string-multibyte.js
var require_string_multibyte = __commonJS({
  "node_modules/core-js/internals/string-multibyte.js"(exports, module) {
    var uncurryThis7 = require_function_uncurry_this();
    var toIntegerOrInfinity2 = require_to_integer_or_infinity();
    var toString8 = require_to_string();
    var requireObjectCoercible4 = require_require_object_coercible();
    var charAt2 = uncurryThis7("".charAt);
    var charCodeAt2 = uncurryThis7("".charCodeAt);
    var stringSlice2 = uncurryThis7("".slice);
    var createMethod = function(CONVERT_TO_STRING) {
      return function($this, pos) {
        var S = toString8(requireObjectCoercible4($this));
        var position = toIntegerOrInfinity2(pos);
        var size = S.length;
        var first, second;
        if (position < 0 || position >= size)
          return CONVERT_TO_STRING ? "" : void 0;
        first = charCodeAt2(S, position);
        return first < 55296 || first > 56319 || position + 1 === size || (second = charCodeAt2(S, position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? charAt2(S, position) : first : CONVERT_TO_STRING ? stringSlice2(S, position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
      };
    };
    module.exports = {
      codeAt: createMethod(false),
      charAt: createMethod(true)
    };
  }
});

// node_modules/core-js/internals/dom-iterables.js
var require_dom_iterables = __commonJS({
  "node_modules/core-js/internals/dom-iterables.js"(exports, module) {
    module.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0
    };
  }
});

// node_modules/core-js/internals/dom-token-list-prototype.js
var require_dom_token_list_prototype = __commonJS({
  "node_modules/core-js/internals/dom-token-list-prototype.js"(exports, module) {
    var documentCreateElement = require_document_create_element();
    var classList = documentCreateElement("span").classList;
    var DOMTokenListPrototype3 = classList && classList.constructor && classList.constructor.prototype;
    module.exports = DOMTokenListPrototype3 === Object.prototype ? void 0 : DOMTokenListPrototype3;
  }
});

// node_modules/core-js/internals/regexp-flags.js
var require_regexp_flags = __commonJS({
  "node_modules/core-js/internals/regexp-flags.js"(exports, module) {
    "use strict";
    var anObject4 = require_an_object();
    module.exports = function() {
      var that = anObject4(this);
      var result = "";
      if (that.hasIndices)
        result += "d";
      if (that.global)
        result += "g";
      if (that.ignoreCase)
        result += "i";
      if (that.multiline)
        result += "m";
      if (that.dotAll)
        result += "s";
      if (that.unicode)
        result += "u";
      if (that.unicodeSets)
        result += "v";
      if (that.sticky)
        result += "y";
      return result;
    };
  }
});

// node_modules/core-js/internals/regexp-sticky-helpers.js
var require_regexp_sticky_helpers = __commonJS({
  "node_modules/core-js/internals/regexp-sticky-helpers.js"(exports, module) {
    var fails9 = require_fails();
    var global9 = require_global();
    var $RegExp = global9.RegExp;
    var UNSUPPORTED_Y = fails9(function() {
      var re = $RegExp("a", "y");
      re.lastIndex = 2;
      return re.exec("abcd") != null;
    });
    var MISSED_STICKY = UNSUPPORTED_Y || fails9(function() {
      return !$RegExp("a", "y").sticky;
    });
    var BROKEN_CARET = UNSUPPORTED_Y || fails9(function() {
      var re = $RegExp("^r", "gy");
      re.lastIndex = 2;
      return re.exec("str") != null;
    });
    module.exports = {
      BROKEN_CARET,
      MISSED_STICKY,
      UNSUPPORTED_Y
    };
  }
});

// node_modules/core-js/internals/regexp-unsupported-dot-all.js
var require_regexp_unsupported_dot_all = __commonJS({
  "node_modules/core-js/internals/regexp-unsupported-dot-all.js"(exports, module) {
    var fails9 = require_fails();
    var global9 = require_global();
    var $RegExp = global9.RegExp;
    module.exports = fails9(function() {
      var re = $RegExp(".", "s");
      return !(re.dotAll && re.exec("\n") && re.flags === "s");
    });
  }
});

// node_modules/core-js/internals/regexp-unsupported-ncg.js
var require_regexp_unsupported_ncg = __commonJS({
  "node_modules/core-js/internals/regexp-unsupported-ncg.js"(exports, module) {
    var fails9 = require_fails();
    var global9 = require_global();
    var $RegExp = global9.RegExp;
    module.exports = fails9(function() {
      var re = $RegExp("(?<a>b)", "g");
      return re.exec("b").groups.a !== "b" || "b".replace(re, "$<a>c") !== "bc";
    });
  }
});

// node_modules/core-js/internals/regexp-exec.js
var require_regexp_exec = __commonJS({
  "node_modules/core-js/internals/regexp-exec.js"(exports, module) {
    "use strict";
    var call3 = require_function_call();
    var uncurryThis7 = require_function_uncurry_this();
    var toString8 = require_to_string();
    var regexpFlags = require_regexp_flags();
    var stickyHelpers = require_regexp_sticky_helpers();
    var shared = require_shared();
    var create = require_object_create();
    var getInternalState2 = require_internal_state().get;
    var UNSUPPORTED_DOT_ALL = require_regexp_unsupported_dot_all();
    var UNSUPPORTED_NCG = require_regexp_unsupported_ncg();
    var nativeReplace = shared("native-string-replace", String.prototype.replace);
    var nativeExec = RegExp.prototype.exec;
    var patchedExec = nativeExec;
    var charAt2 = uncurryThis7("".charAt);
    var indexOf = uncurryThis7("".indexOf);
    var replace = uncurryThis7("".replace);
    var stringSlice2 = uncurryThis7("".slice);
    var UPDATES_LAST_INDEX_WRONG = function() {
      var re1 = /a/;
      var re2 = /b*/g;
      call3(nativeExec, re1, "a");
      call3(nativeExec, re2, "a");
      return re1.lastIndex !== 0 || re2.lastIndex !== 0;
    }();
    var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;
    var NPCG_INCLUDED = /()??/.exec("")[1] !== void 0;
    var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;
    if (PATCH) {
      patchedExec = function exec(string) {
        var re = this;
        var state = getInternalState2(re);
        var str = toString8(string);
        var raw = state.raw;
        var result, reCopy, lastIndex, match, i, object, group;
        if (raw) {
          raw.lastIndex = re.lastIndex;
          result = call3(patchedExec, raw, str);
          re.lastIndex = raw.lastIndex;
          return result;
        }
        var groups = state.groups;
        var sticky = UNSUPPORTED_Y && re.sticky;
        var flags = call3(regexpFlags, re);
        var source = re.source;
        var charsAdded = 0;
        var strCopy = str;
        if (sticky) {
          flags = replace(flags, "y", "");
          if (indexOf(flags, "g") === -1) {
            flags += "g";
          }
          strCopy = stringSlice2(str, re.lastIndex);
          if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt2(str, re.lastIndex - 1) !== "\n")) {
            source = "(?: " + source + ")";
            strCopy = " " + strCopy;
            charsAdded++;
          }
          reCopy = new RegExp("^(?:" + source + ")", flags);
        }
        if (NPCG_INCLUDED) {
          reCopy = new RegExp("^" + source + "$(?!\\s)", flags);
        }
        if (UPDATES_LAST_INDEX_WRONG)
          lastIndex = re.lastIndex;
        match = call3(nativeExec, sticky ? reCopy : re, strCopy);
        if (sticky) {
          if (match) {
            match.input = stringSlice2(match.input, charsAdded);
            match[0] = stringSlice2(match[0], charsAdded);
            match.index = re.lastIndex;
            re.lastIndex += match[0].length;
          } else
            re.lastIndex = 0;
        } else if (UPDATES_LAST_INDEX_WRONG && match) {
          re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
        }
        if (NPCG_INCLUDED && match && match.length > 1) {
          call3(nativeReplace, match[0], reCopy, function() {
            for (i = 1; i < arguments.length - 2; i++) {
              if (arguments[i] === void 0)
                match[i] = void 0;
            }
          });
        }
        if (match && groups) {
          match.groups = object = create(null);
          for (i = 0; i < groups.length; i++) {
            group = groups[i];
            object[group[0]] = match[group[1]];
          }
        }
        return match;
      };
    }
    module.exports = patchedExec;
  }
});

// node_modules/core-js/modules/es.regexp.exec.js
var require_es_regexp_exec = __commonJS({
  "node_modules/core-js/modules/es.regexp.exec.js"() {
    "use strict";
    var $17 = require_export();
    var exec = require_regexp_exec();
    $17({ target: "RegExp", proto: true, forced: /./.exec !== exec }, {
      exec
    });
  }
});

// node_modules/core-js/internals/function-apply.js
var require_function_apply = __commonJS({
  "node_modules/core-js/internals/function-apply.js"(exports, module) {
    var NATIVE_BIND = require_function_bind_native();
    var FunctionPrototype2 = Function.prototype;
    var apply2 = FunctionPrototype2.apply;
    var call3 = FunctionPrototype2.call;
    module.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call3.bind(apply2) : function() {
      return call3.apply(apply2, arguments);
    });
  }
});

// node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js
var require_fix_regexp_well_known_symbol_logic = __commonJS({
  "node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js"(exports, module) {
    "use strict";
    require_es_regexp_exec();
    var uncurryThis7 = require_function_uncurry_this_clause();
    var defineBuiltIn5 = require_define_built_in();
    var regexpExec = require_regexp_exec();
    var fails9 = require_fails();
    var wellKnownSymbol6 = require_well_known_symbol();
    var createNonEnumerableProperty3 = require_create_non_enumerable_property();
    var SPECIES2 = wellKnownSymbol6("species");
    var RegExpPrototype2 = RegExp.prototype;
    module.exports = function(KEY2, exec, FORCED3, SHAM) {
      var SYMBOL = wellKnownSymbol6(KEY2);
      var DELEGATES_TO_SYMBOL = !fails9(function() {
        var O = {};
        O[SYMBOL] = function() {
          return 7;
        };
        return ""[KEY2](O) != 7;
      });
      var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails9(function() {
        var execCalled = false;
        var re = /a/;
        if (KEY2 === "split") {
          re = {};
          re.constructor = {};
          re.constructor[SPECIES2] = function() {
            return re;
          };
          re.flags = "";
          re[SYMBOL] = /./[SYMBOL];
        }
        re.exec = function() {
          execCalled = true;
          return null;
        };
        re[SYMBOL]("");
        return !execCalled;
      });
      if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED3) {
        var uncurriedNativeRegExpMethod = uncurryThis7(/./[SYMBOL]);
        var methods = exec(SYMBOL, ""[KEY2], function(nativeMethod, regexp, str, arg2, forceStringMethod) {
          var uncurriedNativeMethod = uncurryThis7(nativeMethod);
          var $exec = regexp.exec;
          if ($exec === regexpExec || $exec === RegExpPrototype2.exec) {
            if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
              return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
            }
            return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
          }
          return { done: false };
        });
        defineBuiltIn5(String.prototype, KEY2, methods[0]);
        defineBuiltIn5(RegExpPrototype2, SYMBOL, methods[1]);
      }
      if (SHAM)
        createNonEnumerableProperty3(RegExpPrototype2[SYMBOL], "sham", true);
    };
  }
});

// node_modules/core-js/internals/advance-string-index.js
var require_advance_string_index = __commonJS({
  "node_modules/core-js/internals/advance-string-index.js"(exports, module) {
    "use strict";
    var charAt2 = require_string_multibyte().charAt;
    module.exports = function(S, index, unicode) {
      return index + (unicode ? charAt2(S, index).length : 1);
    };
  }
});

// node_modules/core-js/internals/get-substitution.js
var require_get_substitution = __commonJS({
  "node_modules/core-js/internals/get-substitution.js"(exports, module) {
    var uncurryThis7 = require_function_uncurry_this();
    var toObject4 = require_to_object();
    var floor = Math.floor;
    var charAt2 = uncurryThis7("".charAt);
    var replace = uncurryThis7("".replace);
    var stringSlice2 = uncurryThis7("".slice);
    var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
    var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;
    module.exports = function(matched, str, position, captures, namedCaptures, replacement) {
      var tailPos = position + matched.length;
      var m = captures.length;
      var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
      if (namedCaptures !== void 0) {
        namedCaptures = toObject4(namedCaptures);
        symbols = SUBSTITUTION_SYMBOLS;
      }
      return replace(replacement, symbols, function(match, ch) {
        var capture;
        switch (charAt2(ch, 0)) {
          case "$":
            return "$";
          case "&":
            return matched;
          case "`":
            return stringSlice2(str, 0, position);
          case "'":
            return stringSlice2(str, tailPos);
          case "<":
            capture = namedCaptures[stringSlice2(ch, 1, -1)];
            break;
          default:
            var n = +ch;
            if (n === 0)
              return match;
            if (n > m) {
              var f = floor(n / 10);
              if (f === 0)
                return match;
              if (f <= m)
                return captures[f - 1] === void 0 ? charAt2(ch, 1) : captures[f - 1] + charAt2(ch, 1);
              return match;
            }
            capture = captures[n - 1];
        }
        return capture === void 0 ? "" : capture;
      });
    };
  }
});

// node_modules/core-js/internals/regexp-exec-abstract.js
var require_regexp_exec_abstract = __commonJS({
  "node_modules/core-js/internals/regexp-exec-abstract.js"(exports, module) {
    var call3 = require_function_call();
    var anObject4 = require_an_object();
    var isCallable3 = require_is_callable();
    var classof = require_classof_raw();
    var regexpExec = require_regexp_exec();
    var $TypeError = TypeError;
    module.exports = function(R, S) {
      var exec = R.exec;
      if (isCallable3(exec)) {
        var result = call3(exec, R, S);
        if (result !== null)
          anObject4(result);
        return result;
      }
      if (classof(R) === "RegExp")
        return call3(regexpExec, R, S);
      throw $TypeError("RegExp#exec called on incompatible receiver");
    };
  }
});

// node_modules/global/window.js
var require_window = __commonJS({
  "node_modules/global/window.js"(exports, module) {
    var win;
    if (typeof window !== "undefined") {
      win = window;
    } else if (typeof global !== "undefined") {
      win = global;
    } else if (typeof self !== "undefined") {
      win = self;
    } else {
      win = {};
    }
    module.exports = win;
  }
});

// node_modules/core-js/internals/well-known-symbol-wrapped.js
var require_well_known_symbol_wrapped = __commonJS({
  "node_modules/core-js/internals/well-known-symbol-wrapped.js"(exports) {
    var wellKnownSymbol6 = require_well_known_symbol();
    exports.f = wellKnownSymbol6;
  }
});

// node_modules/core-js/internals/path.js
var require_path = __commonJS({
  "node_modules/core-js/internals/path.js"(exports, module) {
    var global9 = require_global();
    module.exports = global9;
  }
});

// node_modules/core-js/internals/well-known-symbol-define.js
var require_well_known_symbol_define = __commonJS({
  "node_modules/core-js/internals/well-known-symbol-define.js"(exports, module) {
    var path = require_path();
    var hasOwn4 = require_has_own_property();
    var wrappedWellKnownSymbolModule = require_well_known_symbol_wrapped();
    var defineProperty4 = require_object_define_property().f;
    module.exports = function(NAME2) {
      var Symbol2 = path.Symbol || (path.Symbol = {});
      if (!hasOwn4(Symbol2, NAME2))
        defineProperty4(Symbol2, NAME2, {
          value: wrappedWellKnownSymbolModule.f(NAME2)
        });
    };
  }
});

// node_modules/core-js/internals/symbol-define-to-primitive.js
var require_symbol_define_to_primitive = __commonJS({
  "node_modules/core-js/internals/symbol-define-to-primitive.js"(exports, module) {
    var call3 = require_function_call();
    var getBuiltIn = require_get_built_in();
    var wellKnownSymbol6 = require_well_known_symbol();
    var defineBuiltIn5 = require_define_built_in();
    module.exports = function() {
      var Symbol2 = getBuiltIn("Symbol");
      var SymbolPrototype2 = Symbol2 && Symbol2.prototype;
      var valueOf = SymbolPrototype2 && SymbolPrototype2.valueOf;
      var TO_PRIMITIVE2 = wellKnownSymbol6("toPrimitive");
      if (SymbolPrototype2 && !SymbolPrototype2[TO_PRIMITIVE2]) {
        defineBuiltIn5(SymbolPrototype2, TO_PRIMITIVE2, function(hint) {
          return call3(valueOf, this);
        }, { arity: 1 });
      }
    };
  }
});

// node_modules/core-js/internals/array-iteration.js
var require_array_iteration = __commonJS({
  "node_modules/core-js/internals/array-iteration.js"(exports, module) {
    var bind = require_function_bind_context();
    var uncurryThis7 = require_function_uncurry_this();
    var IndexedObject = require_indexed_object();
    var toObject4 = require_to_object();
    var lengthOfArrayLike4 = require_length_of_array_like();
    var arraySpeciesCreate2 = require_array_species_create();
    var push3 = uncurryThis7([].push);
    var createMethod = function(TYPE) {
      var IS_MAP = TYPE == 1;
      var IS_FILTER = TYPE == 2;
      var IS_SOME = TYPE == 3;
      var IS_EVERY = TYPE == 4;
      var IS_FIND_INDEX = TYPE == 6;
      var IS_FILTER_REJECT = TYPE == 7;
      var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
      return function($this, callbackfn, that, specificCreate) {
        var O = toObject4($this);
        var self2 = IndexedObject(O);
        var boundFunction = bind(callbackfn, that);
        var length = lengthOfArrayLike4(self2);
        var index = 0;
        var create = specificCreate || arraySpeciesCreate2;
        var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : void 0;
        var value, result;
        for (; length > index; index++)
          if (NO_HOLES || index in self2) {
            value = self2[index];
            result = boundFunction(value, index, O);
            if (TYPE) {
              if (IS_MAP)
                target[index] = result;
              else if (result)
                switch (TYPE) {
                  case 3:
                    return true;
                  case 5:
                    return value;
                  case 6:
                    return index;
                  case 2:
                    push3(target, value);
                }
              else
                switch (TYPE) {
                  case 4:
                    return false;
                  case 7:
                    push3(target, value);
                }
            }
          }
        return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
      };
    };
    module.exports = {
      forEach: createMethod(0),
      map: createMethod(1),
      filter: createMethod(2),
      some: createMethod(3),
      every: createMethod(4),
      find: createMethod(5),
      findIndex: createMethod(6),
      filterReject: createMethod(7)
    };
  }
});

// node_modules/core-js/modules/es.symbol.constructor.js
var require_es_symbol_constructor = __commonJS({
  "node_modules/core-js/modules/es.symbol.constructor.js"() {
    "use strict";
    var $17 = require_export();
    var global9 = require_global();
    var call3 = require_function_call();
    var uncurryThis7 = require_function_uncurry_this();
    var IS_PURE = require_is_pure();
    var DESCRIPTORS4 = require_descriptors();
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    var fails9 = require_fails();
    var hasOwn4 = require_has_own_property();
    var isPrototypeOf3 = require_object_is_prototype_of();
    var anObject4 = require_an_object();
    var toIndexedObject2 = require_to_indexed_object();
    var toPropertyKey = require_to_property_key();
    var $toString2 = require_to_string();
    var createPropertyDescriptor = require_create_property_descriptor();
    var nativeObjectCreate = require_object_create();
    var objectKeys = require_object_keys();
    var getOwnPropertyNamesModule = require_object_get_own_property_names();
    var getOwnPropertyNamesExternal = require_object_get_own_property_names_external();
    var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
    var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
    var definePropertyModule = require_object_define_property();
    var definePropertiesModule = require_object_define_properties();
    var propertyIsEnumerableModule = require_object_property_is_enumerable();
    var defineBuiltIn5 = require_define_built_in();
    var shared = require_shared();
    var sharedKey = require_shared_key();
    var hiddenKeys = require_hidden_keys();
    var uid = require_uid();
    var wellKnownSymbol6 = require_well_known_symbol();
    var wrappedWellKnownSymbolModule = require_well_known_symbol_wrapped();
    var defineWellKnownSymbol3 = require_well_known_symbol_define();
    var defineSymbolToPrimitive2 = require_symbol_define_to_primitive();
    var setToStringTag = require_set_to_string_tag();
    var InternalStateModule2 = require_internal_state();
    var $forEach = require_array_iteration().forEach;
    var HIDDEN = sharedKey("hidden");
    var SYMBOL = "Symbol";
    var PROTOTYPE = "prototype";
    var setInternalState2 = InternalStateModule2.set;
    var getInternalState2 = InternalStateModule2.getterFor(SYMBOL);
    var ObjectPrototype = Object[PROTOTYPE];
    var $Symbol = global9.Symbol;
    var SymbolPrototype2 = $Symbol && $Symbol[PROTOTYPE];
    var TypeError3 = global9.TypeError;
    var QObject = global9.QObject;
    var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var nativeDefineProperty = definePropertyModule.f;
    var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
    var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
    var push3 = uncurryThis7([].push);
    var AllSymbols = shared("symbols");
    var ObjectPrototypeSymbols = shared("op-symbols");
    var WellKnownSymbolsStore = shared("wks");
    var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
    var setSymbolDescriptor = DESCRIPTORS4 && fails9(function() {
      return nativeObjectCreate(nativeDefineProperty({}, "a", {
        get: function() {
          return nativeDefineProperty(this, "a", { value: 7 }).a;
        }
      })).a != 7;
    }) ? function(O, P, Attributes) {
      var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
      if (ObjectPrototypeDescriptor)
        delete ObjectPrototype[P];
      nativeDefineProperty(O, P, Attributes);
      if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
        nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
      }
    } : nativeDefineProperty;
    var wrap = function(tag, description) {
      var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype2);
      setInternalState2(symbol, {
        type: SYMBOL,
        tag,
        description
      });
      if (!DESCRIPTORS4)
        symbol.description = description;
      return symbol;
    };
    var $defineProperty = function defineProperty4(O, P, Attributes) {
      if (O === ObjectPrototype)
        $defineProperty(ObjectPrototypeSymbols, P, Attributes);
      anObject4(O);
      var key = toPropertyKey(P);
      anObject4(Attributes);
      if (hasOwn4(AllSymbols, key)) {
        if (!Attributes.enumerable) {
          if (!hasOwn4(O, HIDDEN))
            nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
          O[HIDDEN][key] = true;
        } else {
          if (hasOwn4(O, HIDDEN) && O[HIDDEN][key])
            O[HIDDEN][key] = false;
          Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
        }
        return setSymbolDescriptor(O, key, Attributes);
      }
      return nativeDefineProperty(O, key, Attributes);
    };
    var $defineProperties = function defineProperties(O, Properties) {
      anObject4(O);
      var properties = toIndexedObject2(Properties);
      var keys2 = objectKeys(properties).concat($getOwnPropertySymbols(properties));
      $forEach(keys2, function(key) {
        if (!DESCRIPTORS4 || call3($propertyIsEnumerable, properties, key))
          $defineProperty(O, key, properties[key]);
      });
      return O;
    };
    var $create = function create(O, Properties) {
      return Properties === void 0 ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
    };
    var $propertyIsEnumerable = function propertyIsEnumerable(V) {
      var P = toPropertyKey(V);
      var enumerable = call3(nativePropertyIsEnumerable, this, P);
      if (this === ObjectPrototype && hasOwn4(AllSymbols, P) && !hasOwn4(ObjectPrototypeSymbols, P))
        return false;
      return enumerable || !hasOwn4(this, P) || !hasOwn4(AllSymbols, P) || hasOwn4(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
    };
    var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor2(O, P) {
      var it = toIndexedObject2(O);
      var key = toPropertyKey(P);
      if (it === ObjectPrototype && hasOwn4(AllSymbols, key) && !hasOwn4(ObjectPrototypeSymbols, key))
        return;
      var descriptor = nativeGetOwnPropertyDescriptor(it, key);
      if (descriptor && hasOwn4(AllSymbols, key) && !(hasOwn4(it, HIDDEN) && it[HIDDEN][key])) {
        descriptor.enumerable = true;
      }
      return descriptor;
    };
    var $getOwnPropertyNames = function getOwnPropertyNames2(O) {
      var names = nativeGetOwnPropertyNames(toIndexedObject2(O));
      var result = [];
      $forEach(names, function(key) {
        if (!hasOwn4(AllSymbols, key) && !hasOwn4(hiddenKeys, key))
          push3(result, key);
      });
      return result;
    };
    var $getOwnPropertySymbols = function(O) {
      var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
      var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject2(O));
      var result = [];
      $forEach(names, function(key) {
        if (hasOwn4(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn4(ObjectPrototype, key))) {
          push3(result, AllSymbols[key]);
        }
      });
      return result;
    };
    if (!NATIVE_SYMBOL) {
      $Symbol = function Symbol2() {
        if (isPrototypeOf3(SymbolPrototype2, this))
          throw TypeError3("Symbol is not a constructor");
        var description = !arguments.length || arguments[0] === void 0 ? void 0 : $toString2(arguments[0]);
        var tag = uid(description);
        var setter = function(value) {
          if (this === ObjectPrototype)
            call3(setter, ObjectPrototypeSymbols, value);
          if (hasOwn4(this, HIDDEN) && hasOwn4(this[HIDDEN], tag))
            this[HIDDEN][tag] = false;
          setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
        };
        if (DESCRIPTORS4 && USE_SETTER)
          setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
        return wrap(tag, description);
      };
      SymbolPrototype2 = $Symbol[PROTOTYPE];
      defineBuiltIn5(SymbolPrototype2, "toString", function toString8() {
        return getInternalState2(this).tag;
      });
      defineBuiltIn5($Symbol, "withoutSetter", function(description) {
        return wrap(uid(description), description);
      });
      propertyIsEnumerableModule.f = $propertyIsEnumerable;
      definePropertyModule.f = $defineProperty;
      definePropertiesModule.f = $defineProperties;
      getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
      getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
      getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;
      wrappedWellKnownSymbolModule.f = function(name) {
        return wrap(wellKnownSymbol6(name), name);
      };
      if (DESCRIPTORS4) {
        nativeDefineProperty(SymbolPrototype2, "description", {
          configurable: true,
          get: function description() {
            return getInternalState2(this).description;
          }
        });
        if (!IS_PURE) {
          defineBuiltIn5(ObjectPrototype, "propertyIsEnumerable", $propertyIsEnumerable, { unsafe: true });
        }
      }
    }
    $17({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
      Symbol: $Symbol
    });
    $forEach(objectKeys(WellKnownSymbolsStore), function(name) {
      defineWellKnownSymbol3(name);
    });
    $17({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
      useSetter: function() {
        USE_SETTER = true;
      },
      useSimple: function() {
        USE_SETTER = false;
      }
    });
    $17({ target: "Object", stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS4 }, {
      create: $create,
      defineProperty: $defineProperty,
      defineProperties: $defineProperties,
      getOwnPropertyDescriptor: $getOwnPropertyDescriptor
    });
    $17({ target: "Object", stat: true, forced: !NATIVE_SYMBOL }, {
      getOwnPropertyNames: $getOwnPropertyNames
    });
    defineSymbolToPrimitive2();
    setToStringTag($Symbol, SYMBOL);
    hiddenKeys[HIDDEN] = true;
  }
});

// node_modules/core-js/internals/symbol-registry-detection.js
var require_symbol_registry_detection = __commonJS({
  "node_modules/core-js/internals/symbol-registry-detection.js"(exports, module) {
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module.exports = NATIVE_SYMBOL && !!Symbol["for"] && !!Symbol.keyFor;
  }
});

// node_modules/core-js/modules/es.symbol.for.js
var require_es_symbol_for = __commonJS({
  "node_modules/core-js/modules/es.symbol.for.js"() {
    var $17 = require_export();
    var getBuiltIn = require_get_built_in();
    var hasOwn4 = require_has_own_property();
    var toString8 = require_to_string();
    var shared = require_shared();
    var NATIVE_SYMBOL_REGISTRY = require_symbol_registry_detection();
    var StringToSymbolRegistry = shared("string-to-symbol-registry");
    var SymbolToStringRegistry = shared("symbol-to-string-registry");
    $17({ target: "Symbol", stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
      "for": function(key) {
        var string = toString8(key);
        if (hasOwn4(StringToSymbolRegistry, string))
          return StringToSymbolRegistry[string];
        var symbol = getBuiltIn("Symbol")(string);
        StringToSymbolRegistry[string] = symbol;
        SymbolToStringRegistry[symbol] = string;
        return symbol;
      }
    });
  }
});

// node_modules/core-js/modules/es.symbol.key-for.js
var require_es_symbol_key_for = __commonJS({
  "node_modules/core-js/modules/es.symbol.key-for.js"() {
    var $17 = require_export();
    var hasOwn4 = require_has_own_property();
    var isSymbol2 = require_is_symbol();
    var tryToString = require_try_to_string();
    var shared = require_shared();
    var NATIVE_SYMBOL_REGISTRY = require_symbol_registry_detection();
    var SymbolToStringRegistry = shared("symbol-to-string-registry");
    $17({ target: "Symbol", stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
      keyFor: function keyFor(sym) {
        if (!isSymbol2(sym))
          throw TypeError(tryToString(sym) + " is not a symbol");
        if (hasOwn4(SymbolToStringRegistry, sym))
          return SymbolToStringRegistry[sym];
      }
    });
  }
});

// node_modules/core-js/internals/array-slice.js
var require_array_slice = __commonJS({
  "node_modules/core-js/internals/array-slice.js"(exports, module) {
    var uncurryThis7 = require_function_uncurry_this();
    module.exports = uncurryThis7([].slice);
  }
});

// node_modules/core-js/modules/es.json.stringify.js
var require_es_json_stringify = __commonJS({
  "node_modules/core-js/modules/es.json.stringify.js"() {
    var $17 = require_export();
    var getBuiltIn = require_get_built_in();
    var apply2 = require_function_apply();
    var call3 = require_function_call();
    var uncurryThis7 = require_function_uncurry_this();
    var fails9 = require_fails();
    var isArray3 = require_is_array();
    var isCallable3 = require_is_callable();
    var isObject6 = require_is_object();
    var isSymbol2 = require_is_symbol();
    var arraySlice2 = require_array_slice();
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    var $stringify = getBuiltIn("JSON", "stringify");
    var exec = uncurryThis7(/./.exec);
    var charAt2 = uncurryThis7("".charAt);
    var charCodeAt2 = uncurryThis7("".charCodeAt);
    var replace = uncurryThis7("".replace);
    var numberToString = uncurryThis7(1 .toString);
    var tester = /[\uD800-\uDFFF]/g;
    var low = /^[\uD800-\uDBFF]$/;
    var hi = /^[\uDC00-\uDFFF]$/;
    var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails9(function() {
      var symbol = getBuiltIn("Symbol")();
      return $stringify([symbol]) != "[null]" || $stringify({ a: symbol }) != "{}" || $stringify(Object(symbol)) != "{}";
    });
    var ILL_FORMED_UNICODE = fails9(function() {
      return $stringify("\uDF06\uD834") !== '"\\udf06\\ud834"' || $stringify("\uDEAD") !== '"\\udead"';
    });
    var stringifyWithSymbolsFix = function(it, replacer) {
      var args = arraySlice2(arguments);
      var $replacer = replacer;
      if (!isObject6(replacer) && it === void 0 || isSymbol2(it))
        return;
      if (!isArray3(replacer))
        replacer = function(key, value) {
          if (isCallable3($replacer))
            value = call3($replacer, this, key, value);
          if (!isSymbol2(value))
            return value;
        };
      args[1] = replacer;
      return apply2($stringify, null, args);
    };
    var fixIllFormed = function(match, offset, string) {
      var prev = charAt2(string, offset - 1);
      var next2 = charAt2(string, offset + 1);
      if (exec(low, match) && !exec(hi, next2) || exec(hi, match) && !exec(low, prev)) {
        return "\\u" + numberToString(charCodeAt2(match, 0), 16);
      }
      return match;
    };
    if ($stringify) {
      $17({ target: "JSON", stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
        stringify: function stringify(it, replacer, space) {
          var args = arraySlice2(arguments);
          var result = apply2(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
          return ILL_FORMED_UNICODE && typeof result == "string" ? replace(result, tester, fixIllFormed) : result;
        }
      });
    }
  }
});

// node_modules/core-js/modules/es.object.get-own-property-symbols.js
var require_es_object_get_own_property_symbols = __commonJS({
  "node_modules/core-js/modules/es.object.get-own-property-symbols.js"() {
    var $17 = require_export();
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    var fails9 = require_fails();
    var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
    var toObject4 = require_to_object();
    var FORCED3 = !NATIVE_SYMBOL || fails9(function() {
      getOwnPropertySymbolsModule.f(1);
    });
    $17({ target: "Object", stat: true, forced: FORCED3 }, {
      getOwnPropertySymbols: function getOwnPropertySymbols(it) {
        var $getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
        return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject4(it)) : [];
      }
    });
  }
});

// node_modules/core-js/internals/date-to-primitive.js
var require_date_to_primitive = __commonJS({
  "node_modules/core-js/internals/date-to-primitive.js"(exports, module) {
    "use strict";
    var anObject4 = require_an_object();
    var ordinaryToPrimitive = require_ordinary_to_primitive();
    var $TypeError = TypeError;
    module.exports = function(hint) {
      anObject4(this);
      if (hint === "string" || hint === "default")
        hint = "string";
      else if (hint !== "number")
        throw $TypeError("Incorrect hint");
      return ordinaryToPrimitive(this, hint);
    };
  }
});

// node_modules/core-js/internals/this-number-value.js
var require_this_number_value = __commonJS({
  "node_modules/core-js/internals/this-number-value.js"(exports, module) {
    var uncurryThis7 = require_function_uncurry_this();
    module.exports = uncurryThis7(1 .valueOf);
  }
});

// node_modules/core-js/internals/whitespaces.js
var require_whitespaces = __commonJS({
  "node_modules/core-js/internals/whitespaces.js"(exports, module) {
    module.exports = "	\n\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
  }
});

// node_modules/core-js/internals/string-trim.js
var require_string_trim = __commonJS({
  "node_modules/core-js/internals/string-trim.js"(exports, module) {
    var uncurryThis7 = require_function_uncurry_this();
    var requireObjectCoercible4 = require_require_object_coercible();
    var toString8 = require_to_string();
    var whitespaces = require_whitespaces();
    var replace = uncurryThis7("".replace);
    var whitespace = "[" + whitespaces + "]";
    var ltrim = RegExp("^" + whitespace + whitespace + "*");
    var rtrim = RegExp(whitespace + whitespace + "*$");
    var createMethod = function(TYPE) {
      return function($this) {
        var string = toString8(requireObjectCoercible4($this));
        if (TYPE & 1)
          string = replace(string, ltrim, "");
        if (TYPE & 2)
          string = replace(string, rtrim, "");
        return string;
      };
    };
    module.exports = {
      start: createMethod(1),
      end: createMethod(2),
      trim: createMethod(3)
    };
  }
});

// node_modules/core-js/modules/es.map.constructor.js
var require_es_map_constructor = __commonJS({
  "node_modules/core-js/modules/es.map.constructor.js"() {
    "use strict";
    var collection = require_collection();
    var collectionStrong = require_collection_strong();
    collection("Map", function(init) {
      return function Map2() {
        return init(this, arguments.length ? arguments[0] : void 0);
      };
    }, collectionStrong);
  }
});

// node_modules/core-js/internals/call-with-safe-iteration-closing.js
var require_call_with_safe_iteration_closing = __commonJS({
  "node_modules/core-js/internals/call-with-safe-iteration-closing.js"(exports, module) {
    var anObject4 = require_an_object();
    var iteratorClose = require_iterator_close();
    module.exports = function(iterator, fn, value, ENTRIES) {
      try {
        return ENTRIES ? fn(anObject4(value)[0], value[1]) : fn(value);
      } catch (error2) {
        iteratorClose(iterator, "throw", error2);
      }
    };
  }
});

// node_modules/core-js/internals/array-from.js
var require_array_from = __commonJS({
  "node_modules/core-js/internals/array-from.js"(exports, module) {
    "use strict";
    var bind = require_function_bind_context();
    var call3 = require_function_call();
    var toObject4 = require_to_object();
    var callWithSafeIterationClosing = require_call_with_safe_iteration_closing();
    var isArrayIteratorMethod = require_is_array_iterator_method();
    var isConstructor2 = require_is_constructor();
    var lengthOfArrayLike4 = require_length_of_array_like();
    var createProperty3 = require_create_property();
    var getIterator = require_get_iterator();
    var getIteratorMethod = require_get_iterator_method();
    var $Array2 = Array;
    module.exports = function from2(arrayLike) {
      var O = toObject4(arrayLike);
      var IS_CONSTRUCTOR = isConstructor2(this);
      var argumentsLength = arguments.length;
      var mapfn = argumentsLength > 1 ? arguments[1] : void 0;
      var mapping = mapfn !== void 0;
      if (mapping)
        mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : void 0);
      var iteratorMethod = getIteratorMethod(O);
      var index = 0;
      var length, result, step, iterator, next2, value;
      if (iteratorMethod && !(this === $Array2 && isArrayIteratorMethod(iteratorMethod))) {
        iterator = getIterator(O, iteratorMethod);
        next2 = iterator.next;
        result = IS_CONSTRUCTOR ? new this() : [];
        for (; !(step = call3(next2, iterator)).done; index++) {
          value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
          createProperty3(result, index, value);
        }
      } else {
        length = lengthOfArrayLike4(O);
        result = IS_CONSTRUCTOR ? new this(length) : $Array2(length);
        for (; length > index; index++) {
          value = mapping ? mapfn(O[index], index) : O[index];
          createProperty3(result, index, value);
        }
      }
      result.length = index;
      return result;
    };
  }
});

// node_modules/core-js/internals/object-assign.js
var require_object_assign = __commonJS({
  "node_modules/core-js/internals/object-assign.js"(exports, module) {
    "use strict";
    var DESCRIPTORS4 = require_descriptors();
    var uncurryThis7 = require_function_uncurry_this();
    var call3 = require_function_call();
    var fails9 = require_fails();
    var objectKeys = require_object_keys();
    var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
    var propertyIsEnumerableModule = require_object_property_is_enumerable();
    var toObject4 = require_to_object();
    var IndexedObject = require_indexed_object();
    var $assign = Object.assign;
    var defineProperty4 = Object.defineProperty;
    var concat3 = uncurryThis7([].concat);
    module.exports = !$assign || fails9(function() {
      if (DESCRIPTORS4 && $assign({ b: 1 }, $assign(defineProperty4({}, "a", {
        enumerable: true,
        get: function() {
          defineProperty4(this, "b", {
            value: 3,
            enumerable: false
          });
        }
      }), { b: 2 })).b !== 1)
        return true;
      var A = {};
      var B = {};
      var symbol = Symbol();
      var alphabet = "abcdefghijklmnopqrst";
      A[symbol] = 7;
      alphabet.split("").forEach(function(chr) {
        B[chr] = chr;
      });
      return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join("") != alphabet;
    }) ? function assign2(target, source) {
      var T = toObject4(target);
      var argumentsLength = arguments.length;
      var index = 1;
      var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
      var propertyIsEnumerable = propertyIsEnumerableModule.f;
      while (argumentsLength > index) {
        var S = IndexedObject(arguments[index++]);
        var keys2 = getOwnPropertySymbols ? concat3(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
        var length = keys2.length;
        var j = 0;
        var key;
        while (length > j) {
          key = keys2[j++];
          if (!DESCRIPTORS4 || call3(propertyIsEnumerable, S, key))
            T[key] = S[key];
        }
      }
      return T;
    } : $assign;
  }
});

// node_modules/core-js/internals/object-to-array.js
var require_object_to_array = __commonJS({
  "node_modules/core-js/internals/object-to-array.js"(exports, module) {
    var DESCRIPTORS4 = require_descriptors();
    var uncurryThis7 = require_function_uncurry_this();
    var objectKeys = require_object_keys();
    var toIndexedObject2 = require_to_indexed_object();
    var $propertyIsEnumerable = require_object_property_is_enumerable().f;
    var propertyIsEnumerable = uncurryThis7($propertyIsEnumerable);
    var push3 = uncurryThis7([].push);
    var createMethod = function(TO_ENTRIES) {
      return function(it) {
        var O = toIndexedObject2(it);
        var keys2 = objectKeys(O);
        var length = keys2.length;
        var i = 0;
        var result = [];
        var key;
        while (length > i) {
          key = keys2[i++];
          if (!DESCRIPTORS4 || propertyIsEnumerable(O, key)) {
            push3(result, TO_ENTRIES ? [key, O[key]] : O[key]);
          }
        }
        return result;
      };
    };
    module.exports = {
      entries: createMethod(true),
      values: createMethod(false)
    };
  }
});

// node_modules/core-js/internals/array-method-is-strict.js
var require_array_method_is_strict = __commonJS({
  "node_modules/core-js/internals/array-method-is-strict.js"(exports, module) {
    "use strict";
    var fails9 = require_fails();
    module.exports = function(METHOD_NAME, argument) {
      var method = [][METHOD_NAME];
      return !!method && fails9(function() {
        method.call(null, argument || function() {
          return 1;
        }, 1);
      });
    };
  }
});

// node_modules/core-js/internals/array-for-each.js
var require_array_for_each = __commonJS({
  "node_modules/core-js/internals/array-for-each.js"(exports, module) {
    "use strict";
    var $forEach = require_array_iteration().forEach;
    var arrayMethodIsStrict2 = require_array_method_is_strict();
    var STRICT_METHOD2 = arrayMethodIsStrict2("forEach");
    module.exports = !STRICT_METHOD2 ? function forEach2(callbackfn) {
      return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
    } : [].forEach;
  }
});

// node_modules/core-js/internals/engine-is-node.js
var require_engine_is_node = __commonJS({
  "node_modules/core-js/internals/engine-is-node.js"(exports, module) {
    var classof = require_classof_raw();
    var global9 = require_global();
    module.exports = classof(global9.process) == "process";
  }
});

// node_modules/core-js/internals/a-constructor.js
var require_a_constructor = __commonJS({
  "node_modules/core-js/internals/a-constructor.js"(exports, module) {
    var isConstructor2 = require_is_constructor();
    var tryToString = require_try_to_string();
    var $TypeError = TypeError;
    module.exports = function(argument) {
      if (isConstructor2(argument))
        return argument;
      throw $TypeError(tryToString(argument) + " is not a constructor");
    };
  }
});

// node_modules/core-js/internals/species-constructor.js
var require_species_constructor = __commonJS({
  "node_modules/core-js/internals/species-constructor.js"(exports, module) {
    var anObject4 = require_an_object();
    var aConstructor = require_a_constructor();
    var isNullOrUndefined3 = require_is_null_or_undefined();
    var wellKnownSymbol6 = require_well_known_symbol();
    var SPECIES2 = wellKnownSymbol6("species");
    module.exports = function(O, defaultConstructor) {
      var C = anObject4(O).constructor;
      var S;
      return C === void 0 || isNullOrUndefined3(S = anObject4(C)[SPECIES2]) ? defaultConstructor : aConstructor(S);
    };
  }
});

// node_modules/core-js/internals/validate-arguments-length.js
var require_validate_arguments_length = __commonJS({
  "node_modules/core-js/internals/validate-arguments-length.js"(exports, module) {
    var $TypeError = TypeError;
    module.exports = function(passed, required) {
      if (passed < required)
        throw $TypeError("Not enough arguments");
      return passed;
    };
  }
});

// node_modules/core-js/internals/engine-is-ios.js
var require_engine_is_ios = __commonJS({
  "node_modules/core-js/internals/engine-is-ios.js"(exports, module) {
    var userAgent = require_engine_user_agent();
    module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);
  }
});

// node_modules/core-js/internals/task.js
var require_task = __commonJS({
  "node_modules/core-js/internals/task.js"(exports, module) {
    var global9 = require_global();
    var apply2 = require_function_apply();
    var bind = require_function_bind_context();
    var isCallable3 = require_is_callable();
    var hasOwn4 = require_has_own_property();
    var fails9 = require_fails();
    var html = require_html();
    var arraySlice2 = require_array_slice();
    var createElement = require_document_create_element();
    var validateArgumentsLength = require_validate_arguments_length();
    var IS_IOS = require_engine_is_ios();
    var IS_NODE = require_engine_is_node();
    var set = global9.setImmediate;
    var clear = global9.clearImmediate;
    var process2 = global9.process;
    var Dispatch = global9.Dispatch;
    var Function2 = global9.Function;
    var MessageChannel = global9.MessageChannel;
    var String2 = global9.String;
    var counter = 0;
    var queue = {};
    var ONREADYSTATECHANGE = "onreadystatechange";
    var $location;
    var defer;
    var channel;
    var port;
    try {
      $location = global9.location;
    } catch (error2) {
    }
    var run = function(id) {
      if (hasOwn4(queue, id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
      }
    };
    var runner = function(id) {
      return function() {
        run(id);
      };
    };
    var listener = function(event) {
      run(event.data);
    };
    var post = function(id) {
      global9.postMessage(String2(id), $location.protocol + "//" + $location.host);
    };
    if (!set || !clear) {
      set = function setImmediate2(handler) {
        validateArgumentsLength(arguments.length, 1);
        var fn = isCallable3(handler) ? handler : Function2(handler);
        var args = arraySlice2(arguments, 1);
        queue[++counter] = function() {
          apply2(fn, void 0, args);
        };
        defer(counter);
        return counter;
      };
      clear = function clearImmediate(id) {
        delete queue[id];
      };
      if (IS_NODE) {
        defer = function(id) {
          process2.nextTick(runner(id));
        };
      } else if (Dispatch && Dispatch.now) {
        defer = function(id) {
          Dispatch.now(runner(id));
        };
      } else if (MessageChannel && !IS_IOS) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = listener;
        defer = bind(port.postMessage, port);
      } else if (global9.addEventListener && isCallable3(global9.postMessage) && !global9.importScripts && $location && $location.protocol !== "file:" && !fails9(post)) {
        defer = post;
        global9.addEventListener("message", listener, false);
      } else if (ONREADYSTATECHANGE in createElement("script")) {
        defer = function(id) {
          html.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run(id);
          };
        };
      } else {
        defer = function(id) {
          setTimeout(runner(id), 0);
        };
      }
    }
    module.exports = {
      set,
      clear
    };
  }
});

// node_modules/core-js/internals/engine-is-ios-pebble.js
var require_engine_is_ios_pebble = __commonJS({
  "node_modules/core-js/internals/engine-is-ios-pebble.js"(exports, module) {
    var userAgent = require_engine_user_agent();
    var global9 = require_global();
    module.exports = /ipad|iphone|ipod/i.test(userAgent) && global9.Pebble !== void 0;
  }
});

// node_modules/core-js/internals/engine-is-webos-webkit.js
var require_engine_is_webos_webkit = __commonJS({
  "node_modules/core-js/internals/engine-is-webos-webkit.js"(exports, module) {
    var userAgent = require_engine_user_agent();
    module.exports = /web0s(?!.*chrome)/i.test(userAgent);
  }
});

// node_modules/core-js/internals/microtask.js
var require_microtask = __commonJS({
  "node_modules/core-js/internals/microtask.js"(exports, module) {
    var global9 = require_global();
    var bind = require_function_bind_context();
    var getOwnPropertyDescriptor2 = require_object_get_own_property_descriptor().f;
    var macrotask = require_task().set;
    var IS_IOS = require_engine_is_ios();
    var IS_IOS_PEBBLE = require_engine_is_ios_pebble();
    var IS_WEBOS_WEBKIT = require_engine_is_webos_webkit();
    var IS_NODE = require_engine_is_node();
    var MutationObserver = global9.MutationObserver || global9.WebKitMutationObserver;
    var document2 = global9.document;
    var process2 = global9.process;
    var Promise2 = global9.Promise;
    var queueMicrotaskDescriptor = getOwnPropertyDescriptor2(global9, "queueMicrotask");
    var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
    var flush;
    var head;
    var last;
    var notify;
    var toggle;
    var node;
    var promise;
    var then;
    if (!queueMicrotask) {
      flush = function() {
        var parent, fn;
        if (IS_NODE && (parent = process2.domain))
          parent.exit();
        while (head) {
          fn = head.fn;
          head = head.next;
          try {
            fn();
          } catch (error2) {
            if (head)
              notify();
            else
              last = void 0;
            throw error2;
          }
        }
        last = void 0;
        if (parent)
          parent.enter();
      };
      if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document2) {
        toggle = true;
        node = document2.createTextNode("");
        new MutationObserver(flush).observe(node, { characterData: true });
        notify = function() {
          node.data = toggle = !toggle;
        };
      } else if (!IS_IOS_PEBBLE && Promise2 && Promise2.resolve) {
        promise = Promise2.resolve(void 0);
        promise.constructor = Promise2;
        then = bind(promise.then, promise);
        notify = function() {
          then(flush);
        };
      } else if (IS_NODE) {
        notify = function() {
          process2.nextTick(flush);
        };
      } else {
        macrotask = bind(macrotask, global9);
        notify = function() {
          macrotask(flush);
        };
      }
    }
    module.exports = queueMicrotask || function(fn) {
      var task = { fn, next: void 0 };
      if (last)
        last.next = task;
      if (!head) {
        head = task;
        notify();
      }
      last = task;
    };
  }
});

// node_modules/core-js/internals/host-report-errors.js
var require_host_report_errors = __commonJS({
  "node_modules/core-js/internals/host-report-errors.js"(exports, module) {
    var global9 = require_global();
    module.exports = function(a, b) {
      var console3 = global9.console;
      if (console3 && console3.error) {
        arguments.length == 1 ? console3.error(a) : console3.error(a, b);
      }
    };
  }
});

// node_modules/core-js/internals/perform.js
var require_perform = __commonJS({
  "node_modules/core-js/internals/perform.js"(exports, module) {
    module.exports = function(exec) {
      try {
        return { error: false, value: exec() };
      } catch (error2) {
        return { error: true, value: error2 };
      }
    };
  }
});

// node_modules/core-js/internals/queue.js
var require_queue = __commonJS({
  "node_modules/core-js/internals/queue.js"(exports, module) {
    var Queue = function() {
      this.head = null;
      this.tail = null;
    };
    Queue.prototype = {
      add: function(item) {
        var entry = { item, next: null };
        if (this.head)
          this.tail.next = entry;
        else
          this.head = entry;
        this.tail = entry;
      },
      get: function() {
        var entry = this.head;
        if (entry) {
          this.head = entry.next;
          if (this.tail === entry)
            this.tail = null;
          return entry.item;
        }
      }
    };
    module.exports = Queue;
  }
});

// node_modules/core-js/internals/promise-native-constructor.js
var require_promise_native_constructor = __commonJS({
  "node_modules/core-js/internals/promise-native-constructor.js"(exports, module) {
    var global9 = require_global();
    module.exports = global9.Promise;
  }
});

// node_modules/core-js/internals/engine-is-deno.js
var require_engine_is_deno = __commonJS({
  "node_modules/core-js/internals/engine-is-deno.js"(exports, module) {
    module.exports = typeof Deno == "object" && Deno && typeof Deno.version == "object";
  }
});

// node_modules/core-js/internals/engine-is-browser.js
var require_engine_is_browser = __commonJS({
  "node_modules/core-js/internals/engine-is-browser.js"(exports, module) {
    var IS_DENO = require_engine_is_deno();
    var IS_NODE = require_engine_is_node();
    module.exports = !IS_DENO && !IS_NODE && typeof window == "object" && typeof document == "object";
  }
});

// node_modules/core-js/internals/promise-constructor-detection.js
var require_promise_constructor_detection = __commonJS({
  "node_modules/core-js/internals/promise-constructor-detection.js"(exports, module) {
    var global9 = require_global();
    var NativePromiseConstructor = require_promise_native_constructor();
    var isCallable3 = require_is_callable();
    var isForced2 = require_is_forced();
    var inspectSource = require_inspect_source();
    var wellKnownSymbol6 = require_well_known_symbol();
    var IS_BROWSER = require_engine_is_browser();
    var IS_DENO = require_engine_is_deno();
    var IS_PURE = require_is_pure();
    var V8_VERSION2 = require_engine_v8_version();
    var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
    var SPECIES2 = wellKnownSymbol6("species");
    var SUBCLASSING = false;
    var NATIVE_PROMISE_REJECTION_EVENT = isCallable3(global9.PromiseRejectionEvent);
    var FORCED_PROMISE_CONSTRUCTOR = isForced2("Promise", function() {
      var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor);
      var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor);
      if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION2 === 66)
        return true;
      if (IS_PURE && !(NativePromisePrototype["catch"] && NativePromisePrototype["finally"]))
        return true;
      if (!V8_VERSION2 || V8_VERSION2 < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
        var promise = new NativePromiseConstructor(function(resolve) {
          resolve(1);
        });
        var FakePromise = function(exec) {
          exec(function() {
          }, function() {
          });
        };
        var constructor = promise.constructor = {};
        constructor[SPECIES2] = FakePromise;
        SUBCLASSING = promise.then(function() {
        }) instanceof FakePromise;
        if (!SUBCLASSING)
          return true;
      }
      return !GLOBAL_CORE_JS_PROMISE && (IS_BROWSER || IS_DENO) && !NATIVE_PROMISE_REJECTION_EVENT;
    });
    module.exports = {
      CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR,
      REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT,
      SUBCLASSING
    };
  }
});

// node_modules/core-js/internals/new-promise-capability.js
var require_new_promise_capability = __commonJS({
  "node_modules/core-js/internals/new-promise-capability.js"(exports, module) {
    "use strict";
    var aCallable2 = require_a_callable();
    var $TypeError = TypeError;
    var PromiseCapability = function(C) {
      var resolve, reject;
      this.promise = new C(function($$resolve, $$reject) {
        if (resolve !== void 0 || reject !== void 0)
          throw $TypeError("Bad Promise constructor");
        resolve = $$resolve;
        reject = $$reject;
      });
      this.resolve = aCallable2(resolve);
      this.reject = aCallable2(reject);
    };
    module.exports.f = function(C) {
      return new PromiseCapability(C);
    };
  }
});

// node_modules/core-js/modules/es.promise.constructor.js
var require_es_promise_constructor = __commonJS({
  "node_modules/core-js/modules/es.promise.constructor.js"() {
    "use strict";
    var $17 = require_export();
    var IS_PURE = require_is_pure();
    var IS_NODE = require_engine_is_node();
    var global9 = require_global();
    var call3 = require_function_call();
    var defineBuiltIn5 = require_define_built_in();
    var setPrototypeOf = require_object_set_prototype_of();
    var setToStringTag = require_set_to_string_tag();
    var setSpecies = require_set_species();
    var aCallable2 = require_a_callable();
    var isCallable3 = require_is_callable();
    var isObject6 = require_is_object();
    var anInstance = require_an_instance();
    var speciesConstructor = require_species_constructor();
    var task = require_task().set;
    var microtask = require_microtask();
    var hostReportErrors = require_host_report_errors();
    var perform = require_perform();
    var Queue = require_queue();
    var InternalStateModule2 = require_internal_state();
    var NativePromiseConstructor = require_promise_native_constructor();
    var PromiseConstructorDetection = require_promise_constructor_detection();
    var newPromiseCapabilityModule = require_new_promise_capability();
    var PROMISE = "Promise";
    var FORCED_PROMISE_CONSTRUCTOR = PromiseConstructorDetection.CONSTRUCTOR;
    var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
    var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
    var getInternalPromiseState = InternalStateModule2.getterFor(PROMISE);
    var setInternalState2 = InternalStateModule2.set;
    var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
    var PromiseConstructor = NativePromiseConstructor;
    var PromisePrototype = NativePromisePrototype;
    var TypeError3 = global9.TypeError;
    var document2 = global9.document;
    var process2 = global9.process;
    var newPromiseCapability = newPromiseCapabilityModule.f;
    var newGenericPromiseCapability = newPromiseCapability;
    var DISPATCH_EVENT = !!(document2 && document2.createEvent && global9.dispatchEvent);
    var UNHANDLED_REJECTION = "unhandledrejection";
    var REJECTION_HANDLED = "rejectionhandled";
    var PENDING = 0;
    var FULFILLED = 1;
    var REJECTED = 2;
    var HANDLED = 1;
    var UNHANDLED = 2;
    var Internal;
    var OwnPromiseCapability;
    var PromiseWrapper;
    var nativeThen;
    var isThenable = function(it) {
      var then;
      return isObject6(it) && isCallable3(then = it.then) ? then : false;
    };
    var callReaction = function(reaction, state) {
      var value = state.value;
      var ok = state.state == FULFILLED;
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED)
              onHandleUnhandled(state);
            state.rejection = HANDLED;
          }
          if (handler === true)
            result = value;
          else {
            if (domain)
              domain.enter();
            result = handler(value);
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError3("Promise-chain cycle"));
          } else if (then = isThenable(result)) {
            call3(then, result, resolve, reject);
          } else
            resolve(result);
        } else
          reject(value);
      } catch (error2) {
        if (domain && !exited)
          domain.exit();
        reject(error2);
      }
    };
    var notify = function(state, isReject) {
      if (state.notified)
        return;
      state.notified = true;
      microtask(function() {
        var reactions = state.reactions;
        var reaction;
        while (reaction = reactions.get()) {
          callReaction(reaction, state);
        }
        state.notified = false;
        if (isReject && !state.rejection)
          onUnhandled(state);
      });
    };
    var dispatchEvent = function(name, promise, reason) {
      var event, handler;
      if (DISPATCH_EVENT) {
        event = document2.createEvent("Event");
        event.promise = promise;
        event.reason = reason;
        event.initEvent(name, false, true);
        global9.dispatchEvent(event);
      } else
        event = { promise, reason };
      if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global9["on" + name]))
        handler(event);
      else if (name === UNHANDLED_REJECTION)
        hostReportErrors("Unhandled promise rejection", reason);
    };
    var onUnhandled = function(state) {
      call3(task, global9, function() {
        var promise = state.facade;
        var value = state.value;
        var IS_UNHANDLED = isUnhandled(state);
        var result;
        if (IS_UNHANDLED) {
          result = perform(function() {
            if (IS_NODE) {
              process2.emit("unhandledRejection", value, promise);
            } else
              dispatchEvent(UNHANDLED_REJECTION, promise, value);
          });
          state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
          if (result.error)
            throw result.value;
        }
      });
    };
    var isUnhandled = function(state) {
      return state.rejection !== HANDLED && !state.parent;
    };
    var onHandleUnhandled = function(state) {
      call3(task, global9, function() {
        var promise = state.facade;
        if (IS_NODE) {
          process2.emit("rejectionHandled", promise);
        } else
          dispatchEvent(REJECTION_HANDLED, promise, state.value);
      });
    };
    var bind = function(fn, state, unwrap) {
      return function(value) {
        fn(state, value, unwrap);
      };
    };
    var internalReject = function(state, value, unwrap) {
      if (state.done)
        return;
      state.done = true;
      if (unwrap)
        state = unwrap;
      state.value = value;
      state.state = REJECTED;
      notify(state, true);
    };
    var internalResolve = function(state, value, unwrap) {
      if (state.done)
        return;
      state.done = true;
      if (unwrap)
        state = unwrap;
      try {
        if (state.facade === value)
          throw TypeError3("Promise can't be resolved itself");
        var then = isThenable(value);
        if (then) {
          microtask(function() {
            var wrapper = { done: false };
            try {
              call3(then, value, bind(internalResolve, wrapper, state), bind(internalReject, wrapper, state));
            } catch (error2) {
              internalReject(wrapper, error2, state);
            }
          });
        } else {
          state.value = value;
          state.state = FULFILLED;
          notify(state, false);
        }
      } catch (error2) {
        internalReject({ done: false }, error2, state);
      }
    };
    if (FORCED_PROMISE_CONSTRUCTOR) {
      PromiseConstructor = function Promise2(executor) {
        anInstance(this, PromisePrototype);
        aCallable2(executor);
        call3(Internal, this);
        var state = getInternalPromiseState(this);
        try {
          executor(bind(internalResolve, state), bind(internalReject, state));
        } catch (error2) {
          internalReject(state, error2);
        }
      };
      PromisePrototype = PromiseConstructor.prototype;
      Internal = function Promise2(executor) {
        setInternalState2(this, {
          type: PROMISE,
          done: false,
          notified: false,
          parent: false,
          reactions: new Queue(),
          rejection: false,
          state: PENDING,
          value: void 0
        });
      };
      Internal.prototype = defineBuiltIn5(PromisePrototype, "then", function then(onFulfilled, onRejected) {
        var state = getInternalPromiseState(this);
        var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
        state.parent = true;
        reaction.ok = isCallable3(onFulfilled) ? onFulfilled : true;
        reaction.fail = isCallable3(onRejected) && onRejected;
        reaction.domain = IS_NODE ? process2.domain : void 0;
        if (state.state == PENDING)
          state.reactions.add(reaction);
        else
          microtask(function() {
            callReaction(reaction, state);
          });
        return reaction.promise;
      });
      OwnPromiseCapability = function() {
        var promise = new Internal();
        var state = getInternalPromiseState(promise);
        this.promise = promise;
        this.resolve = bind(internalResolve, state);
        this.reject = bind(internalReject, state);
      };
      newPromiseCapabilityModule.f = newPromiseCapability = function(C) {
        return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
      };
      if (!IS_PURE && isCallable3(NativePromiseConstructor) && NativePromisePrototype !== Object.prototype) {
        nativeThen = NativePromisePrototype.then;
        if (!NATIVE_PROMISE_SUBCLASSING) {
          defineBuiltIn5(NativePromisePrototype, "then", function then(onFulfilled, onRejected) {
            var that = this;
            return new PromiseConstructor(function(resolve, reject) {
              call3(nativeThen, that, resolve, reject);
            }).then(onFulfilled, onRejected);
          }, { unsafe: true });
        }
        try {
          delete NativePromisePrototype.constructor;
        } catch (error2) {
        }
        if (setPrototypeOf) {
          setPrototypeOf(NativePromisePrototype, PromisePrototype);
        }
      }
    }
    $17({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
      Promise: PromiseConstructor
    });
    setToStringTag(PromiseConstructor, PROMISE, false, true);
    setSpecies(PROMISE);
  }
});

// node_modules/core-js/internals/promise-statics-incorrect-iteration.js
var require_promise_statics_incorrect_iteration = __commonJS({
  "node_modules/core-js/internals/promise-statics-incorrect-iteration.js"(exports, module) {
    var NativePromiseConstructor = require_promise_native_constructor();
    var checkCorrectnessOfIteration2 = require_check_correctness_of_iteration();
    var FORCED_PROMISE_CONSTRUCTOR = require_promise_constructor_detection().CONSTRUCTOR;
    module.exports = FORCED_PROMISE_CONSTRUCTOR || !checkCorrectnessOfIteration2(function(iterable) {
      NativePromiseConstructor.all(iterable).then(void 0, function() {
      });
    });
  }
});

// node_modules/core-js/modules/es.promise.all.js
var require_es_promise_all = __commonJS({
  "node_modules/core-js/modules/es.promise.all.js"() {
    "use strict";
    var $17 = require_export();
    var call3 = require_function_call();
    var aCallable2 = require_a_callable();
    var newPromiseCapabilityModule = require_new_promise_capability();
    var perform = require_perform();
    var iterate = require_iterate();
    var PROMISE_STATICS_INCORRECT_ITERATION = require_promise_statics_incorrect_iteration();
    $17({ target: "Promise", stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
      all: function all(iterable) {
        var C = this;
        var capability = newPromiseCapabilityModule.f(C);
        var resolve = capability.resolve;
        var reject = capability.reject;
        var result = perform(function() {
          var $promiseResolve = aCallable2(C.resolve);
          var values2 = [];
          var counter = 0;
          var remaining = 1;
          iterate(iterable, function(promise) {
            var index = counter++;
            var alreadyCalled = false;
            remaining++;
            call3($promiseResolve, C, promise).then(function(value) {
              if (alreadyCalled)
                return;
              alreadyCalled = true;
              values2[index] = value;
              --remaining || resolve(values2);
            }, reject);
          });
          --remaining || resolve(values2);
        });
        if (result.error)
          reject(result.value);
        return capability.promise;
      }
    });
  }
});

// node_modules/core-js/modules/es.promise.catch.js
var require_es_promise_catch = __commonJS({
  "node_modules/core-js/modules/es.promise.catch.js"() {
    "use strict";
    var $17 = require_export();
    var IS_PURE = require_is_pure();
    var FORCED_PROMISE_CONSTRUCTOR = require_promise_constructor_detection().CONSTRUCTOR;
    var NativePromiseConstructor = require_promise_native_constructor();
    var getBuiltIn = require_get_built_in();
    var isCallable3 = require_is_callable();
    var defineBuiltIn5 = require_define_built_in();
    var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
    $17({ target: "Promise", proto: true, forced: FORCED_PROMISE_CONSTRUCTOR, real: true }, {
      "catch": function(onRejected) {
        return this.then(void 0, onRejected);
      }
    });
    if (!IS_PURE && isCallable3(NativePromiseConstructor)) {
      method = getBuiltIn("Promise").prototype["catch"];
      if (NativePromisePrototype["catch"] !== method) {
        defineBuiltIn5(NativePromisePrototype, "catch", method, { unsafe: true });
      }
    }
    var method;
  }
});

// node_modules/core-js/modules/es.promise.race.js
var require_es_promise_race = __commonJS({
  "node_modules/core-js/modules/es.promise.race.js"() {
    "use strict";
    var $17 = require_export();
    var call3 = require_function_call();
    var aCallable2 = require_a_callable();
    var newPromiseCapabilityModule = require_new_promise_capability();
    var perform = require_perform();
    var iterate = require_iterate();
    var PROMISE_STATICS_INCORRECT_ITERATION = require_promise_statics_incorrect_iteration();
    $17({ target: "Promise", stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
      race: function race(iterable) {
        var C = this;
        var capability = newPromiseCapabilityModule.f(C);
        var reject = capability.reject;
        var result = perform(function() {
          var $promiseResolve = aCallable2(C.resolve);
          iterate(iterable, function(promise) {
            call3($promiseResolve, C, promise).then(capability.resolve, reject);
          });
        });
        if (result.error)
          reject(result.value);
        return capability.promise;
      }
    });
  }
});

// node_modules/core-js/modules/es.promise.reject.js
var require_es_promise_reject = __commonJS({
  "node_modules/core-js/modules/es.promise.reject.js"() {
    "use strict";
    var $17 = require_export();
    var call3 = require_function_call();
    var newPromiseCapabilityModule = require_new_promise_capability();
    var FORCED_PROMISE_CONSTRUCTOR = require_promise_constructor_detection().CONSTRUCTOR;
    $17({ target: "Promise", stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
      reject: function reject(r) {
        var capability = newPromiseCapabilityModule.f(this);
        call3(capability.reject, void 0, r);
        return capability.promise;
      }
    });
  }
});

// node_modules/core-js/internals/promise-resolve.js
var require_promise_resolve = __commonJS({
  "node_modules/core-js/internals/promise-resolve.js"(exports, module) {
    var anObject4 = require_an_object();
    var isObject6 = require_is_object();
    var newPromiseCapability = require_new_promise_capability();
    module.exports = function(C, x) {
      anObject4(C);
      if (isObject6(x) && x.constructor === C)
        return x;
      var promiseCapability = newPromiseCapability.f(C);
      var resolve = promiseCapability.resolve;
      resolve(x);
      return promiseCapability.promise;
    };
  }
});

// node_modules/core-js/modules/es.promise.resolve.js
var require_es_promise_resolve = __commonJS({
  "node_modules/core-js/modules/es.promise.resolve.js"() {
    "use strict";
    var $17 = require_export();
    var getBuiltIn = require_get_built_in();
    var IS_PURE = require_is_pure();
    var NativePromiseConstructor = require_promise_native_constructor();
    var FORCED_PROMISE_CONSTRUCTOR = require_promise_constructor_detection().CONSTRUCTOR;
    var promiseResolve = require_promise_resolve();
    var PromiseConstructorWrapper = getBuiltIn("Promise");
    var CHECK_WRAPPER = IS_PURE && !FORCED_PROMISE_CONSTRUCTOR;
    $17({ target: "Promise", stat: true, forced: IS_PURE || FORCED_PROMISE_CONSTRUCTOR }, {
      resolve: function resolve(x) {
        return promiseResolve(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor : this, x);
      }
    });
  }
});

// node_modules/core-js/internals/delete-property-or-throw.js
var require_delete_property_or_throw = __commonJS({
  "node_modules/core-js/internals/delete-property-or-throw.js"(exports, module) {
    "use strict";
    var tryToString = require_try_to_string();
    var $TypeError = TypeError;
    module.exports = function(O, P) {
      if (!delete O[P])
        throw $TypeError("Cannot delete property " + tryToString(P) + " of " + tryToString(O));
    };
  }
});

// node_modules/core-js/internals/array-sort.js
var require_array_sort = __commonJS({
  "node_modules/core-js/internals/array-sort.js"(exports, module) {
    var arraySlice2 = require_array_slice_simple();
    var floor = Math.floor;
    var mergeSort = function(array, comparefn) {
      var length = array.length;
      var middle = floor(length / 2);
      return length < 8 ? insertionSort(array, comparefn) : merge(array, mergeSort(arraySlice2(array, 0, middle), comparefn), mergeSort(arraySlice2(array, middle), comparefn), comparefn);
    };
    var insertionSort = function(array, comparefn) {
      var length = array.length;
      var i = 1;
      var element, j;
      while (i < length) {
        j = i;
        element = array[i];
        while (j && comparefn(array[j - 1], element) > 0) {
          array[j] = array[--j];
        }
        if (j !== i++)
          array[j] = element;
      }
      return array;
    };
    var merge = function(array, left, right, comparefn) {
      var llength = left.length;
      var rlength = right.length;
      var lindex = 0;
      var rindex = 0;
      while (lindex < llength || rindex < rlength) {
        array[lindex + rindex] = lindex < llength && rindex < rlength ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++] : lindex < llength ? left[lindex++] : right[rindex++];
      }
      return array;
    };
    module.exports = mergeSort;
  }
});

// node_modules/core-js/internals/engine-ff-version.js
var require_engine_ff_version = __commonJS({
  "node_modules/core-js/internals/engine-ff-version.js"(exports, module) {
    var userAgent = require_engine_user_agent();
    var firefox = userAgent.match(/firefox\/(\d+)/i);
    module.exports = !!firefox && +firefox[1];
  }
});

// node_modules/core-js/internals/engine-is-ie-or-edge.js
var require_engine_is_ie_or_edge = __commonJS({
  "node_modules/core-js/internals/engine-is-ie-or-edge.js"(exports, module) {
    var UA = require_engine_user_agent();
    module.exports = /MSIE|Trident/.test(UA);
  }
});

// node_modules/core-js/internals/engine-webkit-version.js
var require_engine_webkit_version = __commonJS({
  "node_modules/core-js/internals/engine-webkit-version.js"(exports, module) {
    var userAgent = require_engine_user_agent();
    var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);
    module.exports = !!webkit && +webkit[1];
  }
});

// node_modules/core-js/internals/is-regexp.js
var require_is_regexp = __commonJS({
  "node_modules/core-js/internals/is-regexp.js"(exports, module) {
    var isObject6 = require_is_object();
    var classof = require_classof_raw();
    var wellKnownSymbol6 = require_well_known_symbol();
    var MATCH = wellKnownSymbol6("match");
    module.exports = function(it) {
      var isRegExp;
      return isObject6(it) && ((isRegExp = it[MATCH]) !== void 0 ? !!isRegExp : classof(it) == "RegExp");
    };
  }
});

// node_modules/core-js/internals/not-a-regexp.js
var require_not_a_regexp = __commonJS({
  "node_modules/core-js/internals/not-a-regexp.js"(exports, module) {
    var isRegExp = require_is_regexp();
    var $TypeError = TypeError;
    module.exports = function(it) {
      if (isRegExp(it)) {
        throw $TypeError("The method doesn't accept regular expressions");
      }
      return it;
    };
  }
});

// node_modules/core-js/internals/correct-is-regexp-logic.js
var require_correct_is_regexp_logic = __commonJS({
  "node_modules/core-js/internals/correct-is-regexp-logic.js"(exports, module) {
    var wellKnownSymbol6 = require_well_known_symbol();
    var MATCH = wellKnownSymbol6("match");
    module.exports = function(METHOD_NAME) {
      var regexp = /./;
      try {
        "/./"[METHOD_NAME](regexp);
      } catch (error1) {
        try {
          regexp[MATCH] = false;
          return "/./"[METHOD_NAME](regexp);
        } catch (error2) {
        }
      }
      return false;
    };
  }
});

// node_modules/core-js/internals/same-value.js
var require_same_value = __commonJS({
  "node_modules/core-js/internals/same-value.js"(exports, module) {
    module.exports = Object.is || function is(x, y) {
      return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
    };
  }
});

// node_modules/core-js/internals/regexp-get-flags.js
var require_regexp_get_flags = __commonJS({
  "node_modules/core-js/internals/regexp-get-flags.js"(exports, module) {
    var call3 = require_function_call();
    var hasOwn4 = require_has_own_property();
    var isPrototypeOf3 = require_object_is_prototype_of();
    var regExpFlags = require_regexp_flags();
    var RegExpPrototype2 = RegExp.prototype;
    module.exports = function(R) {
      var flags = R.flags;
      return flags === void 0 && !("flags" in RegExpPrototype2) && !hasOwn4(R, "flags") && isPrototypeOf3(RegExpPrototype2, R) ? call3(regExpFlags, R) : flags;
    };
  }
});

// node_modules/core-js/modules/web.clear-immediate.js
var require_web_clear_immediate = __commonJS({
  "node_modules/core-js/modules/web.clear-immediate.js"() {
    var $17 = require_export();
    var global9 = require_global();
    var clearImmediate = require_task().clear;
    $17({ global: true, bind: true, enumerable: true, forced: global9.clearImmediate !== clearImmediate }, {
      clearImmediate
    });
  }
});

// node_modules/core-js/modules/web.set-immediate.js
var require_web_set_immediate = __commonJS({
  "node_modules/core-js/modules/web.set-immediate.js"() {
    var $17 = require_export();
    var global9 = require_global();
    var setImmediate2 = require_task().set;
    $17({ global: true, bind: true, enumerable: true, forced: global9.setImmediate !== setImmediate2 }, {
      setImmediate: setImmediate2
    });
  }
});

// node_modules/util-deprecate/browser.js
var require_browser = __commonJS({
  "node_modules/util-deprecate/browser.js"(exports, module) {
    module.exports = deprecate2;
    function deprecate2(fn, msg) {
      if (config("noDeprecation")) {
        return fn;
      }
      var warned = false;
      function deprecated() {
        if (!warned) {
          if (config("throwDeprecation")) {
            throw new Error(msg);
          } else if (config("traceDeprecation")) {
            console.trace(msg);
          } else {
            console.warn(msg);
          }
          warned = true;
        }
        return fn.apply(this, arguments);
      }
      return deprecated;
    }
    function config(name) {
      try {
        if (!global.localStorage)
          return false;
      } catch (_) {
        return false;
      }
      var val = global.localStorage[name];
      if (val == null)
        return false;
      return String(val).toLowerCase() === "true";
    }
  }
});

// node_modules/@babel/runtime/helpers/interopRequireDefault.js
var require_interopRequireDefault = __commonJS({
  "node_modules/@babel/runtime/helpers/interopRequireDefault.js"(exports, module) {
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    }
    module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/pretty-format/node_modules/ansi-styles/index.js
var require_ansi_styles = __commonJS({
  "node_modules/pretty-format/node_modules/ansi-styles/index.js"(exports, module) {
    "use strict";
    var ANSI_BACKGROUND_OFFSET = 10;
    var wrapAnsi256 = (offset = 0) => (code) => `[${38 + offset};5;${code}m`;
    var wrapAnsi16m = (offset = 0) => (red, green, blue) => `[${38 + offset};2;${red};${green};${blue}m`;
    function assembleStyles() {
      const codes = new Map();
      const styles = {
        modifier: {
          reset: [0, 0],
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          overline: [53, 55],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29]
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          blackBright: [90, 39],
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39]
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          bgBlackBright: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49]
        }
      };
      styles.color.gray = styles.color.blackBright;
      styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
      styles.color.grey = styles.color.blackBright;
      styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;
      for (const [groupName, group] of Object.entries(styles)) {
        for (const [styleName, style] of Object.entries(group)) {
          styles[styleName] = {
            open: `[${style[0]}m`,
            close: `[${style[1]}m`
          };
          group[styleName] = styles[styleName];
          codes.set(style[0], style[1]);
        }
        Object.defineProperty(styles, groupName, {
          value: group,
          enumerable: false
        });
      }
      Object.defineProperty(styles, "codes", {
        value: codes,
        enumerable: false
      });
      styles.color.close = "[39m";
      styles.bgColor.close = "[49m";
      styles.color.ansi256 = wrapAnsi256();
      styles.color.ansi16m = wrapAnsi16m();
      styles.bgColor.ansi256 = wrapAnsi256(ANSI_BACKGROUND_OFFSET);
      styles.bgColor.ansi16m = wrapAnsi16m(ANSI_BACKGROUND_OFFSET);
      Object.defineProperties(styles, {
        rgbToAnsi256: {
          value: (red, green, blue) => {
            if (red === green && green === blue) {
              if (red < 8) {
                return 16;
              }
              if (red > 248) {
                return 231;
              }
              return Math.round((red - 8) / 247 * 24) + 232;
            }
            return 16 + 36 * Math.round(red / 255 * 5) + 6 * Math.round(green / 255 * 5) + Math.round(blue / 255 * 5);
          },
          enumerable: false
        },
        hexToRgb: {
          value: (hex) => {
            const matches = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(hex.toString(16));
            if (!matches) {
              return [0, 0, 0];
            }
            let { colorString } = matches.groups;
            if (colorString.length === 3) {
              colorString = colorString.split("").map((character) => character + character).join("");
            }
            const integer = Number.parseInt(colorString, 16);
            return [
              integer >> 16 & 255,
              integer >> 8 & 255,
              integer & 255
            ];
          },
          enumerable: false
        },
        hexToAnsi256: {
          value: (hex) => styles.rgbToAnsi256(...styles.hexToRgb(hex)),
          enumerable: false
        }
      });
      return styles;
    }
    Object.defineProperty(module, "exports", {
      enumerable: true,
      get: assembleStyles
    });
  }
});

// node_modules/pretty-format/build/collections.js
var require_collections = __commonJS({
  "node_modules/pretty-format/build/collections.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.printIteratorEntries = printIteratorEntries;
    exports.printIteratorValues = printIteratorValues;
    exports.printListItems = printListItems;
    exports.printObjectProperties = printObjectProperties;
    var getKeysOfEnumerableProperties = (object, compareKeys) => {
      const keys2 = Object.keys(object).sort(compareKeys);
      if (Object.getOwnPropertySymbols) {
        Object.getOwnPropertySymbols(object).forEach((symbol) => {
          if (Object.getOwnPropertyDescriptor(object, symbol).enumerable) {
            keys2.push(symbol);
          }
        });
      }
      return keys2;
    };
    function printIteratorEntries(iterator, config, indentation, depth, refs, printer, separator = ": ") {
      let result = "";
      let current = iterator.next();
      if (!current.done) {
        result += config.spacingOuter;
        const indentationNext = indentation + config.indent;
        while (!current.done) {
          const name = printer(current.value[0], config, indentationNext, depth, refs);
          const value = printer(current.value[1], config, indentationNext, depth, refs);
          result += indentationNext + name + separator + value;
          current = iterator.next();
          if (!current.done) {
            result += "," + config.spacingInner;
          } else if (!config.min) {
            result += ",";
          }
        }
        result += config.spacingOuter + indentation;
      }
      return result;
    }
    function printIteratorValues(iterator, config, indentation, depth, refs, printer) {
      let result = "";
      let current = iterator.next();
      if (!current.done) {
        result += config.spacingOuter;
        const indentationNext = indentation + config.indent;
        while (!current.done) {
          result += indentationNext + printer(current.value, config, indentationNext, depth, refs);
          current = iterator.next();
          if (!current.done) {
            result += "," + config.spacingInner;
          } else if (!config.min) {
            result += ",";
          }
        }
        result += config.spacingOuter + indentation;
      }
      return result;
    }
    function printListItems(list, config, indentation, depth, refs, printer) {
      let result = "";
      if (list.length) {
        result += config.spacingOuter;
        const indentationNext = indentation + config.indent;
        for (let i = 0; i < list.length; i++) {
          result += indentationNext;
          if (i in list) {
            result += printer(list[i], config, indentationNext, depth, refs);
          }
          if (i < list.length - 1) {
            result += "," + config.spacingInner;
          } else if (!config.min) {
            result += ",";
          }
        }
        result += config.spacingOuter + indentation;
      }
      return result;
    }
    function printObjectProperties(val, config, indentation, depth, refs, printer) {
      let result = "";
      const keys2 = getKeysOfEnumerableProperties(val, config.compareKeys);
      if (keys2.length) {
        result += config.spacingOuter;
        const indentationNext = indentation + config.indent;
        for (let i = 0; i < keys2.length; i++) {
          const key = keys2[i];
          const name = printer(key, config, indentationNext, depth, refs);
          const value = printer(val[key], config, indentationNext, depth, refs);
          result += indentationNext + name + ": " + value;
          if (i < keys2.length - 1) {
            result += "," + config.spacingInner;
          } else if (!config.min) {
            result += ",";
          }
        }
        result += config.spacingOuter + indentation;
      }
      return result;
    }
  }
});

// node_modules/pretty-format/build/plugins/AsymmetricMatcher.js
var require_AsymmetricMatcher = __commonJS({
  "node_modules/pretty-format/build/plugins/AsymmetricMatcher.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.test = exports.serialize = exports.default = void 0;
    var _collections = require_collections();
    var global9 = function() {
      if (typeof globalThis !== "undefined") {
        return globalThis;
      } else if (typeof global9 !== "undefined") {
        return global9;
      } else if (typeof self !== "undefined") {
        return self;
      } else if (typeof window !== "undefined") {
        return window;
      } else {
        return Function("return this")();
      }
    }();
    var Symbol2 = global9["jest-symbol-do-not-touch"] || global9.Symbol;
    var asymmetricMatcher = typeof Symbol2 === "function" && Symbol2.for ? Symbol2.for("jest.asymmetricMatcher") : 1267621;
    var SPACE = " ";
    var serialize = (val, config, indentation, depth, refs, printer) => {
      const stringedValue = val.toString();
      if (stringedValue === "ArrayContaining" || stringedValue === "ArrayNotContaining") {
        if (++depth > config.maxDepth) {
          return "[" + stringedValue + "]";
        }
        return stringedValue + SPACE + "[" + (0, _collections.printListItems)(val.sample, config, indentation, depth, refs, printer) + "]";
      }
      if (stringedValue === "ObjectContaining" || stringedValue === "ObjectNotContaining") {
        if (++depth > config.maxDepth) {
          return "[" + stringedValue + "]";
        }
        return stringedValue + SPACE + "{" + (0, _collections.printObjectProperties)(val.sample, config, indentation, depth, refs, printer) + "}";
      }
      if (stringedValue === "StringMatching" || stringedValue === "StringNotMatching") {
        return stringedValue + SPACE + printer(val.sample, config, indentation, depth, refs);
      }
      if (stringedValue === "StringContaining" || stringedValue === "StringNotContaining") {
        return stringedValue + SPACE + printer(val.sample, config, indentation, depth, refs);
      }
      return val.toAsymmetricMatcher();
    };
    exports.serialize = serialize;
    var test2 = (val) => val && val.$$typeof === asymmetricMatcher;
    exports.test = test2;
    var plugin = {
      serialize,
      test: test2
    };
    var _default = plugin;
    exports.default = _default;
  }
});

// node_modules/ansi-regex/index.js
var require_ansi_regex = __commonJS({
  "node_modules/ansi-regex/index.js"(exports, module) {
    "use strict";
    module.exports = ({ onlyFirst = false } = {}) => {
      const pattern = [
        "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
        "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
      ].join("|");
      return new RegExp(pattern, onlyFirst ? void 0 : "g");
    };
  }
});

// node_modules/pretty-format/build/plugins/ConvertAnsi.js
var require_ConvertAnsi = __commonJS({
  "node_modules/pretty-format/build/plugins/ConvertAnsi.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.test = exports.serialize = exports.default = void 0;
    var _ansiRegex = _interopRequireDefault(require_ansi_regex());
    var _ansiStyles = _interopRequireDefault(require_ansi_styles());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var toHumanReadableAnsi = (text) => text.replace((0, _ansiRegex.default)(), (match) => {
      switch (match) {
        case _ansiStyles.default.red.close:
        case _ansiStyles.default.green.close:
        case _ansiStyles.default.cyan.close:
        case _ansiStyles.default.gray.close:
        case _ansiStyles.default.white.close:
        case _ansiStyles.default.yellow.close:
        case _ansiStyles.default.bgRed.close:
        case _ansiStyles.default.bgGreen.close:
        case _ansiStyles.default.bgYellow.close:
        case _ansiStyles.default.inverse.close:
        case _ansiStyles.default.dim.close:
        case _ansiStyles.default.bold.close:
        case _ansiStyles.default.reset.open:
        case _ansiStyles.default.reset.close:
          return "</>";
        case _ansiStyles.default.red.open:
          return "<red>";
        case _ansiStyles.default.green.open:
          return "<green>";
        case _ansiStyles.default.cyan.open:
          return "<cyan>";
        case _ansiStyles.default.gray.open:
          return "<gray>";
        case _ansiStyles.default.white.open:
          return "<white>";
        case _ansiStyles.default.yellow.open:
          return "<yellow>";
        case _ansiStyles.default.bgRed.open:
          return "<bgRed>";
        case _ansiStyles.default.bgGreen.open:
          return "<bgGreen>";
        case _ansiStyles.default.bgYellow.open:
          return "<bgYellow>";
        case _ansiStyles.default.inverse.open:
          return "<inverse>";
        case _ansiStyles.default.dim.open:
          return "<dim>";
        case _ansiStyles.default.bold.open:
          return "<bold>";
        default:
          return "";
      }
    });
    var test2 = (val) => typeof val === "string" && !!val.match((0, _ansiRegex.default)());
    exports.test = test2;
    var serialize = (val, config, indentation, depth, refs, printer) => printer(toHumanReadableAnsi(val), config, indentation, depth, refs);
    exports.serialize = serialize;
    var plugin = {
      serialize,
      test: test2
    };
    var _default = plugin;
    exports.default = _default;
  }
});

// node_modules/pretty-format/build/plugins/DOMCollection.js
var require_DOMCollection = __commonJS({
  "node_modules/pretty-format/build/plugins/DOMCollection.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.test = exports.serialize = exports.default = void 0;
    var _collections = require_collections();
    var SPACE = " ";
    var OBJECT_NAMES = ["DOMStringMap", "NamedNodeMap"];
    var ARRAY_REGEXP = /^(HTML\w*Collection|NodeList)$/;
    var testName = (name) => OBJECT_NAMES.indexOf(name) !== -1 || ARRAY_REGEXP.test(name);
    var test2 = (val) => val && val.constructor && !!val.constructor.name && testName(val.constructor.name);
    exports.test = test2;
    var isNamedNodeMap = (collection) => collection.constructor.name === "NamedNodeMap";
    var serialize = (collection, config, indentation, depth, refs, printer) => {
      const name = collection.constructor.name;
      if (++depth > config.maxDepth) {
        return "[" + name + "]";
      }
      return (config.min ? "" : name + SPACE) + (OBJECT_NAMES.indexOf(name) !== -1 ? "{" + (0, _collections.printObjectProperties)(isNamedNodeMap(collection) ? Array.from(collection).reduce((props, attribute) => {
        props[attribute.name] = attribute.value;
        return props;
      }, {}) : { ...collection }, config, indentation, depth, refs, printer) + "}" : "[" + (0, _collections.printListItems)(Array.from(collection), config, indentation, depth, refs, printer) + "]");
    };
    exports.serialize = serialize;
    var plugin = {
      serialize,
      test: test2
    };
    var _default = plugin;
    exports.default = _default;
  }
});

// node_modules/pretty-format/build/plugins/lib/escapeHTML.js
var require_escapeHTML = __commonJS({
  "node_modules/pretty-format/build/plugins/lib/escapeHTML.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = escapeHTML;
    function escapeHTML(str) {
      return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
  }
});

// node_modules/pretty-format/build/plugins/lib/markup.js
var require_markup = __commonJS({
  "node_modules/pretty-format/build/plugins/lib/markup.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.printText = exports.printProps = exports.printElementAsLeaf = exports.printElement = exports.printComment = exports.printChildren = void 0;
    var _escapeHTML = _interopRequireDefault(require_escapeHTML());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var printProps = (keys2, props, config, indentation, depth, refs, printer) => {
      const indentationNext = indentation + config.indent;
      const colors = config.colors;
      return keys2.map((key) => {
        const value = props[key];
        let printed = printer(value, config, indentationNext, depth, refs);
        if (typeof value !== "string") {
          if (printed.indexOf("\n") !== -1) {
            printed = config.spacingOuter + indentationNext + printed + config.spacingOuter + indentation;
          }
          printed = "{" + printed + "}";
        }
        return config.spacingInner + indentation + colors.prop.open + key + colors.prop.close + "=" + colors.value.open + printed + colors.value.close;
      }).join("");
    };
    exports.printProps = printProps;
    var printChildren = (children, config, indentation, depth, refs, printer) => children.map((child) => config.spacingOuter + indentation + (typeof child === "string" ? printText(child, config) : printer(child, config, indentation, depth, refs))).join("");
    exports.printChildren = printChildren;
    var printText = (text, config) => {
      const contentColor = config.colors.content;
      return contentColor.open + (0, _escapeHTML.default)(text) + contentColor.close;
    };
    exports.printText = printText;
    var printComment = (comment, config) => {
      const commentColor = config.colors.comment;
      return commentColor.open + "<!--" + (0, _escapeHTML.default)(comment) + "-->" + commentColor.close;
    };
    exports.printComment = printComment;
    var printElement = (type, printedProps, printedChildren, config, indentation) => {
      const tagColor = config.colors.tag;
      return tagColor.open + "<" + type + (printedProps && tagColor.close + printedProps + config.spacingOuter + indentation + tagColor.open) + (printedChildren ? ">" + tagColor.close + printedChildren + config.spacingOuter + indentation + tagColor.open + "</" + type : (printedProps && !config.min ? "" : " ") + "/") + ">" + tagColor.close;
    };
    exports.printElement = printElement;
    var printElementAsLeaf = (type, config) => {
      const tagColor = config.colors.tag;
      return tagColor.open + "<" + type + tagColor.close + " \u2026" + tagColor.open + " />" + tagColor.close;
    };
    exports.printElementAsLeaf = printElementAsLeaf;
  }
});

// node_modules/pretty-format/build/plugins/DOMElement.js
var require_DOMElement = __commonJS({
  "node_modules/pretty-format/build/plugins/DOMElement.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.test = exports.serialize = exports.default = void 0;
    var _markup = require_markup();
    var ELEMENT_NODE = 1;
    var TEXT_NODE = 3;
    var COMMENT_NODE = 8;
    var FRAGMENT_NODE = 11;
    var ELEMENT_REGEXP = /^((HTML|SVG)\w*)?Element$/;
    var testHasAttribute = (val) => {
      try {
        return typeof val.hasAttribute === "function" && val.hasAttribute("is");
      } catch {
        return false;
      }
    };
    var testNode = (val) => {
      const constructorName = val.constructor.name;
      const { nodeType, tagName } = val;
      const isCustomElement = typeof tagName === "string" && tagName.includes("-") || testHasAttribute(val);
      return nodeType === ELEMENT_NODE && (ELEMENT_REGEXP.test(constructorName) || isCustomElement) || nodeType === TEXT_NODE && constructorName === "Text" || nodeType === COMMENT_NODE && constructorName === "Comment" || nodeType === FRAGMENT_NODE && constructorName === "DocumentFragment";
    };
    var test2 = (val) => {
      var _val$constructor;
      return (val === null || val === void 0 ? void 0 : (_val$constructor = val.constructor) === null || _val$constructor === void 0 ? void 0 : _val$constructor.name) && testNode(val);
    };
    exports.test = test2;
    function nodeIsText(node) {
      return node.nodeType === TEXT_NODE;
    }
    function nodeIsComment(node) {
      return node.nodeType === COMMENT_NODE;
    }
    function nodeIsFragment(node) {
      return node.nodeType === FRAGMENT_NODE;
    }
    var serialize = (node, config, indentation, depth, refs, printer) => {
      if (nodeIsText(node)) {
        return (0, _markup.printText)(node.data, config);
      }
      if (nodeIsComment(node)) {
        return (0, _markup.printComment)(node.data, config);
      }
      const type = nodeIsFragment(node) ? "DocumentFragment" : node.tagName.toLowerCase();
      if (++depth > config.maxDepth) {
        return (0, _markup.printElementAsLeaf)(type, config);
      }
      return (0, _markup.printElement)(type, (0, _markup.printProps)(nodeIsFragment(node) ? [] : Array.from(node.attributes).map((attr) => attr.name).sort(), nodeIsFragment(node) ? {} : Array.from(node.attributes).reduce((props, attribute) => {
        props[attribute.name] = attribute.value;
        return props;
      }, {}), config, indentation + config.indent, depth, refs, printer), (0, _markup.printChildren)(Array.prototype.slice.call(node.childNodes || node.children), config, indentation + config.indent, depth, refs, printer), config, indentation);
    };
    exports.serialize = serialize;
    var plugin = {
      serialize,
      test: test2
    };
    var _default = plugin;
    exports.default = _default;
  }
});

// node_modules/pretty-format/build/plugins/Immutable.js
var require_Immutable = __commonJS({
  "node_modules/pretty-format/build/plugins/Immutable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.test = exports.serialize = exports.default = void 0;
    var _collections = require_collections();
    var IS_ITERABLE_SENTINEL = "@@__IMMUTABLE_ITERABLE__@@";
    var IS_LIST_SENTINEL = "@@__IMMUTABLE_LIST__@@";
    var IS_KEYED_SENTINEL = "@@__IMMUTABLE_KEYED__@@";
    var IS_MAP_SENTINEL = "@@__IMMUTABLE_MAP__@@";
    var IS_ORDERED_SENTINEL = "@@__IMMUTABLE_ORDERED__@@";
    var IS_RECORD_SENTINEL = "@@__IMMUTABLE_RECORD__@@";
    var IS_SEQ_SENTINEL = "@@__IMMUTABLE_SEQ__@@";
    var IS_SET_SENTINEL = "@@__IMMUTABLE_SET__@@";
    var IS_STACK_SENTINEL = "@@__IMMUTABLE_STACK__@@";
    var getImmutableName = (name) => "Immutable." + name;
    var printAsLeaf = (name) => "[" + name + "]";
    var SPACE = " ";
    var LAZY = "\u2026";
    var printImmutableEntries = (val, config, indentation, depth, refs, printer, type) => ++depth > config.maxDepth ? printAsLeaf(getImmutableName(type)) : getImmutableName(type) + SPACE + "{" + (0, _collections.printIteratorEntries)(val.entries(), config, indentation, depth, refs, printer) + "}";
    function getRecordEntries(val) {
      let i = 0;
      return {
        next() {
          if (i < val._keys.length) {
            const key = val._keys[i++];
            return {
              done: false,
              value: [key, val.get(key)]
            };
          }
          return {
            done: true,
            value: void 0
          };
        }
      };
    }
    var printImmutableRecord = (val, config, indentation, depth, refs, printer) => {
      const name = getImmutableName(val._name || "Record");
      return ++depth > config.maxDepth ? printAsLeaf(name) : name + SPACE + "{" + (0, _collections.printIteratorEntries)(getRecordEntries(val), config, indentation, depth, refs, printer) + "}";
    };
    var printImmutableSeq = (val, config, indentation, depth, refs, printer) => {
      const name = getImmutableName("Seq");
      if (++depth > config.maxDepth) {
        return printAsLeaf(name);
      }
      if (val[IS_KEYED_SENTINEL]) {
        return name + SPACE + "{" + (val._iter || val._object ? (0, _collections.printIteratorEntries)(val.entries(), config, indentation, depth, refs, printer) : LAZY) + "}";
      }
      return name + SPACE + "[" + (val._iter || val._array || val._collection || val._iterable ? (0, _collections.printIteratorValues)(val.values(), config, indentation, depth, refs, printer) : LAZY) + "]";
    };
    var printImmutableValues = (val, config, indentation, depth, refs, printer, type) => ++depth > config.maxDepth ? printAsLeaf(getImmutableName(type)) : getImmutableName(type) + SPACE + "[" + (0, _collections.printIteratorValues)(val.values(), config, indentation, depth, refs, printer) + "]";
    var serialize = (val, config, indentation, depth, refs, printer) => {
      if (val[IS_MAP_SENTINEL]) {
        return printImmutableEntries(val, config, indentation, depth, refs, printer, val[IS_ORDERED_SENTINEL] ? "OrderedMap" : "Map");
      }
      if (val[IS_LIST_SENTINEL]) {
        return printImmutableValues(val, config, indentation, depth, refs, printer, "List");
      }
      if (val[IS_SET_SENTINEL]) {
        return printImmutableValues(val, config, indentation, depth, refs, printer, val[IS_ORDERED_SENTINEL] ? "OrderedSet" : "Set");
      }
      if (val[IS_STACK_SENTINEL]) {
        return printImmutableValues(val, config, indentation, depth, refs, printer, "Stack");
      }
      if (val[IS_SEQ_SENTINEL]) {
        return printImmutableSeq(val, config, indentation, depth, refs, printer);
      }
      return printImmutableRecord(val, config, indentation, depth, refs, printer);
    };
    exports.serialize = serialize;
    var test2 = (val) => val && (val[IS_ITERABLE_SENTINEL] === true || val[IS_RECORD_SENTINEL] === true);
    exports.test = test2;
    var plugin = {
      serialize,
      test: test2
    };
    var _default = plugin;
    exports.default = _default;
  }
});

// node_modules/pretty-format/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/pretty-format/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var REACT_ELEMENT_TYPE = 60103;
        var REACT_PORTAL_TYPE = 60106;
        var REACT_FRAGMENT_TYPE = 60107;
        var REACT_STRICT_MODE_TYPE = 60108;
        var REACT_PROFILER_TYPE = 60114;
        var REACT_PROVIDER_TYPE = 60109;
        var REACT_CONTEXT_TYPE = 60110;
        var REACT_FORWARD_REF_TYPE = 60112;
        var REACT_SUSPENSE_TYPE = 60113;
        var REACT_SUSPENSE_LIST_TYPE = 60120;
        var REACT_MEMO_TYPE = 60115;
        var REACT_LAZY_TYPE = 60116;
        var REACT_BLOCK_TYPE = 60121;
        var REACT_SERVER_BLOCK_TYPE = 60122;
        var REACT_FUNDAMENTAL_TYPE = 60117;
        var REACT_SCOPE_TYPE = 60119;
        var REACT_OPAQUE_ID_TYPE = 60128;
        var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
        var REACT_OFFSCREEN_TYPE = 60130;
        var REACT_LEGACY_HIDDEN_TYPE = 60131;
        if (typeof Symbol === "function" && Symbol.for) {
          var symbolFor = Symbol.for;
          REACT_ELEMENT_TYPE = symbolFor("react.element");
          REACT_PORTAL_TYPE = symbolFor("react.portal");
          REACT_FRAGMENT_TYPE = symbolFor("react.fragment");
          REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode");
          REACT_PROFILER_TYPE = symbolFor("react.profiler");
          REACT_PROVIDER_TYPE = symbolFor("react.provider");
          REACT_CONTEXT_TYPE = symbolFor("react.context");
          REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
          REACT_SUSPENSE_TYPE = symbolFor("react.suspense");
          REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
          REACT_MEMO_TYPE = symbolFor("react.memo");
          REACT_LAZY_TYPE = symbolFor("react.lazy");
          REACT_BLOCK_TYPE = symbolFor("react.block");
          REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
          REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
          REACT_SCOPE_TYPE = symbolFor("react.scope");
          REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
          REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
          REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
          REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
        }
        var enableScopeAPI = false;
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
              return true;
            }
          }
          return false;
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                  case REACT_SUSPENSE_LIST_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        var hasWarnedAboutDeprecatedIsConcurrentMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isConcurrentMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
              hasWarnedAboutDeprecatedIsConcurrentMode = true;
              console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/pretty-format/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/pretty-format/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/pretty-format/build/plugins/ReactElement.js
var require_ReactElement = __commonJS({
  "node_modules/pretty-format/build/plugins/ReactElement.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.test = exports.serialize = exports.default = void 0;
    var ReactIs = _interopRequireWildcard(require_react_is());
    var _markup = require_markup();
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = new WeakMap();
      var cacheNodeInterop = new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    var getChildren = (arg, children = []) => {
      if (Array.isArray(arg)) {
        arg.forEach((item) => {
          getChildren(item, children);
        });
      } else if (arg != null && arg !== false) {
        children.push(arg);
      }
      return children;
    };
    var getType = (element) => {
      const type = element.type;
      if (typeof type === "string") {
        return type;
      }
      if (typeof type === "function") {
        return type.displayName || type.name || "Unknown";
      }
      if (ReactIs.isFragment(element)) {
        return "React.Fragment";
      }
      if (ReactIs.isSuspense(element)) {
        return "React.Suspense";
      }
      if (typeof type === "object" && type !== null) {
        if (ReactIs.isContextProvider(element)) {
          return "Context.Provider";
        }
        if (ReactIs.isContextConsumer(element)) {
          return "Context.Consumer";
        }
        if (ReactIs.isForwardRef(element)) {
          if (type.displayName) {
            return type.displayName;
          }
          const functionName = type.render.displayName || type.render.name || "";
          return functionName !== "" ? "ForwardRef(" + functionName + ")" : "ForwardRef";
        }
        if (ReactIs.isMemo(element)) {
          const functionName = type.displayName || type.type.displayName || type.type.name || "";
          return functionName !== "" ? "Memo(" + functionName + ")" : "Memo";
        }
      }
      return "UNDEFINED";
    };
    var getPropKeys = (element) => {
      const { props } = element;
      return Object.keys(props).filter((key) => key !== "children" && props[key] !== void 0).sort();
    };
    var serialize = (element, config, indentation, depth, refs, printer) => ++depth > config.maxDepth ? (0, _markup.printElementAsLeaf)(getType(element), config) : (0, _markup.printElement)(getType(element), (0, _markup.printProps)(getPropKeys(element), element.props, config, indentation + config.indent, depth, refs, printer), (0, _markup.printChildren)(getChildren(element.props.children), config, indentation + config.indent, depth, refs, printer), config, indentation);
    exports.serialize = serialize;
    var test2 = (val) => val != null && ReactIs.isElement(val);
    exports.test = test2;
    var plugin = {
      serialize,
      test: test2
    };
    var _default = plugin;
    exports.default = _default;
  }
});

// node_modules/pretty-format/build/plugins/ReactTestComponent.js
var require_ReactTestComponent = __commonJS({
  "node_modules/pretty-format/build/plugins/ReactTestComponent.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.test = exports.serialize = exports.default = void 0;
    var _markup = require_markup();
    var global9 = function() {
      if (typeof globalThis !== "undefined") {
        return globalThis;
      } else if (typeof global9 !== "undefined") {
        return global9;
      } else if (typeof self !== "undefined") {
        return self;
      } else if (typeof window !== "undefined") {
        return window;
      } else {
        return Function("return this")();
      }
    }();
    var Symbol2 = global9["jest-symbol-do-not-touch"] || global9.Symbol;
    var testSymbol = typeof Symbol2 === "function" && Symbol2.for ? Symbol2.for("react.test.json") : 245830487;
    var getPropKeys = (object) => {
      const { props } = object;
      return props ? Object.keys(props).filter((key) => props[key] !== void 0).sort() : [];
    };
    var serialize = (object, config, indentation, depth, refs, printer) => ++depth > config.maxDepth ? (0, _markup.printElementAsLeaf)(object.type, config) : (0, _markup.printElement)(object.type, object.props ? (0, _markup.printProps)(getPropKeys(object), object.props, config, indentation + config.indent, depth, refs, printer) : "", object.children ? (0, _markup.printChildren)(object.children, config, indentation + config.indent, depth, refs, printer) : "", config, indentation);
    exports.serialize = serialize;
    var test2 = (val) => val && val.$$typeof === testSymbol;
    exports.test = test2;
    var plugin = {
      serialize,
      test: test2
    };
    var _default = plugin;
    exports.default = _default;
  }
});

// node_modules/pretty-format/build/index.js
var require_build = __commonJS({
  "node_modules/pretty-format/build/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = exports.DEFAULT_OPTIONS = void 0;
    exports.format = format;
    exports.plugins = void 0;
    var _ansiStyles = _interopRequireDefault(require_ansi_styles());
    var _collections = require_collections();
    var _AsymmetricMatcher = _interopRequireDefault(require_AsymmetricMatcher());
    var _ConvertAnsi = _interopRequireDefault(require_ConvertAnsi());
    var _DOMCollection = _interopRequireDefault(require_DOMCollection());
    var _DOMElement = _interopRequireDefault(require_DOMElement());
    var _Immutable = _interopRequireDefault(require_Immutable());
    var _ReactElement = _interopRequireDefault(require_ReactElement());
    var _ReactTestComponent = _interopRequireDefault(require_ReactTestComponent());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var toString8 = Object.prototype.toString;
    var toISOString = Date.prototype.toISOString;
    var errorToString = Error.prototype.toString;
    var regExpToString = RegExp.prototype.toString;
    var getConstructorName = (val) => typeof val.constructor === "function" && val.constructor.name || "Object";
    var isWindow = (val) => typeof window !== "undefined" && val === window;
    var SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;
    var NEWLINE_REGEXP = /\n/gi;
    var PrettyFormatPluginError = class extends Error {
      constructor(message, stack) {
        super(message);
        this.stack = stack;
        this.name = this.constructor.name;
      }
    };
    function isToStringedArrayType(toStringed) {
      return toStringed === "[object Array]" || toStringed === "[object ArrayBuffer]" || toStringed === "[object DataView]" || toStringed === "[object Float32Array]" || toStringed === "[object Float64Array]" || toStringed === "[object Int8Array]" || toStringed === "[object Int16Array]" || toStringed === "[object Int32Array]" || toStringed === "[object Uint8Array]" || toStringed === "[object Uint8ClampedArray]" || toStringed === "[object Uint16Array]" || toStringed === "[object Uint32Array]";
    }
    function printNumber(val) {
      return Object.is(val, -0) ? "-0" : String(val);
    }
    function printBigInt(val) {
      return String(`${val}n`);
    }
    function printFunction(val, printFunctionName) {
      if (!printFunctionName) {
        return "[Function]";
      }
      return "[Function " + (val.name || "anonymous") + "]";
    }
    function printSymbol(val) {
      return String(val).replace(SYMBOL_REGEXP, "Symbol($1)");
    }
    function printError(val) {
      return "[" + errorToString.call(val) + "]";
    }
    function printBasicValue(val, printFunctionName, escapeRegex, escapeString) {
      if (val === true || val === false) {
        return "" + val;
      }
      if (val === void 0) {
        return "undefined";
      }
      if (val === null) {
        return "null";
      }
      const typeOf = typeof val;
      if (typeOf === "number") {
        return printNumber(val);
      }
      if (typeOf === "bigint") {
        return printBigInt(val);
      }
      if (typeOf === "string") {
        if (escapeString) {
          return '"' + val.replace(/"|\\/g, "\\$&") + '"';
        }
        return '"' + val + '"';
      }
      if (typeOf === "function") {
        return printFunction(val, printFunctionName);
      }
      if (typeOf === "symbol") {
        return printSymbol(val);
      }
      const toStringed = toString8.call(val);
      if (toStringed === "[object WeakMap]") {
        return "WeakMap {}";
      }
      if (toStringed === "[object WeakSet]") {
        return "WeakSet {}";
      }
      if (toStringed === "[object Function]" || toStringed === "[object GeneratorFunction]") {
        return printFunction(val, printFunctionName);
      }
      if (toStringed === "[object Symbol]") {
        return printSymbol(val);
      }
      if (toStringed === "[object Date]") {
        return isNaN(+val) ? "Date { NaN }" : toISOString.call(val);
      }
      if (toStringed === "[object Error]") {
        return printError(val);
      }
      if (toStringed === "[object RegExp]") {
        if (escapeRegex) {
          return regExpToString.call(val).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&");
        }
        return regExpToString.call(val);
      }
      if (val instanceof Error) {
        return printError(val);
      }
      return null;
    }
    function printComplexValue(val, config, indentation, depth, refs, hasCalledToJSON) {
      if (refs.indexOf(val) !== -1) {
        return "[Circular]";
      }
      refs = refs.slice();
      refs.push(val);
      const hitMaxDepth = ++depth > config.maxDepth;
      const min2 = config.min;
      if (config.callToJSON && !hitMaxDepth && val.toJSON && typeof val.toJSON === "function" && !hasCalledToJSON) {
        return printer(val.toJSON(), config, indentation, depth, refs, true);
      }
      const toStringed = toString8.call(val);
      if (toStringed === "[object Arguments]") {
        return hitMaxDepth ? "[Arguments]" : (min2 ? "" : "Arguments ") + "[" + (0, _collections.printListItems)(val, config, indentation, depth, refs, printer) + "]";
      }
      if (isToStringedArrayType(toStringed)) {
        return hitMaxDepth ? "[" + val.constructor.name + "]" : (min2 ? "" : !config.printBasicPrototype && val.constructor.name === "Array" ? "" : val.constructor.name + " ") + "[" + (0, _collections.printListItems)(val, config, indentation, depth, refs, printer) + "]";
      }
      if (toStringed === "[object Map]") {
        return hitMaxDepth ? "[Map]" : "Map {" + (0, _collections.printIteratorEntries)(val.entries(), config, indentation, depth, refs, printer, " => ") + "}";
      }
      if (toStringed === "[object Set]") {
        return hitMaxDepth ? "[Set]" : "Set {" + (0, _collections.printIteratorValues)(val.values(), config, indentation, depth, refs, printer) + "}";
      }
      return hitMaxDepth || isWindow(val) ? "[" + getConstructorName(val) + "]" : (min2 ? "" : !config.printBasicPrototype && getConstructorName(val) === "Object" ? "" : getConstructorName(val) + " ") + "{" + (0, _collections.printObjectProperties)(val, config, indentation, depth, refs, printer) + "}";
    }
    function isNewPlugin(plugin) {
      return plugin.serialize != null;
    }
    function printPlugin(plugin, val, config, indentation, depth, refs) {
      let printed;
      try {
        printed = isNewPlugin(plugin) ? plugin.serialize(val, config, indentation, depth, refs, printer) : plugin.print(val, (valChild) => printer(valChild, config, indentation, depth, refs), (str) => {
          const indentationNext = indentation + config.indent;
          return indentationNext + str.replace(NEWLINE_REGEXP, "\n" + indentationNext);
        }, {
          edgeSpacing: config.spacingOuter,
          min: config.min,
          spacing: config.spacingInner
        }, config.colors);
      } catch (error2) {
        throw new PrettyFormatPluginError(error2.message, error2.stack);
      }
      if (typeof printed !== "string") {
        throw new Error(`pretty-format: Plugin must return type "string" but instead returned "${typeof printed}".`);
      }
      return printed;
    }
    function findPlugin(plugins2, val) {
      for (let p = 0; p < plugins2.length; p++) {
        try {
          if (plugins2[p].test(val)) {
            return plugins2[p];
          }
        } catch (error2) {
          throw new PrettyFormatPluginError(error2.message, error2.stack);
        }
      }
      return null;
    }
    function printer(val, config, indentation, depth, refs, hasCalledToJSON) {
      const plugin = findPlugin(config.plugins, val);
      if (plugin !== null) {
        return printPlugin(plugin, val, config, indentation, depth, refs);
      }
      const basicResult = printBasicValue(val, config.printFunctionName, config.escapeRegex, config.escapeString);
      if (basicResult !== null) {
        return basicResult;
      }
      return printComplexValue(val, config, indentation, depth, refs, hasCalledToJSON);
    }
    var DEFAULT_THEME = {
      comment: "gray",
      content: "reset",
      prop: "yellow",
      tag: "cyan",
      value: "green"
    };
    var DEFAULT_THEME_KEYS = Object.keys(DEFAULT_THEME);
    var DEFAULT_OPTIONS = {
      callToJSON: true,
      compareKeys: void 0,
      escapeRegex: false,
      escapeString: true,
      highlight: false,
      indent: 2,
      maxDepth: Infinity,
      min: false,
      plugins: [],
      printBasicPrototype: true,
      printFunctionName: true,
      theme: DEFAULT_THEME
    };
    exports.DEFAULT_OPTIONS = DEFAULT_OPTIONS;
    function validateOptions(options) {
      Object.keys(options).forEach((key) => {
        if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
          throw new Error(`pretty-format: Unknown option "${key}".`);
        }
      });
      if (options.min && options.indent !== void 0 && options.indent !== 0) {
        throw new Error('pretty-format: Options "min" and "indent" cannot be used together.');
      }
      if (options.theme !== void 0) {
        if (options.theme === null) {
          throw new Error('pretty-format: Option "theme" must not be null.');
        }
        if (typeof options.theme !== "object") {
          throw new Error(`pretty-format: Option "theme" must be of type "object" but instead received "${typeof options.theme}".`);
        }
      }
    }
    var getColorsHighlight = (options) => DEFAULT_THEME_KEYS.reduce((colors, key) => {
      const value = options.theme && options.theme[key] !== void 0 ? options.theme[key] : DEFAULT_THEME[key];
      const color = value && _ansiStyles.default[value];
      if (color && typeof color.close === "string" && typeof color.open === "string") {
        colors[key] = color;
      } else {
        throw new Error(`pretty-format: Option "theme" has a key "${key}" whose value "${value}" is undefined in ansi-styles.`);
      }
      return colors;
    }, Object.create(null));
    var getColorsEmpty = () => DEFAULT_THEME_KEYS.reduce((colors, key) => {
      colors[key] = {
        close: "",
        open: ""
      };
      return colors;
    }, Object.create(null));
    var getPrintFunctionName = (options) => options && options.printFunctionName !== void 0 ? options.printFunctionName : DEFAULT_OPTIONS.printFunctionName;
    var getEscapeRegex = (options) => options && options.escapeRegex !== void 0 ? options.escapeRegex : DEFAULT_OPTIONS.escapeRegex;
    var getEscapeString = (options) => options && options.escapeString !== void 0 ? options.escapeString : DEFAULT_OPTIONS.escapeString;
    var getConfig2 = (options) => {
      var _options$printBasicPr;
      return {
        callToJSON: options && options.callToJSON !== void 0 ? options.callToJSON : DEFAULT_OPTIONS.callToJSON,
        colors: options && options.highlight ? getColorsHighlight(options) : getColorsEmpty(),
        compareKeys: options && typeof options.compareKeys === "function" ? options.compareKeys : DEFAULT_OPTIONS.compareKeys,
        escapeRegex: getEscapeRegex(options),
        escapeString: getEscapeString(options),
        indent: options && options.min ? "" : createIndent(options && options.indent !== void 0 ? options.indent : DEFAULT_OPTIONS.indent),
        maxDepth: options && options.maxDepth !== void 0 ? options.maxDepth : DEFAULT_OPTIONS.maxDepth,
        min: options && options.min !== void 0 ? options.min : DEFAULT_OPTIONS.min,
        plugins: options && options.plugins !== void 0 ? options.plugins : DEFAULT_OPTIONS.plugins,
        printBasicPrototype: (_options$printBasicPr = options === null || options === void 0 ? void 0 : options.printBasicPrototype) !== null && _options$printBasicPr !== void 0 ? _options$printBasicPr : true,
        printFunctionName: getPrintFunctionName(options),
        spacingInner: options && options.min ? " " : "\n",
        spacingOuter: options && options.min ? "" : "\n"
      };
    };
    function createIndent(indent) {
      return new Array(indent + 1).join(" ");
    }
    function format(val, options) {
      if (options) {
        validateOptions(options);
        if (options.plugins) {
          const plugin = findPlugin(options.plugins, val);
          if (plugin !== null) {
            return printPlugin(plugin, val, getConfig2(options), "", 0, []);
          }
        }
      }
      const basicResult = printBasicValue(val, getPrintFunctionName(options), getEscapeRegex(options), getEscapeString(options));
      if (basicResult !== null) {
        return basicResult;
      }
      return printComplexValue(val, getConfig2(options), "", 0, []);
    }
    var plugins = {
      AsymmetricMatcher: _AsymmetricMatcher.default,
      ConvertAnsi: _ConvertAnsi.default,
      DOMCollection: _DOMCollection.default,
      DOMElement: _DOMElement.default,
      Immutable: _Immutable.default,
      ReactElement: _ReactElement.default,
      ReactTestComponent: _ReactTestComponent.default
    };
    exports.plugins = plugins;
    var _default = format;
    exports.default = _default;
  }
});

// node_modules/@testing-library/dom/dist/DOMElementFilter.js
var require_DOMElementFilter = __commonJS({
  "node_modules/@testing-library/dom/dist/DOMElementFilter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = createDOMElementFilter;
    exports.test = void 0;
    function escapeHTML(str) {
      return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    var printProps = (keys2, props, config, indentation, depth, refs, printer) => {
      const indentationNext = indentation + config.indent;
      const colors = config.colors;
      return keys2.map((key) => {
        const value = props[key];
        let printed = printer(value, config, indentationNext, depth, refs);
        if (typeof value !== "string") {
          if (printed.indexOf("\n") !== -1) {
            printed = config.spacingOuter + indentationNext + printed + config.spacingOuter + indentation;
          }
          printed = "{" + printed + "}";
        }
        return config.spacingInner + indentation + colors.prop.open + key + colors.prop.close + "=" + colors.value.open + printed + colors.value.close;
      }).join("");
    };
    var NodeTypeTextNode = 3;
    var printChildren = (children, config, indentation, depth, refs, printer) => children.map((child) => {
      const printedChild = typeof child === "string" ? printText(child, config) : printer(child, config, indentation, depth, refs);
      if (printedChild === "" && typeof child === "object" && child !== null && child.nodeType !== NodeTypeTextNode) {
        return "";
      }
      return config.spacingOuter + indentation + printedChild;
    }).join("");
    var printText = (text, config) => {
      const contentColor = config.colors.content;
      return contentColor.open + escapeHTML(text) + contentColor.close;
    };
    var printComment = (comment, config) => {
      const commentColor = config.colors.comment;
      return commentColor.open + "<!--" + escapeHTML(comment) + "-->" + commentColor.close;
    };
    var printElement = (type, printedProps, printedChildren, config, indentation) => {
      const tagColor = config.colors.tag;
      return tagColor.open + "<" + type + (printedProps && tagColor.close + printedProps + config.spacingOuter + indentation + tagColor.open) + (printedChildren ? ">" + tagColor.close + printedChildren + config.spacingOuter + indentation + tagColor.open + "</" + type : (printedProps && !config.min ? "" : " ") + "/") + ">" + tagColor.close;
    };
    var printElementAsLeaf = (type, config) => {
      const tagColor = config.colors.tag;
      return tagColor.open + "<" + type + tagColor.close + " \u2026" + tagColor.open + " />" + tagColor.close;
    };
    var ELEMENT_NODE = 1;
    var TEXT_NODE = 3;
    var COMMENT_NODE = 8;
    var FRAGMENT_NODE = 11;
    var ELEMENT_REGEXP = /^((HTML|SVG)\w*)?Element$/;
    var testNode = (val) => {
      const constructorName = val.constructor.name;
      const {
        nodeType,
        tagName
      } = val;
      const isCustomElement = typeof tagName === "string" && tagName.includes("-") || typeof val.hasAttribute === "function" && val.hasAttribute("is");
      return nodeType === ELEMENT_NODE && (ELEMENT_REGEXP.test(constructorName) || isCustomElement) || nodeType === TEXT_NODE && constructorName === "Text" || nodeType === COMMENT_NODE && constructorName === "Comment" || nodeType === FRAGMENT_NODE && constructorName === "DocumentFragment";
    };
    var test2 = (val) => {
      var _val$constructor;
      return (val == null ? void 0 : (_val$constructor = val.constructor) == null ? void 0 : _val$constructor.name) && testNode(val);
    };
    exports.test = test2;
    function nodeIsText(node) {
      return node.nodeType === TEXT_NODE;
    }
    function nodeIsComment(node) {
      return node.nodeType === COMMENT_NODE;
    }
    function nodeIsFragment(node) {
      return node.nodeType === FRAGMENT_NODE;
    }
    function createDOMElementFilter(filterNode) {
      return {
        test: (val) => {
          var _val$constructor2;
          return (val == null ? void 0 : (_val$constructor2 = val.constructor) == null ? void 0 : _val$constructor2.name) && testNode(val);
        },
        serialize: (node, config, indentation, depth, refs, printer) => {
          if (nodeIsText(node)) {
            return printText(node.data, config);
          }
          if (nodeIsComment(node)) {
            return printComment(node.data, config);
          }
          const type = nodeIsFragment(node) ? `DocumentFragment` : node.tagName.toLowerCase();
          if (++depth > config.maxDepth) {
            return printElementAsLeaf(type, config);
          }
          return printElement(type, printProps(nodeIsFragment(node) ? [] : Array.from(node.attributes).map((attr) => attr.name).sort(), nodeIsFragment(node) ? {} : Array.from(node.attributes).reduce((props, attribute) => {
            props[attribute.name] = attribute.value;
            return props;
          }, {}), config, indentation + config.indent, depth, refs, printer), printChildren(Array.prototype.slice.call(node.childNodes || node.children).filter(filterNode), config, indentation + config.indent, depth, refs, printer), config, indentation);
        }
      };
    }
  }
});

// node_modules/@testing-library/dom/dist/get-user-code-frame.js
var require_get_user_code_frame = __commonJS({
  "node_modules/@testing-library/dom/dist/get-user-code-frame.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getUserCodeFrame = getUserCodeFrame;
    var chalk = null;
    var readFileSync = null;
    var codeFrameColumns = null;
    try {
      const nodeRequire = module && module.require;
      readFileSync = nodeRequire.call(module, "fs").readFileSync;
      codeFrameColumns = nodeRequire.call(module, "@babel/code-frame").codeFrameColumns;
      chalk = nodeRequire.call(module, "chalk");
    } catch {
    }
    function getCodeFrame(frame) {
      const locationStart = frame.indexOf("(") + 1;
      const locationEnd = frame.indexOf(")");
      const frameLocation = frame.slice(locationStart, locationEnd);
      const frameLocationElements = frameLocation.split(":");
      const [filename, line, column] = [frameLocationElements[0], parseInt(frameLocationElements[1], 10), parseInt(frameLocationElements[2], 10)];
      let rawFileContents = "";
      try {
        rawFileContents = readFileSync(filename, "utf-8");
      } catch {
        return "";
      }
      const codeFrame = codeFrameColumns(rawFileContents, {
        start: {
          line,
          column
        }
      }, {
        highlightCode: true,
        linesBelow: 0
      });
      return `${chalk.dim(frameLocation)}
${codeFrame}
`;
    }
    function getUserCodeFrame() {
      if (!readFileSync || !codeFrameColumns) {
        return "";
      }
      const err = new Error();
      const firstClientCodeFrame = err.stack.split("\n").slice(1).find((frame) => !frame.includes("node_modules/"));
      return getCodeFrame(firstClientCodeFrame);
    }
  }
});

// node_modules/@testing-library/dom/dist/helpers.js
var require_helpers = __commonJS({
  "node_modules/@testing-library/dom/dist/helpers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TEXT_NODE = void 0;
    exports.checkContainerType = checkContainerType;
    exports.getDocument = getDocument;
    exports.getWindowFromNode = getWindowFromNode;
    exports.jestFakeTimersAreEnabled = jestFakeTimersAreEnabled;
    var TEXT_NODE = 3;
    exports.TEXT_NODE = TEXT_NODE;
    function jestFakeTimersAreEnabled() {
      if (typeof jest !== "undefined" && jest !== null) {
        return setTimeout._isMockFunction === true || Object.prototype.hasOwnProperty.call(setTimeout, "clock");
      }
      return false;
    }
    function getDocument() {
      if (typeof window === "undefined") {
        throw new Error("Could not find default container");
      }
      return window.document;
    }
    function getWindowFromNode(node) {
      if (node.defaultView) {
        return node.defaultView;
      } else if (node.ownerDocument && node.ownerDocument.defaultView) {
        return node.ownerDocument.defaultView;
      } else if (node.window) {
        return node.window;
      } else if (node.ownerDocument && node.ownerDocument.defaultView === null) {
        throw new Error(`It looks like the window object is not available for the provided node.`);
      } else if (node.then instanceof Function) {
        throw new Error(`It looks like you passed a Promise object instead of a DOM node. Did you do something like \`fireEvent.click(screen.findBy...\` when you meant to use a \`getBy\` query \`fireEvent.click(screen.getBy...\`, or await the findBy query \`fireEvent.click(await screen.findBy...\`?`);
      } else if (Array.isArray(node)) {
        throw new Error(`It looks like you passed an Array instead of a DOM node. Did you do something like \`fireEvent.click(screen.getAllBy...\` when you meant to use a \`getBy\` query \`fireEvent.click(screen.getBy...\`?`);
      } else if (typeof node.debug === "function" && typeof node.logTestingPlaygroundURL === "function") {
        throw new Error(`It looks like you passed a \`screen\` object. Did you do something like \`fireEvent.click(screen, ...\` when you meant to use a query, e.g. \`fireEvent.click(screen.getBy..., \`?`);
      } else {
        throw new Error(`The given node is not an Element, the node type is: ${typeof node}.`);
      }
    }
    function checkContainerType(container) {
      if (!container || !(typeof container.querySelector === "function") || !(typeof container.querySelectorAll === "function")) {
        throw new TypeError(`Expected container to be an Element, a Document or a DocumentFragment but got ${getTypeName(container)}.`);
      }
      function getTypeName(object) {
        if (typeof object === "object") {
          return object === null ? "null" : object.constructor.name;
        }
        return typeof object;
      }
    }
  }
});

// node_modules/@testing-library/dom/dist/pretty-dom.js
var require_pretty_dom = __commonJS({
  "node_modules/@testing-library/dom/dist/pretty-dom.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.logDOM = void 0;
    exports.prettyDOM = prettyDOM2;
    exports.prettyFormat = void 0;
    var prettyFormat2 = _interopRequireWildcard(require_build());
    exports.prettyFormat = prettyFormat2;
    var _DOMElementFilter = _interopRequireDefault(require_DOMElementFilter());
    var _getUserCodeFrame = require_get_user_code_frame();
    var _helpers = require_helpers();
    var _config = require_config();
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = new WeakMap();
      var cacheNodeInterop = new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    var shouldHighlight = () => {
      let colors;
      try {
        var _process, _process$env;
        colors = JSON.parse((_process = process) == null ? void 0 : (_process$env = _process.env) == null ? void 0 : _process$env.COLORS);
      } catch (e) {
      }
      if (typeof colors === "boolean") {
        return colors;
      } else {
        return typeof process !== "undefined" && process.versions !== void 0 && process.versions.node !== void 0;
      }
    };
    var {
      DOMCollection
    } = prettyFormat2.plugins;
    var ELEMENT_NODE = 1;
    var COMMENT_NODE = 8;
    function filterCommentsAndDefaultIgnoreTagsTags(value) {
      return value.nodeType !== COMMENT_NODE && (value.nodeType !== ELEMENT_NODE || !value.matches((0, _config.getConfig)().defaultIgnore));
    }
    function prettyDOM2(dom, maxLength, options = {}) {
      if (!dom) {
        dom = (0, _helpers.getDocument)().body;
      }
      if (typeof maxLength !== "number") {
        maxLength = typeof process !== "undefined" && process.env.DEBUG_PRINT_LIMIT || 7e3;
      }
      if (maxLength === 0) {
        return "";
      }
      if (dom.documentElement) {
        dom = dom.documentElement;
      }
      let domTypeName = typeof dom;
      if (domTypeName === "object") {
        domTypeName = dom.constructor.name;
      } else {
        dom = {};
      }
      if (!("outerHTML" in dom)) {
        throw new TypeError(`Expected an element or document but got ${domTypeName}`);
      }
      const {
        filterNode = filterCommentsAndDefaultIgnoreTagsTags,
        ...prettyFormatOptions
      } = options;
      const debugContent = prettyFormat2.format(dom, {
        plugins: [(0, _DOMElementFilter.default)(filterNode), DOMCollection],
        printFunctionName: false,
        highlight: shouldHighlight(),
        ...prettyFormatOptions
      });
      return maxLength !== void 0 && dom.outerHTML.length > maxLength ? `${debugContent.slice(0, maxLength)}...` : debugContent;
    }
    var logDOM2 = (...args) => {
      const userCodeFrame = (0, _getUserCodeFrame.getUserCodeFrame)();
      if (userCodeFrame) {
        console.log(`${prettyDOM2(...args)}

${userCodeFrame}`);
      } else {
        console.log(prettyDOM2(...args));
      }
    };
    exports.logDOM = logDOM2;
  }
});

// node_modules/@testing-library/dom/dist/config.js
var require_config = __commonJS({
  "node_modules/@testing-library/dom/dist/config.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.configure = configure2;
    exports.getConfig = getConfig2;
    exports.runWithExpensiveErrorDiagnosticsDisabled = runWithExpensiveErrorDiagnosticsDisabled;
    var _prettyDom = require_pretty_dom();
    var config = {
      testIdAttribute: "data-testid",
      asyncUtilTimeout: 1e3,
      asyncWrapper: (cb) => cb(),
      unstable_advanceTimersWrapper: (cb) => cb(),
      eventWrapper: (cb) => cb(),
      defaultHidden: false,
      defaultIgnore: "script, style",
      showOriginalStackTrace: false,
      throwSuggestions: false,
      getElementError(message, container) {
        const prettifiedDOM = (0, _prettyDom.prettyDOM)(container);
        const error2 = new Error([message, `Ignored nodes: comments, ${config.defaultIgnore}
${prettifiedDOM}`].filter(Boolean).join("\n\n"));
        error2.name = "TestingLibraryElementError";
        return error2;
      },
      _disableExpensiveErrorDiagnostics: false,
      computedStyleSupportsPseudoElements: false
    };
    function runWithExpensiveErrorDiagnosticsDisabled(callback) {
      try {
        config._disableExpensiveErrorDiagnostics = true;
        return callback();
      } finally {
        config._disableExpensiveErrorDiagnostics = false;
      }
    }
    function configure2(newConfig) {
      if (typeof newConfig === "function") {
        newConfig = newConfig(config);
      }
      config = {
        ...config,
        ...newConfig
      };
    }
    function getConfig2() {
      return config;
    }
  }
});

// node_modules/@testing-library/dom/dist/label-helpers.js
var require_label_helpers = __commonJS({
  "node_modules/@testing-library/dom/dist/label-helpers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getLabelContent = getLabelContent;
    exports.getLabels = getLabels;
    exports.getRealLabels = getRealLabels;
    var _helpers = require_helpers();
    var labelledNodeNames = ["button", "meter", "output", "progress", "select", "textarea", "input"];
    function getTextContent(node) {
      if (labelledNodeNames.includes(node.nodeName.toLowerCase())) {
        return "";
      }
      if (node.nodeType === _helpers.TEXT_NODE)
        return node.textContent;
      return Array.from(node.childNodes).map((childNode) => getTextContent(childNode)).join("");
    }
    function getLabelContent(element) {
      let textContent;
      if (element.tagName.toLowerCase() === "label") {
        textContent = getTextContent(element);
      } else {
        textContent = element.value || element.textContent;
      }
      return textContent;
    }
    function getRealLabels(element) {
      if (element.labels !== void 0) {
        var _labels;
        return (_labels = element.labels) != null ? _labels : [];
      }
      if (!isLabelable(element))
        return [];
      const labels = element.ownerDocument.querySelectorAll("label");
      return Array.from(labels).filter((label) => label.control === element);
    }
    function isLabelable(element) {
      return /BUTTON|METER|OUTPUT|PROGRESS|SELECT|TEXTAREA/.test(element.tagName) || element.tagName === "INPUT" && element.getAttribute("type") !== "hidden";
    }
    function getLabels(container, element, {
      selector = "*"
    } = {}) {
      const ariaLabelledBy = element.getAttribute("aria-labelledby");
      const labelsId = ariaLabelledBy ? ariaLabelledBy.split(" ") : [];
      return labelsId.length ? labelsId.map((labelId) => {
        const labellingElement = container.querySelector(`[id="${labelId}"]`);
        return labellingElement ? {
          content: getLabelContent(labellingElement),
          formControl: null
        } : {
          content: "",
          formControl: null
        };
      }) : Array.from(getRealLabels(element)).map((label) => {
        const textToMatch = getLabelContent(label);
        const formControlSelector = "button, input, meter, output, progress, select, textarea";
        const labelledFormControl = Array.from(label.querySelectorAll(formControlSelector)).filter((formControlElement) => formControlElement.matches(selector))[0];
        return {
          content: textToMatch,
          formControl: labelledFormControl
        };
      });
    }
  }
});

// node_modules/@testing-library/dom/dist/matches.js
var require_matches = __commonJS({
  "node_modules/@testing-library/dom/dist/matches.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.fuzzyMatches = fuzzyMatches;
    exports.getDefaultNormalizer = getDefaultNormalizer2;
    exports.makeNormalizer = makeNormalizer;
    exports.matches = matches;
    function assertNotNullOrUndefined(matcher) {
      if (matcher === null || matcher === void 0) {
        throw new Error(`It looks like ${matcher} was passed instead of a matcher. Did you do something like getByText(${matcher})?`);
      }
    }
    function fuzzyMatches(textToMatch, node, matcher, normalizer) {
      if (typeof textToMatch !== "string") {
        return false;
      }
      assertNotNullOrUndefined(matcher);
      const normalizedText = normalizer(textToMatch);
      if (typeof matcher === "string" || typeof matcher === "number") {
        return normalizedText.toLowerCase().includes(matcher.toString().toLowerCase());
      } else if (typeof matcher === "function") {
        return matcher(normalizedText, node);
      } else {
        return matchRegExp(matcher, normalizedText);
      }
    }
    function matches(textToMatch, node, matcher, normalizer) {
      if (typeof textToMatch !== "string") {
        return false;
      }
      assertNotNullOrUndefined(matcher);
      const normalizedText = normalizer(textToMatch);
      if (matcher instanceof Function) {
        return matcher(normalizedText, node);
      } else if (matcher instanceof RegExp) {
        return matchRegExp(matcher, normalizedText);
      } else {
        return normalizedText === String(matcher);
      }
    }
    function getDefaultNormalizer2({
      trim: trim2 = true,
      collapseWhitespace = true
    } = {}) {
      return (text) => {
        let normalizedText = text;
        normalizedText = trim2 ? normalizedText.trim() : normalizedText;
        normalizedText = collapseWhitespace ? normalizedText.replace(/\s+/g, " ") : normalizedText;
        return normalizedText;
      };
    }
    function makeNormalizer({
      trim: trim2,
      collapseWhitespace,
      normalizer
    }) {
      if (!normalizer) {
        return getDefaultNormalizer2({
          trim: trim2,
          collapseWhitespace
        });
      }
      if (typeof trim2 !== "undefined" || typeof collapseWhitespace !== "undefined") {
        throw new Error('trim and collapseWhitespace are not supported with a normalizer. If you want to use the default trim and collapseWhitespace logic in your normalizer, use "getDefaultNormalizer({trim, collapseWhitespace})" and compose that into your normalizer');
      }
      return normalizer;
    }
    function matchRegExp(matcher, text) {
      const match = matcher.test(text);
      if (matcher.global && matcher.lastIndex !== 0) {
        console.warn(`To match all elements we had to reset the lastIndex of the RegExp because the global flag is enabled. We encourage to remove the global flag from the RegExp.`);
        matcher.lastIndex = 0;
      }
      return match;
    }
  }
});

// node_modules/@testing-library/dom/dist/get-node-text.js
var require_get_node_text = __commonJS({
  "node_modules/@testing-library/dom/dist/get-node-text.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getNodeText = getNodeText2;
    var _helpers = require_helpers();
    function getNodeText2(node) {
      if (node.matches("input[type=submit], input[type=button], input[type=reset]")) {
        return node.value;
      }
      return Array.from(node.childNodes).filter((child) => child.nodeType === _helpers.TEXT_NODE && Boolean(child.textContent)).map((c) => c.textContent).join("");
    }
  }
});

// node_modules/dom-accessibility-api/dist/polyfills/array.from.js
var require_array_from2 = __commonJS({
  "node_modules/dom-accessibility-api/dist/polyfills/array.from.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.default = arrayFrom;
    var toStr = Object.prototype.toString;
    function isCallable3(fn) {
      return typeof fn === "function" || toStr.call(fn) === "[object Function]";
    }
    function toInteger(value) {
      var number = Number(value);
      if (isNaN(number)) {
        return 0;
      }
      if (number === 0 || !isFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    }
    var maxSafeInteger = Math.pow(2, 53) - 1;
    function toLength2(value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    }
    function arrayFrom(arrayLike, mapFn) {
      var C = Array;
      var items = Object(arrayLike);
      if (arrayLike == null) {
        throw new TypeError("Array.from requires an array-like object - not null or undefined");
      }
      if (typeof mapFn !== "undefined") {
        if (!isCallable3(mapFn)) {
          throw new TypeError("Array.from: when provided, the second argument must be a function");
        }
      }
      var len = toLength2(items.length);
      var A = isCallable3(C) ? Object(new C(len)) : new Array(len);
      var k = 0;
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = mapFn(kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      A.length = len;
      return A;
    }
  }
});

// node_modules/dom-accessibility-api/dist/polyfills/SetLike.js
var require_SetLike = __commonJS({
  "node_modules/dom-accessibility-api/dist/polyfills/SetLike.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.default = void 0;
    function _classCallCheck4(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties4(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass4(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties4(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties4(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    function _defineProperty2(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var SetLike = /* @__PURE__ */ function() {
      function SetLike2() {
        var items = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        _classCallCheck4(this, SetLike2);
        _defineProperty2(this, "items", void 0);
        this.items = items;
      }
      _createClass4(SetLike2, [{
        key: "add",
        value: function add(value) {
          if (this.has(value) === false) {
            this.items.push(value);
          }
          return this;
        }
      }, {
        key: "clear",
        value: function clear() {
          this.items = [];
        }
      }, {
        key: "delete",
        value: function _delete(value) {
          var previousLength = this.items.length;
          this.items = this.items.filter(function(item) {
            return item !== value;
          });
          return previousLength !== this.items.length;
        }
      }, {
        key: "forEach",
        value: function forEach2(callbackfn) {
          var _this = this;
          this.items.forEach(function(item) {
            callbackfn(item, item, _this);
          });
        }
      }, {
        key: "has",
        value: function has(value) {
          return this.items.indexOf(value) !== -1;
        }
      }, {
        key: "size",
        get: function get() {
          return this.items.length;
        }
      }]);
      return SetLike2;
    }();
    var _default = typeof Set === "undefined" ? Set : SetLike;
    exports.default = _default;
  }
});

// node_modules/dom-accessibility-api/dist/getRole.js
var require_getRole = __commonJS({
  "node_modules/dom-accessibility-api/dist/getRole.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.default = getRole;
    exports.getLocalName = getLocalName;
    function getLocalName(element) {
      var _element$localName;
      return (_element$localName = element.localName) !== null && _element$localName !== void 0 ? _element$localName : element.tagName.toLowerCase();
    }
    var localNameToRoleMappings = {
      article: "article",
      aside: "complementary",
      button: "button",
      datalist: "listbox",
      dd: "definition",
      details: "group",
      dialog: "dialog",
      dt: "term",
      fieldset: "group",
      figure: "figure",
      form: "form",
      footer: "contentinfo",
      h1: "heading",
      h2: "heading",
      h3: "heading",
      h4: "heading",
      h5: "heading",
      h6: "heading",
      header: "banner",
      hr: "separator",
      html: "document",
      legend: "legend",
      li: "listitem",
      math: "math",
      main: "main",
      menu: "list",
      nav: "navigation",
      ol: "list",
      optgroup: "group",
      option: "option",
      output: "status",
      progress: "progressbar",
      section: "region",
      summary: "button",
      table: "table",
      tbody: "rowgroup",
      textarea: "textbox",
      tfoot: "rowgroup",
      td: "cell",
      th: "columnheader",
      thead: "rowgroup",
      tr: "row",
      ul: "list"
    };
    var prohibitedAttributes = {
      caption: new Set(["aria-label", "aria-labelledby"]),
      code: new Set(["aria-label", "aria-labelledby"]),
      deletion: new Set(["aria-label", "aria-labelledby"]),
      emphasis: new Set(["aria-label", "aria-labelledby"]),
      generic: new Set(["aria-label", "aria-labelledby", "aria-roledescription"]),
      insertion: new Set(["aria-label", "aria-labelledby"]),
      paragraph: new Set(["aria-label", "aria-labelledby"]),
      presentation: new Set(["aria-label", "aria-labelledby"]),
      strong: new Set(["aria-label", "aria-labelledby"]),
      subscript: new Set(["aria-label", "aria-labelledby"]),
      superscript: new Set(["aria-label", "aria-labelledby"])
    };
    function hasGlobalAriaAttributes(element, role) {
      return [
        "aria-atomic",
        "aria-busy",
        "aria-controls",
        "aria-current",
        "aria-describedby",
        "aria-details",
        "aria-dropeffect",
        "aria-flowto",
        "aria-grabbed",
        "aria-hidden",
        "aria-keyshortcuts",
        "aria-label",
        "aria-labelledby",
        "aria-live",
        "aria-owns",
        "aria-relevant",
        "aria-roledescription"
      ].some(function(attributeName) {
        var _prohibitedAttributes;
        return element.hasAttribute(attributeName) && !((_prohibitedAttributes = prohibitedAttributes[role]) !== null && _prohibitedAttributes !== void 0 && _prohibitedAttributes.has(attributeName));
      });
    }
    function ignorePresentationalRole(element, implicitRole) {
      return hasGlobalAriaAttributes(element, implicitRole);
    }
    function getRole(element) {
      var explicitRole = getExplicitRole(element);
      if (explicitRole === null || explicitRole === "presentation") {
        var implicitRole = getImplicitRole(element);
        if (explicitRole !== "presentation" || ignorePresentationalRole(element, implicitRole || "")) {
          return implicitRole;
        }
      }
      return explicitRole;
    }
    function getImplicitRole(element) {
      var mappedByTag = localNameToRoleMappings[getLocalName(element)];
      if (mappedByTag !== void 0) {
        return mappedByTag;
      }
      switch (getLocalName(element)) {
        case "a":
        case "area":
        case "link":
          if (element.hasAttribute("href")) {
            return "link";
          }
          break;
        case "img":
          if (element.getAttribute("alt") === "" && !ignorePresentationalRole(element, "img")) {
            return "presentation";
          }
          return "img";
        case "input": {
          var _ref = element, type = _ref.type;
          switch (type) {
            case "button":
            case "image":
            case "reset":
            case "submit":
              return "button";
            case "checkbox":
            case "radio":
              return type;
            case "range":
              return "slider";
            case "email":
            case "tel":
            case "text":
            case "url":
              if (element.hasAttribute("list")) {
                return "combobox";
              }
              return "textbox";
            case "search":
              if (element.hasAttribute("list")) {
                return "combobox";
              }
              return "searchbox";
            case "number":
              return "spinbutton";
            default:
              return null;
          }
        }
        case "select":
          if (element.hasAttribute("multiple") || element.size > 1) {
            return "listbox";
          }
          return "combobox";
      }
      return null;
    }
    function getExplicitRole(element) {
      var role = element.getAttribute("role");
      if (role !== null) {
        var explicitRole = role.trim().split(" ")[0];
        if (explicitRole.length > 0) {
          return explicitRole;
        }
      }
      return null;
    }
  }
});

// node_modules/dom-accessibility-api/dist/util.js
var require_util = __commonJS({
  "node_modules/dom-accessibility-api/dist/util.js"(exports) {
    "use strict";
    function _typeof2(obj) {
      "@babel/helpers - typeof";
      return _typeof2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof2(obj);
    }
    exports.__esModule = true;
    exports.hasAnyConcreteRoles = hasAnyConcreteRoles;
    exports.isElement = isElement;
    exports.isHTMLFieldSetElement = isHTMLFieldSetElement;
    exports.isHTMLInputElement = isHTMLInputElement;
    exports.isHTMLLegendElement = isHTMLLegendElement;
    exports.isHTMLOptGroupElement = isHTMLOptGroupElement;
    exports.isHTMLSelectElement = isHTMLSelectElement;
    exports.isHTMLSlotElement = isHTMLSlotElement;
    exports.isHTMLTableCaptionElement = isHTMLTableCaptionElement;
    exports.isHTMLTableElement = isHTMLTableElement;
    exports.isHTMLTextAreaElement = isHTMLTextAreaElement;
    exports.isSVGElement = isSVGElement;
    exports.isSVGSVGElement = isSVGSVGElement;
    exports.isSVGTitleElement = isSVGTitleElement;
    exports.queryIdRefs = queryIdRefs;
    exports.safeWindow = safeWindow;
    var _getRole = _interopRequireWildcard(require_getRole());
    exports.getLocalName = _getRole.getLocalName;
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = new WeakMap();
      var cacheNodeInterop = new WeakMap();
      return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof2(obj) !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function isElement(node) {
      return node !== null && node.nodeType === node.ELEMENT_NODE;
    }
    function isHTMLTableCaptionElement(node) {
      return isElement(node) && (0, _getRole.getLocalName)(node) === "caption";
    }
    function isHTMLInputElement(node) {
      return isElement(node) && (0, _getRole.getLocalName)(node) === "input";
    }
    function isHTMLOptGroupElement(node) {
      return isElement(node) && (0, _getRole.getLocalName)(node) === "optgroup";
    }
    function isHTMLSelectElement(node) {
      return isElement(node) && (0, _getRole.getLocalName)(node) === "select";
    }
    function isHTMLTableElement(node) {
      return isElement(node) && (0, _getRole.getLocalName)(node) === "table";
    }
    function isHTMLTextAreaElement(node) {
      return isElement(node) && (0, _getRole.getLocalName)(node) === "textarea";
    }
    function safeWindow(node) {
      var _ref = node.ownerDocument === null ? node : node.ownerDocument, defaultView = _ref.defaultView;
      if (defaultView === null) {
        throw new TypeError("no window available");
      }
      return defaultView;
    }
    function isHTMLFieldSetElement(node) {
      return isElement(node) && (0, _getRole.getLocalName)(node) === "fieldset";
    }
    function isHTMLLegendElement(node) {
      return isElement(node) && (0, _getRole.getLocalName)(node) === "legend";
    }
    function isHTMLSlotElement(node) {
      return isElement(node) && (0, _getRole.getLocalName)(node) === "slot";
    }
    function isSVGElement(node) {
      return isElement(node) && node.ownerSVGElement !== void 0;
    }
    function isSVGSVGElement(node) {
      return isElement(node) && (0, _getRole.getLocalName)(node) === "svg";
    }
    function isSVGTitleElement(node) {
      return isSVGElement(node) && (0, _getRole.getLocalName)(node) === "title";
    }
    function queryIdRefs(node, attributeName) {
      if (isElement(node) && node.hasAttribute(attributeName)) {
        var ids = node.getAttribute(attributeName).split(" ");
        var root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
        return ids.map(function(id) {
          return root.getElementById(id);
        }).filter(function(element) {
          return element !== null;
        });
      }
      return [];
    }
    function hasAnyConcreteRoles(node, roles) {
      if (isElement(node)) {
        return roles.indexOf((0, _getRole.default)(node)) !== -1;
      }
      return false;
    }
  }
});

// node_modules/dom-accessibility-api/dist/accessible-name-and-description.js
var require_accessible_name_and_description = __commonJS({
  "node_modules/dom-accessibility-api/dist/accessible-name-and-description.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.computeTextAlternative = computeTextAlternative;
    var _array = _interopRequireDefault(require_array_from2());
    var _SetLike = _interopRequireDefault(require_SetLike());
    var _util = require_util();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function asFlatString(s) {
      return s.trim().replace(/\s\s+/g, " ");
    }
    function isHidden(node, getComputedStyleImplementation) {
      if (!(0, _util.isElement)(node)) {
        return false;
      }
      if (node.hasAttribute("hidden") || node.getAttribute("aria-hidden") === "true") {
        return true;
      }
      var style = getComputedStyleImplementation(node);
      return style.getPropertyValue("display") === "none" || style.getPropertyValue("visibility") === "hidden";
    }
    function isControl(node) {
      return (0, _util.hasAnyConcreteRoles)(node, ["button", "combobox", "listbox", "textbox"]) || hasAbstractRole(node, "range");
    }
    function hasAbstractRole(node, role) {
      if (!(0, _util.isElement)(node)) {
        return false;
      }
      switch (role) {
        case "range":
          return (0, _util.hasAnyConcreteRoles)(node, ["meter", "progressbar", "scrollbar", "slider", "spinbutton"]);
        default:
          throw new TypeError("No knowledge about abstract role '".concat(role, "'. This is likely a bug :("));
      }
    }
    function querySelectorAllSubtree(element, selectors) {
      var elements = (0, _array.default)(element.querySelectorAll(selectors));
      (0, _util.queryIdRefs)(element, "aria-owns").forEach(function(root) {
        elements.push.apply(elements, (0, _array.default)(root.querySelectorAll(selectors)));
      });
      return elements;
    }
    function querySelectedOptions(listbox) {
      if ((0, _util.isHTMLSelectElement)(listbox)) {
        return listbox.selectedOptions || querySelectorAllSubtree(listbox, "[selected]");
      }
      return querySelectorAllSubtree(listbox, '[aria-selected="true"]');
    }
    function isMarkedPresentational(node) {
      return (0, _util.hasAnyConcreteRoles)(node, ["none", "presentation"]);
    }
    function isNativeHostLanguageTextAlternativeElement(node) {
      return (0, _util.isHTMLTableCaptionElement)(node);
    }
    function allowsNameFromContent(node) {
      return (0, _util.hasAnyConcreteRoles)(node, ["button", "cell", "checkbox", "columnheader", "gridcell", "heading", "label", "legend", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "row", "rowheader", "switch", "tab", "tooltip", "treeitem"]);
    }
    function isDescendantOfNativeHostLanguageTextAlternativeElement(node) {
      return false;
    }
    function computeTooltipAttributeValue(node) {
      return null;
    }
    function getValueOfTextbox(element) {
      if ((0, _util.isHTMLInputElement)(element) || (0, _util.isHTMLTextAreaElement)(element)) {
        return element.value;
      }
      return element.textContent || "";
    }
    function getTextualContent(declaration) {
      var content = declaration.getPropertyValue("content");
      if (/^["'].*["']$/.test(content)) {
        return content.slice(1, -1);
      }
      return "";
    }
    function isLabelableElement(element) {
      var localName = (0, _util.getLocalName)(element);
      return localName === "button" || localName === "input" && element.getAttribute("type") !== "hidden" || localName === "meter" || localName === "output" || localName === "progress" || localName === "select" || localName === "textarea";
    }
    function findLabelableElement(element) {
      if (isLabelableElement(element)) {
        return element;
      }
      var labelableElement = null;
      element.childNodes.forEach(function(childNode) {
        if (labelableElement === null && (0, _util.isElement)(childNode)) {
          var descendantLabelableElement = findLabelableElement(childNode);
          if (descendantLabelableElement !== null) {
            labelableElement = descendantLabelableElement;
          }
        }
      });
      return labelableElement;
    }
    function getControlOfLabel(label) {
      if (label.control !== void 0) {
        return label.control;
      }
      var htmlFor = label.getAttribute("for");
      if (htmlFor !== null) {
        return label.ownerDocument.getElementById(htmlFor);
      }
      return findLabelableElement(label);
    }
    function getLabels(element) {
      var labelsProperty = element.labels;
      if (labelsProperty === null) {
        return labelsProperty;
      }
      if (labelsProperty !== void 0) {
        return (0, _array.default)(labelsProperty);
      }
      if (!isLabelableElement(element)) {
        return null;
      }
      var document2 = element.ownerDocument;
      return (0, _array.default)(document2.querySelectorAll("label")).filter(function(label) {
        return getControlOfLabel(label) === element;
      });
    }
    function getSlotContents(slot) {
      var assignedNodes = slot.assignedNodes();
      if (assignedNodes.length === 0) {
        return (0, _array.default)(slot.childNodes);
      }
      return assignedNodes;
    }
    function computeTextAlternative(root) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var consultedNodes = new _SetLike.default();
      var window2 = (0, _util.safeWindow)(root);
      var _options$compute = options.compute, compute = _options$compute === void 0 ? "name" : _options$compute, _options$computedStyl = options.computedStyleSupportsPseudoElements, computedStyleSupportsPseudoElements = _options$computedStyl === void 0 ? options.getComputedStyle !== void 0 : _options$computedStyl, _options$getComputedS = options.getComputedStyle, getComputedStyle = _options$getComputedS === void 0 ? window2.getComputedStyle.bind(window2) : _options$getComputedS, _options$hidden = options.hidden, hidden = _options$hidden === void 0 ? false : _options$hidden;
      function computeMiscTextAlternative(node, context) {
        var accumulatedText = "";
        if ((0, _util.isElement)(node) && computedStyleSupportsPseudoElements) {
          var pseudoBefore = getComputedStyle(node, "::before");
          var beforeContent = getTextualContent(pseudoBefore);
          accumulatedText = "".concat(beforeContent, " ").concat(accumulatedText);
        }
        var childNodes = (0, _util.isHTMLSlotElement)(node) ? getSlotContents(node) : (0, _array.default)(node.childNodes).concat((0, _util.queryIdRefs)(node, "aria-owns"));
        childNodes.forEach(function(child) {
          var result = computeTextAlternative2(child, {
            isEmbeddedInLabel: context.isEmbeddedInLabel,
            isReferenced: false,
            recursion: true
          });
          var display = (0, _util.isElement)(child) ? getComputedStyle(child).getPropertyValue("display") : "inline";
          var separator = display !== "inline" ? " " : "";
          accumulatedText += "".concat(separator).concat(result).concat(separator);
        });
        if ((0, _util.isElement)(node) && computedStyleSupportsPseudoElements) {
          var pseudoAfter = getComputedStyle(node, "::after");
          var afterContent = getTextualContent(pseudoAfter);
          accumulatedText = "".concat(accumulatedText, " ").concat(afterContent);
        }
        return accumulatedText.trim();
      }
      function computeElementTextAlternative(node) {
        if (!(0, _util.isElement)(node)) {
          return null;
        }
        function useAttribute(element, attributeName) {
          var attribute = element.getAttributeNode(attributeName);
          if (attribute !== null && !consultedNodes.has(attribute) && attribute.value.trim() !== "") {
            consultedNodes.add(attribute);
            return attribute.value;
          }
          return null;
        }
        if ((0, _util.isHTMLFieldSetElement)(node)) {
          consultedNodes.add(node);
          var children = (0, _array.default)(node.childNodes);
          for (var i = 0; i < children.length; i += 1) {
            var child = children[i];
            if ((0, _util.isHTMLLegendElement)(child)) {
              return computeTextAlternative2(child, {
                isEmbeddedInLabel: false,
                isReferenced: false,
                recursion: false
              });
            }
          }
        } else if ((0, _util.isHTMLTableElement)(node)) {
          consultedNodes.add(node);
          var _children = (0, _array.default)(node.childNodes);
          for (var _i = 0; _i < _children.length; _i += 1) {
            var _child = _children[_i];
            if ((0, _util.isHTMLTableCaptionElement)(_child)) {
              return computeTextAlternative2(_child, {
                isEmbeddedInLabel: false,
                isReferenced: false,
                recursion: false
              });
            }
          }
        } else if ((0, _util.isSVGSVGElement)(node)) {
          consultedNodes.add(node);
          var _children2 = (0, _array.default)(node.childNodes);
          for (var _i2 = 0; _i2 < _children2.length; _i2 += 1) {
            var _child2 = _children2[_i2];
            if ((0, _util.isSVGTitleElement)(_child2)) {
              return _child2.textContent;
            }
          }
          return null;
        } else if ((0, _util.getLocalName)(node) === "img" || (0, _util.getLocalName)(node) === "area") {
          var nameFromAlt = useAttribute(node, "alt");
          if (nameFromAlt !== null) {
            return nameFromAlt;
          }
        } else if ((0, _util.isHTMLOptGroupElement)(node)) {
          var nameFromLabel = useAttribute(node, "label");
          if (nameFromLabel !== null) {
            return nameFromLabel;
          }
        }
        if ((0, _util.isHTMLInputElement)(node) && (node.type === "button" || node.type === "submit" || node.type === "reset")) {
          var nameFromValue = useAttribute(node, "value");
          if (nameFromValue !== null) {
            return nameFromValue;
          }
          if (node.type === "submit") {
            return "Submit";
          }
          if (node.type === "reset") {
            return "Reset";
          }
        }
        var labels = getLabels(node);
        if (labels !== null && labels.length !== 0) {
          consultedNodes.add(node);
          return (0, _array.default)(labels).map(function(element) {
            return computeTextAlternative2(element, {
              isEmbeddedInLabel: true,
              isReferenced: false,
              recursion: true
            });
          }).filter(function(label) {
            return label.length > 0;
          }).join(" ");
        }
        if ((0, _util.isHTMLInputElement)(node) && node.type === "image") {
          var _nameFromAlt = useAttribute(node, "alt");
          if (_nameFromAlt !== null) {
            return _nameFromAlt;
          }
          var nameFromTitle = useAttribute(node, "title");
          if (nameFromTitle !== null) {
            return nameFromTitle;
          }
          return "Submit Query";
        }
        if ((0, _util.hasAnyConcreteRoles)(node, ["button"])) {
          var nameFromSubTree = computeMiscTextAlternative(node, {
            isEmbeddedInLabel: false,
            isReferenced: false
          });
          if (nameFromSubTree !== "") {
            return nameFromSubTree;
          }
          return useAttribute(node, "title");
        }
        return useAttribute(node, "title");
      }
      function computeTextAlternative2(current, context) {
        if (consultedNodes.has(current)) {
          return "";
        }
        if (!hidden && isHidden(current, getComputedStyle) && !context.isReferenced) {
          consultedNodes.add(current);
          return "";
        }
        var labelElements = (0, _util.queryIdRefs)(current, "aria-labelledby");
        if (compute === "name" && !context.isReferenced && labelElements.length > 0) {
          return labelElements.map(function(element) {
            return computeTextAlternative2(element, {
              isEmbeddedInLabel: context.isEmbeddedInLabel,
              isReferenced: true,
              recursion: false
            });
          }).join(" ");
        }
        var skipToStep2E = context.recursion && isControl(current) && compute === "name";
        if (!skipToStep2E) {
          var ariaLabel = ((0, _util.isElement)(current) && current.getAttribute("aria-label") || "").trim();
          if (ariaLabel !== "" && compute === "name") {
            consultedNodes.add(current);
            return ariaLabel;
          }
          if (!isMarkedPresentational(current)) {
            var elementTextAlternative = computeElementTextAlternative(current);
            if (elementTextAlternative !== null) {
              consultedNodes.add(current);
              return elementTextAlternative;
            }
          }
        }
        if ((0, _util.hasAnyConcreteRoles)(current, ["menu"])) {
          consultedNodes.add(current);
          return "";
        }
        if (skipToStep2E || context.isEmbeddedInLabel || context.isReferenced) {
          if ((0, _util.hasAnyConcreteRoles)(current, ["combobox", "listbox"])) {
            consultedNodes.add(current);
            var selectedOptions = querySelectedOptions(current);
            if (selectedOptions.length === 0) {
              return (0, _util.isHTMLInputElement)(current) ? current.value : "";
            }
            return (0, _array.default)(selectedOptions).map(function(selectedOption) {
              return computeTextAlternative2(selectedOption, {
                isEmbeddedInLabel: context.isEmbeddedInLabel,
                isReferenced: false,
                recursion: true
              });
            }).join(" ");
          }
          if (hasAbstractRole(current, "range")) {
            consultedNodes.add(current);
            if (current.hasAttribute("aria-valuetext")) {
              return current.getAttribute("aria-valuetext");
            }
            if (current.hasAttribute("aria-valuenow")) {
              return current.getAttribute("aria-valuenow");
            }
            return current.getAttribute("value") || "";
          }
          if ((0, _util.hasAnyConcreteRoles)(current, ["textbox"])) {
            consultedNodes.add(current);
            return getValueOfTextbox(current);
          }
        }
        if (allowsNameFromContent(current) || (0, _util.isElement)(current) && context.isReferenced || isNativeHostLanguageTextAlternativeElement(current) || isDescendantOfNativeHostLanguageTextAlternativeElement(current)) {
          consultedNodes.add(current);
          return computeMiscTextAlternative(current, {
            isEmbeddedInLabel: context.isEmbeddedInLabel,
            isReferenced: false
          });
        }
        if (current.nodeType === current.TEXT_NODE) {
          consultedNodes.add(current);
          return current.textContent || "";
        }
        if (context.recursion) {
          consultedNodes.add(current);
          return computeMiscTextAlternative(current, {
            isEmbeddedInLabel: context.isEmbeddedInLabel,
            isReferenced: false
          });
        }
        var tooltipAttributeValue = computeTooltipAttributeValue(current);
        if (tooltipAttributeValue !== null) {
          consultedNodes.add(current);
          return tooltipAttributeValue;
        }
        consultedNodes.add(current);
        return "";
      }
      return asFlatString(computeTextAlternative2(root, {
        isEmbeddedInLabel: false,
        isReferenced: compute === "description",
        recursion: false
      }));
    }
  }
});

// node_modules/dom-accessibility-api/dist/accessible-description.js
var require_accessible_description = __commonJS({
  "node_modules/dom-accessibility-api/dist/accessible-description.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.computeAccessibleDescription = computeAccessibleDescription;
    var _accessibleNameAndDescription = require_accessible_name_and_description();
    var _util = require_util();
    function ownKeys(object, enumerableOnly) {
      var keys2 = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys2.push.apply(keys2, symbols);
      }
      return keys2;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty2(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _defineProperty2(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function computeAccessibleDescription(root) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var description = (0, _util.queryIdRefs)(root, "aria-describedby").map(function(element) {
        return (0, _accessibleNameAndDescription.computeTextAlternative)(element, _objectSpread(_objectSpread({}, options), {}, {
          compute: "description"
        }));
      }).join(" ");
      if (description === "") {
        var title = root.getAttribute("title");
        description = title === null ? "" : title;
      }
      return description;
    }
  }
});

// node_modules/dom-accessibility-api/dist/accessible-name.js
var require_accessible_name = __commonJS({
  "node_modules/dom-accessibility-api/dist/accessible-name.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.computeAccessibleName = computeAccessibleName;
    var _accessibleNameAndDescription = require_accessible_name_and_description();
    var _util = require_util();
    function prohibitsNaming(node) {
      return (0, _util.hasAnyConcreteRoles)(node, ["caption", "code", "deletion", "emphasis", "generic", "insertion", "paragraph", "presentation", "strong", "subscript", "superscript"]);
    }
    function computeAccessibleName(root) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (prohibitsNaming(root)) {
        return "";
      }
      return (0, _accessibleNameAndDescription.computeTextAlternative)(root, options);
    }
  }
});

// node_modules/dom-accessibility-api/dist/is-inaccessible.js
var require_is_inaccessible = __commonJS({
  "node_modules/dom-accessibility-api/dist/is-inaccessible.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.isInaccessible = isInaccessible2;
    exports.isSubtreeInaccessible = isSubtreeInaccessible;
    function isInaccessible2(element) {
      var _element$ownerDocumen;
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var _options$getComputedS = options.getComputedStyle, getComputedStyle = _options$getComputedS === void 0 ? (_element$ownerDocumen = element.ownerDocument.defaultView) === null || _element$ownerDocumen === void 0 ? void 0 : _element$ownerDocumen.getComputedStyle : _options$getComputedS, _options$isSubtreeIna = options.isSubtreeInaccessible, isSubtreeInaccessibleImpl = _options$isSubtreeIna === void 0 ? isSubtreeInaccessible : _options$isSubtreeIna;
      if (typeof getComputedStyle !== "function") {
        throw new TypeError("Owner document of the element needs to have an associated window.");
      }
      if (getComputedStyle(element).visibility === "hidden") {
        return true;
      }
      var currentElement = element;
      while (currentElement) {
        if (isSubtreeInaccessibleImpl(currentElement, {
          getComputedStyle
        })) {
          return true;
        }
        currentElement = currentElement.parentElement;
      }
      return false;
    }
    function isSubtreeInaccessible(element) {
      var _element$ownerDocumen2;
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var _options$getComputedS2 = options.getComputedStyle, getComputedStyle = _options$getComputedS2 === void 0 ? (_element$ownerDocumen2 = element.ownerDocument.defaultView) === null || _element$ownerDocumen2 === void 0 ? void 0 : _element$ownerDocumen2.getComputedStyle : _options$getComputedS2;
      if (typeof getComputedStyle !== "function") {
        throw new TypeError("Owner document of the element needs to have an associated window.");
      }
      if (element.hidden === true) {
        return true;
      }
      if (element.getAttribute("aria-hidden") === "true") {
        return true;
      }
      if (getComputedStyle(element).display === "none") {
        return true;
      }
      return false;
    }
  }
});

// node_modules/dom-accessibility-api/dist/index.js
var require_dist = __commonJS({
  "node_modules/dom-accessibility-api/dist/index.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _exportNames = {
      computeAccessibleDescription: true,
      computeAccessibleName: true,
      getRole: true
    };
    exports.getRole = exports.computeAccessibleName = exports.computeAccessibleDescription = void 0;
    var _accessibleDescription = require_accessible_description();
    exports.computeAccessibleDescription = _accessibleDescription.computeAccessibleDescription;
    var _accessibleName = require_accessible_name();
    exports.computeAccessibleName = _accessibleName.computeAccessibleName;
    var _getRole = _interopRequireDefault(require_getRole());
    exports.getRole = _getRole.default;
    var _isInaccessible = require_is_inaccessible();
    Object.keys(_isInaccessible).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (Object.prototype.hasOwnProperty.call(_exportNames, key))
        return;
      if (key in exports && exports[key] === _isInaccessible[key])
        return;
      exports[key] = _isInaccessible[key];
    });
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
  }
});

// node_modules/aria-query/lib/util/iteratorProxy.js
var require_iteratorProxy = __commonJS({
  "node_modules/aria-query/lib/util/iteratorProxy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function iteratorProxy() {
      var values2 = this;
      var index = 0;
      var iter = {
        "@@iterator": function iterator() {
          return iter;
        },
        next: function next2() {
          if (index < values2.length) {
            var value = values2[index];
            index = index + 1;
            return {
              done: false,
              value
            };
          } else {
            return {
              done: true
            };
          }
        }
      };
      return iter;
    }
    var _default = iteratorProxy;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/util/iterationDecorator.js
var require_iterationDecorator = __commonJS({
  "node_modules/aria-query/lib/util/iterationDecorator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = iterationDecorator;
    var _iteratorProxy = _interopRequireDefault(require_iteratorProxy());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _typeof2(obj) {
      "@babel/helpers - typeof";
      return _typeof2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof2(obj);
    }
    function iterationDecorator(collection, entries2) {
      if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
        Object.defineProperty(collection, Symbol.iterator, {
          value: _iteratorProxy.default.bind(entries2)
        });
      }
      return collection;
    }
  }
});

// node_modules/aria-query/lib/ariaPropsMap.js
var require_ariaPropsMap = __commonJS({
  "node_modules/aria-query/lib/ariaPropsMap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _iterationDecorator = _interopRequireDefault(require_iterationDecorator());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _slicedToArray2(arr, i) {
      return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest2();
    }
    function _nonIterableRest2() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _iterableToArrayLimit2(arr, i) {
      var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
      if (_i == null)
        return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _s, _e;
      try {
        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i)
            break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null)
            _i["return"]();
        } finally {
          if (_d)
            throw _e;
        }
      }
      return _arr;
    }
    function _arrayWithHoles2(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    function _createForOfIteratorHelper(o, allowArrayLike) {
      var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
      if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray2(o)) || allowArrayLike && o && typeof o.length === "number") {
          if (it)
            o = it;
          var i = 0;
          var F = function F2() {
          };
          return { s: F, n: function n() {
            if (i >= o.length)
              return { done: true };
            return { done: false, value: o[i++] };
          }, e: function e(_e2) {
            throw _e2;
          }, f: F };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var normalCompletion = true, didErr = false, err;
      return { s: function s() {
        it = it.call(o);
      }, n: function n() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      }, e: function e(_e3) {
        didErr = true;
        err = _e3;
      }, f: function f() {
        try {
          if (!normalCompletion && it.return != null)
            it.return();
        } finally {
          if (didErr)
            throw err;
        }
      } };
    }
    function _unsupportedIterableToArray2(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray2(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray2(o, minLen);
    }
    function _arrayLikeToArray2(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    var properties = [["aria-activedescendant", {
      "type": "id"
    }], ["aria-atomic", {
      "type": "boolean"
    }], ["aria-autocomplete", {
      "type": "token",
      "values": ["inline", "list", "both", "none"]
    }], ["aria-busy", {
      "type": "boolean"
    }], ["aria-checked", {
      "type": "tristate"
    }], ["aria-colcount", {
      type: "integer"
    }], ["aria-colindex", {
      type: "integer"
    }], ["aria-colspan", {
      type: "integer"
    }], ["aria-controls", {
      "type": "idlist"
    }], ["aria-current", {
      type: "token",
      values: ["page", "step", "location", "date", "time", true, false]
    }], ["aria-describedby", {
      "type": "idlist"
    }], ["aria-details", {
      "type": "id"
    }], ["aria-disabled", {
      "type": "boolean"
    }], ["aria-dropeffect", {
      "type": "tokenlist",
      "values": ["copy", "execute", "link", "move", "none", "popup"]
    }], ["aria-errormessage", {
      "type": "id"
    }], ["aria-expanded", {
      "type": "boolean",
      "allowundefined": true
    }], ["aria-flowto", {
      "type": "idlist"
    }], ["aria-grabbed", {
      "type": "boolean",
      "allowundefined": true
    }], ["aria-haspopup", {
      "type": "token",
      "values": [false, true, "menu", "listbox", "tree", "grid", "dialog"]
    }], ["aria-hidden", {
      "type": "boolean",
      "allowundefined": true
    }], ["aria-invalid", {
      "type": "token",
      "values": ["grammar", false, "spelling", true]
    }], ["aria-keyshortcuts", {
      type: "string"
    }], ["aria-label", {
      "type": "string"
    }], ["aria-labelledby", {
      "type": "idlist"
    }], ["aria-level", {
      "type": "integer"
    }], ["aria-live", {
      "type": "token",
      "values": ["assertive", "off", "polite"]
    }], ["aria-modal", {
      type: "boolean"
    }], ["aria-multiline", {
      "type": "boolean"
    }], ["aria-multiselectable", {
      "type": "boolean"
    }], ["aria-orientation", {
      "type": "token",
      "values": ["vertical", "undefined", "horizontal"]
    }], ["aria-owns", {
      "type": "idlist"
    }], ["aria-placeholder", {
      type: "string"
    }], ["aria-posinset", {
      "type": "integer"
    }], ["aria-pressed", {
      "type": "tristate"
    }], ["aria-readonly", {
      "type": "boolean"
    }], ["aria-relevant", {
      "type": "tokenlist",
      "values": ["additions", "all", "removals", "text"]
    }], ["aria-required", {
      "type": "boolean"
    }], ["aria-roledescription", {
      type: "string"
    }], ["aria-rowcount", {
      type: "integer"
    }], ["aria-rowindex", {
      type: "integer"
    }], ["aria-rowspan", {
      type: "integer"
    }], ["aria-selected", {
      "type": "boolean",
      "allowundefined": true
    }], ["aria-setsize", {
      "type": "integer"
    }], ["aria-sort", {
      "type": "token",
      "values": ["ascending", "descending", "none", "other"]
    }], ["aria-valuemax", {
      "type": "number"
    }], ["aria-valuemin", {
      "type": "number"
    }], ["aria-valuenow", {
      "type": "number"
    }], ["aria-valuetext", {
      "type": "string"
    }]];
    var ariaPropsMap = {
      entries: function entries2() {
        return properties;
      },
      forEach: function forEach2(fn) {
        var thisArg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        var _iterator = _createForOfIteratorHelper(properties), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var _step$value = _slicedToArray2(_step.value, 2), key = _step$value[0], values2 = _step$value[1];
            fn.call(thisArg, values2, key, properties);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      },
      get: function get(key) {
        var item = properties.find(function(tuple) {
          return tuple[0] === key ? true : false;
        });
        return item && item[1];
      },
      has: function has(key) {
        return !!ariaPropsMap.get(key);
      },
      keys: function keys2() {
        return properties.map(function(_ref) {
          var _ref2 = _slicedToArray2(_ref, 1), key = _ref2[0];
          return key;
        });
      },
      values: function values2() {
        return properties.map(function(_ref3) {
          var _ref4 = _slicedToArray2(_ref3, 2), values3 = _ref4[1];
          return values3;
        });
      }
    };
    var _default = (0, _iterationDecorator.default)(ariaPropsMap, ariaPropsMap.entries());
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/domMap.js
var require_domMap = __commonJS({
  "node_modules/aria-query/lib/domMap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _iterationDecorator = _interopRequireDefault(require_iterationDecorator());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _slicedToArray2(arr, i) {
      return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest2();
    }
    function _nonIterableRest2() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _iterableToArrayLimit2(arr, i) {
      var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
      if (_i == null)
        return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _s, _e;
      try {
        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i)
            break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null)
            _i["return"]();
        } finally {
          if (_d)
            throw _e;
        }
      }
      return _arr;
    }
    function _arrayWithHoles2(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    function _createForOfIteratorHelper(o, allowArrayLike) {
      var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
      if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray2(o)) || allowArrayLike && o && typeof o.length === "number") {
          if (it)
            o = it;
          var i = 0;
          var F = function F2() {
          };
          return { s: F, n: function n() {
            if (i >= o.length)
              return { done: true };
            return { done: false, value: o[i++] };
          }, e: function e(_e2) {
            throw _e2;
          }, f: F };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var normalCompletion = true, didErr = false, err;
      return { s: function s() {
        it = it.call(o);
      }, n: function n() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      }, e: function e(_e3) {
        didErr = true;
        err = _e3;
      }, f: function f() {
        try {
          if (!normalCompletion && it.return != null)
            it.return();
        } finally {
          if (didErr)
            throw err;
        }
      } };
    }
    function _unsupportedIterableToArray2(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray2(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray2(o, minLen);
    }
    function _arrayLikeToArray2(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    var dom = [["a", {
      reserved: false
    }], ["abbr", {
      reserved: false
    }], ["acronym", {
      reserved: false
    }], ["address", {
      reserved: false
    }], ["applet", {
      reserved: false
    }], ["area", {
      reserved: false
    }], ["article", {
      reserved: false
    }], ["aside", {
      reserved: false
    }], ["audio", {
      reserved: false
    }], ["b", {
      reserved: false
    }], ["base", {
      reserved: true
    }], ["bdi", {
      reserved: false
    }], ["bdo", {
      reserved: false
    }], ["big", {
      reserved: false
    }], ["blink", {
      reserved: false
    }], ["blockquote", {
      reserved: false
    }], ["body", {
      reserved: false
    }], ["br", {
      reserved: false
    }], ["button", {
      reserved: false
    }], ["canvas", {
      reserved: false
    }], ["caption", {
      reserved: false
    }], ["center", {
      reserved: false
    }], ["cite", {
      reserved: false
    }], ["code", {
      reserved: false
    }], ["col", {
      reserved: true
    }], ["colgroup", {
      reserved: true
    }], ["content", {
      reserved: false
    }], ["data", {
      reserved: false
    }], ["datalist", {
      reserved: false
    }], ["dd", {
      reserved: false
    }], ["del", {
      reserved: false
    }], ["details", {
      reserved: false
    }], ["dfn", {
      reserved: false
    }], ["dialog", {
      reserved: false
    }], ["dir", {
      reserved: false
    }], ["div", {
      reserved: false
    }], ["dl", {
      reserved: false
    }], ["dt", {
      reserved: false
    }], ["em", {
      reserved: false
    }], ["embed", {
      reserved: false
    }], ["fieldset", {
      reserved: false
    }], ["figcaption", {
      reserved: false
    }], ["figure", {
      reserved: false
    }], ["font", {
      reserved: false
    }], ["footer", {
      reserved: false
    }], ["form", {
      reserved: false
    }], ["frame", {
      reserved: false
    }], ["frameset", {
      reserved: false
    }], ["h1", {
      reserved: false
    }], ["h2", {
      reserved: false
    }], ["h3", {
      reserved: false
    }], ["h4", {
      reserved: false
    }], ["h5", {
      reserved: false
    }], ["h6", {
      reserved: false
    }], ["head", {
      reserved: true
    }], ["header", {
      reserved: false
    }], ["hgroup", {
      reserved: false
    }], ["hr", {
      reserved: false
    }], ["html", {
      reserved: true
    }], ["i", {
      reserved: false
    }], ["iframe", {
      reserved: false
    }], ["img", {
      reserved: false
    }], ["input", {
      reserved: false
    }], ["ins", {
      reserved: false
    }], ["kbd", {
      reserved: false
    }], ["keygen", {
      reserved: false
    }], ["label", {
      reserved: false
    }], ["legend", {
      reserved: false
    }], ["li", {
      reserved: false
    }], ["link", {
      reserved: true
    }], ["main", {
      reserved: false
    }], ["map", {
      reserved: false
    }], ["mark", {
      reserved: false
    }], ["marquee", {
      reserved: false
    }], ["menu", {
      reserved: false
    }], ["menuitem", {
      reserved: false
    }], ["meta", {
      reserved: true
    }], ["meter", {
      reserved: false
    }], ["nav", {
      reserved: false
    }], ["noembed", {
      reserved: true
    }], ["noscript", {
      reserved: true
    }], ["object", {
      reserved: false
    }], ["ol", {
      reserved: false
    }], ["optgroup", {
      reserved: false
    }], ["option", {
      reserved: false
    }], ["output", {
      reserved: false
    }], ["p", {
      reserved: false
    }], ["param", {
      reserved: true
    }], ["picture", {
      reserved: true
    }], ["pre", {
      reserved: false
    }], ["progress", {
      reserved: false
    }], ["q", {
      reserved: false
    }], ["rp", {
      reserved: false
    }], ["rt", {
      reserved: false
    }], ["rtc", {
      reserved: false
    }], ["ruby", {
      reserved: false
    }], ["s", {
      reserved: false
    }], ["samp", {
      reserved: false
    }], ["script", {
      reserved: true
    }], ["section", {
      reserved: false
    }], ["select", {
      reserved: false
    }], ["small", {
      reserved: false
    }], ["source", {
      reserved: true
    }], ["spacer", {
      reserved: false
    }], ["span", {
      reserved: false
    }], ["strike", {
      reserved: false
    }], ["strong", {
      reserved: false
    }], ["style", {
      reserved: true
    }], ["sub", {
      reserved: false
    }], ["summary", {
      reserved: false
    }], ["sup", {
      reserved: false
    }], ["table", {
      reserved: false
    }], ["tbody", {
      reserved: false
    }], ["td", {
      reserved: false
    }], ["textarea", {
      reserved: false
    }], ["tfoot", {
      reserved: false
    }], ["th", {
      reserved: false
    }], ["thead", {
      reserved: false
    }], ["time", {
      reserved: false
    }], ["title", {
      reserved: true
    }], ["tr", {
      reserved: false
    }], ["track", {
      reserved: true
    }], ["tt", {
      reserved: false
    }], ["u", {
      reserved: false
    }], ["ul", {
      reserved: false
    }], ["var", {
      reserved: false
    }], ["video", {
      reserved: false
    }], ["wbr", {
      reserved: false
    }], ["xmp", {
      reserved: false
    }]];
    var domMap = {
      entries: function entries2() {
        return dom;
      },
      forEach: function forEach2(fn) {
        var thisArg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        var _iterator = _createForOfIteratorHelper(dom), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var _step$value = _slicedToArray2(_step.value, 2), key = _step$value[0], values2 = _step$value[1];
            fn.call(thisArg, values2, key, dom);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      },
      get: function get(key) {
        var item = dom.find(function(tuple) {
          return tuple[0] === key ? true : false;
        });
        return item && item[1];
      },
      has: function has(key) {
        return !!domMap.get(key);
      },
      keys: function keys2() {
        return dom.map(function(_ref) {
          var _ref2 = _slicedToArray2(_ref, 1), key = _ref2[0];
          return key;
        });
      },
      values: function values2() {
        return dom.map(function(_ref3) {
          var _ref4 = _slicedToArray2(_ref3, 2), values3 = _ref4[1];
          return values3;
        });
      }
    };
    var _default = (0, _iterationDecorator.default)(domMap, domMap.entries());
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/abstract/commandRole.js
var require_commandRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/abstract/commandRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var commandRole = {
      abstract: true,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "menuitem"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "widget"]]
    };
    var _default = commandRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/abstract/compositeRole.js
var require_compositeRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/abstract/compositeRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var compositeRole = {
      abstract: true,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-activedescendant": null,
        "aria-disabled": null
      },
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "widget"]]
    };
    var _default = compositeRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/abstract/inputRole.js
var require_inputRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/abstract/inputRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var inputRole = {
      abstract: true,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null
      },
      relatedConcepts: [{
        concept: {
          name: "input"
        },
        module: "XForms"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "widget"]]
    };
    var _default = inputRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/abstract/landmarkRole.js
var require_landmarkRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/abstract/landmarkRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var landmarkRole = {
      abstract: true,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = landmarkRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/abstract/rangeRole.js
var require_rangeRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/abstract/rangeRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var rangeRole = {
      abstract: true,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-valuemax": null,
        "aria-valuemin": null,
        "aria-valuenow": null
      },
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure"]]
    };
    var _default = rangeRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/abstract/roletypeRole.js
var require_roletypeRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/abstract/roletypeRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var roletypeRole = {
      abstract: true,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: [],
      prohibitedProps: [],
      props: {
        "aria-atomic": null,
        "aria-busy": null,
        "aria-controls": null,
        "aria-current": null,
        "aria-describedby": null,
        "aria-details": null,
        "aria-dropeffect": null,
        "aria-flowto": null,
        "aria-grabbed": null,
        "aria-hidden": null,
        "aria-keyshortcuts": null,
        "aria-label": null,
        "aria-labelledby": null,
        "aria-live": null,
        "aria-owns": null,
        "aria-relevant": null,
        "aria-roledescription": null
      },
      relatedConcepts: [{
        concept: {
          name: "rel"
        },
        module: "HTML"
      }, {
        concept: {
          name: "role"
        },
        module: "XHTML"
      }, {
        concept: {
          name: "type"
        },
        module: "Dublin Core"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: []
    };
    var _default = roletypeRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/abstract/sectionRole.js
var require_sectionRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/abstract/sectionRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var sectionRole = {
      abstract: true,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: [],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "frontmatter"
        },
        module: "DTB"
      }, {
        concept: {
          name: "level"
        },
        module: "DTB"
      }, {
        concept: {
          name: "level"
        },
        module: "SMIL"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure"]]
    };
    var _default = sectionRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/abstract/sectionheadRole.js
var require_sectionheadRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/abstract/sectionheadRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var sectionheadRole = {
      abstract: true,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure"]]
    };
    var _default = sectionheadRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/abstract/selectRole.js
var require_selectRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/abstract/selectRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var selectRole = {
      abstract: true,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-orientation": null
      },
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "widget", "composite"], ["roletype", "structure", "section", "group"]]
    };
    var _default = selectRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/abstract/structureRole.js
var require_structureRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/abstract/structureRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var structureRole = {
      abstract: true,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: [],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype"]]
    };
    var _default = structureRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/abstract/widgetRole.js
var require_widgetRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/abstract/widgetRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var widgetRole = {
      abstract: true,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: [],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype"]]
    };
    var _default = widgetRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/abstract/windowRole.js
var require_windowRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/abstract/windowRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var windowRole = {
      abstract: true,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-modal": null
      },
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype"]]
    };
    var _default = windowRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/ariaAbstractRoles.js
var require_ariaAbstractRoles = __commonJS({
  "node_modules/aria-query/lib/etc/roles/ariaAbstractRoles.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _commandRole = _interopRequireDefault(require_commandRole());
    var _compositeRole = _interopRequireDefault(require_compositeRole());
    var _inputRole = _interopRequireDefault(require_inputRole());
    var _landmarkRole = _interopRequireDefault(require_landmarkRole());
    var _rangeRole = _interopRequireDefault(require_rangeRole());
    var _roletypeRole = _interopRequireDefault(require_roletypeRole());
    var _sectionRole = _interopRequireDefault(require_sectionRole());
    var _sectionheadRole = _interopRequireDefault(require_sectionheadRole());
    var _selectRole = _interopRequireDefault(require_selectRole());
    var _structureRole = _interopRequireDefault(require_structureRole());
    var _widgetRole = _interopRequireDefault(require_widgetRole());
    var _windowRole = _interopRequireDefault(require_windowRole());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var ariaAbstractRoles = [["command", _commandRole.default], ["composite", _compositeRole.default], ["input", _inputRole.default], ["landmark", _landmarkRole.default], ["range", _rangeRole.default], ["roletype", _roletypeRole.default], ["section", _sectionRole.default], ["sectionhead", _sectionheadRole.default], ["select", _selectRole.default], ["structure", _structureRole.default], ["widget", _widgetRole.default], ["window", _windowRole.default]];
    var _default = ariaAbstractRoles;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/alertRole.js
var require_alertRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/alertRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var alertRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-atomic": "true",
        "aria-live": "assertive"
      },
      relatedConcepts: [{
        concept: {
          name: "alert"
        },
        module: "XForms"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = alertRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/alertdialogRole.js
var require_alertdialogRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/alertdialogRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var alertdialogRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "alert"
        },
        module: "XForms"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "alert"], ["roletype", "window", "dialog"]]
    };
    var _default = alertdialogRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/applicationRole.js
var require_applicationRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/applicationRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var applicationRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-activedescendant": null,
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "Device Independence Delivery Unit"
        }
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure"]]
    };
    var _default = applicationRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/articleRole.js
var require_articleRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/articleRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var articleRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-posinset": null,
        "aria-setsize": null
      },
      relatedConcepts: [{
        concept: {
          name: "article"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "document"]]
    };
    var _default = articleRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/bannerRole.js
var require_bannerRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/bannerRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var bannerRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          constraints: ["direct descendant of document"],
          name: "header"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = bannerRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/blockquoteRole.js
var require_blockquoteRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/blockquoteRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var blockquoteRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = blockquoteRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/buttonRole.js
var require_buttonRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/buttonRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var buttonRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-pressed": null
      },
      relatedConcepts: [{
        concept: {
          attributes: [{
            constraints: ["set"],
            name: "aria-pressed"
          }, {
            name: "type",
            value: "checkbox"
          }],
          name: "input"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            name: "aria-expanded",
            value: "false"
          }],
          name: "summary"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            name: "aria-expanded",
            value: "true"
          }],
          constraints: ["direct descendant of details element with the open attribute defined"],
          name: "summary"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            name: "type",
            value: "button"
          }],
          name: "input"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            name: "type",
            value: "image"
          }],
          name: "input"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            name: "type",
            value: "reset"
          }],
          name: "input"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            name: "type",
            value: "submit"
          }],
          name: "input"
        },
        module: "HTML"
      }, {
        concept: {
          name: "button"
        },
        module: "HTML"
      }, {
        concept: {
          name: "trigger"
        },
        module: "XForms"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "widget", "command"]]
    };
    var _default = buttonRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/captionRole.js
var require_captionRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/captionRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var captionRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["prohibited"],
      prohibitedProps: ["aria-label", "aria-labelledby"],
      props: {},
      relatedConcepts: [],
      requireContextRole: ["figure", "grid", "table"],
      requiredContextRole: ["figure", "grid", "table"],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = captionRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/cellRole.js
var require_cellRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/cellRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var cellRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {
        "aria-colindex": null,
        "aria-colspan": null,
        "aria-rowindex": null,
        "aria-rowspan": null
      },
      relatedConcepts: [{
        concept: {
          constraints: ["descendant of table"],
          name: "td"
        },
        module: "HTML"
      }],
      requireContextRole: ["row"],
      requiredContextRole: ["row"],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = cellRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/checkboxRole.js
var require_checkboxRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/checkboxRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var checkboxRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {
        "aria-checked": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-invalid": null,
        "aria-readonly": null,
        "aria-required": null
      },
      relatedConcepts: [{
        concept: {
          attributes: [{
            name: "type",
            value: "checkbox"
          }],
          name: "input"
        },
        module: "HTML"
      }, {
        concept: {
          name: "option"
        },
        module: "ARIA"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {
        "aria-checked": null
      },
      superClass: [["roletype", "widget", "input"]]
    };
    var _default = checkboxRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/codeRole.js
var require_codeRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/codeRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var codeRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["prohibited"],
      prohibitedProps: ["aria-label", "aria-labelledby"],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = codeRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/columnheaderRole.js
var require_columnheaderRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/columnheaderRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var columnheaderRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {
        "aria-sort": null
      },
      relatedConcepts: [{
        attributes: [{
          name: "scope",
          value: "col"
        }],
        concept: {
          name: "th"
        },
        module: "HTML"
      }],
      requireContextRole: ["row"],
      requiredContextRole: ["row"],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "cell"], ["roletype", "structure", "section", "cell", "gridcell"], ["roletype", "widget", "gridcell"], ["roletype", "structure", "sectionhead"]]
    };
    var _default = columnheaderRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/comboboxRole.js
var require_comboboxRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/comboboxRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var comboboxRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-activedescendant": null,
        "aria-autocomplete": null,
        "aria-errormessage": null,
        "aria-invalid": null,
        "aria-readonly": null,
        "aria-required": null,
        "aria-expanded": "false",
        "aria-haspopup": "listbox"
      },
      relatedConcepts: [{
        concept: {
          attributes: [{
            constraints: ["set"],
            name: "list"
          }, {
            name: "type",
            value: "email"
          }],
          name: "input"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            constraints: ["set"],
            name: "list"
          }, {
            name: "type",
            value: "search"
          }],
          name: "input"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            constraints: ["set"],
            name: "list"
          }, {
            name: "type",
            value: "tel"
          }],
          name: "input"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            constraints: ["set"],
            name: "list"
          }, {
            name: "type",
            value: "text"
          }],
          name: "input"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            constraints: ["set"],
            name: "list"
          }, {
            name: "type",
            value: "url"
          }],
          name: "input"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            constraints: ["set"],
            name: "list"
          }, {
            name: "type",
            value: "url"
          }],
          name: "input"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            constraints: ["undefined"],
            name: "multiple"
          }, {
            constraints: ["undefined"],
            name: "size"
          }],
          name: "select"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            constraints: ["undefined"],
            name: "multiple"
          }, {
            name: "size",
            value: 1
          }],
          name: "select"
        },
        module: "HTML"
      }, {
        concept: {
          name: "select"
        },
        module: "XForms"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {
        "aria-controls": null,
        "aria-expanded": "false"
      },
      superClass: [["roletype", "widget", "input"]]
    };
    var _default = comboboxRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/complementaryRole.js
var require_complementaryRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/complementaryRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var complementaryRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "aside"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = complementaryRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/contentinfoRole.js
var require_contentinfoRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/contentinfoRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var contentinfoRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          constraints: ["direct descendant of document"],
          name: "footer"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = contentinfoRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/definitionRole.js
var require_definitionRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/definitionRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var definitionRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "dd"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = definitionRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/deletionRole.js
var require_deletionRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/deletionRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var deletionRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["prohibited"],
      prohibitedProps: ["aria-label", "aria-labelledby"],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = deletionRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/dialogRole.js
var require_dialogRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/dialogRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var dialogRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "dialog"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "window"]]
    };
    var _default = dialogRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/directoryRole.js
var require_directoryRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/directoryRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var directoryRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        module: "DAISY Guide"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "list"]]
    };
    var _default = directoryRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/documentRole.js
var require_documentRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/documentRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var documentRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "Device Independence Delivery Unit"
        }
      }, {
        concept: {
          name: "body"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure"]]
    };
    var _default = documentRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/emphasisRole.js
var require_emphasisRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/emphasisRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var emphasisRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["prohibited"],
      prohibitedProps: ["aria-label", "aria-labelledby"],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = emphasisRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/feedRole.js
var require_feedRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/feedRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var feedRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [["article"]],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "list"]]
    };
    var _default = feedRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/figureRole.js
var require_figureRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/figureRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var figureRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "figure"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = figureRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/formRole.js
var require_formRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/formRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var formRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          attributes: [{
            constraints: ["set"],
            name: "aria-label"
          }],
          name: "form"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            constraints: ["set"],
            name: "aria-labelledby"
          }],
          name: "form"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            constraints: ["set"],
            name: "name"
          }],
          name: "form"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = formRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/genericRole.js
var require_genericRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/genericRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var genericRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["prohibited"],
      prohibitedProps: ["aria-label", "aria-labelledby"],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "span"
        },
        module: "HTML"
      }, {
        concept: {
          name: "div"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure"]]
    };
    var _default = genericRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/gridRole.js
var require_gridRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/gridRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var gridRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-multiselectable": null,
        "aria-readonly": null
      },
      relatedConcepts: [{
        concept: {
          attributes: [{
            name: "role",
            value: "grid"
          }],
          name: "table"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [["row"], ["row", "rowgroup"]],
      requiredProps: {},
      superClass: [["roletype", "widget", "composite"], ["roletype", "structure", "section", "table"]]
    };
    var _default = gridRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/gridcellRole.js
var require_gridcellRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/gridcellRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var gridcellRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null,
        "aria-readonly": null,
        "aria-required": null,
        "aria-selected": null
      },
      relatedConcepts: [{
        concept: {
          attributes: [{
            name: "role",
            value: "gridcell"
          }],
          name: "td"
        },
        module: "HTML"
      }],
      requireContextRole: ["row"],
      requiredContextRole: ["row"],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "cell"], ["roletype", "widget"]]
    };
    var _default = gridcellRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/groupRole.js
var require_groupRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/groupRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var groupRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-activedescendant": null,
        "aria-disabled": null
      },
      relatedConcepts: [{
        concept: {
          name: "details"
        },
        module: "HTML"
      }, {
        concept: {
          name: "fieldset"
        },
        module: "HTML"
      }, {
        concept: {
          name: "optgroup"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = groupRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/headingRole.js
var require_headingRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/headingRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var headingRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {
        "aria-level": "2"
      },
      relatedConcepts: [{
        concept: {
          name: "h1"
        },
        module: "HTML"
      }, {
        concept: {
          name: "h2"
        },
        module: "HTML"
      }, {
        concept: {
          name: "h3"
        },
        module: "HTML"
      }, {
        concept: {
          name: "h4"
        },
        module: "HTML"
      }, {
        concept: {
          name: "h5"
        },
        module: "HTML"
      }, {
        concept: {
          name: "h6"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {
        "aria-level": "2"
      },
      superClass: [["roletype", "structure", "sectionhead"]]
    };
    var _default = headingRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/imgRole.js
var require_imgRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/imgRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var imgRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          attributes: [{
            constraints: ["set"],
            name: "alt"
          }],
          name: "img"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            constraints: ["undefined"],
            name: "alt"
          }],
          name: "img"
        },
        module: "HTML"
      }, {
        concept: {
          name: "imggroup"
        },
        module: "DTB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = imgRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/insertionRole.js
var require_insertionRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/insertionRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var insertionRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["prohibited"],
      prohibitedProps: ["aria-label", "aria-labelledby"],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = insertionRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/linkRole.js
var require_linkRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/linkRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var linkRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-expanded": null,
        "aria-haspopup": null
      },
      relatedConcepts: [{
        concept: {
          attributes: [{
            name: "href"
          }],
          name: "a"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            name: "href"
          }],
          name: "area"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            name: "href"
          }],
          name: "link"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "widget", "command"]]
    };
    var _default = linkRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/listRole.js
var require_listRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/listRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var listRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "menu"
        },
        module: "HTML"
      }, {
        concept: {
          name: "ol"
        },
        module: "HTML"
      }, {
        concept: {
          name: "ul"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [["listitem"]],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = listRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/listboxRole.js
var require_listboxRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/listboxRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var listboxRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-invalid": null,
        "aria-multiselectable": null,
        "aria-readonly": null,
        "aria-required": null,
        "aria-orientation": "vertical"
      },
      relatedConcepts: [{
        concept: {
          attributes: [{
            constraints: [">1"],
            name: "size"
          }, {
            name: "multiple"
          }],
          name: "select"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            constraints: [">1"],
            name: "size"
          }],
          name: "select"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            name: "multiple"
          }],
          name: "select"
        },
        module: "HTML"
      }, {
        concept: {
          name: "datalist"
        },
        module: "HTML"
      }, {
        concept: {
          name: "list"
        },
        module: "ARIA"
      }, {
        concept: {
          name: "select"
        },
        module: "XForms"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [["option", "group"], ["option"]],
      requiredProps: {},
      superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
    };
    var _default = listboxRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/listitemRole.js
var require_listitemRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/listitemRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var listitemRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-level": null,
        "aria-posinset": null,
        "aria-setsize": null
      },
      relatedConcepts: [{
        concept: {
          constraints: ["direct descendant of ol, ul or menu"],
          name: "li"
        },
        module: "HTML"
      }, {
        concept: {
          name: "item"
        },
        module: "XForms"
      }],
      requireContextRole: ["directory", "list"],
      requiredContextRole: ["directory", "list"],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = listitemRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/logRole.js
var require_logRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/logRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var logRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-live": "polite"
      },
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = logRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/mainRole.js
var require_mainRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/mainRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var mainRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "main"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = mainRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/marqueeRole.js
var require_marqueeRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/marqueeRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var marqueeRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = marqueeRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/mathRole.js
var require_mathRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/mathRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var mathRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "math"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = mathRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/menuRole.js
var require_menuRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/menuRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var menuRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-orientation": "vertical"
      },
      relatedConcepts: [{
        concept: {
          name: "MENU"
        },
        module: "JAPI"
      }, {
        concept: {
          name: "list"
        },
        module: "ARIA"
      }, {
        concept: {
          name: "select"
        },
        module: "XForms"
      }, {
        concept: {
          name: "sidebar"
        },
        module: "DTB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [["menuitem", "group"], ["menuitemradio", "group"], ["menuitemcheckbox", "group"], ["menuitem"], ["menuitemcheckbox"], ["menuitemradio"]],
      requiredProps: {},
      superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
    };
    var _default = menuRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/menubarRole.js
var require_menubarRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/menubarRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var menubarRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-orientation": "horizontal"
      },
      relatedConcepts: [{
        concept: {
          name: "toolbar"
        },
        module: "ARIA"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [["menuitem", "group"], ["menuitemradio", "group"], ["menuitemcheckbox", "group"], ["menuitem"], ["menuitemcheckbox"], ["menuitemradio"]],
      requiredProps: {},
      superClass: [["roletype", "widget", "composite", "select", "menu"], ["roletype", "structure", "section", "group", "select", "menu"]]
    };
    var _default = menubarRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/menuitemRole.js
var require_menuitemRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/menuitemRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var menuitemRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-posinset": null,
        "aria-setsize": null
      },
      relatedConcepts: [{
        concept: {
          name: "MENU_ITEM"
        },
        module: "JAPI"
      }, {
        concept: {
          name: "listitem"
        },
        module: "ARIA"
      }, {
        concept: {
          name: "menuitem"
        },
        module: "HTML"
      }, {
        concept: {
          name: "option"
        },
        module: "ARIA"
      }],
      requireContextRole: ["group", "menu", "menubar"],
      requiredContextRole: ["group", "menu", "menubar"],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "widget", "command"]]
    };
    var _default = menuitemRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/menuitemcheckboxRole.js
var require_menuitemcheckboxRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/menuitemcheckboxRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var menuitemcheckboxRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "menuitem"
        },
        module: "ARIA"
      }],
      requireContextRole: ["group", "menu", "menubar"],
      requiredContextRole: ["group", "menu", "menubar"],
      requiredOwnedElements: [],
      requiredProps: {
        "aria-checked": null
      },
      superClass: [["roletype", "widget", "input", "checkbox"], ["roletype", "widget", "command", "menuitem"]]
    };
    var _default = menuitemcheckboxRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/menuitemradioRole.js
var require_menuitemradioRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/menuitemradioRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var menuitemradioRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "menuitem"
        },
        module: "ARIA"
      }],
      requireContextRole: ["group", "menu", "menubar"],
      requiredContextRole: ["group", "menu", "menubar"],
      requiredOwnedElements: [],
      requiredProps: {
        "aria-checked": null
      },
      superClass: [["roletype", "widget", "input", "checkbox", "menuitemcheckbox"], ["roletype", "widget", "command", "menuitem", "menuitemcheckbox"], ["roletype", "widget", "input", "radio"]]
    };
    var _default = menuitemradioRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/meterRole.js
var require_meterRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/meterRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var meterRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-valuetext": null,
        "aria-valuemax": "100",
        "aria-valuemin": "0"
      },
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {
        "aria-valuenow": null
      },
      superClass: [["roletype", "structure", "range"]]
    };
    var _default = meterRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/navigationRole.js
var require_navigationRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/navigationRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var navigationRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "nav"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = navigationRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/noneRole.js
var require_noneRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/noneRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var noneRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: [],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: []
    };
    var _default = noneRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/noteRole.js
var require_noteRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/noteRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var noteRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = noteRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/optionRole.js
var require_optionRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/optionRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var optionRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {
        "aria-checked": null,
        "aria-posinset": null,
        "aria-setsize": null,
        "aria-selected": "false"
      },
      relatedConcepts: [{
        concept: {
          name: "item"
        },
        module: "XForms"
      }, {
        concept: {
          name: "listitem"
        },
        module: "ARIA"
      }, {
        concept: {
          name: "option"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {
        "aria-selected": "false"
      },
      superClass: [["roletype", "widget", "input"]]
    };
    var _default = optionRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/paragraphRole.js
var require_paragraphRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/paragraphRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var paragraphRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["prohibited"],
      prohibitedProps: ["aria-label", "aria-labelledby"],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = paragraphRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/presentationRole.js
var require_presentationRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/presentationRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var presentationRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["prohibited"],
      prohibitedProps: ["aria-label", "aria-labelledby"],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure"]]
    };
    var _default = presentationRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/progressbarRole.js
var require_progressbarRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/progressbarRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var progressbarRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-valuetext": null
      },
      relatedConcepts: [{
        concept: {
          name: "progress"
        },
        module: "HTML"
      }, {
        concept: {
          name: "status"
        },
        module: "ARIA"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "range"], ["roletype", "widget"]]
    };
    var _default = progressbarRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/radioRole.js
var require_radioRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/radioRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var radioRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {
        "aria-checked": null,
        "aria-posinset": null,
        "aria-setsize": null
      },
      relatedConcepts: [{
        concept: {
          attributes: [{
            name: "type",
            value: "radio"
          }],
          name: "input"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {
        "aria-checked": null
      },
      superClass: [["roletype", "widget", "input"]]
    };
    var _default = radioRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/radiogroupRole.js
var require_radiogroupRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/radiogroupRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var radiogroupRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-errormessage": null,
        "aria-invalid": null,
        "aria-readonly": null,
        "aria-required": null
      },
      relatedConcepts: [{
        concept: {
          name: "list"
        },
        module: "ARIA"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [["radio"]],
      requiredProps: {},
      superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
    };
    var _default = radiogroupRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/regionRole.js
var require_regionRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/regionRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var regionRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          attributes: [{
            constraints: ["set"],
            name: "aria-label"
          }],
          name: "section"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            constraints: ["set"],
            name: "aria-labelledby"
          }],
          name: "section"
        },
        module: "HTML"
      }, {
        concept: {
          name: "Device Independence Glossart perceivable unit"
        }
      }, {
        concept: {
          name: "frame"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = regionRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/rowRole.js
var require_rowRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/rowRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var rowRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {
        "aria-colindex": null,
        "aria-expanded": null,
        "aria-level": null,
        "aria-posinset": null,
        "aria-rowindex": null,
        "aria-selected": null,
        "aria-setsize": null
      },
      relatedConcepts: [{
        concept: {
          name: "tr"
        },
        module: "HTML"
      }],
      requireContextRole: ["grid", "rowgroup", "table", "treegrid"],
      requiredContextRole: ["grid", "rowgroup", "table", "treegrid"],
      requiredOwnedElements: [["cell"], ["columnheader"], ["gridcell"], ["rowheader"]],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "group"], ["roletype", "widget"]]
    };
    var _default = rowRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/rowgroupRole.js
var require_rowgroupRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/rowgroupRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var rowgroupRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "tbody"
        },
        module: "HTML"
      }, {
        concept: {
          name: "tfoot"
        },
        module: "HTML"
      }, {
        concept: {
          name: "thead"
        },
        module: "HTML"
      }],
      requireContextRole: ["grid", "table", "treegrid"],
      requiredContextRole: ["grid", "table", "treegrid"],
      requiredOwnedElements: [["row"]],
      requiredProps: {},
      superClass: [["roletype", "structure"]]
    };
    var _default = rowgroupRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/rowheaderRole.js
var require_rowheaderRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/rowheaderRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var rowheaderRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {
        "aria-sort": null
      },
      relatedConcepts: [{
        concept: {
          attributes: [{
            name: "scope",
            value: "row"
          }],
          name: "th"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            name: "scope",
            value: "rowgroup"
          }],
          name: "th"
        },
        module: "HTML"
      }],
      requireContextRole: ["row", "rowgroup"],
      requiredContextRole: ["row", "rowgroup"],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "cell"], ["roletype", "structure", "section", "cell", "gridcell"], ["roletype", "widget", "gridcell"], ["roletype", "structure", "sectionhead"]]
    };
    var _default = rowheaderRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/scrollbarRole.js
var require_scrollbarRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/scrollbarRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var scrollbarRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-valuetext": null,
        "aria-orientation": "vertical",
        "aria-valuemax": "100",
        "aria-valuemin": "0"
      },
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {
        "aria-controls": null,
        "aria-valuenow": null
      },
      superClass: [["roletype", "structure", "range"], ["roletype", "widget"]]
    };
    var _default = scrollbarRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/searchRole.js
var require_searchRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/searchRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var searchRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = searchRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/searchboxRole.js
var require_searchboxRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/searchboxRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var searchboxRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          attributes: [{
            constraints: ["undefined"],
            name: "list"
          }, {
            name: "type",
            value: "search"
          }],
          name: "input"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "widget", "input", "textbox"]]
    };
    var _default = searchboxRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/separatorRole.js
var require_separatorRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/separatorRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var separatorRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-orientation": "horizontal",
        "aria-valuemax": "100",
        "aria-valuemin": "0",
        "aria-valuenow": null,
        "aria-valuetext": null
      },
      relatedConcepts: [{
        concept: {
          name: "hr"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure"]]
    };
    var _default = separatorRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/sliderRole.js
var require_sliderRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/sliderRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var sliderRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-errormessage": null,
        "aria-haspopup": null,
        "aria-invalid": null,
        "aria-readonly": null,
        "aria-valuetext": null,
        "aria-orientation": "horizontal",
        "aria-valuemax": "100",
        "aria-valuemin": "0"
      },
      relatedConcepts: [{
        concept: {
          attributes: [{
            name: "type",
            value: "range"
          }],
          name: "input"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {
        "aria-valuenow": null
      },
      superClass: [["roletype", "widget", "input"], ["roletype", "structure", "range"]]
    };
    var _default = sliderRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/spinbuttonRole.js
var require_spinbuttonRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/spinbuttonRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var spinbuttonRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-errormessage": null,
        "aria-invalid": null,
        "aria-readonly": null,
        "aria-required": null,
        "aria-valuetext": null,
        "aria-valuenow": "0"
      },
      relatedConcepts: [{
        concept: {
          attributes: [{
            name: "type",
            value: "number"
          }],
          name: "input"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "widget", "composite"], ["roletype", "widget", "input"], ["roletype", "structure", "range"]]
    };
    var _default = spinbuttonRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/statusRole.js
var require_statusRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/statusRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var statusRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-atomic": "true",
        "aria-live": "polite"
      },
      relatedConcepts: [{
        concept: {
          name: "output"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = statusRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/strongRole.js
var require_strongRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/strongRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var strongRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["prohibited"],
      prohibitedProps: ["aria-label", "aria-labelledby"],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = strongRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/subscriptRole.js
var require_subscriptRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/subscriptRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var subscriptRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["prohibited"],
      prohibitedProps: ["aria-label", "aria-labelledby"],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = subscriptRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/superscriptRole.js
var require_superscriptRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/superscriptRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var superscriptRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["prohibited"],
      prohibitedProps: ["aria-label", "aria-labelledby"],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = superscriptRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/switchRole.js
var require_switchRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/switchRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var switchRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "button"
        },
        module: "ARIA"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {
        "aria-checked": null
      },
      superClass: [["roletype", "widget", "input", "checkbox"]]
    };
    var _default = switchRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/tabRole.js
var require_tabRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/tabRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var tabRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-posinset": null,
        "aria-setsize": null,
        "aria-selected": "false"
      },
      relatedConcepts: [],
      requireContextRole: ["tablist"],
      requiredContextRole: ["tablist"],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "sectionhead"], ["roletype", "widget"]]
    };
    var _default = tabRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/tableRole.js
var require_tableRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/tableRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var tableRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-colcount": null,
        "aria-rowcount": null
      },
      relatedConcepts: [{
        concept: {
          name: "table"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [["row"], ["row", "rowgroup"]],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = tableRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/tablistRole.js
var require_tablistRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/tablistRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var tablistRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-level": null,
        "aria-multiselectable": null,
        "aria-orientation": "horizontal"
      },
      relatedConcepts: [{
        module: "DAISY",
        concept: {
          name: "guide"
        }
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [["tab"]],
      requiredProps: {},
      superClass: [["roletype", "widget", "composite"]]
    };
    var _default = tablistRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/tabpanelRole.js
var require_tabpanelRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/tabpanelRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var tabpanelRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = tabpanelRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/termRole.js
var require_termRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/termRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var termRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "dfn"
        },
        module: "HTML"
      }, {
        concept: {
          name: "dt"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = termRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/textboxRole.js
var require_textboxRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/textboxRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var textboxRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-activedescendant": null,
        "aria-autocomplete": null,
        "aria-errormessage": null,
        "aria-haspopup": null,
        "aria-invalid": null,
        "aria-multiline": null,
        "aria-placeholder": null,
        "aria-readonly": null,
        "aria-required": null
      },
      relatedConcepts: [{
        concept: {
          attributes: [{
            constraints: ["undefined"],
            name: "type"
          }, {
            constraints: ["undefined"],
            name: "list"
          }],
          name: "input"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            constraints: ["undefined"],
            name: "list"
          }, {
            name: "type",
            value: "email"
          }],
          name: "input"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            constraints: ["undefined"],
            name: "list"
          }, {
            name: "type",
            value: "tel"
          }],
          name: "input"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            constraints: ["undefined"],
            name: "list"
          }, {
            name: "type",
            value: "text"
          }],
          name: "input"
        },
        module: "HTML"
      }, {
        concept: {
          attributes: [{
            constraints: ["undefined"],
            name: "list"
          }, {
            name: "type",
            value: "url"
          }],
          name: "input"
        },
        module: "HTML"
      }, {
        concept: {
          name: "input"
        },
        module: "XForms"
      }, {
        concept: {
          name: "textarea"
        },
        module: "HTML"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "widget", "input"]]
    };
    var _default = textboxRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/timeRole.js
var require_timeRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/timeRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var timeRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = timeRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/timerRole.js
var require_timerRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/timerRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var timerRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "status"]]
    };
    var _default = timerRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/toolbarRole.js
var require_toolbarRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/toolbarRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var toolbarRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-orientation": "horizontal"
      },
      relatedConcepts: [{
        concept: {
          name: "menubar"
        },
        module: "ARIA"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "group"]]
    };
    var _default = toolbarRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/tooltipRole.js
var require_tooltipRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/tooltipRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var tooltipRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = tooltipRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/treeRole.js
var require_treeRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/treeRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var treeRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-errormessage": null,
        "aria-invalid": null,
        "aria-multiselectable": null,
        "aria-required": null,
        "aria-orientation": "vertical"
      },
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [["treeitem", "group"], ["treeitem"]],
      requiredProps: {},
      superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
    };
    var _default = treeRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/treegridRole.js
var require_treegridRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/treegridRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var treegridRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [["row"], ["row", "rowgroup"]],
      requiredProps: {},
      superClass: [["roletype", "widget", "composite", "grid"], ["roletype", "structure", "section", "table", "grid"], ["roletype", "widget", "composite", "select", "tree"], ["roletype", "structure", "section", "group", "select", "tree"]]
    };
    var _default = treegridRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/literal/treeitemRole.js
var require_treeitemRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/literal/treeitemRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var treeitemRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {
        "aria-expanded": null,
        "aria-haspopup": null
      },
      relatedConcepts: [],
      requireContextRole: ["group", "tree"],
      requiredContextRole: ["group", "tree"],
      requiredOwnedElements: [],
      requiredProps: {
        "aria-selected": null
      },
      superClass: [["roletype", "structure", "section", "listitem"], ["roletype", "widget", "input", "option"]]
    };
    var _default = treeitemRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/ariaLiteralRoles.js
var require_ariaLiteralRoles = __commonJS({
  "node_modules/aria-query/lib/etc/roles/ariaLiteralRoles.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _alertRole = _interopRequireDefault(require_alertRole());
    var _alertdialogRole = _interopRequireDefault(require_alertdialogRole());
    var _applicationRole = _interopRequireDefault(require_applicationRole());
    var _articleRole = _interopRequireDefault(require_articleRole());
    var _bannerRole = _interopRequireDefault(require_bannerRole());
    var _blockquoteRole = _interopRequireDefault(require_blockquoteRole());
    var _buttonRole = _interopRequireDefault(require_buttonRole());
    var _captionRole = _interopRequireDefault(require_captionRole());
    var _cellRole = _interopRequireDefault(require_cellRole());
    var _checkboxRole = _interopRequireDefault(require_checkboxRole());
    var _codeRole = _interopRequireDefault(require_codeRole());
    var _columnheaderRole = _interopRequireDefault(require_columnheaderRole());
    var _comboboxRole = _interopRequireDefault(require_comboboxRole());
    var _complementaryRole = _interopRequireDefault(require_complementaryRole());
    var _contentinfoRole = _interopRequireDefault(require_contentinfoRole());
    var _definitionRole = _interopRequireDefault(require_definitionRole());
    var _deletionRole = _interopRequireDefault(require_deletionRole());
    var _dialogRole = _interopRequireDefault(require_dialogRole());
    var _directoryRole = _interopRequireDefault(require_directoryRole());
    var _documentRole = _interopRequireDefault(require_documentRole());
    var _emphasisRole = _interopRequireDefault(require_emphasisRole());
    var _feedRole = _interopRequireDefault(require_feedRole());
    var _figureRole = _interopRequireDefault(require_figureRole());
    var _formRole = _interopRequireDefault(require_formRole());
    var _genericRole = _interopRequireDefault(require_genericRole());
    var _gridRole = _interopRequireDefault(require_gridRole());
    var _gridcellRole = _interopRequireDefault(require_gridcellRole());
    var _groupRole = _interopRequireDefault(require_groupRole());
    var _headingRole = _interopRequireDefault(require_headingRole());
    var _imgRole = _interopRequireDefault(require_imgRole());
    var _insertionRole = _interopRequireDefault(require_insertionRole());
    var _linkRole = _interopRequireDefault(require_linkRole());
    var _listRole = _interopRequireDefault(require_listRole());
    var _listboxRole = _interopRequireDefault(require_listboxRole());
    var _listitemRole = _interopRequireDefault(require_listitemRole());
    var _logRole = _interopRequireDefault(require_logRole());
    var _mainRole = _interopRequireDefault(require_mainRole());
    var _marqueeRole = _interopRequireDefault(require_marqueeRole());
    var _mathRole = _interopRequireDefault(require_mathRole());
    var _menuRole = _interopRequireDefault(require_menuRole());
    var _menubarRole = _interopRequireDefault(require_menubarRole());
    var _menuitemRole = _interopRequireDefault(require_menuitemRole());
    var _menuitemcheckboxRole = _interopRequireDefault(require_menuitemcheckboxRole());
    var _menuitemradioRole = _interopRequireDefault(require_menuitemradioRole());
    var _meterRole = _interopRequireDefault(require_meterRole());
    var _navigationRole = _interopRequireDefault(require_navigationRole());
    var _noneRole = _interopRequireDefault(require_noneRole());
    var _noteRole = _interopRequireDefault(require_noteRole());
    var _optionRole = _interopRequireDefault(require_optionRole());
    var _paragraphRole = _interopRequireDefault(require_paragraphRole());
    var _presentationRole = _interopRequireDefault(require_presentationRole());
    var _progressbarRole = _interopRequireDefault(require_progressbarRole());
    var _radioRole = _interopRequireDefault(require_radioRole());
    var _radiogroupRole = _interopRequireDefault(require_radiogroupRole());
    var _regionRole = _interopRequireDefault(require_regionRole());
    var _rowRole = _interopRequireDefault(require_rowRole());
    var _rowgroupRole = _interopRequireDefault(require_rowgroupRole());
    var _rowheaderRole = _interopRequireDefault(require_rowheaderRole());
    var _scrollbarRole = _interopRequireDefault(require_scrollbarRole());
    var _searchRole = _interopRequireDefault(require_searchRole());
    var _searchboxRole = _interopRequireDefault(require_searchboxRole());
    var _separatorRole = _interopRequireDefault(require_separatorRole());
    var _sliderRole = _interopRequireDefault(require_sliderRole());
    var _spinbuttonRole = _interopRequireDefault(require_spinbuttonRole());
    var _statusRole = _interopRequireDefault(require_statusRole());
    var _strongRole = _interopRequireDefault(require_strongRole());
    var _subscriptRole = _interopRequireDefault(require_subscriptRole());
    var _superscriptRole = _interopRequireDefault(require_superscriptRole());
    var _switchRole = _interopRequireDefault(require_switchRole());
    var _tabRole = _interopRequireDefault(require_tabRole());
    var _tableRole = _interopRequireDefault(require_tableRole());
    var _tablistRole = _interopRequireDefault(require_tablistRole());
    var _tabpanelRole = _interopRequireDefault(require_tabpanelRole());
    var _termRole = _interopRequireDefault(require_termRole());
    var _textboxRole = _interopRequireDefault(require_textboxRole());
    var _timeRole = _interopRequireDefault(require_timeRole());
    var _timerRole = _interopRequireDefault(require_timerRole());
    var _toolbarRole = _interopRequireDefault(require_toolbarRole());
    var _tooltipRole = _interopRequireDefault(require_tooltipRole());
    var _treeRole = _interopRequireDefault(require_treeRole());
    var _treegridRole = _interopRequireDefault(require_treegridRole());
    var _treeitemRole = _interopRequireDefault(require_treeitemRole());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var ariaLiteralRoles = [["alert", _alertRole.default], ["alertdialog", _alertdialogRole.default], ["application", _applicationRole.default], ["article", _articleRole.default], ["banner", _bannerRole.default], ["blockquote", _blockquoteRole.default], ["button", _buttonRole.default], ["caption", _captionRole.default], ["cell", _cellRole.default], ["checkbox", _checkboxRole.default], ["code", _codeRole.default], ["columnheader", _columnheaderRole.default], ["combobox", _comboboxRole.default], ["complementary", _complementaryRole.default], ["contentinfo", _contentinfoRole.default], ["definition", _definitionRole.default], ["deletion", _deletionRole.default], ["dialog", _dialogRole.default], ["directory", _directoryRole.default], ["document", _documentRole.default], ["emphasis", _emphasisRole.default], ["feed", _feedRole.default], ["figure", _figureRole.default], ["form", _formRole.default], ["generic", _genericRole.default], ["grid", _gridRole.default], ["gridcell", _gridcellRole.default], ["group", _groupRole.default], ["heading", _headingRole.default], ["img", _imgRole.default], ["insertion", _insertionRole.default], ["link", _linkRole.default], ["list", _listRole.default], ["listbox", _listboxRole.default], ["listitem", _listitemRole.default], ["log", _logRole.default], ["main", _mainRole.default], ["marquee", _marqueeRole.default], ["math", _mathRole.default], ["menu", _menuRole.default], ["menubar", _menubarRole.default], ["menuitem", _menuitemRole.default], ["menuitemcheckbox", _menuitemcheckboxRole.default], ["menuitemradio", _menuitemradioRole.default], ["meter", _meterRole.default], ["navigation", _navigationRole.default], ["none", _noneRole.default], ["note", _noteRole.default], ["option", _optionRole.default], ["paragraph", _paragraphRole.default], ["presentation", _presentationRole.default], ["progressbar", _progressbarRole.default], ["radio", _radioRole.default], ["radiogroup", _radiogroupRole.default], ["region", _regionRole.default], ["row", _rowRole.default], ["rowgroup", _rowgroupRole.default], ["rowheader", _rowheaderRole.default], ["scrollbar", _scrollbarRole.default], ["search", _searchRole.default], ["searchbox", _searchboxRole.default], ["separator", _separatorRole.default], ["slider", _sliderRole.default], ["spinbutton", _spinbuttonRole.default], ["status", _statusRole.default], ["strong", _strongRole.default], ["subscript", _subscriptRole.default], ["superscript", _superscriptRole.default], ["switch", _switchRole.default], ["tab", _tabRole.default], ["table", _tableRole.default], ["tablist", _tablistRole.default], ["tabpanel", _tabpanelRole.default], ["term", _termRole.default], ["textbox", _textboxRole.default], ["time", _timeRole.default], ["timer", _timerRole.default], ["toolbar", _toolbarRole.default], ["tooltip", _tooltipRole.default], ["tree", _treeRole.default], ["treegrid", _treegridRole.default], ["treeitem", _treeitemRole.default]];
    var _default = ariaLiteralRoles;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/dpub/docAbstractRole.js
var require_docAbstractRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/dpub/docAbstractRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docAbstractRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "abstract [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = docAbstractRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/dpub/docAcknowledgmentsRole.js
var require_docAcknowledgmentsRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/dpub/docAcknowledgmentsRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docAcknowledgmentsRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "acknowledgments [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = docAcknowledgmentsRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/dpub/docAfterwordRole.js
var require_docAfterwordRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/dpub/docAfterwordRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docAfterwordRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "afterword [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = docAfterwordRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/dpub/docAppendixRole.js
var require_docAppendixRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/dpub/docAppendixRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docAppendixRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "appendix [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = docAppendixRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/dpub/docBacklinkRole.js
var require_docBacklinkRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/dpub/docBacklinkRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docBacklinkRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author", "content"],
      prohibitedProps: [],
      props: {
        "aria-errormessage": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "referrer [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "widget", "command", "link"]]
    };
    var _default = docBacklinkRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/dpub/docBiblioentryRole.js
var require_docBiblioentryRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/dpub/docBiblioentryRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docBiblioentryRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "EPUB biblioentry [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: ["doc-bibliography"],
      requiredContextRole: ["doc-bibliography"],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "listitem"]]
    };
    var _default = docBiblioentryRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/dpub/docBibliographyRole.js
var require_docBibliographyRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/dpub/docBibliographyRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docBibliographyRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "bibliography [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [["doc-biblioentry"]],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = docBibliographyRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/dpub/docBibliorefRole.js
var require_docBibliorefRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/dpub/docBibliorefRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docBibliorefRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {
        "aria-errormessage": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "biblioref [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "widget", "command", "link"]]
    };
    var _default = docBibliorefRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/dpub/docChapterRole.js
var require_docChapterRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/dpub/docChapterRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docChapterRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "chapter [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = docChapterRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/dpub/docColophonRole.js
var require_docColophonRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/dpub/docColophonRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docColophonRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "colophon [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = docColophonRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/dpub/docConclusionRole.js
var require_docConclusionRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/dpub/docConclusionRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docConclusionRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "conclusion [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = docConclusionRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/dpub/docCoverRole.js
var require_docCoverRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/dpub/docCoverRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docCoverRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "cover [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "img"]]
    };
    var _default = docCoverRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/dpub/docCreditRole.js
var require_docCreditRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/dpub/docCreditRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docCreditRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "credit [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = docCreditRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/dpub/docCreditsRole.js
var require_docCreditsRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/dpub/docCreditsRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docCreditsRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "credits [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = docCreditsRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/dpub/docDedicationRole.js
var require_docDedicationRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/dpub/docDedicationRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docDedicationRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "dedication [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = docDedicationRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/dpub/docEndnoteRole.js
var require_docEndnoteRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/dpub/docEndnoteRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docEndnoteRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "rearnote [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: ["doc-endnotes"],
      requiredContextRole: ["doc-endnotes"],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "listitem"]]
    };
    var _default = docEndnoteRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/dpub/docEndnotesRole.js
var require_docEndnotesRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/dpub/docEndnotesRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docEndnotesRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "rearnotes [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [["doc-endnote"]],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = docEndnotesRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/dpub/docEpigraphRole.js
var require_docEpigraphRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/dpub/docEpigraphRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docEpigraphRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "epigraph [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = docEpigraphRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/dpub/docEpilogueRole.js
var require_docEpilogueRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/dpub/docEpilogueRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docEpilogueRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "epilogue [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = docEpilogueRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/dpub/docErrataRole.js
var require_docErrataRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/dpub/docErrataRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docErrataRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "errata [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = docErrataRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/dpub/docExampleRole.js
var require_docExampleRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/dpub/docExampleRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docExampleRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = docExampleRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/dpub/docFootnoteRole.js
var require_docFootnoteRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/dpub/docFootnoteRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docFootnoteRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "footnote [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = docFootnoteRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/dpub/docForewordRole.js
var require_docForewordRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/dpub/docForewordRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docForewordRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "foreword [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = docForewordRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/dpub/docGlossaryRole.js
var require_docGlossaryRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/dpub/docGlossaryRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docGlossaryRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "glossary [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [["definition"], ["term"]],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = docGlossaryRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/dpub/docGlossrefRole.js
var require_docGlossrefRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/dpub/docGlossrefRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docGlossrefRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {
        "aria-errormessage": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "glossref [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "widget", "command", "link"]]
    };
    var _default = docGlossrefRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/dpub/docIndexRole.js
var require_docIndexRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/dpub/docIndexRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docIndexRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "index [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark", "navigation"]]
    };
    var _default = docIndexRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/dpub/docIntroductionRole.js
var require_docIntroductionRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/dpub/docIntroductionRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docIntroductionRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "introduction [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = docIntroductionRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/dpub/docNoterefRole.js
var require_docNoterefRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/dpub/docNoterefRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docNoterefRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {
        "aria-errormessage": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "noteref [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "widget", "command", "link"]]
    };
    var _default = docNoterefRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/dpub/docNoticeRole.js
var require_docNoticeRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/dpub/docNoticeRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docNoticeRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "notice [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "note"]]
    };
    var _default = docNoticeRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/dpub/docPagebreakRole.js
var require_docPagebreakRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/dpub/docPagebreakRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docPagebreakRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "pagebreak [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "separator"]]
    };
    var _default = docPagebreakRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/dpub/docPagelistRole.js
var require_docPagelistRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/dpub/docPagelistRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docPagelistRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "page-list [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark", "navigation"]]
    };
    var _default = docPagelistRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/dpub/docPartRole.js
var require_docPartRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/dpub/docPartRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docPartRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "part [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = docPartRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/dpub/docPrefaceRole.js
var require_docPrefaceRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/dpub/docPrefaceRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docPrefaceRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "preface [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = docPrefaceRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/dpub/docPrologueRole.js
var require_docPrologueRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/dpub/docPrologueRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docPrologueRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "prologue [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark"]]
    };
    var _default = docPrologueRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/dpub/docPullquoteRole.js
var require_docPullquoteRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/dpub/docPullquoteRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docPullquoteRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [{
        concept: {
          name: "pullquote [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["none"]]
    };
    var _default = docPullquoteRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/dpub/docQnaRole.js
var require_docQnaRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/dpub/docQnaRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docQnaRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "qna [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section"]]
    };
    var _default = docQnaRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/dpub/docSubtitleRole.js
var require_docSubtitleRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/dpub/docSubtitleRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docSubtitleRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "subtitle [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "sectionhead"]]
    };
    var _default = docSubtitleRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/dpub/docTipRole.js
var require_docTipRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/dpub/docTipRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docTipRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "help [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "note"]]
    };
    var _default = docTipRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/dpub/docTocRole.js
var require_docTocRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/dpub/docTocRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var docTocRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        concept: {
          name: "toc [EPUB-SSV]"
        },
        module: "EPUB"
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "landmark", "navigation"]]
    };
    var _default = docTocRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/ariaDpubRoles.js
var require_ariaDpubRoles = __commonJS({
  "node_modules/aria-query/lib/etc/roles/ariaDpubRoles.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _docAbstractRole = _interopRequireDefault(require_docAbstractRole());
    var _docAcknowledgmentsRole = _interopRequireDefault(require_docAcknowledgmentsRole());
    var _docAfterwordRole = _interopRequireDefault(require_docAfterwordRole());
    var _docAppendixRole = _interopRequireDefault(require_docAppendixRole());
    var _docBacklinkRole = _interopRequireDefault(require_docBacklinkRole());
    var _docBiblioentryRole = _interopRequireDefault(require_docBiblioentryRole());
    var _docBibliographyRole = _interopRequireDefault(require_docBibliographyRole());
    var _docBibliorefRole = _interopRequireDefault(require_docBibliorefRole());
    var _docChapterRole = _interopRequireDefault(require_docChapterRole());
    var _docColophonRole = _interopRequireDefault(require_docColophonRole());
    var _docConclusionRole = _interopRequireDefault(require_docConclusionRole());
    var _docCoverRole = _interopRequireDefault(require_docCoverRole());
    var _docCreditRole = _interopRequireDefault(require_docCreditRole());
    var _docCreditsRole = _interopRequireDefault(require_docCreditsRole());
    var _docDedicationRole = _interopRequireDefault(require_docDedicationRole());
    var _docEndnoteRole = _interopRequireDefault(require_docEndnoteRole());
    var _docEndnotesRole = _interopRequireDefault(require_docEndnotesRole());
    var _docEpigraphRole = _interopRequireDefault(require_docEpigraphRole());
    var _docEpilogueRole = _interopRequireDefault(require_docEpilogueRole());
    var _docErrataRole = _interopRequireDefault(require_docErrataRole());
    var _docExampleRole = _interopRequireDefault(require_docExampleRole());
    var _docFootnoteRole = _interopRequireDefault(require_docFootnoteRole());
    var _docForewordRole = _interopRequireDefault(require_docForewordRole());
    var _docGlossaryRole = _interopRequireDefault(require_docGlossaryRole());
    var _docGlossrefRole = _interopRequireDefault(require_docGlossrefRole());
    var _docIndexRole = _interopRequireDefault(require_docIndexRole());
    var _docIntroductionRole = _interopRequireDefault(require_docIntroductionRole());
    var _docNoterefRole = _interopRequireDefault(require_docNoterefRole());
    var _docNoticeRole = _interopRequireDefault(require_docNoticeRole());
    var _docPagebreakRole = _interopRequireDefault(require_docPagebreakRole());
    var _docPagelistRole = _interopRequireDefault(require_docPagelistRole());
    var _docPartRole = _interopRequireDefault(require_docPartRole());
    var _docPrefaceRole = _interopRequireDefault(require_docPrefaceRole());
    var _docPrologueRole = _interopRequireDefault(require_docPrologueRole());
    var _docPullquoteRole = _interopRequireDefault(require_docPullquoteRole());
    var _docQnaRole = _interopRequireDefault(require_docQnaRole());
    var _docSubtitleRole = _interopRequireDefault(require_docSubtitleRole());
    var _docTipRole = _interopRequireDefault(require_docTipRole());
    var _docTocRole = _interopRequireDefault(require_docTocRole());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var ariaDpubRoles = [["doc-abstract", _docAbstractRole.default], ["doc-acknowledgments", _docAcknowledgmentsRole.default], ["doc-afterword", _docAfterwordRole.default], ["doc-appendix", _docAppendixRole.default], ["doc-backlink", _docBacklinkRole.default], ["doc-biblioentry", _docBiblioentryRole.default], ["doc-bibliography", _docBibliographyRole.default], ["doc-biblioref", _docBibliorefRole.default], ["doc-chapter", _docChapterRole.default], ["doc-colophon", _docColophonRole.default], ["doc-conclusion", _docConclusionRole.default], ["doc-cover", _docCoverRole.default], ["doc-credit", _docCreditRole.default], ["doc-credits", _docCreditsRole.default], ["doc-dedication", _docDedicationRole.default], ["doc-endnote", _docEndnoteRole.default], ["doc-endnotes", _docEndnotesRole.default], ["doc-epigraph", _docEpigraphRole.default], ["doc-epilogue", _docEpilogueRole.default], ["doc-errata", _docErrataRole.default], ["doc-example", _docExampleRole.default], ["doc-footnote", _docFootnoteRole.default], ["doc-foreword", _docForewordRole.default], ["doc-glossary", _docGlossaryRole.default], ["doc-glossref", _docGlossrefRole.default], ["doc-index", _docIndexRole.default], ["doc-introduction", _docIntroductionRole.default], ["doc-noteref", _docNoterefRole.default], ["doc-notice", _docNoticeRole.default], ["doc-pagebreak", _docPagebreakRole.default], ["doc-pagelist", _docPagelistRole.default], ["doc-part", _docPartRole.default], ["doc-preface", _docPrefaceRole.default], ["doc-prologue", _docPrologueRole.default], ["doc-pullquote", _docPullquoteRole.default], ["doc-qna", _docQnaRole.default], ["doc-subtitle", _docSubtitleRole.default], ["doc-tip", _docTipRole.default], ["doc-toc", _docTocRole.default]];
    var _default = ariaDpubRoles;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/graphics/graphicsDocumentRole.js
var require_graphicsDocumentRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/graphics/graphicsDocumentRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var graphicsDocumentRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        module: "GRAPHICS",
        concept: {
          name: "graphics-object"
        }
      }, {
        module: "ARIA",
        concept: {
          name: "img"
        }
      }, {
        module: "ARIA",
        concept: {
          name: "article"
        }
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "document"]]
    };
    var _default = graphicsDocumentRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/graphics/graphicsObjectRole.js
var require_graphicsObjectRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/graphics/graphicsObjectRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var graphicsObjectRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ["author", "contents"],
      prohibitedProps: [],
      props: {
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [{
        module: "GRAPHICS",
        concept: {
          name: "graphics-document"
        }
      }, {
        module: "ARIA",
        concept: {
          name: "group"
        }
      }, {
        module: "ARIA",
        concept: {
          name: "img"
        }
      }, {
        module: "GRAPHICS",
        concept: {
          name: "graphics-symbol"
        }
      }],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "group"]]
    };
    var _default = graphicsObjectRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/graphics/graphicsSymbolRole.js
var require_graphicsSymbolRole = __commonJS({
  "node_modules/aria-query/lib/etc/roles/graphics/graphicsSymbolRole.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var graphicsSymbolRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ["author"],
      prohibitedProps: [],
      props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
      },
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [["roletype", "structure", "section", "img"]]
    };
    var _default = graphicsSymbolRole;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/etc/roles/ariaGraphicsRoles.js
var require_ariaGraphicsRoles = __commonJS({
  "node_modules/aria-query/lib/etc/roles/ariaGraphicsRoles.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _graphicsDocumentRole = _interopRequireDefault(require_graphicsDocumentRole());
    var _graphicsObjectRole = _interopRequireDefault(require_graphicsObjectRole());
    var _graphicsSymbolRole = _interopRequireDefault(require_graphicsSymbolRole());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var ariaGraphicsRoles = [["graphics-document", _graphicsDocumentRole.default], ["graphics-object", _graphicsObjectRole.default], ["graphics-symbol", _graphicsSymbolRole.default]];
    var _default = ariaGraphicsRoles;
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/rolesMap.js
var require_rolesMap = __commonJS({
  "node_modules/aria-query/lib/rolesMap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _ariaAbstractRoles = _interopRequireDefault(require_ariaAbstractRoles());
    var _ariaLiteralRoles = _interopRequireDefault(require_ariaLiteralRoles());
    var _ariaDpubRoles = _interopRequireDefault(require_ariaDpubRoles());
    var _ariaGraphicsRoles = _interopRequireDefault(require_ariaGraphicsRoles());
    var _iterationDecorator = _interopRequireDefault(require_iterationDecorator());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _defineProperty2(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _createForOfIteratorHelper(o, allowArrayLike) {
      var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
      if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray2(o)) || allowArrayLike && o && typeof o.length === "number") {
          if (it)
            o = it;
          var i = 0;
          var F = function F2() {
          };
          return { s: F, n: function n() {
            if (i >= o.length)
              return { done: true };
            return { done: false, value: o[i++] };
          }, e: function e(_e2) {
            throw _e2;
          }, f: F };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var normalCompletion = true, didErr = false, err;
      return { s: function s() {
        it = it.call(o);
      }, n: function n() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      }, e: function e(_e3) {
        didErr = true;
        err = _e3;
      }, f: function f() {
        try {
          if (!normalCompletion && it.return != null)
            it.return();
        } finally {
          if (didErr)
            throw err;
        }
      } };
    }
    function _slicedToArray2(arr, i) {
      return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest2();
    }
    function _nonIterableRest2() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray2(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray2(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray2(o, minLen);
    }
    function _arrayLikeToArray2(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    function _iterableToArrayLimit2(arr, i) {
      var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
      if (_i == null)
        return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _s, _e;
      try {
        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i)
            break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null)
            _i["return"]();
        } finally {
          if (_d)
            throw _e;
        }
      }
      return _arr;
    }
    function _arrayWithHoles2(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    var roles = [].concat(_ariaAbstractRoles.default, _ariaLiteralRoles.default, _ariaDpubRoles.default, _ariaGraphicsRoles.default);
    roles.forEach(function(_ref) {
      var _ref2 = _slicedToArray2(_ref, 2), roleDefinition = _ref2[1];
      var _iterator = _createForOfIteratorHelper(roleDefinition.superClass), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var superClassIter = _step.value;
          var _iterator2 = _createForOfIteratorHelper(superClassIter), _step2;
          try {
            var _loop = function _loop2() {
              var superClassName = _step2.value;
              var superClassRoleTuple = roles.find(function(_ref3) {
                var _ref4 = _slicedToArray2(_ref3, 1), name = _ref4[0];
                return name === superClassName;
              });
              if (superClassRoleTuple) {
                var superClassDefinition = superClassRoleTuple[1];
                for (var _i2 = 0, _Object$keys = Object.keys(superClassDefinition.props); _i2 < _Object$keys.length; _i2++) {
                  var prop = _Object$keys[_i2];
                  if (!Object.prototype.hasOwnProperty.call(roleDefinition.props, prop)) {
                    Object.assign(roleDefinition.props, _defineProperty2({}, prop, superClassDefinition.props[prop]));
                  }
                }
              }
            };
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              _loop();
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
    var rolesMap = {
      entries: function entries2() {
        return roles;
      },
      forEach: function forEach2(fn) {
        var thisArg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        var _iterator3 = _createForOfIteratorHelper(roles), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var _step3$value = _slicedToArray2(_step3.value, 2), key = _step3$value[0], values2 = _step3$value[1];
            fn.call(thisArg, values2, key, roles);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      },
      get: function get(key) {
        var item = roles.find(function(tuple) {
          return tuple[0] === key ? true : false;
        });
        return item && item[1];
      },
      has: function has(key) {
        return !!rolesMap.get(key);
      },
      keys: function keys2() {
        return roles.map(function(_ref5) {
          var _ref6 = _slicedToArray2(_ref5, 1), key = _ref6[0];
          return key;
        });
      },
      values: function values2() {
        return roles.map(function(_ref7) {
          var _ref8 = _slicedToArray2(_ref7, 2), values3 = _ref8[1];
          return values3;
        });
      }
    };
    var _default = (0, _iterationDecorator.default)(rolesMap, rolesMap.entries());
    exports.default = _default;
  }
});

// node_modules/object-keys/isArguments.js
var require_isArguments = __commonJS({
  "node_modules/object-keys/isArguments.js"(exports, module) {
    "use strict";
    var toStr = Object.prototype.toString;
    module.exports = function isArguments(value) {
      var str = toStr.call(value);
      var isArgs = str === "[object Arguments]";
      if (!isArgs) {
        isArgs = str !== "[object Array]" && value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && toStr.call(value.callee) === "[object Function]";
      }
      return isArgs;
    };
  }
});

// node_modules/object-keys/implementation.js
var require_implementation = __commonJS({
  "node_modules/object-keys/implementation.js"(exports, module) {
    "use strict";
    var keysShim;
    if (!Object.keys) {
      has = Object.prototype.hasOwnProperty;
      toStr = Object.prototype.toString;
      isArgs = require_isArguments();
      isEnumerable = Object.prototype.propertyIsEnumerable;
      hasDontEnumBug = !isEnumerable.call({ toString: null }, "toString");
      hasProtoEnumBug = isEnumerable.call(function() {
      }, "prototype");
      dontEnums = [
        "toString",
        "toLocaleString",
        "valueOf",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "constructor"
      ];
      equalsConstructorPrototype = function(o) {
        var ctor = o.constructor;
        return ctor && ctor.prototype === o;
      };
      excludedKeys = {
        $applicationCache: true,
        $console: true,
        $external: true,
        $frame: true,
        $frameElement: true,
        $frames: true,
        $innerHeight: true,
        $innerWidth: true,
        $onmozfullscreenchange: true,
        $onmozfullscreenerror: true,
        $outerHeight: true,
        $outerWidth: true,
        $pageXOffset: true,
        $pageYOffset: true,
        $parent: true,
        $scrollLeft: true,
        $scrollTop: true,
        $scrollX: true,
        $scrollY: true,
        $self: true,
        $webkitIndexedDB: true,
        $webkitStorageInfo: true,
        $window: true
      };
      hasAutomationEqualityBug = function() {
        if (typeof window === "undefined") {
          return false;
        }
        for (var k in window) {
          try {
            if (!excludedKeys["$" + k] && has.call(window, k) && window[k] !== null && typeof window[k] === "object") {
              try {
                equalsConstructorPrototype(window[k]);
              } catch (e) {
                return true;
              }
            }
          } catch (e) {
            return true;
          }
        }
        return false;
      }();
      equalsConstructorPrototypeIfNotBuggy = function(o) {
        if (typeof window === "undefined" || !hasAutomationEqualityBug) {
          return equalsConstructorPrototype(o);
        }
        try {
          return equalsConstructorPrototype(o);
        } catch (e) {
          return false;
        }
      };
      keysShim = function keys2(object) {
        var isObject6 = object !== null && typeof object === "object";
        var isFunction = toStr.call(object) === "[object Function]";
        var isArguments = isArgs(object);
        var isString = isObject6 && toStr.call(object) === "[object String]";
        var theKeys = [];
        if (!isObject6 && !isFunction && !isArguments) {
          throw new TypeError("Object.keys called on a non-object");
        }
        var skipProto = hasProtoEnumBug && isFunction;
        if (isString && object.length > 0 && !has.call(object, 0)) {
          for (var i = 0; i < object.length; ++i) {
            theKeys.push(String(i));
          }
        }
        if (isArguments && object.length > 0) {
          for (var j = 0; j < object.length; ++j) {
            theKeys.push(String(j));
          }
        } else {
          for (var name in object) {
            if (!(skipProto && name === "prototype") && has.call(object, name)) {
              theKeys.push(String(name));
            }
          }
        }
        if (hasDontEnumBug) {
          var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
          for (var k = 0; k < dontEnums.length; ++k) {
            if (!(skipConstructor && dontEnums[k] === "constructor") && has.call(object, dontEnums[k])) {
              theKeys.push(dontEnums[k]);
            }
          }
        }
        return theKeys;
      };
    }
    var has;
    var toStr;
    var isArgs;
    var isEnumerable;
    var hasDontEnumBug;
    var hasProtoEnumBug;
    var dontEnums;
    var equalsConstructorPrototype;
    var excludedKeys;
    var hasAutomationEqualityBug;
    var equalsConstructorPrototypeIfNotBuggy;
    module.exports = keysShim;
  }
});

// node_modules/object-keys/index.js
var require_object_keys2 = __commonJS({
  "node_modules/object-keys/index.js"(exports, module) {
    "use strict";
    var slice2 = Array.prototype.slice;
    var isArgs = require_isArguments();
    var origKeys = Object.keys;
    var keysShim = origKeys ? function keys2(o) {
      return origKeys(o);
    } : require_implementation();
    var originalKeys = Object.keys;
    keysShim.shim = function shimObjectKeys() {
      if (Object.keys) {
        var keysWorksWithArguments = function() {
          var args = Object.keys(arguments);
          return args && args.length === arguments.length;
        }(1, 2);
        if (!keysWorksWithArguments) {
          Object.keys = function keys2(object) {
            if (isArgs(object)) {
              return originalKeys(slice2.call(object));
            }
            return originalKeys(object);
          };
        }
      } else {
        Object.keys = keysShim;
      }
      return Object.keys || keysShim;
    };
    module.exports = keysShim;
  }
});

// node_modules/has-symbols/shams.js
var require_shams = __commonJS({
  "node_modules/has-symbols/shams.js"(exports, module) {
    "use strict";
    module.exports = function hasSymbols() {
      if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
        return false;
      }
      if (typeof Symbol.iterator === "symbol") {
        return true;
      }
      var obj = {};
      var sym = Symbol("test");
      var symObj = Object(sym);
      if (typeof sym === "string") {
        return false;
      }
      if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
        return false;
      }
      if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
        return false;
      }
      var symVal = 42;
      obj[sym] = symVal;
      for (sym in obj) {
        return false;
      }
      if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
        return false;
      }
      if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
      }
      var syms = Object.getOwnPropertySymbols(obj);
      if (syms.length !== 1 || syms[0] !== sym) {
        return false;
      }
      if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
      }
      if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
          return false;
        }
      }
      return true;
    };
  }
});

// node_modules/has-tostringtag/shams.js
var require_shams2 = __commonJS({
  "node_modules/has-tostringtag/shams.js"(exports, module) {
    "use strict";
    var hasSymbols = require_shams();
    module.exports = function hasToStringTagShams() {
      return hasSymbols() && !!Symbol.toStringTag;
    };
  }
});

// node_modules/has-symbols/index.js
var require_has_symbols = __commonJS({
  "node_modules/has-symbols/index.js"(exports, module) {
    "use strict";
    var origSymbol = typeof Symbol !== "undefined" && Symbol;
    var hasSymbolSham = require_shams();
    module.exports = function hasNativeSymbols() {
      if (typeof origSymbol !== "function") {
        return false;
      }
      if (typeof Symbol !== "function") {
        return false;
      }
      if (typeof origSymbol("foo") !== "symbol") {
        return false;
      }
      if (typeof Symbol("bar") !== "symbol") {
        return false;
      }
      return hasSymbolSham();
    };
  }
});

// node_modules/function-bind/implementation.js
var require_implementation2 = __commonJS({
  "node_modules/function-bind/implementation.js"(exports, module) {
    "use strict";
    var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
    var slice2 = Array.prototype.slice;
    var toStr = Object.prototype.toString;
    var funcType = "[object Function]";
    module.exports = function bind(that) {
      var target = this;
      if (typeof target !== "function" || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
      }
      var args = slice2.call(arguments, 1);
      var bound;
      var binder = function() {
        if (this instanceof bound) {
          var result = target.apply(this, args.concat(slice2.call(arguments)));
          if (Object(result) === result) {
            return result;
          }
          return this;
        } else {
          return target.apply(that, args.concat(slice2.call(arguments)));
        }
      };
      var boundLength = Math.max(0, target.length - args.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
        boundArgs.push("$" + i);
      }
      bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder);
      if (target.prototype) {
        var Empty = function Empty2() {
        };
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
      }
      return bound;
    };
  }
});

// node_modules/function-bind/index.js
var require_function_bind = __commonJS({
  "node_modules/function-bind/index.js"(exports, module) {
    "use strict";
    var implementation = require_implementation2();
    module.exports = Function.prototype.bind || implementation;
  }
});

// node_modules/has/src/index.js
var require_src = __commonJS({
  "node_modules/has/src/index.js"(exports, module) {
    "use strict";
    var bind = require_function_bind();
    module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);
  }
});

// node_modules/get-intrinsic/index.js
var require_get_intrinsic = __commonJS({
  "node_modules/get-intrinsic/index.js"(exports, module) {
    "use strict";
    var undefined2;
    var $SyntaxError = SyntaxError;
    var $Function = Function;
    var $TypeError = TypeError;
    var getEvalledConstructor = function(expressionSyntax) {
      try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
      } catch (e) {
      }
    };
    var $gOPD = Object.getOwnPropertyDescriptor;
    if ($gOPD) {
      try {
        $gOPD({}, "");
      } catch (e) {
        $gOPD = null;
      }
    }
    var throwTypeError = function() {
      throw new $TypeError();
    };
    var ThrowTypeError = $gOPD ? function() {
      try {
        arguments.callee;
        return throwTypeError;
      } catch (calleeThrows) {
        try {
          return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
          return throwTypeError;
        }
      }
    }() : throwTypeError;
    var hasSymbols = require_has_symbols()();
    var getProto = Object.getPrototypeOf || function(x) {
      return x.__proto__;
    };
    var needsEval = {};
    var TypedArray = typeof Uint8Array === "undefined" ? undefined2 : getProto(Uint8Array);
    var INTRINSICS = {
      "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
      "%ArrayIteratorPrototype%": hasSymbols ? getProto([][Symbol.iterator]()) : undefined2,
      "%AsyncFromSyncIteratorPrototype%": undefined2,
      "%AsyncFunction%": needsEval,
      "%AsyncGenerator%": needsEval,
      "%AsyncGeneratorFunction%": needsEval,
      "%AsyncIteratorPrototype%": needsEval,
      "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
      "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": Error,
      "%eval%": eval,
      "%EvalError%": EvalError,
      "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
      "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
      "%Function%": $Function,
      "%GeneratorFunction%": needsEval,
      "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
      "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
      "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined2,
      "%JSON%": typeof JSON === "object" ? JSON : undefined2,
      "%Map%": typeof Map === "undefined" ? undefined2 : Map,
      "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols ? undefined2 : getProto(new Map()[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
      "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
      "%RangeError%": RangeError,
      "%ReferenceError%": ReferenceError,
      "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set === "undefined" ? undefined2 : Set,
      "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols ? undefined2 : getProto(new Set()[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": hasSymbols ? getProto(""[Symbol.iterator]()) : undefined2,
      "%Symbol%": hasSymbols ? Symbol : undefined2,
      "%SyntaxError%": $SyntaxError,
      "%ThrowTypeError%": ThrowTypeError,
      "%TypedArray%": TypedArray,
      "%TypeError%": $TypeError,
      "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
      "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
      "%URIError%": URIError,
      "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
      "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
      "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet
    };
    var doEval = function doEval2(name) {
      var value;
      if (name === "%AsyncFunction%") {
        value = getEvalledConstructor("async function () {}");
      } else if (name === "%GeneratorFunction%") {
        value = getEvalledConstructor("function* () {}");
      } else if (name === "%AsyncGeneratorFunction%") {
        value = getEvalledConstructor("async function* () {}");
      } else if (name === "%AsyncGenerator%") {
        var fn = doEval2("%AsyncGeneratorFunction%");
        if (fn) {
          value = fn.prototype;
        }
      } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval2("%AsyncGenerator%");
        if (gen) {
          value = getProto(gen.prototype);
        }
      }
      INTRINSICS[name] = value;
      return value;
    };
    var LEGACY_ALIASES = {
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    };
    var bind = require_function_bind();
    var hasOwn4 = require_src();
    var $concat = bind.call(Function.call, Array.prototype.concat);
    var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
    var $replace = bind.call(Function.call, String.prototype.replace);
    var $strSlice = bind.call(Function.call, String.prototype.slice);
    var $exec = bind.call(Function.call, RegExp.prototype.exec);
    var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = function stringToPath2(string) {
      var first = $strSlice(string, 0, 1);
      var last = $strSlice(string, -1);
      if (first === "%" && last !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
      } else if (last === "%" && first !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
      }
      var result = [];
      $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
      });
      return result;
    };
    var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
      var intrinsicName = name;
      var alias;
      if (hasOwn4(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
      }
      if (hasOwn4(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
          value = doEval(intrinsicName);
        }
        if (typeof value === "undefined" && !allowMissing) {
          throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
        }
        return {
          alias,
          name: intrinsicName,
          value
        };
      }
      throw new $SyntaxError("intrinsic " + name + " does not exist!");
    };
    module.exports = function GetIntrinsic(name, allowMissing) {
      if (typeof name !== "string" || name.length === 0) {
        throw new $TypeError("intrinsic name must be a non-empty string");
      }
      if (arguments.length > 1 && typeof allowMissing !== "boolean") {
        throw new $TypeError('"allowMissing" argument must be a boolean');
      }
      if ($exec(/^%?[^%]*%?$/, name) === null) {
        throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      }
      var parts = stringToPath(name);
      var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
      var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
      var intrinsicRealName = intrinsic.name;
      var value = intrinsic.value;
      var skipFurtherCaching = false;
      var alias = intrinsic.alias;
      if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([0, 1], alias));
      }
      for (var i = 1, isOwn = true; i < parts.length; i += 1) {
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
          throw new $SyntaxError("property names with quotes must have matching quotes");
        }
        if (part === "constructor" || !isOwn) {
          skipFurtherCaching = true;
        }
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn4(INTRINSICS, intrinsicRealName)) {
          value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
          if (!(part in value)) {
            if (!allowMissing) {
              throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
            }
            return void 0;
          }
          if ($gOPD && i + 1 >= parts.length) {
            var desc = $gOPD(value, part);
            isOwn = !!desc;
            if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
              value = desc.get;
            } else {
              value = value[part];
            }
          } else {
            isOwn = hasOwn4(value, part);
            value = value[part];
          }
          if (isOwn && !skipFurtherCaching) {
            INTRINSICS[intrinsicRealName] = value;
          }
        }
      }
      return value;
    };
  }
});

// node_modules/call-bind/index.js
var require_call_bind = __commonJS({
  "node_modules/call-bind/index.js"(exports, module) {
    "use strict";
    var bind = require_function_bind();
    var GetIntrinsic = require_get_intrinsic();
    var $apply = GetIntrinsic("%Function.prototype.apply%");
    var $call = GetIntrinsic("%Function.prototype.call%");
    var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
    var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
    var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
    var $max = GetIntrinsic("%Math.max%");
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", { value: 1 });
      } catch (e) {
        $defineProperty = null;
      }
    }
    module.exports = function callBind(originalFunction) {
      var func = $reflectApply(bind, $call, arguments);
      if ($gOPD && $defineProperty) {
        var desc = $gOPD(func, "length");
        if (desc.configurable) {
          $defineProperty(func, "length", { value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) });
        }
      }
      return func;
    };
    var applyBind = function applyBind2() {
      return $reflectApply(bind, $apply, arguments);
    };
    if ($defineProperty) {
      $defineProperty(module.exports, "apply", { value: applyBind });
    } else {
      module.exports.apply = applyBind;
    }
  }
});

// node_modules/call-bind/callBound.js
var require_callBound = __commonJS({
  "node_modules/call-bind/callBound.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBind = require_call_bind();
    var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
    module.exports = function callBoundIntrinsic(name, allowMissing) {
      var intrinsic = GetIntrinsic(name, !!allowMissing);
      if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
        return callBind(intrinsic);
      }
      return intrinsic;
    };
  }
});

// node_modules/is-arguments/index.js
var require_is_arguments = __commonJS({
  "node_modules/is-arguments/index.js"(exports, module) {
    "use strict";
    var hasToStringTag = require_shams2()();
    var callBound = require_callBound();
    var $toString2 = callBound("Object.prototype.toString");
    var isStandardArguments = function isArguments(value) {
      if (hasToStringTag && value && typeof value === "object" && Symbol.toStringTag in value) {
        return false;
      }
      return $toString2(value) === "[object Arguments]";
    };
    var isLegacyArguments = function isArguments(value) {
      if (isStandardArguments(value)) {
        return true;
      }
      return value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && $toString2(value) !== "[object Array]" && $toString2(value.callee) === "[object Function]";
    };
    var supportsStandardArguments = function() {
      return isStandardArguments(arguments);
    }();
    isStandardArguments.isLegacyArguments = isLegacyArguments;
    module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;
  }
});

// node_modules/has-property-descriptors/index.js
var require_has_property_descriptors = __commonJS({
  "node_modules/has-property-descriptors/index.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
    var hasPropertyDescriptors = function hasPropertyDescriptors2() {
      if ($defineProperty) {
        try {
          $defineProperty({}, "a", { value: 1 });
          return true;
        } catch (e) {
          return false;
        }
      }
      return false;
    };
    hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
      if (!hasPropertyDescriptors()) {
        return null;
      }
      try {
        return $defineProperty([], "length", { value: 1 }).length !== 1;
      } catch (e) {
        return true;
      }
    };
    module.exports = hasPropertyDescriptors;
  }
});

// node_modules/define-properties/index.js
var require_define_properties = __commonJS({
  "node_modules/define-properties/index.js"(exports, module) {
    "use strict";
    var keys2 = require_object_keys2();
    var hasSymbols = typeof Symbol === "function" && typeof Symbol("foo") === "symbol";
    var toStr = Object.prototype.toString;
    var concat3 = Array.prototype.concat;
    var origDefineProperty = Object.defineProperty;
    var isFunction = function(fn) {
      return typeof fn === "function" && toStr.call(fn) === "[object Function]";
    };
    var hasPropertyDescriptors = require_has_property_descriptors()();
    var supportsDescriptors = origDefineProperty && hasPropertyDescriptors;
    var defineProperty4 = function(object, name, value, predicate) {
      if (name in object && (!isFunction(predicate) || !predicate())) {
        return;
      }
      if (supportsDescriptors) {
        origDefineProperty(object, name, {
          configurable: true,
          enumerable: false,
          value,
          writable: true
        });
      } else {
        object[name] = value;
      }
    };
    var defineProperties = function(object, map2) {
      var predicates = arguments.length > 2 ? arguments[2] : {};
      var props = keys2(map2);
      if (hasSymbols) {
        props = concat3.call(props, Object.getOwnPropertySymbols(map2));
      }
      for (var i = 0; i < props.length; i += 1) {
        defineProperty4(object, props[i], map2[props[i]], predicates[props[i]]);
      }
    };
    defineProperties.supportsDescriptors = !!supportsDescriptors;
    module.exports = defineProperties;
  }
});

// node_modules/object-is/implementation.js
var require_implementation3 = __commonJS({
  "node_modules/object-is/implementation.js"(exports, module) {
    "use strict";
    var numberIsNaN = function(value) {
      return value !== value;
    };
    module.exports = function is(a, b) {
      if (a === 0 && b === 0) {
        return 1 / a === 1 / b;
      }
      if (a === b) {
        return true;
      }
      if (numberIsNaN(a) && numberIsNaN(b)) {
        return true;
      }
      return false;
    };
  }
});

// node_modules/object-is/polyfill.js
var require_polyfill = __commonJS({
  "node_modules/object-is/polyfill.js"(exports, module) {
    "use strict";
    var implementation = require_implementation3();
    module.exports = function getPolyfill() {
      return typeof Object.is === "function" ? Object.is : implementation;
    };
  }
});

// node_modules/object-is/shim.js
var require_shim = __commonJS({
  "node_modules/object-is/shim.js"(exports, module) {
    "use strict";
    var getPolyfill = require_polyfill();
    var define2 = require_define_properties();
    module.exports = function shimObjectIs() {
      var polyfill = getPolyfill();
      define2(Object, { is: polyfill }, {
        is: function testObjectIs() {
          return Object.is !== polyfill;
        }
      });
      return polyfill;
    };
  }
});

// node_modules/object-is/index.js
var require_object_is = __commonJS({
  "node_modules/object-is/index.js"(exports, module) {
    "use strict";
    var define2 = require_define_properties();
    var callBind = require_call_bind();
    var implementation = require_implementation3();
    var getPolyfill = require_polyfill();
    var shim = require_shim();
    var polyfill = callBind(getPolyfill(), Object);
    define2(polyfill, {
      getPolyfill,
      implementation,
      shim
    });
    module.exports = polyfill;
  }
});

// node_modules/is-regex/index.js
var require_is_regex = __commonJS({
  "node_modules/is-regex/index.js"(exports, module) {
    "use strict";
    var callBound = require_callBound();
    var hasToStringTag = require_shams2()();
    var has;
    var $exec;
    var isRegexMarker;
    var badStringifier;
    if (hasToStringTag) {
      has = callBound("Object.prototype.hasOwnProperty");
      $exec = callBound("RegExp.prototype.exec");
      isRegexMarker = {};
      throwRegexMarker = function() {
        throw isRegexMarker;
      };
      badStringifier = {
        toString: throwRegexMarker,
        valueOf: throwRegexMarker
      };
      if (typeof Symbol.toPrimitive === "symbol") {
        badStringifier[Symbol.toPrimitive] = throwRegexMarker;
      }
    }
    var throwRegexMarker;
    var $toString2 = callBound("Object.prototype.toString");
    var gOPD = Object.getOwnPropertyDescriptor;
    var regexClass = "[object RegExp]";
    module.exports = hasToStringTag ? function isRegex(value) {
      if (!value || typeof value !== "object") {
        return false;
      }
      var descriptor = gOPD(value, "lastIndex");
      var hasLastIndexDataProperty = descriptor && has(descriptor, "value");
      if (!hasLastIndexDataProperty) {
        return false;
      }
      try {
        $exec(value, badStringifier);
      } catch (e) {
        return e === isRegexMarker;
      }
    } : function isRegex(value) {
      if (!value || typeof value !== "object" && typeof value !== "function") {
        return false;
      }
      return $toString2(value) === regexClass;
    };
  }
});

// node_modules/functions-have-names/index.js
var require_functions_have_names = __commonJS({
  "node_modules/functions-have-names/index.js"(exports, module) {
    "use strict";
    var functionsHaveNames = function functionsHaveNames2() {
      return typeof function f() {
      }.name === "string";
    };
    var gOPD = Object.getOwnPropertyDescriptor;
    if (gOPD) {
      try {
        gOPD([], "length");
      } catch (e) {
        gOPD = null;
      }
    }
    functionsHaveNames.functionsHaveConfigurableNames = function functionsHaveConfigurableNames() {
      if (!functionsHaveNames() || !gOPD) {
        return false;
      }
      var desc = gOPD(function() {
      }, "name");
      return !!desc && !!desc.configurable;
    };
    var $bind = Function.prototype.bind;
    functionsHaveNames.boundFunctionsHaveNames = function boundFunctionsHaveNames() {
      return functionsHaveNames() && typeof $bind === "function" && function f() {
      }.bind().name !== "";
    };
    module.exports = functionsHaveNames;
  }
});

// node_modules/regexp.prototype.flags/implementation.js
var require_implementation4 = __commonJS({
  "node_modules/regexp.prototype.flags/implementation.js"(exports, module) {
    "use strict";
    var functionsHaveConfigurableNames = require_functions_have_names().functionsHaveConfigurableNames();
    var $Object = Object;
    var $TypeError = TypeError;
    module.exports = function flags() {
      if (this != null && this !== $Object(this)) {
        throw new $TypeError("RegExp.prototype.flags getter called on non-object");
      }
      var result = "";
      if (this.hasIndices) {
        result += "d";
      }
      if (this.global) {
        result += "g";
      }
      if (this.ignoreCase) {
        result += "i";
      }
      if (this.multiline) {
        result += "m";
      }
      if (this.dotAll) {
        result += "s";
      }
      if (this.unicode) {
        result += "u";
      }
      if (this.sticky) {
        result += "y";
      }
      return result;
    };
    if (functionsHaveConfigurableNames && Object.defineProperty) {
      Object.defineProperty(module.exports, "name", { value: "get flags" });
    }
  }
});

// node_modules/regexp.prototype.flags/polyfill.js
var require_polyfill2 = __commonJS({
  "node_modules/regexp.prototype.flags/polyfill.js"(exports, module) {
    "use strict";
    var implementation = require_implementation4();
    var supportsDescriptors = require_define_properties().supportsDescriptors;
    var $gOPD = Object.getOwnPropertyDescriptor;
    module.exports = function getPolyfill() {
      if (supportsDescriptors && /a/mig.flags === "gim") {
        var descriptor = $gOPD(RegExp.prototype, "flags");
        if (descriptor && typeof descriptor.get === "function" && typeof RegExp.prototype.dotAll === "boolean" && typeof RegExp.prototype.hasIndices === "boolean") {
          var calls = "";
          var o = {};
          Object.defineProperty(o, "hasIndices", {
            get: function() {
              calls += "d";
            }
          });
          Object.defineProperty(o, "sticky", {
            get: function() {
              calls += "y";
            }
          });
          if (calls === "dy") {
            return descriptor.get;
          }
        }
      }
      return implementation;
    };
  }
});

// node_modules/regexp.prototype.flags/shim.js
var require_shim2 = __commonJS({
  "node_modules/regexp.prototype.flags/shim.js"(exports, module) {
    "use strict";
    var supportsDescriptors = require_define_properties().supportsDescriptors;
    var getPolyfill = require_polyfill2();
    var gOPD = Object.getOwnPropertyDescriptor;
    var defineProperty4 = Object.defineProperty;
    var TypeErr = TypeError;
    var getProto = Object.getPrototypeOf;
    var regex = /a/;
    module.exports = function shimFlags() {
      if (!supportsDescriptors || !getProto) {
        throw new TypeErr("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
      }
      var polyfill = getPolyfill();
      var proto = getProto(regex);
      var descriptor = gOPD(proto, "flags");
      if (!descriptor || descriptor.get !== polyfill) {
        defineProperty4(proto, "flags", {
          configurable: true,
          enumerable: false,
          get: polyfill
        });
      }
      return polyfill;
    };
  }
});

// node_modules/regexp.prototype.flags/index.js
var require_regexp_prototype = __commonJS({
  "node_modules/regexp.prototype.flags/index.js"(exports, module) {
    "use strict";
    var define2 = require_define_properties();
    var callBind = require_call_bind();
    var implementation = require_implementation4();
    var getPolyfill = require_polyfill2();
    var shim = require_shim2();
    var flagsBound = callBind(getPolyfill());
    define2(flagsBound, {
      getPolyfill,
      implementation,
      shim
    });
    module.exports = flagsBound;
  }
});

// node_modules/deep-equal/node_modules/isarray/index.js
var require_isarray = __commonJS({
  "node_modules/deep-equal/node_modules/isarray/index.js"(exports, module) {
    var toString8 = {}.toString;
    module.exports = Array.isArray || function(arr) {
      return toString8.call(arr) == "[object Array]";
    };
  }
});

// node_modules/is-date-object/index.js
var require_is_date_object = __commonJS({
  "node_modules/is-date-object/index.js"(exports, module) {
    "use strict";
    var getDay = Date.prototype.getDay;
    var tryDateObject = function tryDateGetDayCall(value) {
      try {
        getDay.call(value);
        return true;
      } catch (e) {
        return false;
      }
    };
    var toStr = Object.prototype.toString;
    var dateClass = "[object Date]";
    var hasToStringTag = require_shams2()();
    module.exports = function isDateObject(value) {
      if (typeof value !== "object" || value === null) {
        return false;
      }
      return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
    };
  }
});

// node_modules/is-string/index.js
var require_is_string = __commonJS({
  "node_modules/is-string/index.js"(exports, module) {
    "use strict";
    var strValue = String.prototype.valueOf;
    var tryStringObject = function tryStringObject2(value) {
      try {
        strValue.call(value);
        return true;
      } catch (e) {
        return false;
      }
    };
    var toStr = Object.prototype.toString;
    var strClass = "[object String]";
    var hasToStringTag = require_shams2()();
    module.exports = function isString(value) {
      if (typeof value === "string") {
        return true;
      }
      if (typeof value !== "object") {
        return false;
      }
      return hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;
    };
  }
});

// node_modules/is-number-object/index.js
var require_is_number_object = __commonJS({
  "node_modules/is-number-object/index.js"(exports, module) {
    "use strict";
    var numToStr = Number.prototype.toString;
    var tryNumberObject = function tryNumberObject2(value) {
      try {
        numToStr.call(value);
        return true;
      } catch (e) {
        return false;
      }
    };
    var toStr = Object.prototype.toString;
    var numClass = "[object Number]";
    var hasToStringTag = require_shams2()();
    module.exports = function isNumberObject(value) {
      if (typeof value === "number") {
        return true;
      }
      if (typeof value !== "object") {
        return false;
      }
      return hasToStringTag ? tryNumberObject(value) : toStr.call(value) === numClass;
    };
  }
});

// node_modules/is-boolean-object/index.js
var require_is_boolean_object = __commonJS({
  "node_modules/is-boolean-object/index.js"(exports, module) {
    "use strict";
    var callBound = require_callBound();
    var $boolToStr = callBound("Boolean.prototype.toString");
    var $toString2 = callBound("Object.prototype.toString");
    var tryBooleanObject = function booleanBrandCheck(value) {
      try {
        $boolToStr(value);
        return true;
      } catch (e) {
        return false;
      }
    };
    var boolClass = "[object Boolean]";
    var hasToStringTag = require_shams2()();
    module.exports = function isBoolean(value) {
      if (typeof value === "boolean") {
        return true;
      }
      if (value === null || typeof value !== "object") {
        return false;
      }
      return hasToStringTag && Symbol.toStringTag in value ? tryBooleanObject(value) : $toString2(value) === boolClass;
    };
  }
});

// node_modules/is-symbol/index.js
var require_is_symbol2 = __commonJS({
  "node_modules/is-symbol/index.js"(exports, module) {
    "use strict";
    var toStr = Object.prototype.toString;
    var hasSymbols = require_has_symbols()();
    if (hasSymbols) {
      symToStr = Symbol.prototype.toString;
      symStringRegex = /^Symbol\(.*\)$/;
      isSymbolObject = function isRealSymbolObject(value) {
        if (typeof value.valueOf() !== "symbol") {
          return false;
        }
        return symStringRegex.test(symToStr.call(value));
      };
      module.exports = function isSymbol2(value) {
        if (typeof value === "symbol") {
          return true;
        }
        if (toStr.call(value) !== "[object Symbol]") {
          return false;
        }
        try {
          return isSymbolObject(value);
        } catch (e) {
          return false;
        }
      };
    } else {
      module.exports = function isSymbol2(value) {
        return false;
      };
    }
    var symToStr;
    var symStringRegex;
    var isSymbolObject;
  }
});

// node_modules/has-bigints/index.js
var require_has_bigints = __commonJS({
  "node_modules/has-bigints/index.js"(exports, module) {
    "use strict";
    var $BigInt = typeof BigInt !== "undefined" && BigInt;
    module.exports = function hasNativeBigInts() {
      return typeof $BigInt === "function" && typeof BigInt === "function" && typeof $BigInt(42) === "bigint" && typeof BigInt(42) === "bigint";
    };
  }
});

// node_modules/is-bigint/index.js
var require_is_bigint = __commonJS({
  "node_modules/is-bigint/index.js"(exports, module) {
    "use strict";
    var hasBigInts = require_has_bigints()();
    if (hasBigInts) {
      bigIntValueOf = BigInt.prototype.valueOf;
      tryBigInt = function tryBigIntObject(value) {
        try {
          bigIntValueOf.call(value);
          return true;
        } catch (e) {
        }
        return false;
      };
      module.exports = function isBigInt(value) {
        if (value === null || typeof value === "undefined" || typeof value === "boolean" || typeof value === "string" || typeof value === "number" || typeof value === "symbol" || typeof value === "function") {
          return false;
        }
        if (typeof value === "bigint") {
          return true;
        }
        return tryBigInt(value);
      };
    } else {
      module.exports = function isBigInt(value) {
        return false;
      };
    }
    var bigIntValueOf;
    var tryBigInt;
  }
});

// node_modules/which-boxed-primitive/index.js
var require_which_boxed_primitive = __commonJS({
  "node_modules/which-boxed-primitive/index.js"(exports, module) {
    "use strict";
    var isString = require_is_string();
    var isNumber = require_is_number_object();
    var isBoolean = require_is_boolean_object();
    var isSymbol2 = require_is_symbol2();
    var isBigInt = require_is_bigint();
    module.exports = function whichBoxedPrimitive(value) {
      if (value == null || typeof value !== "object" && typeof value !== "function") {
        return null;
      }
      if (isString(value)) {
        return "String";
      }
      if (isNumber(value)) {
        return "Number";
      }
      if (isBoolean(value)) {
        return "Boolean";
      }
      if (isSymbol2(value)) {
        return "Symbol";
      }
      if (isBigInt(value)) {
        return "BigInt";
      }
    };
  }
});

// node_modules/is-map/index.js
var require_is_map = __commonJS({
  "node_modules/is-map/index.js"(exports, module) {
    "use strict";
    var $Map = typeof Map === "function" && Map.prototype ? Map : null;
    var $Set = typeof Set === "function" && Set.prototype ? Set : null;
    var exported;
    if (!$Map) {
      exported = function isMap(x) {
        return false;
      };
    }
    var $mapHas = $Map ? Map.prototype.has : null;
    var $setHas = $Set ? Set.prototype.has : null;
    if (!exported && !$mapHas) {
      exported = function isMap(x) {
        return false;
      };
    }
    module.exports = exported || function isMap(x) {
      if (!x || typeof x !== "object") {
        return false;
      }
      try {
        $mapHas.call(x);
        if ($setHas) {
          try {
            $setHas.call(x);
          } catch (e) {
            return true;
          }
        }
        return x instanceof $Map;
      } catch (e) {
      }
      return false;
    };
  }
});

// node_modules/is-set/index.js
var require_is_set = __commonJS({
  "node_modules/is-set/index.js"(exports, module) {
    "use strict";
    var $Map = typeof Map === "function" && Map.prototype ? Map : null;
    var $Set = typeof Set === "function" && Set.prototype ? Set : null;
    var exported;
    if (!$Set) {
      exported = function isSet(x) {
        return false;
      };
    }
    var $mapHas = $Map ? Map.prototype.has : null;
    var $setHas = $Set ? Set.prototype.has : null;
    if (!exported && !$setHas) {
      exported = function isSet(x) {
        return false;
      };
    }
    module.exports = exported || function isSet(x) {
      if (!x || typeof x !== "object") {
        return false;
      }
      try {
        $setHas.call(x);
        if ($mapHas) {
          try {
            $mapHas.call(x);
          } catch (e) {
            return true;
          }
        }
        return x instanceof $Set;
      } catch (e) {
      }
      return false;
    };
  }
});

// node_modules/is-weakmap/index.js
var require_is_weakmap = __commonJS({
  "node_modules/is-weakmap/index.js"(exports, module) {
    "use strict";
    var $WeakMap = typeof WeakMap === "function" && WeakMap.prototype ? WeakMap : null;
    var $WeakSet = typeof WeakSet === "function" && WeakSet.prototype ? WeakSet : null;
    var exported;
    if (!$WeakMap) {
      exported = function isWeakMap(x) {
        return false;
      };
    }
    var $mapHas = $WeakMap ? $WeakMap.prototype.has : null;
    var $setHas = $WeakSet ? $WeakSet.prototype.has : null;
    if (!exported && !$mapHas) {
      exported = function isWeakMap(x) {
        return false;
      };
    }
    module.exports = exported || function isWeakMap(x) {
      if (!x || typeof x !== "object") {
        return false;
      }
      try {
        $mapHas.call(x, $mapHas);
        if ($setHas) {
          try {
            $setHas.call(x, $setHas);
          } catch (e) {
            return true;
          }
        }
        return x instanceof $WeakMap;
      } catch (e) {
      }
      return false;
    };
  }
});

// node_modules/is-weakset/index.js
var require_is_weakset = __commonJS({
  "node_modules/is-weakset/index.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBound = require_callBound();
    var $WeakSet = GetIntrinsic("%WeakSet%", true);
    var $setHas = callBound("WeakSet.prototype.has", true);
    if ($setHas) {
      $mapHas = callBound("WeakMap.prototype.has", true);
      module.exports = function isWeakSet(x) {
        if (!x || typeof x !== "object") {
          return false;
        }
        try {
          $setHas(x, $setHas);
          if ($mapHas) {
            try {
              $mapHas(x, $mapHas);
            } catch (e) {
              return true;
            }
          }
          return x instanceof $WeakSet;
        } catch (e) {
        }
        return false;
      };
    } else {
      module.exports = function isWeakSet(x) {
        return false;
      };
    }
    var $mapHas;
  }
});

// node_modules/which-collection/index.js
var require_which_collection = __commonJS({
  "node_modules/which-collection/index.js"(exports, module) {
    "use strict";
    var isMap = require_is_map();
    var isSet = require_is_set();
    var isWeakMap = require_is_weakmap();
    var isWeakSet = require_is_weakset();
    module.exports = function whichCollection(value) {
      if (value && typeof value === "object") {
        if (isMap(value)) {
          return "Map";
        }
        if (isSet(value)) {
          return "Set";
        }
        if (isWeakMap(value)) {
          return "WeakMap";
        }
        if (isWeakSet(value)) {
          return "WeakSet";
        }
      }
      return false;
    };
  }
});

// node_modules/es-get-iterator/node_modules/isarray/index.js
var require_isarray2 = __commonJS({
  "node_modules/es-get-iterator/node_modules/isarray/index.js"(exports, module) {
    var toString8 = {}.toString;
    module.exports = Array.isArray || function(arr) {
      return toString8.call(arr) == "[object Array]";
    };
  }
});

// node_modules/es-get-iterator/index.js
var require_es_get_iterator = __commonJS({
  "node_modules/es-get-iterator/index.js"(exports, module) {
    "use strict";
    var isArguments = require_is_arguments();
    if (require_has_symbols()() || require_shams()()) {
      $iterator = Symbol.iterator;
      module.exports = function getIterator(iterable) {
        if (iterable != null && typeof iterable[$iterator] !== "undefined") {
          return iterable[$iterator]();
        }
        if (isArguments(iterable)) {
          return Array.prototype[$iterator].call(iterable);
        }
      };
    } else {
      isArray3 = require_isarray2();
      isString = require_is_string();
      GetIntrinsic = require_get_intrinsic();
      $Map = GetIntrinsic("%Map%", true);
      $Set = GetIntrinsic("%Set%", true);
      callBound = require_callBound();
      $arrayPush = callBound("Array.prototype.push");
      $charCodeAt = callBound("String.prototype.charCodeAt");
      $stringSlice = callBound("String.prototype.slice");
      advanceStringIndex2 = function advanceStringIndex3(S, index) {
        var length = S.length;
        if (index + 1 >= length) {
          return index + 1;
        }
        var first = $charCodeAt(S, index);
        if (first < 55296 || first > 56319) {
          return index + 1;
        }
        var second = $charCodeAt(S, index + 1);
        if (second < 56320 || second > 57343) {
          return index + 1;
        }
        return index + 2;
      };
      getArrayIterator = function getArrayIterator2(arraylike) {
        var i = 0;
        return {
          next: function next2() {
            var done = i >= arraylike.length;
            var value;
            if (!done) {
              value = arraylike[i];
              i += 1;
            }
            return {
              done,
              value
            };
          }
        };
      };
      getNonCollectionIterator = function getNonCollectionIterator2(iterable, noPrimordialCollections) {
        if (isArray3(iterable) || isArguments(iterable)) {
          return getArrayIterator(iterable);
        }
        if (isString(iterable)) {
          var i = 0;
          return {
            next: function next2() {
              var nextIndex = advanceStringIndex2(iterable, i);
              var value = $stringSlice(iterable, i, nextIndex);
              i = nextIndex;
              return {
                done: nextIndex > iterable.length,
                value
              };
            }
          };
        }
        if (noPrimordialCollections && typeof iterable["_es6-shim iterator_"] !== "undefined") {
          return iterable["_es6-shim iterator_"]();
        }
      };
      if (!$Map && !$Set) {
        module.exports = function getIterator(iterable) {
          if (iterable != null) {
            return getNonCollectionIterator(iterable, true);
          }
        };
      } else {
        isMap = require_is_map();
        isSet = require_is_set();
        $mapForEach = callBound("Map.prototype.forEach", true);
        $setForEach = callBound("Set.prototype.forEach", true);
        if (typeof process === "undefined" || !process.versions || !process.versions.node) {
          $mapIterator = callBound("Map.prototype.iterator", true);
          $setIterator = callBound("Set.prototype.iterator", true);
          getStopIterationIterator = function(iterator) {
            var done = false;
            return {
              next: function next2() {
                try {
                  return {
                    done,
                    value: done ? void 0 : iterator.next()
                  };
                } catch (e) {
                  done = true;
                  return {
                    done: true,
                    value: void 0
                  };
                }
              }
            };
          };
        }
        $mapAtAtIterator = callBound("Map.prototype.@@iterator", true) || callBound("Map.prototype._es6-shim iterator_", true);
        $setAtAtIterator = callBound("Set.prototype.@@iterator", true) || callBound("Set.prototype._es6-shim iterator_", true);
        getCollectionIterator = function getCollectionIterator2(iterable) {
          if (isMap(iterable)) {
            if ($mapIterator) {
              return getStopIterationIterator($mapIterator(iterable));
            }
            if ($mapAtAtIterator) {
              return $mapAtAtIterator(iterable);
            }
            if ($mapForEach) {
              var entries2 = [];
              $mapForEach(iterable, function(v, k) {
                $arrayPush(entries2, [k, v]);
              });
              return getArrayIterator(entries2);
            }
          }
          if (isSet(iterable)) {
            if ($setIterator) {
              return getStopIterationIterator($setIterator(iterable));
            }
            if ($setAtAtIterator) {
              return $setAtAtIterator(iterable);
            }
            if ($setForEach) {
              var values2 = [];
              $setForEach(iterable, function(v) {
                $arrayPush(values2, v);
              });
              return getArrayIterator(values2);
            }
          }
        };
        module.exports = function getIterator(iterable) {
          return getCollectionIterator(iterable) || getNonCollectionIterator(iterable);
        };
      }
    }
    var $iterator;
    var isArray3;
    var isString;
    var GetIntrinsic;
    var $Map;
    var $Set;
    var callBound;
    var $arrayPush;
    var $charCodeAt;
    var $stringSlice;
    var advanceStringIndex2;
    var getArrayIterator;
    var getNonCollectionIterator;
    var isMap;
    var isSet;
    var $mapForEach;
    var $setForEach;
    var $mapIterator;
    var $setIterator;
    var getStopIterationIterator;
    var $mapAtAtIterator;
    var $setAtAtIterator;
    var getCollectionIterator;
  }
});

// (disabled):node_modules/object-inspect/util.inspect
var require_util2 = __commonJS({
  "(disabled):node_modules/object-inspect/util.inspect"() {
  }
});

// node_modules/object-inspect/index.js
var require_object_inspect = __commonJS({
  "node_modules/object-inspect/index.js"(exports, module) {
    var hasMap = typeof Map === "function" && Map.prototype;
    var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
    var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
    var mapForEach = hasMap && Map.prototype.forEach;
    var hasSet = typeof Set === "function" && Set.prototype;
    var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
    var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
    var setForEach = hasSet && Set.prototype.forEach;
    var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
    var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
    var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
    var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
    var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
    var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
    var booleanValueOf = Boolean.prototype.valueOf;
    var objectToString = Object.prototype.toString;
    var functionToString2 = Function.prototype.toString;
    var $match = String.prototype.match;
    var $slice = String.prototype.slice;
    var $replace = String.prototype.replace;
    var $toUpperCase = String.prototype.toUpperCase;
    var $toLowerCase = String.prototype.toLowerCase;
    var $test = RegExp.prototype.test;
    var $concat = Array.prototype.concat;
    var $join = Array.prototype.join;
    var $arrSlice = Array.prototype.slice;
    var $floor = Math.floor;
    var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
    var gOPS = Object.getOwnPropertySymbols;
    var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
    var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
    var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
      return O.__proto__;
    } : null);
    function addNumericSeparator(num, str) {
      if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) {
        return str;
      }
      var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
      if (typeof num === "number") {
        var int = num < 0 ? -$floor(-num) : $floor(num);
        if (int !== num) {
          var intStr = String(int);
          var dec = $slice.call(str, intStr.length + 1);
          return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
      }
      return $replace.call(str, sepRegex, "$&_");
    }
    var utilInspect = require_util2();
    var inspectCustom = utilInspect.custom;
    var inspectSymbol = isSymbol2(inspectCustom) ? inspectCustom : null;
    module.exports = function inspect_(obj, options, depth, seen) {
      var opts = options || {};
      if (has(opts, "quoteStyle") && (opts.quoteStyle !== "single" && opts.quoteStyle !== "double")) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
      }
      if (has(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
      }
      var customInspect = has(opts, "customInspect") ? opts.customInspect : true;
      if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
        throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
      }
      if (has(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
      }
      if (has(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
      }
      var numericSeparator = opts.numericSeparator;
      if (typeof obj === "undefined") {
        return "undefined";
      }
      if (obj === null) {
        return "null";
      }
      if (typeof obj === "boolean") {
        return obj ? "true" : "false";
      }
      if (typeof obj === "string") {
        return inspectString(obj, opts);
      }
      if (typeof obj === "number") {
        if (obj === 0) {
          return Infinity / obj > 0 ? "0" : "-0";
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
      }
      if (typeof obj === "bigint") {
        var bigIntStr = String(obj) + "n";
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
      }
      var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
      if (typeof depth === "undefined") {
        depth = 0;
      }
      if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
        return isArray3(obj) ? "[Array]" : "[Object]";
      }
      var indent = getIndent(opts, depth);
      if (typeof seen === "undefined") {
        seen = [];
      } else if (indexOf(seen, obj) >= 0) {
        return "[Circular]";
      }
      function inspect(value, from2, noIndent) {
        if (from2) {
          seen = $arrSlice.call(seen);
          seen.push(from2);
        }
        if (noIndent) {
          var newOpts = {
            depth: opts.depth
          };
          if (has(opts, "quoteStyle")) {
            newOpts.quoteStyle = opts.quoteStyle;
          }
          return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
      }
      if (typeof obj === "function" && !isRegExp(obj)) {
        var name = nameOf(obj);
        var keys2 = arrObjKeys(obj, inspect);
        return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys2.length > 0 ? " { " + $join.call(keys2, ", ") + " }" : "");
      }
      if (isSymbol2(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
        return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
      }
      if (isElement(obj)) {
        var s = "<" + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
          s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
        }
        s += ">";
        if (obj.childNodes && obj.childNodes.length) {
          s += "...";
        }
        s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
        return s;
      }
      if (isArray3(obj)) {
        if (obj.length === 0) {
          return "[]";
        }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
          return "[" + indentedJoin(xs, indent) + "]";
        }
        return "[ " + $join.call(xs, ", ") + " ]";
      }
      if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) {
          return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
        }
        if (parts.length === 0) {
          return "[" + String(obj) + "]";
        }
        return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
      }
      if (typeof obj === "object" && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) {
          return utilInspect(obj, { depth: maxDepth - depth });
        } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
          return obj.inspect();
        }
      }
      if (isMap(obj)) {
        var mapParts = [];
        mapForEach.call(obj, function(value, key) {
          mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
        });
        return collectionOf("Map", mapSize.call(obj), mapParts, indent);
      }
      if (isSet(obj)) {
        var setParts = [];
        setForEach.call(obj, function(value) {
          setParts.push(inspect(value, obj));
        });
        return collectionOf("Set", setSize.call(obj), setParts, indent);
      }
      if (isWeakMap(obj)) {
        return weakCollectionOf("WeakMap");
      }
      if (isWeakSet(obj)) {
        return weakCollectionOf("WeakSet");
      }
      if (isWeakRef(obj)) {
        return weakCollectionOf("WeakRef");
      }
      if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
      }
      if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
      }
      if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
      }
      if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
      }
      if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? "" : "null prototype";
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
        var constructorTag = isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
        var tag = constructorTag + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
        if (ys.length === 0) {
          return tag + "{}";
        }
        if (indent) {
          return tag + "{" + indentedJoin(ys, indent) + "}";
        }
        return tag + "{ " + $join.call(ys, ", ") + " }";
      }
      return String(obj);
    };
    function wrapQuotes(s, defaultStyle, opts) {
      var quoteChar = (opts.quoteStyle || defaultStyle) === "double" ? '"' : "'";
      return quoteChar + s + quoteChar;
    }
    function quote(s) {
      return $replace.call(String(s), /"/g, "&quot;");
    }
    function isArray3(obj) {
      return toStr(obj) === "[object Array]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isDate(obj) {
      return toStr(obj) === "[object Date]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isRegExp(obj) {
      return toStr(obj) === "[object RegExp]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isError(obj) {
      return toStr(obj) === "[object Error]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isString(obj) {
      return toStr(obj) === "[object String]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isNumber(obj) {
      return toStr(obj) === "[object Number]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isBoolean(obj) {
      return toStr(obj) === "[object Boolean]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isSymbol2(obj) {
      if (hasShammedSymbols) {
        return obj && typeof obj === "object" && obj instanceof Symbol;
      }
      if (typeof obj === "symbol") {
        return true;
      }
      if (!obj || typeof obj !== "object" || !symToString) {
        return false;
      }
      try {
        symToString.call(obj);
        return true;
      } catch (e) {
      }
      return false;
    }
    function isBigInt(obj) {
      if (!obj || typeof obj !== "object" || !bigIntValueOf) {
        return false;
      }
      try {
        bigIntValueOf.call(obj);
        return true;
      } catch (e) {
      }
      return false;
    }
    var hasOwn4 = Object.prototype.hasOwnProperty || function(key) {
      return key in this;
    };
    function has(obj, key) {
      return hasOwn4.call(obj, key);
    }
    function toStr(obj) {
      return objectToString.call(obj);
    }
    function nameOf(f) {
      if (f.name) {
        return f.name;
      }
      var m = $match.call(functionToString2.call(f), /^function\s*([\w$]+)/);
      if (m) {
        return m[1];
      }
      return null;
    }
    function indexOf(xs, x) {
      if (xs.indexOf) {
        return xs.indexOf(x);
      }
      for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) {
          return i;
        }
      }
      return -1;
    }
    function isMap(x) {
      if (!mapSize || !x || typeof x !== "object") {
        return false;
      }
      try {
        mapSize.call(x);
        try {
          setSize.call(x);
        } catch (s) {
          return true;
        }
        return x instanceof Map;
      } catch (e) {
      }
      return false;
    }
    function isWeakMap(x) {
      if (!weakMapHas || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakMapHas.call(x, weakMapHas);
        try {
          weakSetHas.call(x, weakSetHas);
        } catch (s) {
          return true;
        }
        return x instanceof WeakMap;
      } catch (e) {
      }
      return false;
    }
    function isWeakRef(x) {
      if (!weakRefDeref || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakRefDeref.call(x);
        return true;
      } catch (e) {
      }
      return false;
    }
    function isSet(x) {
      if (!setSize || !x || typeof x !== "object") {
        return false;
      }
      try {
        setSize.call(x);
        try {
          mapSize.call(x);
        } catch (m) {
          return true;
        }
        return x instanceof Set;
      } catch (e) {
      }
      return false;
    }
    function isWeakSet(x) {
      if (!weakSetHas || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakSetHas.call(x, weakSetHas);
        try {
          weakMapHas.call(x, weakMapHas);
        } catch (s) {
          return true;
        }
        return x instanceof WeakSet;
      } catch (e) {
      }
      return false;
    }
    function isElement(x) {
      if (!x || typeof x !== "object") {
        return false;
      }
      if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
        return true;
      }
      return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
    }
    function inspectString(str, opts) {
      if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
      }
      var s = $replace.call($replace.call(str, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, lowbyte);
      return wrapQuotes(s, "single", opts);
    }
    function lowbyte(c) {
      var n = c.charCodeAt(0);
      var x = {
        8: "b",
        9: "t",
        10: "n",
        12: "f",
        13: "r"
      }[n];
      if (x) {
        return "\\" + x;
      }
      return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
    }
    function markBoxed(str) {
      return "Object(" + str + ")";
    }
    function weakCollectionOf(type) {
      return type + " { ? }";
    }
    function collectionOf(type, size, entries2, indent) {
      var joinedEntries = indent ? indentedJoin(entries2, indent) : $join.call(entries2, ", ");
      return type + " (" + size + ") {" + joinedEntries + "}";
    }
    function singleLineValues(xs) {
      for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], "\n") >= 0) {
          return false;
        }
      }
      return true;
    }
    function getIndent(opts, depth) {
      var baseIndent;
      if (opts.indent === "	") {
        baseIndent = "	";
      } else if (typeof opts.indent === "number" && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), " ");
      } else {
        return null;
      }
      return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
      };
    }
    function indentedJoin(xs, indent) {
      if (xs.length === 0) {
        return "";
      }
      var lineJoiner = "\n" + indent.prev + indent.base;
      return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
    }
    function arrObjKeys(obj, inspect) {
      var isArr = isArray3(obj);
      var xs = [];
      if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
          xs[i] = has(obj, i) ? inspect(obj[i], obj) : "";
        }
      }
      var syms = typeof gOPS === "function" ? gOPS(obj) : [];
      var symMap;
      if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
          symMap["$" + syms[k]] = syms[k];
        }
      }
      for (var key in obj) {
        if (!has(obj, key)) {
          continue;
        }
        if (isArr && String(Number(key)) === key && key < obj.length) {
          continue;
        }
        if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) {
          continue;
        } else if ($test.call(/[^\w$]/, key)) {
          xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
        } else {
          xs.push(key + ": " + inspect(obj[key], obj));
        }
      }
      if (typeof gOPS === "function") {
        for (var j = 0; j < syms.length; j++) {
          if (isEnumerable.call(obj, syms[j])) {
            xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
          }
        }
      }
      return xs;
    }
  }
});

// node_modules/side-channel/index.js
var require_side_channel = __commonJS({
  "node_modules/side-channel/index.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBound = require_callBound();
    var inspect = require_object_inspect();
    var $TypeError = GetIntrinsic("%TypeError%");
    var $WeakMap = GetIntrinsic("%WeakMap%", true);
    var $Map = GetIntrinsic("%Map%", true);
    var $weakMapGet = callBound("WeakMap.prototype.get", true);
    var $weakMapSet = callBound("WeakMap.prototype.set", true);
    var $weakMapHas = callBound("WeakMap.prototype.has", true);
    var $mapGet = callBound("Map.prototype.get", true);
    var $mapSet = callBound("Map.prototype.set", true);
    var $mapHas = callBound("Map.prototype.has", true);
    var listGetNode = function(list, key) {
      for (var prev = list, curr; (curr = prev.next) !== null; prev = curr) {
        if (curr.key === key) {
          prev.next = curr.next;
          curr.next = list.next;
          list.next = curr;
          return curr;
        }
      }
    };
    var listGet = function(objects, key) {
      var node = listGetNode(objects, key);
      return node && node.value;
    };
    var listSet = function(objects, key, value) {
      var node = listGetNode(objects, key);
      if (node) {
        node.value = value;
      } else {
        objects.next = {
          key,
          next: objects.next,
          value
        };
      }
    };
    var listHas = function(objects, key) {
      return !!listGetNode(objects, key);
    };
    module.exports = function getSideChannel() {
      var $wm;
      var $m;
      var $o;
      var channel = {
        assert: function(key) {
          if (!channel.has(key)) {
            throw new $TypeError("Side channel does not contain " + inspect(key));
          }
        },
        get: function(key) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if ($wm) {
              return $weakMapGet($wm, key);
            }
          } else if ($Map) {
            if ($m) {
              return $mapGet($m, key);
            }
          } else {
            if ($o) {
              return listGet($o, key);
            }
          }
        },
        has: function(key) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if ($wm) {
              return $weakMapHas($wm, key);
            }
          } else if ($Map) {
            if ($m) {
              return $mapHas($m, key);
            }
          } else {
            if ($o) {
              return listHas($o, key);
            }
          }
          return false;
        },
        set: function(key, value) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if (!$wm) {
              $wm = new $WeakMap();
            }
            $weakMapSet($wm, key, value);
          } else if ($Map) {
            if (!$m) {
              $m = new $Map();
            }
            $mapSet($m, key, value);
          } else {
            if (!$o) {
              $o = { key: {}, next: null };
            }
            listSet($o, key, value);
          }
        }
      };
      return channel;
    };
  }
});

// node_modules/is-callable/index.js
var require_is_callable2 = __commonJS({
  "node_modules/is-callable/index.js"(exports, module) {
    "use strict";
    var fnToStr = Function.prototype.toString;
    var reflectApply = typeof Reflect === "object" && Reflect !== null && Reflect.apply;
    var badArrayLike;
    var isCallableMarker;
    if (typeof reflectApply === "function" && typeof Object.defineProperty === "function") {
      try {
        badArrayLike = Object.defineProperty({}, "length", {
          get: function() {
            throw isCallableMarker;
          }
        });
        isCallableMarker = {};
        reflectApply(function() {
          throw 42;
        }, null, badArrayLike);
      } catch (_) {
        if (_ !== isCallableMarker) {
          reflectApply = null;
        }
      }
    } else {
      reflectApply = null;
    }
    var constructorRegex = /^\s*class\b/;
    var isES6ClassFn = function isES6ClassFunction(value) {
      try {
        var fnStr = fnToStr.call(value);
        return constructorRegex.test(fnStr);
      } catch (e) {
        return false;
      }
    };
    var tryFunctionObject = function tryFunctionToStr(value) {
      try {
        if (isES6ClassFn(value)) {
          return false;
        }
        fnToStr.call(value);
        return true;
      } catch (e) {
        return false;
      }
    };
    var toStr = Object.prototype.toString;
    var objectClass = "[object Object]";
    var fnClass = "[object Function]";
    var genClass = "[object GeneratorFunction]";
    var ddaClass = "[object HTMLAllCollection]";
    var ddaClass2 = "[object HTML document.all class]";
    var ddaClass3 = "[object HTMLCollection]";
    var hasToStringTag = typeof Symbol === "function" && !!Symbol.toStringTag;
    var isIE68 = !(0 in [,]);
    var isDDA = function isDocumentDotAll() {
      return false;
    };
    if (typeof document === "object") {
      all = document.all;
      if (toStr.call(all) === toStr.call(document.all)) {
        isDDA = function isDocumentDotAll(value) {
          if ((isIE68 || !value) && (typeof value === "undefined" || typeof value === "object")) {
            try {
              var str = toStr.call(value);
              return (str === ddaClass || str === ddaClass2 || str === ddaClass3 || str === objectClass) && value("") == null;
            } catch (e) {
            }
          }
          return false;
        };
      }
    }
    var all;
    module.exports = reflectApply ? function isCallable3(value) {
      if (isDDA(value)) {
        return true;
      }
      if (!value) {
        return false;
      }
      if (typeof value !== "function" && typeof value !== "object") {
        return false;
      }
      try {
        reflectApply(value, null, badArrayLike);
      } catch (e) {
        if (e !== isCallableMarker) {
          return false;
        }
      }
      return !isES6ClassFn(value) && tryFunctionObject(value);
    } : function isCallable3(value) {
      if (isDDA(value)) {
        return true;
      }
      if (!value) {
        return false;
      }
      if (typeof value !== "function" && typeof value !== "object") {
        return false;
      }
      if (hasToStringTag) {
        return tryFunctionObject(value);
      }
      if (isES6ClassFn(value)) {
        return false;
      }
      var strClass = toStr.call(value);
      if (strClass !== fnClass && strClass !== genClass && !/^\[object HTML/.test(strClass)) {
        return false;
      }
      return tryFunctionObject(value);
    };
  }
});

// node_modules/for-each/index.js
var require_for_each = __commonJS({
  "node_modules/for-each/index.js"(exports, module) {
    "use strict";
    var isCallable3 = require_is_callable2();
    var toStr = Object.prototype.toString;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var forEachArray = function forEachArray2(array, iterator, receiver) {
      for (var i = 0, len = array.length; i < len; i++) {
        if (hasOwnProperty.call(array, i)) {
          if (receiver == null) {
            iterator(array[i], i, array);
          } else {
            iterator.call(receiver, array[i], i, array);
          }
        }
      }
    };
    var forEachString = function forEachString2(string, iterator, receiver) {
      for (var i = 0, len = string.length; i < len; i++) {
        if (receiver == null) {
          iterator(string.charAt(i), i, string);
        } else {
          iterator.call(receiver, string.charAt(i), i, string);
        }
      }
    };
    var forEachObject = function forEachObject2(object, iterator, receiver) {
      for (var k in object) {
        if (hasOwnProperty.call(object, k)) {
          if (receiver == null) {
            iterator(object[k], k, object);
          } else {
            iterator.call(receiver, object[k], k, object);
          }
        }
      }
    };
    var forEach2 = function forEach3(list, iterator, thisArg) {
      if (!isCallable3(iterator)) {
        throw new TypeError("iterator must be a function");
      }
      var receiver;
      if (arguments.length >= 3) {
        receiver = thisArg;
      }
      if (toStr.call(list) === "[object Array]") {
        forEachArray(list, iterator, receiver);
      } else if (typeof list === "string") {
        forEachString(list, iterator, receiver);
      } else {
        forEachObject(list, iterator, receiver);
      }
    };
    module.exports = forEach2;
  }
});

// node_modules/available-typed-arrays/index.js
var require_available_typed_arrays = __commonJS({
  "node_modules/available-typed-arrays/index.js"(exports, module) {
    "use strict";
    var possibleNames = [
      "BigInt64Array",
      "BigUint64Array",
      "Float32Array",
      "Float64Array",
      "Int16Array",
      "Int32Array",
      "Int8Array",
      "Uint16Array",
      "Uint32Array",
      "Uint8Array",
      "Uint8ClampedArray"
    ];
    var g = typeof globalThis === "undefined" ? global : globalThis;
    module.exports = function availableTypedArrays() {
      var out = [];
      for (var i = 0; i < possibleNames.length; i++) {
        if (typeof g[possibleNames[i]] === "function") {
          out[out.length] = possibleNames[i];
        }
      }
      return out;
    };
  }
});

// node_modules/gopd/index.js
var require_gopd = __commonJS({
  "node_modules/gopd/index.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
    if ($gOPD) {
      try {
        $gOPD([], "length");
      } catch (e) {
        $gOPD = null;
      }
    }
    module.exports = $gOPD;
  }
});

// node_modules/is-typed-array/index.js
var require_is_typed_array = __commonJS({
  "node_modules/is-typed-array/index.js"(exports, module) {
    "use strict";
    var forEach2 = require_for_each();
    var availableTypedArrays = require_available_typed_arrays();
    var callBound = require_callBound();
    var $toString2 = callBound("Object.prototype.toString");
    var hasToStringTag = require_shams2()();
    var gOPD = require_gopd();
    var g = typeof globalThis === "undefined" ? global : globalThis;
    var typedArrays = availableTypedArrays();
    var $indexOf = callBound("Array.prototype.indexOf", true) || function indexOf(array, value) {
      for (var i = 0; i < array.length; i += 1) {
        if (array[i] === value) {
          return i;
        }
      }
      return -1;
    };
    var $slice = callBound("String.prototype.slice");
    var toStrTags = {};
    var getPrototypeOf = Object.getPrototypeOf;
    if (hasToStringTag && gOPD && getPrototypeOf) {
      forEach2(typedArrays, function(typedArray) {
        var arr = new g[typedArray]();
        if (Symbol.toStringTag in arr) {
          var proto = getPrototypeOf(arr);
          var descriptor = gOPD(proto, Symbol.toStringTag);
          if (!descriptor) {
            var superProto = getPrototypeOf(proto);
            descriptor = gOPD(superProto, Symbol.toStringTag);
          }
          toStrTags[typedArray] = descriptor.get;
        }
      });
    }
    var tryTypedArrays = function tryAllTypedArrays(value) {
      var anyTrue = false;
      forEach2(toStrTags, function(getter, typedArray) {
        if (!anyTrue) {
          try {
            anyTrue = getter.call(value) === typedArray;
          } catch (e) {
          }
        }
      });
      return anyTrue;
    };
    module.exports = function isTypedArray(value) {
      if (!value || typeof value !== "object") {
        return false;
      }
      if (!hasToStringTag || !(Symbol.toStringTag in value)) {
        var tag = $slice($toString2(value), 8, -1);
        return $indexOf(typedArrays, tag) > -1;
      }
      if (!gOPD) {
        return false;
      }
      return tryTypedArrays(value);
    };
  }
});

// node_modules/which-typed-array/index.js
var require_which_typed_array = __commonJS({
  "node_modules/which-typed-array/index.js"(exports, module) {
    "use strict";
    var forEach2 = require_for_each();
    var availableTypedArrays = require_available_typed_arrays();
    var callBound = require_callBound();
    var gOPD = require_gopd();
    var $toString2 = callBound("Object.prototype.toString");
    var hasToStringTag = require_shams2()();
    var g = typeof globalThis === "undefined" ? global : globalThis;
    var typedArrays = availableTypedArrays();
    var $slice = callBound("String.prototype.slice");
    var toStrTags = {};
    var getPrototypeOf = Object.getPrototypeOf;
    if (hasToStringTag && gOPD && getPrototypeOf) {
      forEach2(typedArrays, function(typedArray) {
        if (typeof g[typedArray] === "function") {
          var arr = new g[typedArray]();
          if (Symbol.toStringTag in arr) {
            var proto = getPrototypeOf(arr);
            var descriptor = gOPD(proto, Symbol.toStringTag);
            if (!descriptor) {
              var superProto = getPrototypeOf(proto);
              descriptor = gOPD(superProto, Symbol.toStringTag);
            }
            toStrTags[typedArray] = descriptor.get;
          }
        }
      });
    }
    var tryTypedArrays = function tryAllTypedArrays(value) {
      var foundName = false;
      forEach2(toStrTags, function(getter, typedArray) {
        if (!foundName) {
          try {
            var name = getter.call(value);
            if (name === typedArray) {
              foundName = name;
            }
          } catch (e) {
          }
        }
      });
      return foundName;
    };
    var isTypedArray = require_is_typed_array();
    module.exports = function whichTypedArray(value) {
      if (!isTypedArray(value)) {
        return false;
      }
      if (!hasToStringTag || !(Symbol.toStringTag in value)) {
        return $slice($toString2(value), 8, -1);
      }
      return tryTypedArrays(value);
    };
  }
});

// node_modules/object.assign/implementation.js
var require_implementation5 = __commonJS({
  "node_modules/object.assign/implementation.js"(exports, module) {
    "use strict";
    var objectKeys = require_object_keys2();
    var hasSymbols = require_shams()();
    var callBound = require_callBound();
    var toObject4 = Object;
    var $push = callBound("Array.prototype.push");
    var $propIsEnumerable = callBound("Object.prototype.propertyIsEnumerable");
    var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;
    module.exports = function assign2(target, source1) {
      if (target == null) {
        throw new TypeError("target must be an object");
      }
      var to = toObject4(target);
      if (arguments.length === 1) {
        return to;
      }
      for (var s = 1; s < arguments.length; ++s) {
        var from2 = toObject4(arguments[s]);
        var keys2 = objectKeys(from2);
        var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
        if (getSymbols) {
          var syms = getSymbols(from2);
          for (var j = 0; j < syms.length; ++j) {
            var key = syms[j];
            if ($propIsEnumerable(from2, key)) {
              $push(keys2, key);
            }
          }
        }
        for (var i = 0; i < keys2.length; ++i) {
          var nextKey = keys2[i];
          if ($propIsEnumerable(from2, nextKey)) {
            var propValue = from2[nextKey];
            to[nextKey] = propValue;
          }
        }
      }
      return to;
    };
  }
});

// node_modules/object.assign/polyfill.js
var require_polyfill3 = __commonJS({
  "node_modules/object.assign/polyfill.js"(exports, module) {
    "use strict";
    var implementation = require_implementation5();
    var lacksProperEnumerationOrder = function() {
      if (!Object.assign) {
        return false;
      }
      var str = "abcdefghijklmnopqrst";
      var letters = str.split("");
      var map2 = {};
      for (var i = 0; i < letters.length; ++i) {
        map2[letters[i]] = letters[i];
      }
      var obj = Object.assign({}, map2);
      var actual = "";
      for (var k in obj) {
        actual += k;
      }
      return str !== actual;
    };
    var assignHasPendingExceptions = function() {
      if (!Object.assign || !Object.preventExtensions) {
        return false;
      }
      var thrower = Object.preventExtensions({ 1: 2 });
      try {
        Object.assign(thrower, "xy");
      } catch (e) {
        return thrower[1] === "y";
      }
      return false;
    };
    module.exports = function getPolyfill() {
      if (!Object.assign) {
        return implementation;
      }
      if (lacksProperEnumerationOrder()) {
        return implementation;
      }
      if (assignHasPendingExceptions()) {
        return implementation;
      }
      return Object.assign;
    };
  }
});

// node_modules/object.assign/shim.js
var require_shim3 = __commonJS({
  "node_modules/object.assign/shim.js"(exports, module) {
    "use strict";
    var define2 = require_define_properties();
    var getPolyfill = require_polyfill3();
    module.exports = function shimAssign() {
      var polyfill = getPolyfill();
      define2(Object, { assign: polyfill }, { assign: function() {
        return Object.assign !== polyfill;
      } });
      return polyfill;
    };
  }
});

// node_modules/object.assign/index.js
var require_object = __commonJS({
  "node_modules/object.assign/index.js"(exports, module) {
    "use strict";
    var defineProperties = require_define_properties();
    var callBind = require_call_bind();
    var implementation = require_implementation5();
    var getPolyfill = require_polyfill3();
    var shim = require_shim3();
    var polyfill = callBind.apply(getPolyfill());
    var bound = function assign2(target, source1) {
      return polyfill(Object, arguments);
    };
    defineProperties(bound, {
      getPolyfill,
      implementation,
      shim
    });
    module.exports = bound;
  }
});

// node_modules/deep-equal/index.js
var require_deep_equal = __commonJS({
  "node_modules/deep-equal/index.js"(exports, module) {
    "use strict";
    var objectKeys = require_object_keys2();
    var isArguments = require_is_arguments();
    var is = require_object_is();
    var isRegex = require_is_regex();
    var flags = require_regexp_prototype();
    var isArray3 = require_isarray();
    var isDate = require_is_date_object();
    var whichBoxedPrimitive = require_which_boxed_primitive();
    var GetIntrinsic = require_get_intrinsic();
    var callBound = require_callBound();
    var whichCollection = require_which_collection();
    var getIterator = require_es_get_iterator();
    var getSideChannel = require_side_channel();
    var whichTypedArray = require_which_typed_array();
    var assign2 = require_object();
    var byteLength = callBound("ArrayBuffer.prototype.byteLength", true);
    function isArrayBuffer(buffer) {
      if (!buffer || typeof buffer !== "object" || !byteLength) {
        return false;
      }
      try {
        byteLength(buffer);
        return true;
      } catch (e) {
        return false;
      }
    }
    var $getTime = callBound("Date.prototype.getTime");
    var gPO = Object.getPrototypeOf;
    var $objToString = callBound("Object.prototype.toString");
    var $Set = GetIntrinsic("%Set%", true);
    var $mapHas = callBound("Map.prototype.has", true);
    var $mapGet = callBound("Map.prototype.get", true);
    var $mapSize = callBound("Map.prototype.size", true);
    var $setAdd = callBound("Set.prototype.add", true);
    var $setDelete = callBound("Set.prototype.delete", true);
    var $setHas = callBound("Set.prototype.has", true);
    var $setSize = callBound("Set.prototype.size", true);
    function setHasEqualElement(set, val1, opts, channel) {
      var i = getIterator(set);
      var result;
      while ((result = i.next()) && !result.done) {
        if (internalDeepEqual(val1, result.value, opts, channel)) {
          $setDelete(set, result.value);
          return true;
        }
      }
      return false;
    }
    function findLooseMatchingPrimitives(prim) {
      if (typeof prim === "undefined") {
        return null;
      }
      if (typeof prim === "object") {
        return void 0;
      }
      if (typeof prim === "symbol") {
        return false;
      }
      if (typeof prim === "string" || typeof prim === "number") {
        return +prim === +prim;
      }
      return true;
    }
    function mapMightHaveLoosePrim(a, b, prim, item, opts, channel) {
      var altValue = findLooseMatchingPrimitives(prim);
      if (altValue != null) {
        return altValue;
      }
      var curB = $mapGet(b, altValue);
      var looseOpts = assign2({}, opts, { strict: false });
      if (typeof curB === "undefined" && !$mapHas(b, altValue) || !internalDeepEqual(item, curB, looseOpts, channel)) {
        return false;
      }
      return !$mapHas(a, altValue) && internalDeepEqual(item, curB, looseOpts, channel);
    }
    function setMightHaveLoosePrim(a, b, prim) {
      var altValue = findLooseMatchingPrimitives(prim);
      if (altValue != null) {
        return altValue;
      }
      return $setHas(b, altValue) && !$setHas(a, altValue);
    }
    function mapHasEqualEntry(set, map2, key1, item1, opts, channel) {
      var i = getIterator(set);
      var result;
      var key2;
      while ((result = i.next()) && !result.done) {
        key2 = result.value;
        if (internalDeepEqual(key1, key2, opts, channel) && internalDeepEqual(item1, $mapGet(map2, key2), opts, channel)) {
          $setDelete(set, key2);
          return true;
        }
      }
      return false;
    }
    function internalDeepEqual(actual, expected, options, channel) {
      var opts = options || {};
      if (opts.strict ? is(actual, expected) : actual === expected) {
        return true;
      }
      var actualBoxed = whichBoxedPrimitive(actual);
      var expectedBoxed = whichBoxedPrimitive(expected);
      if (actualBoxed !== expectedBoxed) {
        return false;
      }
      if (!actual || !expected || typeof actual !== "object" && typeof expected !== "object") {
        return opts.strict ? is(actual, expected) : actual == expected;
      }
      var hasActual = channel.has(actual);
      var hasExpected = channel.has(expected);
      var sentinel;
      if (hasActual && hasExpected) {
        if (channel.get(actual) === channel.get(expected)) {
          return true;
        }
      } else {
        sentinel = {};
      }
      if (!hasActual) {
        channel.set(actual, sentinel);
      }
      if (!hasExpected) {
        channel.set(expected, sentinel);
      }
      return objEquiv(actual, expected, opts, channel);
    }
    function isBuffer(x) {
      if (!x || typeof x !== "object" || typeof x.length !== "number") {
        return false;
      }
      if (typeof x.copy !== "function" || typeof x.slice !== "function") {
        return false;
      }
      if (x.length > 0 && typeof x[0] !== "number") {
        return false;
      }
      return !!(x.constructor && x.constructor.isBuffer && x.constructor.isBuffer(x));
    }
    function setEquiv(a, b, opts, channel) {
      if ($setSize(a) !== $setSize(b)) {
        return false;
      }
      var iA = getIterator(a);
      var iB = getIterator(b);
      var resultA;
      var resultB;
      var set;
      while ((resultA = iA.next()) && !resultA.done) {
        if (resultA.value && typeof resultA.value === "object") {
          if (!set) {
            set = new $Set();
          }
          $setAdd(set, resultA.value);
        } else if (!$setHas(b, resultA.value)) {
          if (opts.strict) {
            return false;
          }
          if (!setMightHaveLoosePrim(a, b, resultA.value)) {
            return false;
          }
          if (!set) {
            set = new $Set();
          }
          $setAdd(set, resultA.value);
        }
      }
      if (set) {
        while ((resultB = iB.next()) && !resultB.done) {
          if (resultB.value && typeof resultB.value === "object") {
            if (!setHasEqualElement(set, resultB.value, opts.strict, channel)) {
              return false;
            }
          } else if (!opts.strict && !$setHas(a, resultB.value) && !setHasEqualElement(set, resultB.value, opts.strict, channel)) {
            return false;
          }
        }
        return $setSize(set) === 0;
      }
      return true;
    }
    function mapEquiv(a, b, opts, channel) {
      if ($mapSize(a) !== $mapSize(b)) {
        return false;
      }
      var iA = getIterator(a);
      var iB = getIterator(b);
      var resultA;
      var resultB;
      var set;
      var key;
      var item1;
      var item2;
      while ((resultA = iA.next()) && !resultA.done) {
        key = resultA.value[0];
        item1 = resultA.value[1];
        if (key && typeof key === "object") {
          if (!set) {
            set = new $Set();
          }
          $setAdd(set, key);
        } else {
          item2 = $mapGet(b, key);
          if (typeof item2 === "undefined" && !$mapHas(b, key) || !internalDeepEqual(item1, item2, opts, channel)) {
            if (opts.strict) {
              return false;
            }
            if (!mapMightHaveLoosePrim(a, b, key, item1, opts, channel)) {
              return false;
            }
            if (!set) {
              set = new $Set();
            }
            $setAdd(set, key);
          }
        }
      }
      if (set) {
        while ((resultB = iB.next()) && !resultB.done) {
          key = resultB.value[0];
          item2 = resultB.value[1];
          if (key && typeof key === "object") {
            if (!mapHasEqualEntry(set, a, key, item2, opts, channel)) {
              return false;
            }
          } else if (!opts.strict && (!a.has(key) || !internalDeepEqual($mapGet(a, key), item2, opts, channel)) && !mapHasEqualEntry(set, a, key, item2, assign2({}, opts, { strict: false }), channel)) {
            return false;
          }
        }
        return $setSize(set) === 0;
      }
      return true;
    }
    function objEquiv(a, b, opts, channel) {
      var i, key;
      if (typeof a !== typeof b) {
        return false;
      }
      if (a == null || b == null) {
        return false;
      }
      if ($objToString(a) !== $objToString(b)) {
        return false;
      }
      if (isArguments(a) !== isArguments(b)) {
        return false;
      }
      var aIsArray = isArray3(a);
      var bIsArray = isArray3(b);
      if (aIsArray !== bIsArray) {
        return false;
      }
      var aIsError = a instanceof Error;
      var bIsError = b instanceof Error;
      if (aIsError !== bIsError) {
        return false;
      }
      if (aIsError || bIsError) {
        if (a.name !== b.name || a.message !== b.message) {
          return false;
        }
      }
      var aIsRegex = isRegex(a);
      var bIsRegex = isRegex(b);
      if (aIsRegex !== bIsRegex) {
        return false;
      }
      if ((aIsRegex || bIsRegex) && (a.source !== b.source || flags(a) !== flags(b))) {
        return false;
      }
      var aIsDate = isDate(a);
      var bIsDate = isDate(b);
      if (aIsDate !== bIsDate) {
        return false;
      }
      if (aIsDate || bIsDate) {
        if ($getTime(a) !== $getTime(b)) {
          return false;
        }
      }
      if (opts.strict && gPO && gPO(a) !== gPO(b)) {
        return false;
      }
      if (whichTypedArray(a) !== whichTypedArray(b)) {
        return false;
      }
      var aIsBuffer = isBuffer(a);
      var bIsBuffer = isBuffer(b);
      if (aIsBuffer !== bIsBuffer) {
        return false;
      }
      if (aIsBuffer || bIsBuffer) {
        if (a.length !== b.length) {
          return false;
        }
        for (i = 0; i < a.length; i++) {
          if (a[i] !== b[i]) {
            return false;
          }
        }
        return true;
      }
      var aIsArrayBuffer = isArrayBuffer(a);
      var bIsArrayBuffer = isArrayBuffer(b);
      if (aIsArrayBuffer !== bIsArrayBuffer) {
        return false;
      }
      if (aIsArrayBuffer || bIsArrayBuffer) {
        if (byteLength(a) !== byteLength(b)) {
          return false;
        }
        return typeof Uint8Array === "function" && internalDeepEqual(new Uint8Array(a), new Uint8Array(b), opts, channel);
      }
      if (typeof a !== typeof b) {
        return false;
      }
      var ka = objectKeys(a);
      var kb = objectKeys(b);
      if (ka.length !== kb.length) {
        return false;
      }
      ka.sort();
      kb.sort();
      for (i = ka.length - 1; i >= 0; i--) {
        if (ka[i] != kb[i]) {
          return false;
        }
      }
      for (i = ka.length - 1; i >= 0; i--) {
        key = ka[i];
        if (!internalDeepEqual(a[key], b[key], opts, channel)) {
          return false;
        }
      }
      var aCollection = whichCollection(a);
      var bCollection = whichCollection(b);
      if (aCollection !== bCollection) {
        return false;
      }
      if (aCollection === "Set" || bCollection === "Set") {
        return setEquiv(a, b, opts, channel);
      }
      if (aCollection === "Map") {
        return mapEquiv(a, b, opts, channel);
      }
      return true;
    }
    module.exports = function deepEqual(a, b, opts) {
      return internalDeepEqual(a, b, opts, getSideChannel());
    };
  }
});

// node_modules/aria-query/lib/elementRoleMap.js
var require_elementRoleMap = __commonJS({
  "node_modules/aria-query/lib/elementRoleMap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _deepEqual = _interopRequireDefault(require_deep_equal());
    var _iterationDecorator = _interopRequireDefault(require_iterationDecorator());
    var _rolesMap = _interopRequireDefault(require_rolesMap());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _slicedToArray2(arr, i2) {
      return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i2) || _unsupportedIterableToArray2(arr, i2) || _nonIterableRest2();
    }
    function _nonIterableRest2() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _iterableToArrayLimit2(arr, i2) {
      var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
      if (_i == null)
        return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _s, _e;
      try {
        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i2 && _arr.length === i2)
            break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null)
            _i["return"]();
        } finally {
          if (_d)
            throw _e;
        }
      }
      return _arr;
    }
    function _arrayWithHoles2(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    function _createForOfIteratorHelper(o, allowArrayLike) {
      var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
      if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray2(o)) || allowArrayLike && o && typeof o.length === "number") {
          if (it)
            o = it;
          var i2 = 0;
          var F = function F2() {
          };
          return { s: F, n: function n() {
            if (i2 >= o.length)
              return { done: true };
            return { done: false, value: o[i2++] };
          }, e: function e(_e2) {
            throw _e2;
          }, f: F };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var normalCompletion = true, didErr = false, err;
      return { s: function s() {
        it = it.call(o);
      }, n: function n() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      }, e: function e(_e3) {
        didErr = true;
        err = _e3;
      }, f: function f() {
        try {
          if (!normalCompletion && it.return != null)
            it.return();
        } finally {
          if (didErr)
            throw err;
        }
      } };
    }
    function _unsupportedIterableToArray2(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray2(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray2(o, minLen);
    }
    function _arrayLikeToArray2(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
        arr2[i2] = arr[i2];
      }
      return arr2;
    }
    var elementRoles = [];
    var keys2 = _rolesMap.default.keys();
    for (var i = 0; i < keys2.length; i++) {
      key = keys2[i];
      role = _rolesMap.default.get(key);
      if (role) {
        concepts = [].concat(role.baseConcepts, role.relatedConcepts);
        for (k = 0; k < concepts.length; k++) {
          relation = concepts[k];
          if (relation.module === "HTML") {
            concept = relation.concept;
            if (concept) {
              (function() {
                var conceptStr = JSON.stringify(concept);
                var elementRoleRelation = elementRoles.find(function(relation2) {
                  return JSON.stringify(relation2[0]) === conceptStr;
                });
                var roles = void 0;
                if (elementRoleRelation) {
                  roles = elementRoleRelation[1];
                } else {
                  roles = [];
                }
                var isUnique = true;
                for (var _i = 0; _i < roles.length; _i++) {
                  if (roles[_i] === key) {
                    isUnique = false;
                    break;
                  }
                }
                if (isUnique) {
                  roles.push(key);
                }
                elementRoles.push([concept, roles]);
              })();
            }
          }
        }
      }
    }
    var key;
    var role;
    var concepts;
    var relation;
    var concept;
    var k;
    var elementRoleMap = {
      entries: function entries2() {
        return elementRoles;
      },
      forEach: function forEach2(fn) {
        var thisArg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        var _iterator = _createForOfIteratorHelper(elementRoles), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var _step$value = _slicedToArray2(_step.value, 2), _key = _step$value[0], values2 = _step$value[1];
            fn.call(thisArg, values2, _key, elementRoles);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      },
      get: function get(key2) {
        var item = elementRoles.find(function(tuple) {
          return (0, _deepEqual.default)(key2, tuple[0]);
        });
        return item && item[1];
      },
      has: function has(key2) {
        return !!elementRoleMap.get(key2);
      },
      keys: function keys3() {
        return elementRoles.map(function(_ref) {
          var _ref2 = _slicedToArray2(_ref, 1), key2 = _ref2[0];
          return key2;
        });
      },
      values: function values2() {
        return elementRoles.map(function(_ref3) {
          var _ref4 = _slicedToArray2(_ref3, 2), values3 = _ref4[1];
          return values3;
        });
      }
    };
    var _default = (0, _iterationDecorator.default)(elementRoleMap, elementRoleMap.entries());
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/roleElementMap.js
var require_roleElementMap = __commonJS({
  "node_modules/aria-query/lib/roleElementMap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _iterationDecorator = _interopRequireDefault(require_iterationDecorator());
    var _rolesMap = _interopRequireDefault(require_rolesMap());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _slicedToArray2(arr, i2) {
      return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i2) || _unsupportedIterableToArray2(arr, i2) || _nonIterableRest2();
    }
    function _nonIterableRest2() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _iterableToArrayLimit2(arr, i2) {
      var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
      if (_i == null)
        return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _s, _e;
      try {
        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i2 && _arr.length === i2)
            break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null)
            _i["return"]();
        } finally {
          if (_d)
            throw _e;
        }
      }
      return _arr;
    }
    function _arrayWithHoles2(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    function _createForOfIteratorHelper(o, allowArrayLike) {
      var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
      if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray2(o)) || allowArrayLike && o && typeof o.length === "number") {
          if (it)
            o = it;
          var i2 = 0;
          var F = function F2() {
          };
          return { s: F, n: function n() {
            if (i2 >= o.length)
              return { done: true };
            return { done: false, value: o[i2++] };
          }, e: function e(_e2) {
            throw _e2;
          }, f: F };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var normalCompletion = true, didErr = false, err;
      return { s: function s() {
        it = it.call(o);
      }, n: function n() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      }, e: function e(_e3) {
        didErr = true;
        err = _e3;
      }, f: function f() {
        try {
          if (!normalCompletion && it.return != null)
            it.return();
        } finally {
          if (didErr)
            throw err;
        }
      } };
    }
    function _unsupportedIterableToArray2(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray2(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray2(o, minLen);
    }
    function _arrayLikeToArray2(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
        arr2[i2] = arr[i2];
      }
      return arr2;
    }
    var roleElement = [];
    var keys2 = _rolesMap.default.keys();
    var _loop = function _loop2(i2) {
      var key = keys2[i2];
      var role = _rolesMap.default.get(key);
      if (role) {
        var concepts = [].concat(role.baseConcepts, role.relatedConcepts);
        for (var k = 0; k < concepts.length; k++) {
          var relation = concepts[k];
          if (relation.module === "HTML") {
            var concept = relation.concept;
            if (concept) {
              var roleElementRelation = roleElement.find(function(item) {
                return item[0] === key;
              });
              var relationConcepts = void 0;
              if (roleElementRelation) {
                relationConcepts = roleElementRelation[1];
              } else {
                relationConcepts = [];
              }
              relationConcepts.push(concept);
              roleElement.push([key, relationConcepts]);
            }
          }
        }
      }
    };
    for (var i = 0; i < keys2.length; i++) {
      _loop(i);
    }
    var roleElementMap = {
      entries: function entries2() {
        return roleElement;
      },
      forEach: function forEach2(fn) {
        var thisArg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        var _iterator = _createForOfIteratorHelper(roleElement), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var _step$value = _slicedToArray2(_step.value, 2), key = _step$value[0], values2 = _step$value[1];
            fn.call(thisArg, values2, key, roleElement);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      },
      get: function get(key) {
        var item = roleElement.find(function(tuple) {
          return tuple[0] === key ? true : false;
        });
        return item && item[1];
      },
      has: function has(key) {
        return !!roleElementMap.get(key);
      },
      keys: function keys3() {
        return roleElement.map(function(_ref) {
          var _ref2 = _slicedToArray2(_ref, 1), key = _ref2[0];
          return key;
        });
      },
      values: function values2() {
        return roleElement.map(function(_ref3) {
          var _ref4 = _slicedToArray2(_ref3, 2), values3 = _ref4[1];
          return values3;
        });
      }
    };
    var _default = (0, _iterationDecorator.default)(roleElementMap, roleElementMap.entries());
    exports.default = _default;
  }
});

// node_modules/aria-query/lib/index.js
var require_lib = __commonJS({
  "node_modules/aria-query/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.roles = exports.roleElements = exports.elementRoles = exports.dom = exports.aria = void 0;
    var _ariaPropsMap = _interopRequireDefault(require_ariaPropsMap());
    var _domMap = _interopRequireDefault(require_domMap());
    var _rolesMap = _interopRequireDefault(require_rolesMap());
    var _elementRoleMap = _interopRequireDefault(require_elementRoleMap());
    var _roleElementMap = _interopRequireDefault(require_roleElementMap());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var aria = _ariaPropsMap.default;
    exports.aria = aria;
    var dom = _domMap.default;
    exports.dom = dom;
    var roles = _rolesMap.default;
    exports.roles = roles;
    var elementRoles = _elementRoleMap.default;
    exports.elementRoles = elementRoles;
    var roleElements = _roleElementMap.default;
    exports.roleElements = roleElements;
  }
});

// node_modules/@testing-library/dom/dist/role-helpers.js
var require_role_helpers = __commonJS({
  "node_modules/@testing-library/dom/dist/role-helpers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.computeAriaChecked = computeAriaChecked;
    exports.computeAriaCurrent = computeAriaCurrent;
    exports.computeAriaExpanded = computeAriaExpanded;
    exports.computeAriaPressed = computeAriaPressed;
    exports.computeAriaSelected = computeAriaSelected;
    exports.computeHeadingLevel = computeHeadingLevel;
    exports.getImplicitAriaRoles = getImplicitAriaRoles;
    exports.getRoles = getRoles2;
    exports.isInaccessible = isInaccessible2;
    exports.isSubtreeInaccessible = isSubtreeInaccessible;
    exports.logRoles = void 0;
    exports.prettyRoles = prettyRoles;
    var _ariaQuery = require_lib();
    var _domAccessibilityApi = require_dist();
    var _prettyDom = require_pretty_dom();
    var _config = require_config();
    var elementRoleList = buildElementRoleList(_ariaQuery.elementRoles);
    function isSubtreeInaccessible(element) {
      if (element.hidden === true) {
        return true;
      }
      if (element.getAttribute("aria-hidden") === "true") {
        return true;
      }
      const window2 = element.ownerDocument.defaultView;
      if (window2.getComputedStyle(element).display === "none") {
        return true;
      }
      return false;
    }
    function isInaccessible2(element, options = {}) {
      const {
        isSubtreeInaccessible: isSubtreeInaccessibleImpl = isSubtreeInaccessible
      } = options;
      const window2 = element.ownerDocument.defaultView;
      if (window2.getComputedStyle(element).visibility === "hidden") {
        return true;
      }
      let currentElement = element;
      while (currentElement) {
        if (isSubtreeInaccessibleImpl(currentElement)) {
          return true;
        }
        currentElement = currentElement.parentElement;
      }
      return false;
    }
    function getImplicitAriaRoles(currentNode) {
      for (const {
        match,
        roles
      } of elementRoleList) {
        if (match(currentNode)) {
          return [...roles];
        }
      }
      return [];
    }
    function buildElementRoleList(elementRolesMap) {
      function makeElementSelector({
        name,
        attributes
      }) {
        return `${name}${attributes.map(({
          name: attributeName,
          value,
          constraints = []
        }) => {
          const shouldNotExist = constraints.indexOf("undefined") !== -1;
          if (shouldNotExist) {
            return `:not([${attributeName}])`;
          } else if (value) {
            return `[${attributeName}="${value}"]`;
          } else {
            return `[${attributeName}]`;
          }
        }).join("")}`;
      }
      function getSelectorSpecificity({
        attributes = []
      }) {
        return attributes.length;
      }
      function bySelectorSpecificity({
        specificity: leftSpecificity
      }, {
        specificity: rightSpecificity
      }) {
        return rightSpecificity - leftSpecificity;
      }
      function match(element) {
        let {
          attributes = []
        } = element;
        const typeTextIndex = attributes.findIndex((attribute) => attribute.value && attribute.name === "type" && attribute.value === "text");
        if (typeTextIndex >= 0) {
          attributes = [...attributes.slice(0, typeTextIndex), ...attributes.slice(typeTextIndex + 1)];
        }
        const selector = makeElementSelector({
          ...element,
          attributes
        });
        return (node) => {
          if (typeTextIndex >= 0 && node.type !== "text") {
            return false;
          }
          return node.matches(selector);
        };
      }
      let result = [];
      for (const [element, roles] of elementRolesMap.entries()) {
        result = [...result, {
          match: match(element),
          roles: Array.from(roles),
          specificity: getSelectorSpecificity(element)
        }];
      }
      return result.sort(bySelectorSpecificity);
    }
    function getRoles2(container, {
      hidden = false
    } = {}) {
      function flattenDOM(node) {
        return [node, ...Array.from(node.children).reduce((acc, child) => [...acc, ...flattenDOM(child)], [])];
      }
      return flattenDOM(container).filter((element) => {
        return hidden === false ? isInaccessible2(element) === false : true;
      }).reduce((acc, node) => {
        let roles = [];
        if (node.hasAttribute("role")) {
          roles = node.getAttribute("role").split(" ").slice(0, 1);
        } else {
          roles = getImplicitAriaRoles(node);
        }
        return roles.reduce((rolesAcc, role) => Array.isArray(rolesAcc[role]) ? {
          ...rolesAcc,
          [role]: [...rolesAcc[role], node]
        } : {
          ...rolesAcc,
          [role]: [node]
        }, acc);
      }, {});
    }
    function prettyRoles(dom, {
      hidden,
      includeDescription
    }) {
      const roles = getRoles2(dom, {
        hidden
      });
      return Object.entries(roles).filter(([role]) => role !== "generic").map(([role, elements]) => {
        const delimiterBar = "-".repeat(50);
        const elementsString = elements.map((el) => {
          const nameString = `Name "${(0, _domAccessibilityApi.computeAccessibleName)(el, {
            computedStyleSupportsPseudoElements: (0, _config.getConfig)().computedStyleSupportsPseudoElements
          })}":
`;
          const domString = (0, _prettyDom.prettyDOM)(el.cloneNode(false));
          if (includeDescription) {
            const descriptionString = `Description "${(0, _domAccessibilityApi.computeAccessibleDescription)(el, {
              computedStyleSupportsPseudoElements: (0, _config.getConfig)().computedStyleSupportsPseudoElements
            })}":
`;
            return `${nameString}${descriptionString}${domString}`;
          }
          return `${nameString}${domString}`;
        }).join("\n\n");
        return `${role}:

${elementsString}

${delimiterBar}`;
      }).join("\n");
    }
    var logRoles2 = (dom, {
      hidden = false
    } = {}) => console.log(prettyRoles(dom, {
      hidden
    }));
    exports.logRoles = logRoles2;
    function computeAriaSelected(element) {
      if (element.tagName === "OPTION") {
        return element.selected;
      }
      return checkBooleanAttribute(element, "aria-selected");
    }
    function computeAriaChecked(element) {
      if ("indeterminate" in element && element.indeterminate) {
        return void 0;
      }
      if ("checked" in element) {
        return element.checked;
      }
      return checkBooleanAttribute(element, "aria-checked");
    }
    function computeAriaPressed(element) {
      return checkBooleanAttribute(element, "aria-pressed");
    }
    function computeAriaCurrent(element) {
      var _ref, _checkBooleanAttribut;
      return (_ref = (_checkBooleanAttribut = checkBooleanAttribute(element, "aria-current")) != null ? _checkBooleanAttribut : element.getAttribute("aria-current")) != null ? _ref : false;
    }
    function computeAriaExpanded(element) {
      return checkBooleanAttribute(element, "aria-expanded");
    }
    function checkBooleanAttribute(element, attribute) {
      const attributeValue = element.getAttribute(attribute);
      if (attributeValue === "true") {
        return true;
      }
      if (attributeValue === "false") {
        return false;
      }
      return void 0;
    }
    function computeHeadingLevel(element) {
      const implicitHeadingLevels = {
        H1: 1,
        H2: 2,
        H3: 3,
        H4: 4,
        H5: 5,
        H6: 6
      };
      const ariaLevelAttribute = element.getAttribute("aria-level") && Number(element.getAttribute("aria-level"));
      return ariaLevelAttribute || implicitHeadingLevels[element.tagName];
    }
  }
});

// node_modules/@testing-library/dom/dist/suggestions.js
var require_suggestions = __commonJS({
  "node_modules/@testing-library/dom/dist/suggestions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getSuggestedQuery = getSuggestedQuery2;
    var _domAccessibilityApi = require_dist();
    var _matches = require_matches();
    var _getNodeText = require_get_node_text();
    var _config = require_config();
    var _roleHelpers = require_role_helpers();
    var _labelHelpers = require_label_helpers();
    var normalize = (0, _matches.getDefaultNormalizer)();
    function escapeRegExp(string) {
      return string.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
    }
    function getRegExpMatcher(string) {
      return new RegExp(escapeRegExp(string.toLowerCase()), "i");
    }
    function makeSuggestion(queryName, element, content, {
      variant,
      name
    }) {
      let warning = "";
      const queryOptions = {};
      const queryArgs = [["Role", "TestId"].includes(queryName) ? content : getRegExpMatcher(content)];
      if (name) {
        queryOptions.name = getRegExpMatcher(name);
      }
      if (queryName === "Role" && (0, _roleHelpers.isInaccessible)(element)) {
        queryOptions.hidden = true;
        warning = `Element is inaccessible. This means that the element and all its children are invisible to screen readers.
    If you are using the aria-hidden prop, make sure this is the right choice for your case.
    `;
      }
      if (Object.keys(queryOptions).length > 0) {
        queryArgs.push(queryOptions);
      }
      const queryMethod = `${variant}By${queryName}`;
      return {
        queryName,
        queryMethod,
        queryArgs,
        variant,
        warning,
        toString() {
          if (warning) {
            console.warn(warning);
          }
          let [text, options] = queryArgs;
          text = typeof text === "string" ? `'${text}'` : text;
          options = options ? `, { ${Object.entries(options).map(([k, v]) => `${k}: ${v}`).join(", ")} }` : "";
          return `${queryMethod}(${text}${options})`;
        }
      };
    }
    function canSuggest(currentMethod, requestedMethod, data) {
      return data && (!requestedMethod || requestedMethod.toLowerCase() === currentMethod.toLowerCase());
    }
    function getSuggestedQuery2(element, variant = "get", method) {
      var _element$getAttribute, _getImplicitAriaRoles;
      if (element.matches((0, _config.getConfig)().defaultIgnore)) {
        return void 0;
      }
      const role = (_element$getAttribute = element.getAttribute("role")) != null ? _element$getAttribute : (_getImplicitAriaRoles = (0, _roleHelpers.getImplicitAriaRoles)(element)) == null ? void 0 : _getImplicitAriaRoles[0];
      if (role !== "generic" && canSuggest("Role", method, role)) {
        return makeSuggestion("Role", element, role, {
          variant,
          name: (0, _domAccessibilityApi.computeAccessibleName)(element, {
            computedStyleSupportsPseudoElements: (0, _config.getConfig)().computedStyleSupportsPseudoElements
          })
        });
      }
      const labelText = (0, _labelHelpers.getLabels)(document, element).map((label) => label.content).join(" ");
      if (canSuggest("LabelText", method, labelText)) {
        return makeSuggestion("LabelText", element, labelText, {
          variant
        });
      }
      const placeholderText = element.getAttribute("placeholder");
      if (canSuggest("PlaceholderText", method, placeholderText)) {
        return makeSuggestion("PlaceholderText", element, placeholderText, {
          variant
        });
      }
      const textContent = normalize((0, _getNodeText.getNodeText)(element));
      if (canSuggest("Text", method, textContent)) {
        return makeSuggestion("Text", element, textContent, {
          variant
        });
      }
      if (canSuggest("DisplayValue", method, element.value)) {
        return makeSuggestion("DisplayValue", element, normalize(element.value), {
          variant
        });
      }
      const alt = element.getAttribute("alt");
      if (canSuggest("AltText", method, alt)) {
        return makeSuggestion("AltText", element, alt, {
          variant
        });
      }
      const title = element.getAttribute("title");
      if (canSuggest("Title", method, title)) {
        return makeSuggestion("Title", element, title, {
          variant
        });
      }
      const testId = element.getAttribute((0, _config.getConfig)().testIdAttribute);
      if (canSuggest("TestId", method, testId)) {
        return makeSuggestion("TestId", element, testId, {
          variant
        });
      }
      return void 0;
    }
  }
});

// node_modules/@testing-library/dom/dist/wait-for.js
var require_wait_for = __commonJS({
  "node_modules/@testing-library/dom/dist/wait-for.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.waitFor = waitForWrapper;
    var _helpers = require_helpers();
    var _config = require_config();
    function copyStackTrace(target, source) {
      target.stack = source.stack.replace(source.message, target.message);
    }
    function waitFor2(callback, {
      container = (0, _helpers.getDocument)(),
      timeout = (0, _config.getConfig)().asyncUtilTimeout,
      showOriginalStackTrace = (0, _config.getConfig)().showOriginalStackTrace,
      stackTraceError,
      interval = 50,
      onTimeout = (error2) => {
        error2.message = (0, _config.getConfig)().getElementError(error2.message, container).message;
        return error2;
      },
      mutationObserverOptions = {
        subtree: true,
        childList: true,
        attributes: true,
        characterData: true
      }
    }) {
      if (typeof callback !== "function") {
        throw new TypeError("Received `callback` arg must be a function");
      }
      return new Promise(async (resolve, reject) => {
        let lastError, intervalId, observer;
        let finished = false;
        let promiseStatus = "idle";
        const overallTimeoutTimer = setTimeout(handleTimeout, timeout);
        const usingJestFakeTimers = (0, _helpers.jestFakeTimersAreEnabled)();
        if (usingJestFakeTimers) {
          const {
            unstable_advanceTimersWrapper: advanceTimersWrapper
          } = (0, _config.getConfig)();
          checkCallback();
          while (!finished) {
            if (!(0, _helpers.jestFakeTimersAreEnabled)()) {
              const error2 = new Error(`Changed from using fake timers to real timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to real timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830`);
              if (!showOriginalStackTrace)
                copyStackTrace(error2, stackTraceError);
              reject(error2);
              return;
            }
            advanceTimersWrapper(() => {
              jest.advanceTimersByTime(interval);
            });
            checkCallback();
            if (finished) {
              break;
            }
            await advanceTimersWrapper(async () => {
              await new Promise((r) => {
                setTimeout(r, 0);
                jest.advanceTimersByTime(0);
              });
            });
          }
        } else {
          try {
            (0, _helpers.checkContainerType)(container);
          } catch (e) {
            reject(e);
            return;
          }
          intervalId = setInterval(checkRealTimersCallback, interval);
          const {
            MutationObserver
          } = (0, _helpers.getWindowFromNode)(container);
          observer = new MutationObserver(checkRealTimersCallback);
          observer.observe(container, mutationObserverOptions);
          checkCallback();
        }
        function onDone(error2, result) {
          finished = true;
          clearTimeout(overallTimeoutTimer);
          if (!usingJestFakeTimers) {
            clearInterval(intervalId);
            observer.disconnect();
          }
          if (error2) {
            reject(error2);
          } else {
            resolve(result);
          }
        }
        function checkRealTimersCallback() {
          if ((0, _helpers.jestFakeTimersAreEnabled)()) {
            const error2 = new Error(`Changed from using real timers to fake timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to fake timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830`);
            if (!showOriginalStackTrace)
              copyStackTrace(error2, stackTraceError);
            return reject(error2);
          } else {
            return checkCallback();
          }
        }
        function checkCallback() {
          if (promiseStatus === "pending")
            return;
          try {
            const result = (0, _config.runWithExpensiveErrorDiagnosticsDisabled)(callback);
            if (typeof (result == null ? void 0 : result.then) === "function") {
              promiseStatus = "pending";
              result.then((resolvedValue) => {
                promiseStatus = "resolved";
                onDone(null, resolvedValue);
              }, (rejectedValue) => {
                promiseStatus = "rejected";
                lastError = rejectedValue;
              });
            } else {
              onDone(null, result);
            }
          } catch (error2) {
            lastError = error2;
          }
        }
        function handleTimeout() {
          let error2;
          if (lastError) {
            error2 = lastError;
            if (!showOriginalStackTrace && error2.name === "TestingLibraryElementError") {
              copyStackTrace(error2, stackTraceError);
            }
          } else {
            error2 = new Error("Timed out in waitFor.");
            if (!showOriginalStackTrace) {
              copyStackTrace(error2, stackTraceError);
            }
          }
          onDone(onTimeout(error2), null);
        }
      });
    }
    function waitForWrapper(callback, options) {
      const stackTraceError = new Error("STACK_TRACE_MESSAGE");
      return (0, _config.getConfig)().asyncWrapper(() => waitFor2(callback, {
        stackTraceError,
        ...options
      }));
    }
  }
});

// node_modules/@testing-library/dom/dist/query-helpers.js
var require_query_helpers = __commonJS({
  "node_modules/@testing-library/dom/dist/query-helpers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.buildQueries = buildQueries2;
    exports.getElementError = getElementError2;
    exports.getMultipleElementsFoundError = getMultipleElementsFoundError;
    exports.makeFindQuery = makeFindQuery;
    exports.makeGetAllQuery = makeGetAllQuery;
    exports.makeSingleQuery = makeSingleQuery;
    exports.queryAllByAttribute = queryAllByAttribute2;
    exports.queryByAttribute = queryByAttribute2;
    exports.wrapSingleQueryWithSuggestion = exports.wrapAllByQueryWithSuggestion = void 0;
    var _suggestions = require_suggestions();
    var _matches = require_matches();
    var _waitFor = require_wait_for();
    var _config = require_config();
    function getElementError2(message, container) {
      return (0, _config.getConfig)().getElementError(message, container);
    }
    function getMultipleElementsFoundError(message, container) {
      return getElementError2(`${message}

(If this is intentional, then use the \`*AllBy*\` variant of the query (like \`queryAllByText\`, \`getAllByText\`, or \`findAllByText\`)).`, container);
    }
    function queryAllByAttribute2(attribute, container, text, {
      exact = true,
      collapseWhitespace,
      trim: trim2,
      normalizer
    } = {}) {
      const matcher = exact ? _matches.matches : _matches.fuzzyMatches;
      const matchNormalizer = (0, _matches.makeNormalizer)({
        collapseWhitespace,
        trim: trim2,
        normalizer
      });
      return Array.from(container.querySelectorAll(`[${attribute}]`)).filter((node) => matcher(node.getAttribute(attribute), node, text, matchNormalizer));
    }
    function queryByAttribute2(attribute, container, text, options) {
      const els = queryAllByAttribute2(attribute, container, text, options);
      if (els.length > 1) {
        throw getMultipleElementsFoundError(`Found multiple elements by [${attribute}=${text}]`, container);
      }
      return els[0] || null;
    }
    function makeSingleQuery(allQuery, getMultipleError) {
      return (container, ...args) => {
        const els = allQuery(container, ...args);
        if (els.length > 1) {
          const elementStrings = els.map((element) => getElementError2(null, element).message).join("\n\n");
          throw getMultipleElementsFoundError(`${getMultipleError(container, ...args)}

Here are the matching elements:

${elementStrings}`, container);
        }
        return els[0] || null;
      };
    }
    function getSuggestionError(suggestion, container) {
      return (0, _config.getConfig)().getElementError(`A better query is available, try this:
${suggestion.toString()}
`, container);
    }
    function makeGetAllQuery(allQuery, getMissingError) {
      return (container, ...args) => {
        const els = allQuery(container, ...args);
        if (!els.length) {
          throw (0, _config.getConfig)().getElementError(getMissingError(container, ...args), container);
        }
        return els;
      };
    }
    function makeFindQuery(getter) {
      return (container, text, options, waitForOptions) => {
        return (0, _waitFor.waitFor)(() => {
          return getter(container, text, options);
        }, {
          container,
          ...waitForOptions
        });
      };
    }
    var wrapSingleQueryWithSuggestion = (query, queryAllByName, variant) => (container, ...args) => {
      const element = query(container, ...args);
      const [{
        suggest = (0, _config.getConfig)().throwSuggestions
      } = {}] = args.slice(-1);
      if (element && suggest) {
        const suggestion = (0, _suggestions.getSuggestedQuery)(element, variant);
        if (suggestion && !queryAllByName.endsWith(suggestion.queryName)) {
          throw getSuggestionError(suggestion.toString(), container);
        }
      }
      return element;
    };
    exports.wrapSingleQueryWithSuggestion = wrapSingleQueryWithSuggestion;
    var wrapAllByQueryWithSuggestion = (query, queryAllByName, variant) => (container, ...args) => {
      const els = query(container, ...args);
      const [{
        suggest = (0, _config.getConfig)().throwSuggestions
      } = {}] = args.slice(-1);
      if (els.length && suggest) {
        const uniqueSuggestionMessages = [...new Set(els.map((element) => {
          var _getSuggestedQuery;
          return (_getSuggestedQuery = (0, _suggestions.getSuggestedQuery)(element, variant)) == null ? void 0 : _getSuggestedQuery.toString();
        }))];
        if (uniqueSuggestionMessages.length === 1 && !queryAllByName.endsWith((0, _suggestions.getSuggestedQuery)(els[0], variant).queryName)) {
          throw getSuggestionError(uniqueSuggestionMessages[0], container);
        }
      }
      return els;
    };
    exports.wrapAllByQueryWithSuggestion = wrapAllByQueryWithSuggestion;
    function buildQueries2(queryAllBy, getMultipleError, getMissingError) {
      const queryBy = wrapSingleQueryWithSuggestion(makeSingleQuery(queryAllBy, getMultipleError), queryAllBy.name, "query");
      const getAllBy = makeGetAllQuery(queryAllBy, getMissingError);
      const getBy = makeSingleQuery(getAllBy, getMultipleError);
      const getByWithSuggestions = wrapSingleQueryWithSuggestion(getBy, queryAllBy.name, "get");
      const getAllWithSuggestions = wrapAllByQueryWithSuggestion(getAllBy, queryAllBy.name.replace("query", "get"), "getAll");
      const findAllBy = makeFindQuery(wrapAllByQueryWithSuggestion(getAllBy, queryAllBy.name, "findAll"));
      const findBy = makeFindQuery(wrapSingleQueryWithSuggestion(getBy, queryAllBy.name, "find"));
      return [queryBy, getAllWithSuggestions, getByWithSuggestions, findAllBy, findBy];
    }
  }
});

// node_modules/@testing-library/dom/dist/queries/all-utils.js
var require_all_utils = __commonJS({
  "node_modules/@testing-library/dom/dist/queries/all-utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _matches = require_matches();
    Object.keys(_matches).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _matches[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _matches[key];
        }
      });
    });
    var _getNodeText = require_get_node_text();
    Object.keys(_getNodeText).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _getNodeText[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _getNodeText[key];
        }
      });
    });
    var _queryHelpers = require_query_helpers();
    Object.keys(_queryHelpers).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _queryHelpers[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _queryHelpers[key];
        }
      });
    });
    var _config = require_config();
    Object.keys(_config).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _config[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _config[key];
        }
      });
    });
  }
});

// node_modules/@testing-library/dom/dist/queries/label-text.js
var require_label_text = __commonJS({
  "node_modules/@testing-library/dom/dist/queries/label-text.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.queryByLabelText = exports.queryAllByLabelText = exports.getByLabelText = exports.getAllByLabelText = exports.findByLabelText = exports.findAllByLabelText = void 0;
    var _config = require_config();
    var _helpers = require_helpers();
    var _labelHelpers = require_label_helpers();
    var _allUtils = require_all_utils();
    function queryAllLabels(container) {
      return Array.from(container.querySelectorAll("label,input")).map((node) => {
        return {
          node,
          textToMatch: (0, _labelHelpers.getLabelContent)(node)
        };
      }).filter(({
        textToMatch
      }) => textToMatch !== null);
    }
    var queryAllLabelsByText = (container, text, {
      exact = true,
      trim: trim2,
      collapseWhitespace,
      normalizer
    } = {}) => {
      const matcher = exact ? _allUtils.matches : _allUtils.fuzzyMatches;
      const matchNormalizer = (0, _allUtils.makeNormalizer)({
        collapseWhitespace,
        trim: trim2,
        normalizer
      });
      const textToMatchByLabels = queryAllLabels(container);
      return textToMatchByLabels.filter(({
        node,
        textToMatch
      }) => matcher(textToMatch, node, text, matchNormalizer)).map(({
        node
      }) => node);
    };
    var queryAllByLabelText2 = (container, text, {
      selector = "*",
      exact = true,
      collapseWhitespace,
      trim: trim2,
      normalizer
    } = {}) => {
      (0, _helpers.checkContainerType)(container);
      const matcher = exact ? _allUtils.matches : _allUtils.fuzzyMatches;
      const matchNormalizer = (0, _allUtils.makeNormalizer)({
        collapseWhitespace,
        trim: trim2,
        normalizer
      });
      const matchingLabelledElements = Array.from(container.querySelectorAll("*")).filter((element) => {
        return (0, _labelHelpers.getRealLabels)(element).length || element.hasAttribute("aria-labelledby");
      }).reduce((labelledElements, labelledElement) => {
        const labelList = (0, _labelHelpers.getLabels)(container, labelledElement, {
          selector
        });
        labelList.filter((label) => Boolean(label.formControl)).forEach((label) => {
          if (matcher(label.content, label.formControl, text, matchNormalizer) && label.formControl)
            labelledElements.push(label.formControl);
        });
        const labelsValue = labelList.filter((label) => Boolean(label.content)).map((label) => label.content);
        if (matcher(labelsValue.join(" "), labelledElement, text, matchNormalizer))
          labelledElements.push(labelledElement);
        if (labelsValue.length > 1) {
          labelsValue.forEach((labelValue, index) => {
            if (matcher(labelValue, labelledElement, text, matchNormalizer))
              labelledElements.push(labelledElement);
            const labelsFiltered = [...labelsValue];
            labelsFiltered.splice(index, 1);
            if (labelsFiltered.length > 1) {
              if (matcher(labelsFiltered.join(" "), labelledElement, text, matchNormalizer))
                labelledElements.push(labelledElement);
            }
          });
        }
        return labelledElements;
      }, []).concat((0, _allUtils.queryAllByAttribute)("aria-label", container, text, {
        exact,
        normalizer: matchNormalizer
      }));
      return Array.from(new Set(matchingLabelledElements)).filter((element) => element.matches(selector));
    };
    var getAllByLabelText2 = (container, text, ...rest) => {
      const els = queryAllByLabelText2(container, text, ...rest);
      if (!els.length) {
        const labels = queryAllLabelsByText(container, text, ...rest);
        if (labels.length) {
          const tagNames = labels.map((label) => getTagNameOfElementAssociatedWithLabelViaFor(container, label)).filter((tagName) => !!tagName);
          if (tagNames.length) {
            throw (0, _config.getConfig)().getElementError(tagNames.map((tagName) => `Found a label with the text of: ${text}, however the element associated with this label (<${tagName} />) is non-labellable [https://html.spec.whatwg.org/multipage/forms.html#category-label]. If you really need to label a <${tagName} />, you can use aria-label or aria-labelledby instead.`).join("\n\n"), container);
          } else {
            throw (0, _config.getConfig)().getElementError(`Found a label with the text of: ${text}, however no form control was found associated to that label. Make sure you're using the "for" attribute or "aria-labelledby" attribute correctly.`, container);
          }
        } else {
          throw (0, _config.getConfig)().getElementError(`Unable to find a label with the text of: ${text}`, container);
        }
      }
      return els;
    };
    function getTagNameOfElementAssociatedWithLabelViaFor(container, label) {
      const htmlFor = label.getAttribute("for");
      if (!htmlFor) {
        return null;
      }
      const element = container.querySelector(`[id="${htmlFor}"]`);
      return element ? element.tagName.toLowerCase() : null;
    }
    var getMultipleError = (c, text) => `Found multiple elements with the text of: ${text}`;
    var queryByLabelText2 = (0, _allUtils.wrapSingleQueryWithSuggestion)((0, _allUtils.makeSingleQuery)(queryAllByLabelText2, getMultipleError), queryAllByLabelText2.name, "query");
    exports.queryByLabelText = queryByLabelText2;
    var getByLabelText2 = (0, _allUtils.makeSingleQuery)(getAllByLabelText2, getMultipleError);
    var findAllByLabelText2 = (0, _allUtils.makeFindQuery)((0, _allUtils.wrapAllByQueryWithSuggestion)(getAllByLabelText2, getAllByLabelText2.name, "findAll"));
    exports.findAllByLabelText = findAllByLabelText2;
    var findByLabelText2 = (0, _allUtils.makeFindQuery)((0, _allUtils.wrapSingleQueryWithSuggestion)(getByLabelText2, getAllByLabelText2.name, "find"));
    exports.findByLabelText = findByLabelText2;
    var getAllByLabelTextWithSuggestions = (0, _allUtils.wrapAllByQueryWithSuggestion)(getAllByLabelText2, getAllByLabelText2.name, "getAll");
    exports.getAllByLabelText = getAllByLabelTextWithSuggestions;
    var getByLabelTextWithSuggestions = (0, _allUtils.wrapSingleQueryWithSuggestion)(getByLabelText2, getAllByLabelText2.name, "get");
    exports.getByLabelText = getByLabelTextWithSuggestions;
    var queryAllByLabelTextWithSuggestions = (0, _allUtils.wrapAllByQueryWithSuggestion)(queryAllByLabelText2, queryAllByLabelText2.name, "queryAll");
    exports.queryAllByLabelText = queryAllByLabelTextWithSuggestions;
  }
});

// node_modules/@testing-library/dom/dist/queries/placeholder-text.js
var require_placeholder_text = __commonJS({
  "node_modules/@testing-library/dom/dist/queries/placeholder-text.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.queryByPlaceholderText = exports.queryAllByPlaceholderText = exports.getByPlaceholderText = exports.getAllByPlaceholderText = exports.findByPlaceholderText = exports.findAllByPlaceholderText = void 0;
    var _queryHelpers = require_query_helpers();
    var _helpers = require_helpers();
    var _allUtils = require_all_utils();
    var queryAllByPlaceholderText2 = (...args) => {
      (0, _helpers.checkContainerType)(args[0]);
      return (0, _allUtils.queryAllByAttribute)("placeholder", ...args);
    };
    var getMultipleError = (c, text) => `Found multiple elements with the placeholder text of: ${text}`;
    var getMissingError = (c, text) => `Unable to find an element with the placeholder text of: ${text}`;
    var queryAllByPlaceholderTextWithSuggestions = (0, _queryHelpers.wrapAllByQueryWithSuggestion)(queryAllByPlaceholderText2, queryAllByPlaceholderText2.name, "queryAll");
    exports.queryAllByPlaceholderText = queryAllByPlaceholderTextWithSuggestions;
    var [queryByPlaceholderText2, getAllByPlaceholderText2, getByPlaceholderText2, findAllByPlaceholderText2, findByPlaceholderText2] = (0, _allUtils.buildQueries)(queryAllByPlaceholderText2, getMultipleError, getMissingError);
    exports.findByPlaceholderText = findByPlaceholderText2;
    exports.findAllByPlaceholderText = findAllByPlaceholderText2;
    exports.getByPlaceholderText = getByPlaceholderText2;
    exports.getAllByPlaceholderText = getAllByPlaceholderText2;
    exports.queryByPlaceholderText = queryByPlaceholderText2;
  }
});

// node_modules/@testing-library/dom/dist/queries/text.js
var require_text = __commonJS({
  "node_modules/@testing-library/dom/dist/queries/text.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.queryByText = exports.queryAllByText = exports.getByText = exports.getAllByText = exports.findByText = exports.findAllByText = void 0;
    var _queryHelpers = require_query_helpers();
    var _helpers = require_helpers();
    var _allUtils = require_all_utils();
    var queryAllByText2 = (container, text, {
      selector = "*",
      exact = true,
      collapseWhitespace,
      trim: trim2,
      ignore = (0, _allUtils.getConfig)().defaultIgnore,
      normalizer
    } = {}) => {
      (0, _helpers.checkContainerType)(container);
      const matcher = exact ? _allUtils.matches : _allUtils.fuzzyMatches;
      const matchNormalizer = (0, _allUtils.makeNormalizer)({
        collapseWhitespace,
        trim: trim2,
        normalizer
      });
      let baseArray = [];
      if (typeof container.matches === "function" && container.matches(selector)) {
        baseArray = [container];
      }
      return [...baseArray, ...Array.from(container.querySelectorAll(selector))].filter((node) => !ignore || !node.matches(ignore)).filter((node) => matcher((0, _allUtils.getNodeText)(node), node, text, matchNormalizer));
    };
    var getMultipleError = (c, text) => `Found multiple elements with the text: ${text}`;
    var getMissingError = (c, text, options = {}) => {
      const {
        collapseWhitespace,
        trim: trim2,
        normalizer,
        selector
      } = options;
      const matchNormalizer = (0, _allUtils.makeNormalizer)({
        collapseWhitespace,
        trim: trim2,
        normalizer
      });
      const normalizedText = matchNormalizer(text.toString());
      const isNormalizedDifferent = normalizedText !== text.toString();
      const isCustomSelector = (selector != null ? selector : "*") !== "*";
      return `Unable to find an element with the text: ${isNormalizedDifferent ? `${normalizedText} (normalized from '${text}')` : text}${isCustomSelector ? `, which matches selector '${selector}'` : ""}. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.`;
    };
    var queryAllByTextWithSuggestions = (0, _queryHelpers.wrapAllByQueryWithSuggestion)(queryAllByText2, queryAllByText2.name, "queryAll");
    exports.queryAllByText = queryAllByTextWithSuggestions;
    var [queryByText2, getAllByText2, getByText2, findAllByText2, findByText2] = (0, _allUtils.buildQueries)(queryAllByText2, getMultipleError, getMissingError);
    exports.findByText = findByText2;
    exports.findAllByText = findAllByText2;
    exports.getByText = getByText2;
    exports.getAllByText = getAllByText2;
    exports.queryByText = queryByText2;
  }
});

// node_modules/@testing-library/dom/dist/queries/display-value.js
var require_display_value = __commonJS({
  "node_modules/@testing-library/dom/dist/queries/display-value.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.queryByDisplayValue = exports.queryAllByDisplayValue = exports.getByDisplayValue = exports.getAllByDisplayValue = exports.findByDisplayValue = exports.findAllByDisplayValue = void 0;
    var _queryHelpers = require_query_helpers();
    var _helpers = require_helpers();
    var _allUtils = require_all_utils();
    var queryAllByDisplayValue2 = (container, value, {
      exact = true,
      collapseWhitespace,
      trim: trim2,
      normalizer
    } = {}) => {
      (0, _helpers.checkContainerType)(container);
      const matcher = exact ? _allUtils.matches : _allUtils.fuzzyMatches;
      const matchNormalizer = (0, _allUtils.makeNormalizer)({
        collapseWhitespace,
        trim: trim2,
        normalizer
      });
      return Array.from(container.querySelectorAll(`input,textarea,select`)).filter((node) => {
        if (node.tagName === "SELECT") {
          const selectedOptions = Array.from(node.options).filter((option) => option.selected);
          return selectedOptions.some((optionNode) => matcher((0, _allUtils.getNodeText)(optionNode), optionNode, value, matchNormalizer));
        } else {
          return matcher(node.value, node, value, matchNormalizer);
        }
      });
    };
    var getMultipleError = (c, value) => `Found multiple elements with the display value: ${value}.`;
    var getMissingError = (c, value) => `Unable to find an element with the display value: ${value}.`;
    var queryAllByDisplayValueWithSuggestions = (0, _queryHelpers.wrapAllByQueryWithSuggestion)(queryAllByDisplayValue2, queryAllByDisplayValue2.name, "queryAll");
    exports.queryAllByDisplayValue = queryAllByDisplayValueWithSuggestions;
    var [queryByDisplayValue2, getAllByDisplayValue2, getByDisplayValue2, findAllByDisplayValue2, findByDisplayValue2] = (0, _allUtils.buildQueries)(queryAllByDisplayValue2, getMultipleError, getMissingError);
    exports.findByDisplayValue = findByDisplayValue2;
    exports.findAllByDisplayValue = findAllByDisplayValue2;
    exports.getByDisplayValue = getByDisplayValue2;
    exports.getAllByDisplayValue = getAllByDisplayValue2;
    exports.queryByDisplayValue = queryByDisplayValue2;
  }
});

// node_modules/@testing-library/dom/dist/queries/alt-text.js
var require_alt_text = __commonJS({
  "node_modules/@testing-library/dom/dist/queries/alt-text.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.queryByAltText = exports.queryAllByAltText = exports.getByAltText = exports.getAllByAltText = exports.findByAltText = exports.findAllByAltText = void 0;
    var _queryHelpers = require_query_helpers();
    var _helpers = require_helpers();
    var _allUtils = require_all_utils();
    var VALID_TAG_REGEXP = /^(img|input|area|.+-.+)$/i;
    var queryAllByAltText2 = (container, alt, options = {}) => {
      (0, _helpers.checkContainerType)(container);
      return (0, _queryHelpers.queryAllByAttribute)("alt", container, alt, options).filter((node) => VALID_TAG_REGEXP.test(node.tagName));
    };
    var getMultipleError = (c, alt) => `Found multiple elements with the alt text: ${alt}`;
    var getMissingError = (c, alt) => `Unable to find an element with the alt text: ${alt}`;
    var queryAllByAltTextWithSuggestions = (0, _queryHelpers.wrapAllByQueryWithSuggestion)(queryAllByAltText2, queryAllByAltText2.name, "queryAll");
    exports.queryAllByAltText = queryAllByAltTextWithSuggestions;
    var [queryByAltText2, getAllByAltText2, getByAltText2, findAllByAltText2, findByAltText2] = (0, _allUtils.buildQueries)(queryAllByAltText2, getMultipleError, getMissingError);
    exports.findByAltText = findByAltText2;
    exports.findAllByAltText = findAllByAltText2;
    exports.getByAltText = getByAltText2;
    exports.getAllByAltText = getAllByAltText2;
    exports.queryByAltText = queryByAltText2;
  }
});

// node_modules/@testing-library/dom/dist/queries/title.js
var require_title = __commonJS({
  "node_modules/@testing-library/dom/dist/queries/title.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.queryByTitle = exports.queryAllByTitle = exports.getByTitle = exports.getAllByTitle = exports.findByTitle = exports.findAllByTitle = void 0;
    var _queryHelpers = require_query_helpers();
    var _helpers = require_helpers();
    var _allUtils = require_all_utils();
    var isSvgTitle = (node) => {
      var _node$parentElement;
      return node.tagName.toLowerCase() === "title" && ((_node$parentElement = node.parentElement) == null ? void 0 : _node$parentElement.tagName.toLowerCase()) === "svg";
    };
    var queryAllByTitle2 = (container, text, {
      exact = true,
      collapseWhitespace,
      trim: trim2,
      normalizer
    } = {}) => {
      (0, _helpers.checkContainerType)(container);
      const matcher = exact ? _allUtils.matches : _allUtils.fuzzyMatches;
      const matchNormalizer = (0, _allUtils.makeNormalizer)({
        collapseWhitespace,
        trim: trim2,
        normalizer
      });
      return Array.from(container.querySelectorAll("[title], svg > title")).filter((node) => matcher(node.getAttribute("title"), node, text, matchNormalizer) || isSvgTitle(node) && matcher((0, _allUtils.getNodeText)(node), node, text, matchNormalizer));
    };
    var getMultipleError = (c, title) => `Found multiple elements with the title: ${title}.`;
    var getMissingError = (c, title) => `Unable to find an element with the title: ${title}.`;
    var queryAllByTitleWithSuggestions = (0, _queryHelpers.wrapAllByQueryWithSuggestion)(queryAllByTitle2, queryAllByTitle2.name, "queryAll");
    exports.queryAllByTitle = queryAllByTitleWithSuggestions;
    var [queryByTitle2, getAllByTitle2, getByTitle2, findAllByTitle2, findByTitle2] = (0, _allUtils.buildQueries)(queryAllByTitle2, getMultipleError, getMissingError);
    exports.findByTitle = findByTitle2;
    exports.findAllByTitle = findAllByTitle2;
    exports.getByTitle = getByTitle2;
    exports.getAllByTitle = getAllByTitle2;
    exports.queryByTitle = queryByTitle2;
  }
});

// node_modules/@testing-library/dom/dist/queries/role.js
var require_role = __commonJS({
  "node_modules/@testing-library/dom/dist/queries/role.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.queryByRole = exports.queryAllByRole = exports.getByRole = exports.getAllByRole = exports.findByRole = exports.findAllByRole = void 0;
    var _domAccessibilityApi = require_dist();
    var _ariaQuery = require_lib();
    var _roleHelpers = require_role_helpers();
    var _queryHelpers = require_query_helpers();
    var _helpers = require_helpers();
    var _allUtils = require_all_utils();
    function queryAllByRole2(container, role, {
      exact = true,
      collapseWhitespace,
      hidden = (0, _allUtils.getConfig)().defaultHidden,
      name,
      description,
      trim: trim2,
      normalizer,
      queryFallbacks = false,
      selected,
      checked,
      pressed,
      current,
      level,
      expanded
    } = {}) {
      (0, _helpers.checkContainerType)(container);
      const matcher = exact ? _allUtils.matches : _allUtils.fuzzyMatches;
      const matchNormalizer = (0, _allUtils.makeNormalizer)({
        collapseWhitespace,
        trim: trim2,
        normalizer
      });
      if (selected !== void 0) {
        var _allRoles$get;
        if (((_allRoles$get = _ariaQuery.roles.get(role)) == null ? void 0 : _allRoles$get.props["aria-selected"]) === void 0) {
          throw new Error(`"aria-selected" is not supported on role "${role}".`);
        }
      }
      if (checked !== void 0) {
        var _allRoles$get2;
        if (((_allRoles$get2 = _ariaQuery.roles.get(role)) == null ? void 0 : _allRoles$get2.props["aria-checked"]) === void 0) {
          throw new Error(`"aria-checked" is not supported on role "${role}".`);
        }
      }
      if (pressed !== void 0) {
        var _allRoles$get3;
        if (((_allRoles$get3 = _ariaQuery.roles.get(role)) == null ? void 0 : _allRoles$get3.props["aria-pressed"]) === void 0) {
          throw new Error(`"aria-pressed" is not supported on role "${role}".`);
        }
      }
      if (current !== void 0) {
        var _allRoles$get4;
        if (((_allRoles$get4 = _ariaQuery.roles.get(role)) == null ? void 0 : _allRoles$get4.props["aria-current"]) === void 0) {
          throw new Error(`"aria-current" is not supported on role "${role}".`);
        }
      }
      if (level !== void 0) {
        if (role !== "heading") {
          throw new Error(`Role "${role}" cannot have "level" property.`);
        }
      }
      if (expanded !== void 0) {
        var _allRoles$get5;
        if (((_allRoles$get5 = _ariaQuery.roles.get(role)) == null ? void 0 : _allRoles$get5.props["aria-expanded"]) === void 0) {
          throw new Error(`"aria-expanded" is not supported on role "${role}".`);
        }
      }
      const subtreeIsInaccessibleCache = new WeakMap();
      function cachedIsSubtreeInaccessible(element) {
        if (!subtreeIsInaccessibleCache.has(element)) {
          subtreeIsInaccessibleCache.set(element, (0, _roleHelpers.isSubtreeInaccessible)(element));
        }
        return subtreeIsInaccessibleCache.get(element);
      }
      return Array.from(container.querySelectorAll(makeRoleSelector(role, exact, normalizer ? matchNormalizer : void 0))).filter((node) => {
        const isRoleSpecifiedExplicitly = node.hasAttribute("role");
        if (isRoleSpecifiedExplicitly) {
          const roleValue = node.getAttribute("role");
          if (queryFallbacks) {
            return roleValue.split(" ").filter(Boolean).some((text) => matcher(text, node, role, matchNormalizer));
          }
          if (normalizer) {
            return matcher(roleValue, node, role, matchNormalizer);
          }
          const [firstWord] = roleValue.split(" ");
          return matcher(firstWord, node, role, matchNormalizer);
        }
        const implicitRoles = (0, _roleHelpers.getImplicitAriaRoles)(node);
        return implicitRoles.some((implicitRole) => matcher(implicitRole, node, role, matchNormalizer));
      }).filter((element) => {
        if (selected !== void 0) {
          return selected === (0, _roleHelpers.computeAriaSelected)(element);
        }
        if (checked !== void 0) {
          return checked === (0, _roleHelpers.computeAriaChecked)(element);
        }
        if (pressed !== void 0) {
          return pressed === (0, _roleHelpers.computeAriaPressed)(element);
        }
        if (current !== void 0) {
          return current === (0, _roleHelpers.computeAriaCurrent)(element);
        }
        if (expanded !== void 0) {
          return expanded === (0, _roleHelpers.computeAriaExpanded)(element);
        }
        if (level !== void 0) {
          return level === (0, _roleHelpers.computeHeadingLevel)(element);
        }
        return true;
      }).filter((element) => {
        if (name === void 0) {
          return true;
        }
        return (0, _allUtils.matches)((0, _domAccessibilityApi.computeAccessibleName)(element, {
          computedStyleSupportsPseudoElements: (0, _allUtils.getConfig)().computedStyleSupportsPseudoElements
        }), element, name, (text) => text);
      }).filter((element) => {
        if (description === void 0) {
          return true;
        }
        return (0, _allUtils.matches)((0, _domAccessibilityApi.computeAccessibleDescription)(element, {
          computedStyleSupportsPseudoElements: (0, _allUtils.getConfig)().computedStyleSupportsPseudoElements
        }), element, description, (text) => text);
      }).filter((element) => {
        return hidden === false ? (0, _roleHelpers.isInaccessible)(element, {
          isSubtreeInaccessible: cachedIsSubtreeInaccessible
        }) === false : true;
      });
    }
    function makeRoleSelector(role, exact, customNormalizer) {
      var _roleElements$get;
      if (typeof role !== "string") {
        return "*";
      }
      const explicitRoleSelector = exact && !customNormalizer ? `*[role~="${role}"]` : "*[role]";
      const roleRelations = (_roleElements$get = _ariaQuery.roleElements.get(role)) != null ? _roleElements$get : new Set();
      const implicitRoleSelectors = new Set(Array.from(roleRelations).map(({
        name
      }) => name));
      return [explicitRoleSelector].concat(Array.from(implicitRoleSelectors)).join(",");
    }
    var getNameHint = (name) => {
      let nameHint = "";
      if (name === void 0) {
        nameHint = "";
      } else if (typeof name === "string") {
        nameHint = ` and name "${name}"`;
      } else {
        nameHint = ` and name \`${name}\``;
      }
      return nameHint;
    };
    var getMultipleError = (c, role, {
      name
    } = {}) => {
      return `Found multiple elements with the role "${role}"${getNameHint(name)}`;
    };
    var getMissingError = (container, role, {
      hidden = (0, _allUtils.getConfig)().defaultHidden,
      name,
      description
    } = {}) => {
      if ((0, _allUtils.getConfig)()._disableExpensiveErrorDiagnostics) {
        return `Unable to find role="${role}"${getNameHint(name)}`;
      }
      let roles = "";
      Array.from(container.children).forEach((childElement) => {
        roles += (0, _roleHelpers.prettyRoles)(childElement, {
          hidden,
          includeDescription: description !== void 0
        });
      });
      let roleMessage;
      if (roles.length === 0) {
        if (hidden === false) {
          roleMessage = "There are no accessible roles. But there might be some inaccessible roles. If you wish to access them, then set the `hidden` option to `true`. Learn more about this here: https://testing-library.com/docs/dom-testing-library/api-queries#byrole";
        } else {
          roleMessage = "There are no available roles.";
        }
      } else {
        roleMessage = `
Here are the ${hidden === false ? "accessible" : "available"} roles:

  ${roles.replace(/\n/g, "\n  ").replace(/\n\s\s\n/g, "\n\n")}
`.trim();
      }
      let nameHint = "";
      if (name === void 0) {
        nameHint = "";
      } else if (typeof name === "string") {
        nameHint = ` and name "${name}"`;
      } else {
        nameHint = ` and name \`${name}\``;
      }
      let descriptionHint = "";
      if (description === void 0) {
        descriptionHint = "";
      } else if (typeof description === "string") {
        descriptionHint = ` and description "${description}"`;
      } else {
        descriptionHint = ` and description \`${description}\``;
      }
      return `
Unable to find an ${hidden === false ? "accessible " : ""}element with the role "${role}"${nameHint}${descriptionHint}

${roleMessage}`.trim();
    };
    var queryAllByRoleWithSuggestions = (0, _queryHelpers.wrapAllByQueryWithSuggestion)(queryAllByRole2, queryAllByRole2.name, "queryAll");
    exports.queryAllByRole = queryAllByRoleWithSuggestions;
    var [queryByRole2, getAllByRole2, getByRole2, findAllByRole2, findByRole2] = (0, _allUtils.buildQueries)(queryAllByRole2, getMultipleError, getMissingError);
    exports.findByRole = findByRole2;
    exports.findAllByRole = findAllByRole2;
    exports.getByRole = getByRole2;
    exports.getAllByRole = getAllByRole2;
    exports.queryByRole = queryByRole2;
  }
});

// node_modules/@testing-library/dom/dist/queries/test-id.js
var require_test_id = __commonJS({
  "node_modules/@testing-library/dom/dist/queries/test-id.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.queryByTestId = exports.queryAllByTestId = exports.getByTestId = exports.getAllByTestId = exports.findByTestId = exports.findAllByTestId = void 0;
    var _helpers = require_helpers();
    var _queryHelpers = require_query_helpers();
    var _allUtils = require_all_utils();
    var getTestIdAttribute = () => (0, _allUtils.getConfig)().testIdAttribute;
    var queryAllByTestId2 = (...args) => {
      (0, _helpers.checkContainerType)(args[0]);
      return (0, _allUtils.queryAllByAttribute)(getTestIdAttribute(), ...args);
    };
    var getMultipleError = (c, id) => `Found multiple elements by: [${getTestIdAttribute()}="${id}"]`;
    var getMissingError = (c, id) => `Unable to find an element by: [${getTestIdAttribute()}="${id}"]`;
    var queryAllByTestIdWithSuggestions = (0, _queryHelpers.wrapAllByQueryWithSuggestion)(queryAllByTestId2, queryAllByTestId2.name, "queryAll");
    exports.queryAllByTestId = queryAllByTestIdWithSuggestions;
    var [queryByTestId2, getAllByTestId2, getByTestId2, findAllByTestId2, findByTestId2] = (0, _allUtils.buildQueries)(queryAllByTestId2, getMultipleError, getMissingError);
    exports.findByTestId = findByTestId2;
    exports.findAllByTestId = findAllByTestId2;
    exports.getByTestId = getByTestId2;
    exports.getAllByTestId = getAllByTestId2;
    exports.queryByTestId = queryByTestId2;
  }
});

// node_modules/@testing-library/dom/dist/queries/index.js
var require_queries = __commonJS({
  "node_modules/@testing-library/dom/dist/queries/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _labelText = require_label_text();
    Object.keys(_labelText).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _labelText[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _labelText[key];
        }
      });
    });
    var _placeholderText = require_placeholder_text();
    Object.keys(_placeholderText).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _placeholderText[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _placeholderText[key];
        }
      });
    });
    var _text = require_text();
    Object.keys(_text).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _text[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _text[key];
        }
      });
    });
    var _displayValue = require_display_value();
    Object.keys(_displayValue).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _displayValue[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _displayValue[key];
        }
      });
    });
    var _altText = require_alt_text();
    Object.keys(_altText).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _altText[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _altText[key];
        }
      });
    });
    var _title = require_title();
    Object.keys(_title).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _title[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _title[key];
        }
      });
    });
    var _role = require_role();
    Object.keys(_role).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _role[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _role[key];
        }
      });
    });
    var _testId = require_test_id();
    Object.keys(_testId).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _testId[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _testId[key];
        }
      });
    });
  }
});

// node_modules/@testing-library/dom/dist/get-queries-for-element.js
var require_get_queries_for_element = __commonJS({
  "node_modules/@testing-library/dom/dist/get-queries-for-element.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getQueriesForElement = getQueriesForElement2;
    var defaultQueries = _interopRequireWildcard(require_queries());
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = new WeakMap();
      var cacheNodeInterop = new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function getQueriesForElement2(element, queries2 = defaultQueries, initialValue = {}) {
      return Object.keys(queries2).reduce((helpers, key) => {
        const fn = queries2[key];
        helpers[key] = fn.bind(null, element);
        return helpers;
      }, initialValue);
    }
  }
});

// node_modules/@testing-library/dom/dist/wait-for-element-to-be-removed.js
var require_wait_for_element_to_be_removed = __commonJS({
  "node_modules/@testing-library/dom/dist/wait-for-element-to-be-removed.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.waitForElementToBeRemoved = waitForElementToBeRemoved2;
    var _waitFor = require_wait_for();
    var isRemoved = (result) => !result || Array.isArray(result) && !result.length;
    function initialCheck(elements) {
      if (isRemoved(elements)) {
        throw new Error("The element(s) given to waitForElementToBeRemoved are already removed. waitForElementToBeRemoved requires that the element(s) exist(s) before waiting for removal.");
      }
    }
    async function waitForElementToBeRemoved2(callback, options) {
      const timeoutError = new Error("Timed out in waitForElementToBeRemoved.");
      if (typeof callback !== "function") {
        initialCheck(callback);
        const elements = Array.isArray(callback) ? callback : [callback];
        const getRemainingElements = elements.map((element) => {
          let parent = element.parentElement;
          if (parent === null)
            return () => null;
          while (parent.parentElement)
            parent = parent.parentElement;
          return () => parent.contains(element) ? element : null;
        });
        callback = () => getRemainingElements.map((c) => c()).filter(Boolean);
      }
      initialCheck(callback());
      return (0, _waitFor.waitFor)(() => {
        let result;
        try {
          result = callback();
        } catch (error2) {
          if (error2.name === "TestingLibraryElementError") {
            return void 0;
          }
          throw error2;
        }
        if (!isRemoved(result)) {
          throw timeoutError;
        }
        return void 0;
      }, options);
    }
  }
});

// node_modules/@testing-library/dom/dist/event-map.js
var require_event_map = __commonJS({
  "node_modules/@testing-library/dom/dist/event-map.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.eventMap = exports.eventAliasMap = void 0;
    var eventMap = {
      copy: {
        EventType: "ClipboardEvent",
        defaultInit: {
          bubbles: true,
          cancelable: true,
          composed: true
        }
      },
      cut: {
        EventType: "ClipboardEvent",
        defaultInit: {
          bubbles: true,
          cancelable: true,
          composed: true
        }
      },
      paste: {
        EventType: "ClipboardEvent",
        defaultInit: {
          bubbles: true,
          cancelable: true,
          composed: true
        }
      },
      compositionEnd: {
        EventType: "CompositionEvent",
        defaultInit: {
          bubbles: true,
          cancelable: true,
          composed: true
        }
      },
      compositionStart: {
        EventType: "CompositionEvent",
        defaultInit: {
          bubbles: true,
          cancelable: true,
          composed: true
        }
      },
      compositionUpdate: {
        EventType: "CompositionEvent",
        defaultInit: {
          bubbles: true,
          cancelable: true,
          composed: true
        }
      },
      keyDown: {
        EventType: "KeyboardEvent",
        defaultInit: {
          bubbles: true,
          cancelable: true,
          charCode: 0,
          composed: true
        }
      },
      keyPress: {
        EventType: "KeyboardEvent",
        defaultInit: {
          bubbles: true,
          cancelable: true,
          charCode: 0,
          composed: true
        }
      },
      keyUp: {
        EventType: "KeyboardEvent",
        defaultInit: {
          bubbles: true,
          cancelable: true,
          charCode: 0,
          composed: true
        }
      },
      focus: {
        EventType: "FocusEvent",
        defaultInit: {
          bubbles: false,
          cancelable: false,
          composed: true
        }
      },
      blur: {
        EventType: "FocusEvent",
        defaultInit: {
          bubbles: false,
          cancelable: false,
          composed: true
        }
      },
      focusIn: {
        EventType: "FocusEvent",
        defaultInit: {
          bubbles: true,
          cancelable: false,
          composed: true
        }
      },
      focusOut: {
        EventType: "FocusEvent",
        defaultInit: {
          bubbles: true,
          cancelable: false,
          composed: true
        }
      },
      change: {
        EventType: "Event",
        defaultInit: {
          bubbles: true,
          cancelable: false
        }
      },
      input: {
        EventType: "InputEvent",
        defaultInit: {
          bubbles: true,
          cancelable: false,
          composed: true
        }
      },
      invalid: {
        EventType: "Event",
        defaultInit: {
          bubbles: false,
          cancelable: true
        }
      },
      submit: {
        EventType: "Event",
        defaultInit: {
          bubbles: true,
          cancelable: true
        }
      },
      reset: {
        EventType: "Event",
        defaultInit: {
          bubbles: true,
          cancelable: true
        }
      },
      click: {
        EventType: "MouseEvent",
        defaultInit: {
          bubbles: true,
          cancelable: true,
          button: 0,
          composed: true
        }
      },
      contextMenu: {
        EventType: "MouseEvent",
        defaultInit: {
          bubbles: true,
          cancelable: true,
          composed: true
        }
      },
      dblClick: {
        EventType: "MouseEvent",
        defaultInit: {
          bubbles: true,
          cancelable: true,
          composed: true
        }
      },
      drag: {
        EventType: "DragEvent",
        defaultInit: {
          bubbles: true,
          cancelable: true,
          composed: true
        }
      },
      dragEnd: {
        EventType: "DragEvent",
        defaultInit: {
          bubbles: true,
          cancelable: false,
          composed: true
        }
      },
      dragEnter: {
        EventType: "DragEvent",
        defaultInit: {
          bubbles: true,
          cancelable: true,
          composed: true
        }
      },
      dragExit: {
        EventType: "DragEvent",
        defaultInit: {
          bubbles: true,
          cancelable: false,
          composed: true
        }
      },
      dragLeave: {
        EventType: "DragEvent",
        defaultInit: {
          bubbles: true,
          cancelable: false,
          composed: true
        }
      },
      dragOver: {
        EventType: "DragEvent",
        defaultInit: {
          bubbles: true,
          cancelable: true,
          composed: true
        }
      },
      dragStart: {
        EventType: "DragEvent",
        defaultInit: {
          bubbles: true,
          cancelable: true,
          composed: true
        }
      },
      drop: {
        EventType: "DragEvent",
        defaultInit: {
          bubbles: true,
          cancelable: true,
          composed: true
        }
      },
      mouseDown: {
        EventType: "MouseEvent",
        defaultInit: {
          bubbles: true,
          cancelable: true,
          composed: true
        }
      },
      mouseEnter: {
        EventType: "MouseEvent",
        defaultInit: {
          bubbles: false,
          cancelable: false,
          composed: true
        }
      },
      mouseLeave: {
        EventType: "MouseEvent",
        defaultInit: {
          bubbles: false,
          cancelable: false,
          composed: true
        }
      },
      mouseMove: {
        EventType: "MouseEvent",
        defaultInit: {
          bubbles: true,
          cancelable: true,
          composed: true
        }
      },
      mouseOut: {
        EventType: "MouseEvent",
        defaultInit: {
          bubbles: true,
          cancelable: true,
          composed: true
        }
      },
      mouseOver: {
        EventType: "MouseEvent",
        defaultInit: {
          bubbles: true,
          cancelable: true,
          composed: true
        }
      },
      mouseUp: {
        EventType: "MouseEvent",
        defaultInit: {
          bubbles: true,
          cancelable: true,
          composed: true
        }
      },
      select: {
        EventType: "Event",
        defaultInit: {
          bubbles: true,
          cancelable: false
        }
      },
      touchCancel: {
        EventType: "TouchEvent",
        defaultInit: {
          bubbles: true,
          cancelable: false,
          composed: true
        }
      },
      touchEnd: {
        EventType: "TouchEvent",
        defaultInit: {
          bubbles: true,
          cancelable: true,
          composed: true
        }
      },
      touchMove: {
        EventType: "TouchEvent",
        defaultInit: {
          bubbles: true,
          cancelable: true,
          composed: true
        }
      },
      touchStart: {
        EventType: "TouchEvent",
        defaultInit: {
          bubbles: true,
          cancelable: true,
          composed: true
        }
      },
      resize: {
        EventType: "UIEvent",
        defaultInit: {
          bubbles: false,
          cancelable: false
        }
      },
      scroll: {
        EventType: "UIEvent",
        defaultInit: {
          bubbles: false,
          cancelable: false
        }
      },
      wheel: {
        EventType: "WheelEvent",
        defaultInit: {
          bubbles: true,
          cancelable: true,
          composed: true
        }
      },
      abort: {
        EventType: "Event",
        defaultInit: {
          bubbles: false,
          cancelable: false
        }
      },
      canPlay: {
        EventType: "Event",
        defaultInit: {
          bubbles: false,
          cancelable: false
        }
      },
      canPlayThrough: {
        EventType: "Event",
        defaultInit: {
          bubbles: false,
          cancelable: false
        }
      },
      durationChange: {
        EventType: "Event",
        defaultInit: {
          bubbles: false,
          cancelable: false
        }
      },
      emptied: {
        EventType: "Event",
        defaultInit: {
          bubbles: false,
          cancelable: false
        }
      },
      encrypted: {
        EventType: "Event",
        defaultInit: {
          bubbles: false,
          cancelable: false
        }
      },
      ended: {
        EventType: "Event",
        defaultInit: {
          bubbles: false,
          cancelable: false
        }
      },
      loadedData: {
        EventType: "Event",
        defaultInit: {
          bubbles: false,
          cancelable: false
        }
      },
      loadedMetadata: {
        EventType: "Event",
        defaultInit: {
          bubbles: false,
          cancelable: false
        }
      },
      loadStart: {
        EventType: "ProgressEvent",
        defaultInit: {
          bubbles: false,
          cancelable: false
        }
      },
      pause: {
        EventType: "Event",
        defaultInit: {
          bubbles: false,
          cancelable: false
        }
      },
      play: {
        EventType: "Event",
        defaultInit: {
          bubbles: false,
          cancelable: false
        }
      },
      playing: {
        EventType: "Event",
        defaultInit: {
          bubbles: false,
          cancelable: false
        }
      },
      progress: {
        EventType: "ProgressEvent",
        defaultInit: {
          bubbles: false,
          cancelable: false
        }
      },
      rateChange: {
        EventType: "Event",
        defaultInit: {
          bubbles: false,
          cancelable: false
        }
      },
      seeked: {
        EventType: "Event",
        defaultInit: {
          bubbles: false,
          cancelable: false
        }
      },
      seeking: {
        EventType: "Event",
        defaultInit: {
          bubbles: false,
          cancelable: false
        }
      },
      stalled: {
        EventType: "Event",
        defaultInit: {
          bubbles: false,
          cancelable: false
        }
      },
      suspend: {
        EventType: "Event",
        defaultInit: {
          bubbles: false,
          cancelable: false
        }
      },
      timeUpdate: {
        EventType: "Event",
        defaultInit: {
          bubbles: false,
          cancelable: false
        }
      },
      volumeChange: {
        EventType: "Event",
        defaultInit: {
          bubbles: false,
          cancelable: false
        }
      },
      waiting: {
        EventType: "Event",
        defaultInit: {
          bubbles: false,
          cancelable: false
        }
      },
      load: {
        EventType: "Event",
        defaultInit: {
          bubbles: false,
          cancelable: false
        }
      },
      error: {
        EventType: "Event",
        defaultInit: {
          bubbles: false,
          cancelable: false
        }
      },
      animationStart: {
        EventType: "AnimationEvent",
        defaultInit: {
          bubbles: true,
          cancelable: false
        }
      },
      animationEnd: {
        EventType: "AnimationEvent",
        defaultInit: {
          bubbles: true,
          cancelable: false
        }
      },
      animationIteration: {
        EventType: "AnimationEvent",
        defaultInit: {
          bubbles: true,
          cancelable: false
        }
      },
      transitionCancel: {
        EventType: "TransitionEvent",
        defaultInit: {
          bubbles: true,
          cancelable: false
        }
      },
      transitionEnd: {
        EventType: "TransitionEvent",
        defaultInit: {
          bubbles: true,
          cancelable: true
        }
      },
      transitionRun: {
        EventType: "TransitionEvent",
        defaultInit: {
          bubbles: true,
          cancelable: false
        }
      },
      transitionStart: {
        EventType: "TransitionEvent",
        defaultInit: {
          bubbles: true,
          cancelable: false
        }
      },
      pointerOver: {
        EventType: "PointerEvent",
        defaultInit: {
          bubbles: true,
          cancelable: true,
          composed: true
        }
      },
      pointerEnter: {
        EventType: "PointerEvent",
        defaultInit: {
          bubbles: false,
          cancelable: false
        }
      },
      pointerDown: {
        EventType: "PointerEvent",
        defaultInit: {
          bubbles: true,
          cancelable: true,
          composed: true
        }
      },
      pointerMove: {
        EventType: "PointerEvent",
        defaultInit: {
          bubbles: true,
          cancelable: true,
          composed: true
        }
      },
      pointerUp: {
        EventType: "PointerEvent",
        defaultInit: {
          bubbles: true,
          cancelable: true,
          composed: true
        }
      },
      pointerCancel: {
        EventType: "PointerEvent",
        defaultInit: {
          bubbles: true,
          cancelable: false,
          composed: true
        }
      },
      pointerOut: {
        EventType: "PointerEvent",
        defaultInit: {
          bubbles: true,
          cancelable: true,
          composed: true
        }
      },
      pointerLeave: {
        EventType: "PointerEvent",
        defaultInit: {
          bubbles: false,
          cancelable: false
        }
      },
      gotPointerCapture: {
        EventType: "PointerEvent",
        defaultInit: {
          bubbles: true,
          cancelable: false,
          composed: true
        }
      },
      lostPointerCapture: {
        EventType: "PointerEvent",
        defaultInit: {
          bubbles: true,
          cancelable: false,
          composed: true
        }
      },
      popState: {
        EventType: "PopStateEvent",
        defaultInit: {
          bubbles: true,
          cancelable: false
        }
      }
    };
    exports.eventMap = eventMap;
    var eventAliasMap = {
      doubleClick: "dblClick"
    };
    exports.eventAliasMap = eventAliasMap;
  }
});

// node_modules/@testing-library/dom/dist/events.js
var require_events = __commonJS({
  "node_modules/@testing-library/dom/dist/events.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.createEvent = createEvent2;
    exports.fireEvent = fireEvent2;
    var _config = require_config();
    var _helpers = require_helpers();
    var _eventMap = require_event_map();
    function fireEvent2(element, event) {
      return (0, _config.getConfig)().eventWrapper(() => {
        if (!event) {
          throw new Error(`Unable to fire an event - please provide an event object.`);
        }
        if (!element) {
          throw new Error(`Unable to fire a "${event.type}" event - please provide a DOM element.`);
        }
        return element.dispatchEvent(event);
      });
    }
    function createEvent2(eventName, node, init, {
      EventType = "Event",
      defaultInit = {}
    } = {}) {
      if (!node) {
        throw new Error(`Unable to fire a "${eventName}" event - please provide a DOM element.`);
      }
      const eventInit = {
        ...defaultInit,
        ...init
      };
      const {
        target: {
          value,
          files,
          ...targetProperties
        } = {}
      } = eventInit;
      if (value !== void 0) {
        setNativeValue(node, value);
      }
      if (files !== void 0) {
        Object.defineProperty(node, "files", {
          configurable: true,
          enumerable: true,
          writable: true,
          value: files
        });
      }
      Object.assign(node, targetProperties);
      const window2 = (0, _helpers.getWindowFromNode)(node);
      const EventConstructor = window2[EventType] || window2.Event;
      let event;
      if (typeof EventConstructor === "function") {
        event = new EventConstructor(eventName, eventInit);
      } else {
        event = window2.document.createEvent(EventType);
        const {
          bubbles,
          cancelable,
          detail,
          ...otherInit
        } = eventInit;
        event.initEvent(eventName, bubbles, cancelable, detail);
        Object.keys(otherInit).forEach((eventKey) => {
          event[eventKey] = otherInit[eventKey];
        });
      }
      const dataTransferProperties = ["dataTransfer", "clipboardData"];
      dataTransferProperties.forEach((dataTransferKey) => {
        const dataTransferValue = eventInit[dataTransferKey];
        if (typeof dataTransferValue === "object") {
          if (typeof window2.DataTransfer === "function") {
            Object.defineProperty(event, dataTransferKey, {
              value: Object.getOwnPropertyNames(dataTransferValue).reduce((acc, propName) => {
                Object.defineProperty(acc, propName, {
                  value: dataTransferValue[propName]
                });
                return acc;
              }, new window2.DataTransfer())
            });
          } else {
            Object.defineProperty(event, dataTransferKey, {
              value: dataTransferValue
            });
          }
        }
      });
      return event;
    }
    Object.keys(_eventMap.eventMap).forEach((key) => {
      const {
        EventType,
        defaultInit
      } = _eventMap.eventMap[key];
      const eventName = key.toLowerCase();
      createEvent2[key] = (node, init) => createEvent2(eventName, node, init, {
        EventType,
        defaultInit
      });
      fireEvent2[key] = (node, init) => fireEvent2(node, createEvent2[key](node, init));
    });
    function setNativeValue(element, value) {
      const {
        set: valueSetter
      } = Object.getOwnPropertyDescriptor(element, "value") || {};
      const prototype = Object.getPrototypeOf(element);
      const {
        set: prototypeValueSetter
      } = Object.getOwnPropertyDescriptor(prototype, "value") || {};
      if (prototypeValueSetter && valueSetter !== prototypeValueSetter) {
        prototypeValueSetter.call(element, value);
      } else {
        if (valueSetter) {
          valueSetter.call(element, value);
        } else {
          throw new Error("The given element does not have a value setter");
        }
      }
    }
    Object.keys(_eventMap.eventAliasMap).forEach((aliasKey) => {
      const key = _eventMap.eventAliasMap[aliasKey];
      fireEvent2[aliasKey] = (...args) => fireEvent2[key](...args);
    });
  }
});

// node_modules/lz-string/libs/lz-string.js
var require_lz_string = __commonJS({
  "node_modules/lz-string/libs/lz-string.js"(exports, module) {
    var LZString = function() {
      var f = String.fromCharCode;
      var keyStrBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      var keyStrUriSafe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";
      var baseReverseDic = {};
      function getBaseValue(alphabet, character) {
        if (!baseReverseDic[alphabet]) {
          baseReverseDic[alphabet] = {};
          for (var i = 0; i < alphabet.length; i++) {
            baseReverseDic[alphabet][alphabet.charAt(i)] = i;
          }
        }
        return baseReverseDic[alphabet][character];
      }
      var LZString2 = {
        compressToBase64: function(input) {
          if (input == null)
            return "";
          var res = LZString2._compress(input, 6, function(a) {
            return keyStrBase64.charAt(a);
          });
          switch (res.length % 4) {
            default:
            case 0:
              return res;
            case 1:
              return res + "===";
            case 2:
              return res + "==";
            case 3:
              return res + "=";
          }
        },
        decompressFromBase64: function(input) {
          if (input == null)
            return "";
          if (input == "")
            return null;
          return LZString2._decompress(input.length, 32, function(index) {
            return getBaseValue(keyStrBase64, input.charAt(index));
          });
        },
        compressToUTF16: function(input) {
          if (input == null)
            return "";
          return LZString2._compress(input, 15, function(a) {
            return f(a + 32);
          }) + " ";
        },
        decompressFromUTF16: function(compressed) {
          if (compressed == null)
            return "";
          if (compressed == "")
            return null;
          return LZString2._decompress(compressed.length, 16384, function(index) {
            return compressed.charCodeAt(index) - 32;
          });
        },
        compressToUint8Array: function(uncompressed) {
          var compressed = LZString2.compress(uncompressed);
          var buf = new Uint8Array(compressed.length * 2);
          for (var i = 0, TotalLen = compressed.length; i < TotalLen; i++) {
            var current_value = compressed.charCodeAt(i);
            buf[i * 2] = current_value >>> 8;
            buf[i * 2 + 1] = current_value % 256;
          }
          return buf;
        },
        decompressFromUint8Array: function(compressed) {
          if (compressed === null || compressed === void 0) {
            return LZString2.decompress(compressed);
          } else {
            var buf = new Array(compressed.length / 2);
            for (var i = 0, TotalLen = buf.length; i < TotalLen; i++) {
              buf[i] = compressed[i * 2] * 256 + compressed[i * 2 + 1];
            }
            var result = [];
            buf.forEach(function(c) {
              result.push(f(c));
            });
            return LZString2.decompress(result.join(""));
          }
        },
        compressToEncodedURIComponent: function(input) {
          if (input == null)
            return "";
          return LZString2._compress(input, 6, function(a) {
            return keyStrUriSafe.charAt(a);
          });
        },
        decompressFromEncodedURIComponent: function(input) {
          if (input == null)
            return "";
          if (input == "")
            return null;
          input = input.replace(/ /g, "+");
          return LZString2._decompress(input.length, 32, function(index) {
            return getBaseValue(keyStrUriSafe, input.charAt(index));
          });
        },
        compress: function(uncompressed) {
          return LZString2._compress(uncompressed, 16, function(a) {
            return f(a);
          });
        },
        _compress: function(uncompressed, bitsPerChar, getCharFromInt) {
          if (uncompressed == null)
            return "";
          var i, value, context_dictionary = {}, context_dictionaryToCreate = {}, context_c = "", context_wc = "", context_w = "", context_enlargeIn = 2, context_dictSize = 3, context_numBits = 2, context_data = [], context_data_val = 0, context_data_position = 0, ii;
          for (ii = 0; ii < uncompressed.length; ii += 1) {
            context_c = uncompressed.charAt(ii);
            if (!Object.prototype.hasOwnProperty.call(context_dictionary, context_c)) {
              context_dictionary[context_c] = context_dictSize++;
              context_dictionaryToCreate[context_c] = true;
            }
            context_wc = context_w + context_c;
            if (Object.prototype.hasOwnProperty.call(context_dictionary, context_wc)) {
              context_w = context_wc;
            } else {
              if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
                if (context_w.charCodeAt(0) < 256) {
                  for (i = 0; i < context_numBits; i++) {
                    context_data_val = context_data_val << 1;
                    if (context_data_position == bitsPerChar - 1) {
                      context_data_position = 0;
                      context_data.push(getCharFromInt(context_data_val));
                      context_data_val = 0;
                    } else {
                      context_data_position++;
                    }
                  }
                  value = context_w.charCodeAt(0);
                  for (i = 0; i < 8; i++) {
                    context_data_val = context_data_val << 1 | value & 1;
                    if (context_data_position == bitsPerChar - 1) {
                      context_data_position = 0;
                      context_data.push(getCharFromInt(context_data_val));
                      context_data_val = 0;
                    } else {
                      context_data_position++;
                    }
                    value = value >> 1;
                  }
                } else {
                  value = 1;
                  for (i = 0; i < context_numBits; i++) {
                    context_data_val = context_data_val << 1 | value;
                    if (context_data_position == bitsPerChar - 1) {
                      context_data_position = 0;
                      context_data.push(getCharFromInt(context_data_val));
                      context_data_val = 0;
                    } else {
                      context_data_position++;
                    }
                    value = 0;
                  }
                  value = context_w.charCodeAt(0);
                  for (i = 0; i < 16; i++) {
                    context_data_val = context_data_val << 1 | value & 1;
                    if (context_data_position == bitsPerChar - 1) {
                      context_data_position = 0;
                      context_data.push(getCharFromInt(context_data_val));
                      context_data_val = 0;
                    } else {
                      context_data_position++;
                    }
                    value = value >> 1;
                  }
                }
                context_enlargeIn--;
                if (context_enlargeIn == 0) {
                  context_enlargeIn = Math.pow(2, context_numBits);
                  context_numBits++;
                }
                delete context_dictionaryToCreate[context_w];
              } else {
                value = context_dictionary[context_w];
                for (i = 0; i < context_numBits; i++) {
                  context_data_val = context_data_val << 1 | value & 1;
                  if (context_data_position == bitsPerChar - 1) {
                    context_data_position = 0;
                    context_data.push(getCharFromInt(context_data_val));
                    context_data_val = 0;
                  } else {
                    context_data_position++;
                  }
                  value = value >> 1;
                }
              }
              context_enlargeIn--;
              if (context_enlargeIn == 0) {
                context_enlargeIn = Math.pow(2, context_numBits);
                context_numBits++;
              }
              context_dictionary[context_wc] = context_dictSize++;
              context_w = String(context_c);
            }
          }
          if (context_w !== "") {
            if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
              if (context_w.charCodeAt(0) < 256) {
                for (i = 0; i < context_numBits; i++) {
                  context_data_val = context_data_val << 1;
                  if (context_data_position == bitsPerChar - 1) {
                    context_data_position = 0;
                    context_data.push(getCharFromInt(context_data_val));
                    context_data_val = 0;
                  } else {
                    context_data_position++;
                  }
                }
                value = context_w.charCodeAt(0);
                for (i = 0; i < 8; i++) {
                  context_data_val = context_data_val << 1 | value & 1;
                  if (context_data_position == bitsPerChar - 1) {
                    context_data_position = 0;
                    context_data.push(getCharFromInt(context_data_val));
                    context_data_val = 0;
                  } else {
                    context_data_position++;
                  }
                  value = value >> 1;
                }
              } else {
                value = 1;
                for (i = 0; i < context_numBits; i++) {
                  context_data_val = context_data_val << 1 | value;
                  if (context_data_position == bitsPerChar - 1) {
                    context_data_position = 0;
                    context_data.push(getCharFromInt(context_data_val));
                    context_data_val = 0;
                  } else {
                    context_data_position++;
                  }
                  value = 0;
                }
                value = context_w.charCodeAt(0);
                for (i = 0; i < 16; i++) {
                  context_data_val = context_data_val << 1 | value & 1;
                  if (context_data_position == bitsPerChar - 1) {
                    context_data_position = 0;
                    context_data.push(getCharFromInt(context_data_val));
                    context_data_val = 0;
                  } else {
                    context_data_position++;
                  }
                  value = value >> 1;
                }
              }
              context_enlargeIn--;
              if (context_enlargeIn == 0) {
                context_enlargeIn = Math.pow(2, context_numBits);
                context_numBits++;
              }
              delete context_dictionaryToCreate[context_w];
            } else {
              value = context_dictionary[context_w];
              for (i = 0; i < context_numBits; i++) {
                context_data_val = context_data_val << 1 | value & 1;
                if (context_data_position == bitsPerChar - 1) {
                  context_data_position = 0;
                  context_data.push(getCharFromInt(context_data_val));
                  context_data_val = 0;
                } else {
                  context_data_position++;
                }
                value = value >> 1;
              }
            }
            context_enlargeIn--;
            if (context_enlargeIn == 0) {
              context_enlargeIn = Math.pow(2, context_numBits);
              context_numBits++;
            }
          }
          value = 2;
          for (i = 0; i < context_numBits; i++) {
            context_data_val = context_data_val << 1 | value & 1;
            if (context_data_position == bitsPerChar - 1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }
          while (true) {
            context_data_val = context_data_val << 1;
            if (context_data_position == bitsPerChar - 1) {
              context_data.push(getCharFromInt(context_data_val));
              break;
            } else
              context_data_position++;
          }
          return context_data.join("");
        },
        decompress: function(compressed) {
          if (compressed == null)
            return "";
          if (compressed == "")
            return null;
          return LZString2._decompress(compressed.length, 32768, function(index) {
            return compressed.charCodeAt(index);
          });
        },
        _decompress: function(length, resetValue, getNextValue) {
          var dictionary = [], next2, enlargeIn = 4, dictSize = 4, numBits = 3, entry = "", result = [], i, w, bits, resb, maxpower, power, c, data = { val: getNextValue(0), position: resetValue, index: 1 };
          for (i = 0; i < 3; i += 1) {
            dictionary[i] = i;
          }
          bits = 0;
          maxpower = Math.pow(2, 2);
          power = 1;
          while (power != maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb > 0 ? 1 : 0) * power;
            power <<= 1;
          }
          switch (next2 = bits) {
            case 0:
              bits = 0;
              maxpower = Math.pow(2, 8);
              power = 1;
              while (power != maxpower) {
                resb = data.val & data.position;
                data.position >>= 1;
                if (data.position == 0) {
                  data.position = resetValue;
                  data.val = getNextValue(data.index++);
                }
                bits |= (resb > 0 ? 1 : 0) * power;
                power <<= 1;
              }
              c = f(bits);
              break;
            case 1:
              bits = 0;
              maxpower = Math.pow(2, 16);
              power = 1;
              while (power != maxpower) {
                resb = data.val & data.position;
                data.position >>= 1;
                if (data.position == 0) {
                  data.position = resetValue;
                  data.val = getNextValue(data.index++);
                }
                bits |= (resb > 0 ? 1 : 0) * power;
                power <<= 1;
              }
              c = f(bits);
              break;
            case 2:
              return "";
          }
          dictionary[3] = c;
          w = c;
          result.push(c);
          while (true) {
            if (data.index > length) {
              return "";
            }
            bits = 0;
            maxpower = Math.pow(2, numBits);
            power = 1;
            while (power != maxpower) {
              resb = data.val & data.position;
              data.position >>= 1;
              if (data.position == 0) {
                data.position = resetValue;
                data.val = getNextValue(data.index++);
              }
              bits |= (resb > 0 ? 1 : 0) * power;
              power <<= 1;
            }
            switch (c = bits) {
              case 0:
                bits = 0;
                maxpower = Math.pow(2, 8);
                power = 1;
                while (power != maxpower) {
                  resb = data.val & data.position;
                  data.position >>= 1;
                  if (data.position == 0) {
                    data.position = resetValue;
                    data.val = getNextValue(data.index++);
                  }
                  bits |= (resb > 0 ? 1 : 0) * power;
                  power <<= 1;
                }
                dictionary[dictSize++] = f(bits);
                c = dictSize - 1;
                enlargeIn--;
                break;
              case 1:
                bits = 0;
                maxpower = Math.pow(2, 16);
                power = 1;
                while (power != maxpower) {
                  resb = data.val & data.position;
                  data.position >>= 1;
                  if (data.position == 0) {
                    data.position = resetValue;
                    data.val = getNextValue(data.index++);
                  }
                  bits |= (resb > 0 ? 1 : 0) * power;
                  power <<= 1;
                }
                dictionary[dictSize++] = f(bits);
                c = dictSize - 1;
                enlargeIn--;
                break;
              case 2:
                return result.join("");
            }
            if (enlargeIn == 0) {
              enlargeIn = Math.pow(2, numBits);
              numBits++;
            }
            if (dictionary[c]) {
              entry = dictionary[c];
            } else {
              if (c === dictSize) {
                entry = w + w.charAt(0);
              } else {
                return null;
              }
            }
            result.push(entry);
            dictionary[dictSize++] = w + entry.charAt(0);
            enlargeIn--;
            w = entry;
            if (enlargeIn == 0) {
              enlargeIn = Math.pow(2, numBits);
              numBits++;
            }
          }
        }
      };
      return LZString2;
    }();
    if (typeof define === "function" && define.amd) {
      define(function() {
        return LZString;
      });
    } else if (typeof module !== "undefined" && module != null) {
      module.exports = LZString;
    }
  }
});

// node_modules/@testing-library/dom/dist/screen.js
var require_screen = __commonJS({
  "node_modules/@testing-library/dom/dist/screen.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.screen = void 0;
    var _lzString = _interopRequireDefault(require_lz_string());
    var _getQueriesForElement = require_get_queries_for_element();
    var _helpers = require_helpers();
    var _prettyDom = require_pretty_dom();
    var queries2 = _interopRequireWildcard(require_queries());
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = new WeakMap();
      var cacheNodeInterop = new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function unindent(string) {
      return string.replace(/[ \t]*[\n][ \t]*/g, "\n");
    }
    function encode(value) {
      return _lzString.default.compressToEncodedURIComponent(unindent(value));
    }
    function getPlaygroundUrl(markup) {
      return `https://testing-playground.com/#markup=${encode(markup)}`;
    }
    var debug2 = (element, maxLength, options) => Array.isArray(element) ? element.forEach((el) => (0, _prettyDom.logDOM)(el, maxLength, options)) : (0, _prettyDom.logDOM)(element, maxLength, options);
    var logTestingPlaygroundURL = (element = (0, _helpers.getDocument)().body) => {
      if (!element || !("innerHTML" in element)) {
        console.log(`The element you're providing isn't a valid DOM element.`);
        return;
      }
      if (!element.innerHTML) {
        console.log(`The provided element doesn't have any children.`);
        return;
      }
      const playgroundUrl = getPlaygroundUrl(element.innerHTML);
      console.log(`Open this URL in your browser

${playgroundUrl}`);
      return playgroundUrl;
    };
    var initialValue = {
      debug: debug2,
      logTestingPlaygroundURL
    };
    var screen2 = typeof document !== "undefined" && document.body ? (0, _getQueriesForElement.getQueriesForElement)(document.body, queries2, initialValue) : Object.keys(queries2).reduce((helpers, key) => {
      helpers[key] = () => {
        throw new TypeError("For queries bound to document.body a global document has to be available... Learn more: https://testing-library.com/s/screen-global-error");
      };
      return helpers;
    }, initialValue);
    exports.screen = screen2;
  }
});

// node_modules/@testing-library/dom/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/@testing-library/dom/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _exportNames = {
      within: true,
      queries: true,
      queryHelpers: true,
      getDefaultNormalizer: true,
      getRoles: true,
      logRoles: true,
      isInaccessible: true,
      configure: true,
      getConfig: true
    };
    Object.defineProperty(exports, "configure", {
      enumerable: true,
      get: function() {
        return _config.configure;
      }
    });
    Object.defineProperty(exports, "getConfig", {
      enumerable: true,
      get: function() {
        return _config.getConfig;
      }
    });
    Object.defineProperty(exports, "getDefaultNormalizer", {
      enumerable: true,
      get: function() {
        return _matches.getDefaultNormalizer;
      }
    });
    Object.defineProperty(exports, "getRoles", {
      enumerable: true,
      get: function() {
        return _roleHelpers.getRoles;
      }
    });
    Object.defineProperty(exports, "isInaccessible", {
      enumerable: true,
      get: function() {
        return _roleHelpers.isInaccessible;
      }
    });
    Object.defineProperty(exports, "logRoles", {
      enumerable: true,
      get: function() {
        return _roleHelpers.logRoles;
      }
    });
    exports.queryHelpers = exports.queries = void 0;
    Object.defineProperty(exports, "within", {
      enumerable: true,
      get: function() {
        return _getQueriesForElement.getQueriesForElement;
      }
    });
    var _getQueriesForElement = require_get_queries_for_element();
    Object.keys(_getQueriesForElement).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (Object.prototype.hasOwnProperty.call(_exportNames, key))
        return;
      if (key in exports && exports[key] === _getQueriesForElement[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _getQueriesForElement[key];
        }
      });
    });
    var queries2 = _interopRequireWildcard(require_queries());
    exports.queries = queries2;
    Object.keys(queries2).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (Object.prototype.hasOwnProperty.call(_exportNames, key))
        return;
      if (key in exports && exports[key] === queries2[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return queries2[key];
        }
      });
    });
    var queryHelpers2 = _interopRequireWildcard(require_query_helpers());
    exports.queryHelpers = queryHelpers2;
    Object.keys(queryHelpers2).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (Object.prototype.hasOwnProperty.call(_exportNames, key))
        return;
      if (key in exports && exports[key] === queryHelpers2[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return queryHelpers2[key];
        }
      });
    });
    var _waitFor = require_wait_for();
    Object.keys(_waitFor).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (Object.prototype.hasOwnProperty.call(_exportNames, key))
        return;
      if (key in exports && exports[key] === _waitFor[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _waitFor[key];
        }
      });
    });
    var _waitForElementToBeRemoved = require_wait_for_element_to_be_removed();
    Object.keys(_waitForElementToBeRemoved).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (Object.prototype.hasOwnProperty.call(_exportNames, key))
        return;
      if (key in exports && exports[key] === _waitForElementToBeRemoved[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _waitForElementToBeRemoved[key];
        }
      });
    });
    var _matches = require_matches();
    var _getNodeText = require_get_node_text();
    Object.keys(_getNodeText).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (Object.prototype.hasOwnProperty.call(_exportNames, key))
        return;
      if (key in exports && exports[key] === _getNodeText[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _getNodeText[key];
        }
      });
    });
    var _events = require_events();
    Object.keys(_events).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (Object.prototype.hasOwnProperty.call(_exportNames, key))
        return;
      if (key in exports && exports[key] === _events[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _events[key];
        }
      });
    });
    var _screen = require_screen();
    Object.keys(_screen).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (Object.prototype.hasOwnProperty.call(_exportNames, key))
        return;
      if (key in exports && exports[key] === _screen[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _screen[key];
        }
      });
    });
    var _roleHelpers = require_role_helpers();
    var _prettyDom = require_pretty_dom();
    Object.keys(_prettyDom).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (Object.prototype.hasOwnProperty.call(_exportNames, key))
        return;
      if (key in exports && exports[key] === _prettyDom[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _prettyDom[key];
        }
      });
    });
    var _config = require_config();
    var _suggestions = require_suggestions();
    Object.keys(_suggestions).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (Object.prototype.hasOwnProperty.call(_exportNames, key))
        return;
      if (key in exports && exports[key] === _suggestions[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _suggestions[key];
        }
      });
    });
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = new WeakMap();
      var cacheNodeInterop = new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
  }
});

// node_modules/@testing-library/user-event/dist/utils/click/getMouseEventOptions.js
var require_getMouseEventOptions = __commonJS({
  "node_modules/@testing-library/user-event/dist/utils/click/getMouseEventOptions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getMouseEventOptions = getMouseEventOptions;
    function isMousePressEvent(event) {
      return event === "mousedown" || event === "mouseup" || event === "click" || event === "dblclick";
    }
    var BUTTONS_NAMES = {
      none: 0,
      primary: 1,
      secondary: 2,
      auxiliary: 4
    };
    var BUTTON_NAMES = {
      primary: 0,
      auxiliary: 1,
      secondary: 2
    };
    function translateButtonNumber(value, from2) {
      var _Object$entries$find;
      const [mapIn, mapOut] = from2 === "button" ? [BUTTON_NAMES, BUTTONS_NAMES] : [BUTTONS_NAMES, BUTTON_NAMES];
      const name = (_Object$entries$find = Object.entries(mapIn).find(([, i]) => i === value)) == null ? void 0 : _Object$entries$find[0];
      return name && Object.prototype.hasOwnProperty.call(mapOut, name) ? mapOut[name] : 0;
    }
    function convertMouseButtons(event, init, property) {
      if (!isMousePressEvent(event)) {
        return 0;
      }
      if (typeof init[property] === "number") {
        return init[property];
      } else if (property === "button" && typeof init.buttons === "number") {
        return translateButtonNumber(init.buttons, "buttons");
      } else if (property === "buttons" && typeof init.button === "number") {
        return translateButtonNumber(init.button, "button");
      }
      return property != "button" && isMousePressEvent(event) ? 1 : 0;
    }
    function getMouseEventOptions(event, init, clickCount = 0) {
      var _init;
      init = (_init = init) != null ? _init : {};
      return {
        ...init,
        detail: event === "mousedown" || event === "mouseup" || event === "click" ? 1 + clickCount : clickCount,
        buttons: convertMouseButtons(event, init, "buttons"),
        button: convertMouseButtons(event, init, "button")
      };
    }
  }
});

// node_modules/@testing-library/user-event/dist/utils/misc/isElementType.js
var require_isElementType = __commonJS({
  "node_modules/@testing-library/user-event/dist/utils/misc/isElementType.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isElementType = isElementType;
    function isElementType(element, tag, props) {
      if (element.namespaceURI && element.namespaceURI !== "http://www.w3.org/1999/xhtml") {
        return false;
      }
      tag = Array.isArray(tag) ? tag : [tag];
      if (!tag.includes(element.tagName.toLowerCase())) {
        return false;
      }
      if (props) {
        return Object.entries(props).every(([k, v]) => element[k] === v);
      }
      return true;
    }
  }
});

// node_modules/@testing-library/user-event/dist/utils/click/isClickableInput.js
var require_isClickableInput = __commonJS({
  "node_modules/@testing-library/user-event/dist/utils/click/isClickableInput.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isClickableInput = isClickableInput;
    var _isElementType = require_isElementType();
    var CLICKABLE_INPUT_TYPES = ["button", "color", "file", "image", "reset", "submit", "checkbox", "radio"];
    function isClickableInput(element) {
      return (0, _isElementType.isElementType)(element, "button") || (0, _isElementType.isElementType)(element, "input") && CLICKABLE_INPUT_TYPES.includes(element.type);
    }
  }
});

// node_modules/@testing-library/user-event/dist/utils/edit/buildTimeValue.js
var require_buildTimeValue = __commonJS({
  "node_modules/@testing-library/user-event/dist/utils/edit/buildTimeValue.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.buildTimeValue = buildTimeValue;
    function buildTimeValue(value) {
      const onlyDigitsValue = value.replace(/\D/g, "");
      if (onlyDigitsValue.length < 2) {
        return value;
      }
      const firstDigit = parseInt(onlyDigitsValue[0], 10);
      const secondDigit = parseInt(onlyDigitsValue[1], 10);
      if (firstDigit >= 3 || firstDigit === 2 && secondDigit >= 4) {
        let index;
        if (firstDigit >= 3) {
          index = 1;
        } else {
          index = 2;
        }
        return build(onlyDigitsValue, index);
      }
      if (value.length === 2) {
        return value;
      }
      return build(onlyDigitsValue, 2);
    }
    function build(onlyDigitsValue, index) {
      const hours = onlyDigitsValue.slice(0, index);
      const validHours = Math.min(parseInt(hours, 10), 23);
      const minuteCharacters = onlyDigitsValue.slice(index);
      const parsedMinutes = parseInt(minuteCharacters, 10);
      const validMinutes = Math.min(parsedMinutes, 59);
      return `${validHours.toString().padStart(2, "0")}:${validMinutes.toString().padStart(2, "0")}`;
    }
  }
});

// node_modules/@testing-library/user-event/dist/utils/edit/selectionRange.js
var require_selectionRange = __commonJS({
  "node_modules/@testing-library/user-event/dist/utils/edit/selectionRange.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getSelectionRange = getSelectionRange;
    exports.hasSelectionSupport = hasSelectionSupport;
    exports.setSelectionRange = setSelectionRange;
    var _isElementType = require_isElementType();
    var selectionSupportType;
    (function(selectionSupportType2) {
      selectionSupportType2["text"] = "text";
      selectionSupportType2["search"] = "search";
      selectionSupportType2["url"] = "url";
      selectionSupportType2["tel"] = "tel";
      selectionSupportType2["password"] = "password";
    })(selectionSupportType || (selectionSupportType = {}));
    var InputSelection = Symbol("inputSelection");
    function hasSelectionSupport(element) {
      return (0, _isElementType.isElementType)(element, "textarea") || (0, _isElementType.isElementType)(element, "input") && Boolean(selectionSupportType[element.type]);
    }
    function getSelectionRange(element) {
      if (hasSelectionSupport(element)) {
        return {
          selectionStart: element.selectionStart,
          selectionEnd: element.selectionEnd
        };
      }
      if ((0, _isElementType.isElementType)(element, "input")) {
        var _InputSelection;
        return (_InputSelection = element[InputSelection]) != null ? _InputSelection : {
          selectionStart: null,
          selectionEnd: null
        };
      }
      const selection = element.ownerDocument.getSelection();
      if (selection != null && selection.rangeCount && element.contains(selection.focusNode)) {
        const range = selection.getRangeAt(0);
        return {
          selectionStart: range.startOffset,
          selectionEnd: range.endOffset
        };
      } else {
        return {
          selectionStart: null,
          selectionEnd: null
        };
      }
    }
    function setSelectionRange(element, newSelectionStart, newSelectionEnd) {
      const {
        selectionStart,
        selectionEnd
      } = getSelectionRange(element);
      if (selectionStart === newSelectionStart && selectionEnd === newSelectionEnd) {
        return;
      }
      if (hasSelectionSupport(element)) {
        element.setSelectionRange(newSelectionStart, newSelectionEnd);
      }
      if ((0, _isElementType.isElementType)(element, "input")) {
        ;
        element[InputSelection] = {
          selectionStart: newSelectionStart,
          selectionEnd: newSelectionEnd
        };
      }
      if ((0, _isElementType.isElementType)(element, "input") || (0, _isElementType.isElementType)(element, "textarea")) {
        return;
      }
      const range = element.ownerDocument.createRange();
      range.selectNodeContents(element);
      if (element.firstChild) {
        range.setStart(element.firstChild, newSelectionStart);
        range.setEnd(element.firstChild, newSelectionEnd);
      }
      const selection = element.ownerDocument.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  }
});

// node_modules/@testing-library/user-event/dist/utils/edit/isContentEditable.js
var require_isContentEditable = __commonJS({
  "node_modules/@testing-library/user-event/dist/utils/edit/isContentEditable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isContentEditable = isContentEditable;
    function isContentEditable(element) {
      return element.hasAttribute("contenteditable") && (element.getAttribute("contenteditable") == "true" || element.getAttribute("contenteditable") == "");
    }
  }
});

// node_modules/@testing-library/user-event/dist/utils/edit/getValue.js
var require_getValue = __commonJS({
  "node_modules/@testing-library/user-event/dist/utils/edit/getValue.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getValue = getValue;
    var _isContentEditable = require_isContentEditable();
    function getValue(element) {
      if (!element) {
        return null;
      }
      if ((0, _isContentEditable.isContentEditable)(element)) {
        return element.textContent;
      }
      return element.value;
    }
  }
});

// node_modules/@testing-library/user-event/dist/utils/edit/isValidDateValue.js
var require_isValidDateValue = __commonJS({
  "node_modules/@testing-library/user-event/dist/utils/edit/isValidDateValue.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isValidDateValue = isValidDateValue;
    function isValidDateValue(element, value) {
      const clone = element.cloneNode();
      clone.value = value;
      return clone.value === value;
    }
  }
});

// node_modules/@testing-library/user-event/dist/utils/edit/isValidInputTimeValue.js
var require_isValidInputTimeValue = __commonJS({
  "node_modules/@testing-library/user-event/dist/utils/edit/isValidInputTimeValue.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isValidInputTimeValue = isValidInputTimeValue;
    function isValidInputTimeValue(element, timeValue) {
      const clone = element.cloneNode();
      clone.value = timeValue;
      return clone.value === timeValue;
    }
  }
});

// node_modules/@testing-library/user-event/dist/utils/edit/calculateNewValue.js
var require_calculateNewValue = __commonJS({
  "node_modules/@testing-library/user-event/dist/utils/edit/calculateNewValue.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.calculateNewValue = calculateNewValue;
    var _selectionRange = require_selectionRange();
    var _getValue2 = require_getValue();
    var _isValidDateValue = require_isValidDateValue();
    var _isValidInputTimeValue = require_isValidInputTimeValue();
    function calculateNewValue(newEntry, element, value = (() => {
      var _getValue;
      return (_getValue = (0, _getValue2.getValue)(element)) != null ? _getValue : "";
    })(), selectionRange = (0, _selectionRange.getSelectionRange)(element), deleteContent) {
      const selectionStart = selectionRange.selectionStart === null ? value.length : selectionRange.selectionStart;
      const selectionEnd = selectionRange.selectionEnd === null ? value.length : selectionRange.selectionEnd;
      const prologEnd = Math.max(0, selectionStart === selectionEnd && deleteContent === "backward" ? selectionStart - 1 : selectionStart);
      const prolog = value.substring(0, prologEnd);
      const epilogStart = Math.min(value.length, selectionStart === selectionEnd && deleteContent === "forward" ? selectionEnd + 1 : selectionEnd);
      const epilog = value.substring(epilogStart, value.length);
      let newValue = `${prolog}${newEntry}${epilog}`;
      const newSelectionStart = prologEnd + newEntry.length;
      if (element.type === "date" && !(0, _isValidDateValue.isValidDateValue)(element, newValue)) {
        newValue = value;
      }
      if (element.type === "time" && !(0, _isValidInputTimeValue.isValidInputTimeValue)(element, newValue)) {
        if ((0, _isValidInputTimeValue.isValidInputTimeValue)(element, newEntry)) {
          newValue = newEntry;
        } else {
          newValue = value;
        }
      }
      return {
        newValue,
        newSelectionStart
      };
    }
  }
});

// node_modules/@testing-library/user-event/dist/utils/edit/cursorPosition.js
var require_cursorPosition = __commonJS({
  "node_modules/@testing-library/user-event/dist/utils/edit/cursorPosition.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isCursorAtEnd = isCursorAtEnd;
    exports.isCursorAtStart = isCursorAtStart;
    var _selectionRange = require_selectionRange();
    var _getValue2 = require_getValue();
    function isCursorAtEnd(element) {
      var _getValue;
      const {
        selectionStart,
        selectionEnd
      } = (0, _selectionRange.getSelectionRange)(element);
      return selectionStart === selectionEnd && (selectionStart != null ? selectionStart : 0) === ((_getValue = (0, _getValue2.getValue)(element)) != null ? _getValue : "").length;
    }
    function isCursorAtStart(element) {
      const {
        selectionStart,
        selectionEnd
      } = (0, _selectionRange.getSelectionRange)(element);
      return selectionStart === selectionEnd && (selectionStart != null ? selectionStart : 0) === 0;
    }
  }
});

// node_modules/@testing-library/user-event/dist/utils/edit/hasUnreliableEmptyValue.js
var require_hasUnreliableEmptyValue = __commonJS({
  "node_modules/@testing-library/user-event/dist/utils/edit/hasUnreliableEmptyValue.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.hasUnreliableEmptyValue = hasUnreliableEmptyValue;
    var _isElementType = require_isElementType();
    var unreliableValueInputTypes;
    (function(unreliableValueInputTypes2) {
      unreliableValueInputTypes2["number"] = "number";
    })(unreliableValueInputTypes || (unreliableValueInputTypes = {}));
    function hasUnreliableEmptyValue(element) {
      return (0, _isElementType.isElementType)(element, "input") && Boolean(unreliableValueInputTypes[element.type]);
    }
  }
});

// node_modules/@testing-library/user-event/dist/utils/edit/isEditable.js
var require_isEditable = __commonJS({
  "node_modules/@testing-library/user-event/dist/utils/edit/isEditable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.editableInputTypes = void 0;
    exports.isEditable = isEditable;
    exports.isEditableInput = isEditableInput;
    var _isElementType = require_isElementType();
    var _isContentEditable = require_isContentEditable();
    function isEditable(element) {
      return isEditableInput(element) || (0, _isElementType.isElementType)(element, "textarea", {
        readOnly: false
      }) || (0, _isContentEditable.isContentEditable)(element);
    }
    var editableInputTypes;
    exports.editableInputTypes = editableInputTypes;
    (function(editableInputTypes2) {
      editableInputTypes2["text"] = "text";
      editableInputTypes2["date"] = "date";
      editableInputTypes2["datetime-local"] = "datetime-local";
      editableInputTypes2["email"] = "email";
      editableInputTypes2["month"] = "month";
      editableInputTypes2["number"] = "number";
      editableInputTypes2["password"] = "password";
      editableInputTypes2["search"] = "search";
      editableInputTypes2["tel"] = "tel";
      editableInputTypes2["time"] = "time";
      editableInputTypes2["url"] = "url";
      editableInputTypes2["week"] = "week";
    })(editableInputTypes || (exports.editableInputTypes = editableInputTypes = {}));
    function isEditableInput(element) {
      return (0, _isElementType.isElementType)(element, "input", {
        readOnly: false
      }) && Boolean(editableInputTypes[element.type]);
    }
  }
});

// node_modules/@testing-library/user-event/dist/utils/edit/maxLength.js
var require_maxLength = __commonJS({
  "node_modules/@testing-library/user-event/dist/utils/edit/maxLength.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getSpaceUntilMaxLength = getSpaceUntilMaxLength;
    var _isElementType = require_isElementType();
    var _getValue = require_getValue();
    var maxLengthSupportedTypes;
    (function(maxLengthSupportedTypes2) {
      maxLengthSupportedTypes2["email"] = "email";
      maxLengthSupportedTypes2["password"] = "password";
      maxLengthSupportedTypes2["search"] = "search";
      maxLengthSupportedTypes2["telephone"] = "telephone";
      maxLengthSupportedTypes2["text"] = "text";
      maxLengthSupportedTypes2["url"] = "url";
    })(maxLengthSupportedTypes || (maxLengthSupportedTypes = {}));
    function getSpaceUntilMaxLength(element) {
      const value = (0, _getValue.getValue)(element);
      if (value === null) {
        return void 0;
      }
      const maxLength = getSanitizedMaxLength(element);
      return maxLength ? maxLength - value.length : void 0;
    }
    function getSanitizedMaxLength(element) {
      var _element$getAttribute;
      if (!supportsMaxLength(element)) {
        return void 0;
      }
      const attr = (_element$getAttribute = element.getAttribute("maxlength")) != null ? _element$getAttribute : "";
      return /^\d+$/.test(attr) && Number(attr) >= 0 ? Number(attr) : void 0;
    }
    function supportsMaxLength(element) {
      return (0, _isElementType.isElementType)(element, "textarea") || (0, _isElementType.isElementType)(element, "input") && Boolean(maxLengthSupportedTypes[element.type]);
    }
  }
});

// node_modules/@testing-library/user-event/dist/utils/misc/isDisabled.js
var require_isDisabled = __commonJS({
  "node_modules/@testing-library/user-event/dist/utils/misc/isDisabled.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isDisabled = isDisabled;
    function isDisabled(element) {
      return Boolean(element && element.disabled);
    }
  }
});

// node_modules/@testing-library/user-event/dist/utils/focus/getActiveElement.js
var require_getActiveElement = __commonJS({
  "node_modules/@testing-library/user-event/dist/utils/focus/getActiveElement.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getActiveElement = getActiveElement;
    var _isDisabled = require_isDisabled();
    function getActiveElement(document2) {
      const activeElement = document2.activeElement;
      if (activeElement != null && activeElement.shadowRoot) {
        return getActiveElement(activeElement.shadowRoot);
      } else {
        if ((0, _isDisabled.isDisabled)(activeElement)) {
          return document2.ownerDocument ? document2.ownerDocument.body : document2.body;
        }
        return activeElement;
      }
    }
  }
});

// node_modules/@testing-library/user-event/dist/utils/misc/isLabelWithInternallyDisabledControl.js
var require_isLabelWithInternallyDisabledControl = __commonJS({
  "node_modules/@testing-library/user-event/dist/utils/misc/isLabelWithInternallyDisabledControl.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isLabelWithInternallyDisabledControl = isLabelWithInternallyDisabledControl;
    var _isDisabled = require_isDisabled();
    var _isElementType = require_isElementType();
    function isLabelWithInternallyDisabledControl(element) {
      if (!(0, _isElementType.isElementType)(element, "label")) {
        return false;
      }
      const control = element.control;
      return Boolean(control && element.contains(control) && (0, _isDisabled.isDisabled)(control));
    }
  }
});

// node_modules/@testing-library/user-event/dist/utils/focus/selector.js
var require_selector = __commonJS({
  "node_modules/@testing-library/user-event/dist/utils/focus/selector.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.FOCUSABLE_SELECTOR = void 0;
    var FOCUSABLE_SELECTOR = ["input:not([type=hidden]):not([disabled])", "button:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", '[contenteditable=""]', '[contenteditable="true"]', "a[href]", "[tabindex]:not([disabled])"].join(", ");
    exports.FOCUSABLE_SELECTOR = FOCUSABLE_SELECTOR;
  }
});

// node_modules/@testing-library/user-event/dist/utils/focus/isFocusable.js
var require_isFocusable = __commonJS({
  "node_modules/@testing-library/user-event/dist/utils/focus/isFocusable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isFocusable = isFocusable;
    var _isLabelWithInternallyDisabledControl = require_isLabelWithInternallyDisabledControl();
    var _selector = require_selector();
    function isFocusable(element) {
      return !(0, _isLabelWithInternallyDisabledControl.isLabelWithInternallyDisabledControl)(element) && element.matches(_selector.FOCUSABLE_SELECTOR);
    }
  }
});

// node_modules/@testing-library/user-event/dist/utils/misc/eventWrapper.js
var require_eventWrapper = __commonJS({
  "node_modules/@testing-library/user-event/dist/utils/misc/eventWrapper.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.eventWrapper = eventWrapper;
    var _dom = require_dist2();
    function eventWrapper(cb) {
      let result;
      (0, _dom.getConfig)().eventWrapper(() => {
        result = cb();
      });
      return result;
    }
  }
});

// node_modules/@testing-library/user-event/dist/utils/misc/isVisible.js
var require_isVisible = __commonJS({
  "node_modules/@testing-library/user-event/dist/utils/misc/isVisible.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isVisible = isVisible;
    var _helpers = require_helpers();
    function isVisible(element) {
      const window2 = (0, _helpers.getWindowFromNode)(element);
      for (let el = element; (_el = el) != null && _el.ownerDocument; el = el.parentElement) {
        var _el;
        const display = window2.getComputedStyle(el).display;
        if (display === "none") {
          return false;
        }
      }
      return true;
    }
  }
});

// node_modules/@testing-library/user-event/dist/utils/misc/isDocument.js
var require_isDocument = __commonJS({
  "node_modules/@testing-library/user-event/dist/utils/misc/isDocument.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isDocument = isDocument;
    function isDocument(el) {
      return el.nodeType === el.DOCUMENT_NODE;
    }
  }
});

// node_modules/@testing-library/user-event/dist/utils/misc/wait.js
var require_wait = __commonJS({
  "node_modules/@testing-library/user-event/dist/utils/misc/wait.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.wait = wait;
    function wait(time) {
      return new Promise((resolve) => setTimeout(() => resolve(), time));
    }
  }
});

// node_modules/@testing-library/user-event/dist/utils/misc/hasPointerEvents.js
var require_hasPointerEvents = __commonJS({
  "node_modules/@testing-library/user-event/dist/utils/misc/hasPointerEvents.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.hasPointerEvents = hasPointerEvents;
    var _helpers = require_helpers();
    function hasPointerEvents(element) {
      const window2 = (0, _helpers.getWindowFromNode)(element);
      for (let el = element; (_el = el) != null && _el.ownerDocument; el = el.parentElement) {
        var _el;
        const pointerEvents = window2.getComputedStyle(el).pointerEvents;
        if (pointerEvents && !["inherit", "unset"].includes(pointerEvents)) {
          return pointerEvents !== "none";
        }
      }
      return true;
    }
  }
});

// node_modules/@testing-library/user-event/dist/utils/misc/hasFormSubmit.js
var require_hasFormSubmit = __commonJS({
  "node_modules/@testing-library/user-event/dist/utils/misc/hasFormSubmit.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.hasFormSubmit = void 0;
    var hasFormSubmit = (form) => !!(form && (form.querySelector('input[type="submit"]') || form.querySelector('button[type="submit"]')));
    exports.hasFormSubmit = hasFormSubmit;
  }
});

// node_modules/@testing-library/user-event/dist/utils/index.js
var require_utils = __commonJS({
  "node_modules/@testing-library/user-event/dist/utils/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _getMouseEventOptions = require_getMouseEventOptions();
    Object.keys(_getMouseEventOptions).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _getMouseEventOptions[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _getMouseEventOptions[key];
        }
      });
    });
    var _isClickableInput = require_isClickableInput();
    Object.keys(_isClickableInput).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _isClickableInput[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _isClickableInput[key];
        }
      });
    });
    var _buildTimeValue = require_buildTimeValue();
    Object.keys(_buildTimeValue).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _buildTimeValue[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _buildTimeValue[key];
        }
      });
    });
    var _calculateNewValue = require_calculateNewValue();
    Object.keys(_calculateNewValue).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _calculateNewValue[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _calculateNewValue[key];
        }
      });
    });
    var _cursorPosition = require_cursorPosition();
    Object.keys(_cursorPosition).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _cursorPosition[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _cursorPosition[key];
        }
      });
    });
    var _getValue = require_getValue();
    Object.keys(_getValue).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _getValue[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _getValue[key];
        }
      });
    });
    var _hasUnreliableEmptyValue = require_hasUnreliableEmptyValue();
    Object.keys(_hasUnreliableEmptyValue).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _hasUnreliableEmptyValue[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _hasUnreliableEmptyValue[key];
        }
      });
    });
    var _isContentEditable = require_isContentEditable();
    Object.keys(_isContentEditable).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _isContentEditable[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _isContentEditable[key];
        }
      });
    });
    var _isEditable = require_isEditable();
    Object.keys(_isEditable).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _isEditable[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _isEditable[key];
        }
      });
    });
    var _isValidDateValue = require_isValidDateValue();
    Object.keys(_isValidDateValue).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _isValidDateValue[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _isValidDateValue[key];
        }
      });
    });
    var _isValidInputTimeValue = require_isValidInputTimeValue();
    Object.keys(_isValidInputTimeValue).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _isValidInputTimeValue[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _isValidInputTimeValue[key];
        }
      });
    });
    var _maxLength = require_maxLength();
    Object.keys(_maxLength).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _maxLength[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _maxLength[key];
        }
      });
    });
    var _selectionRange = require_selectionRange();
    Object.keys(_selectionRange).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _selectionRange[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _selectionRange[key];
        }
      });
    });
    var _getActiveElement = require_getActiveElement();
    Object.keys(_getActiveElement).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _getActiveElement[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _getActiveElement[key];
        }
      });
    });
    var _isFocusable = require_isFocusable();
    Object.keys(_isFocusable).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _isFocusable[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _isFocusable[key];
        }
      });
    });
    var _selector = require_selector();
    Object.keys(_selector).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _selector[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _selector[key];
        }
      });
    });
    var _eventWrapper = require_eventWrapper();
    Object.keys(_eventWrapper).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _eventWrapper[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _eventWrapper[key];
        }
      });
    });
    var _isElementType = require_isElementType();
    Object.keys(_isElementType).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _isElementType[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _isElementType[key];
        }
      });
    });
    var _isLabelWithInternallyDisabledControl = require_isLabelWithInternallyDisabledControl();
    Object.keys(_isLabelWithInternallyDisabledControl).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _isLabelWithInternallyDisabledControl[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _isLabelWithInternallyDisabledControl[key];
        }
      });
    });
    var _isVisible = require_isVisible();
    Object.keys(_isVisible).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _isVisible[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _isVisible[key];
        }
      });
    });
    var _isDisabled = require_isDisabled();
    Object.keys(_isDisabled).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _isDisabled[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _isDisabled[key];
        }
      });
    });
    var _isDocument = require_isDocument();
    Object.keys(_isDocument).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _isDocument[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _isDocument[key];
        }
      });
    });
    var _wait = require_wait();
    Object.keys(_wait).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _wait[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _wait[key];
        }
      });
    });
    var _hasPointerEvents = require_hasPointerEvents();
    Object.keys(_hasPointerEvents).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _hasPointerEvents[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _hasPointerEvents[key];
        }
      });
    });
    var _hasFormSubmit = require_hasFormSubmit();
    Object.keys(_hasFormSubmit).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _hasFormSubmit[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _hasFormSubmit[key];
        }
      });
    });
  }
});

// node_modules/@testing-library/user-event/dist/hover.js
var require_hover = __commonJS({
  "node_modules/@testing-library/user-event/dist/hover.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.hover = hover;
    exports.unhover = unhover;
    var _dom = require_dist2();
    var _utils = require_utils();
    function getParentElements(element) {
      const parentElements = [element];
      let currentElement = element;
      while ((currentElement = currentElement.parentElement) != null) {
        parentElements.push(currentElement);
      }
      return parentElements;
    }
    function hover(element, init, {
      skipPointerEventsCheck = false
    } = {}) {
      if (!skipPointerEventsCheck && !(0, _utils.hasPointerEvents)(element)) {
        throw new Error('unable to hover element as it has or inherits pointer-events set to "none".');
      }
      if ((0, _utils.isLabelWithInternallyDisabledControl)(element))
        return;
      const parentElements = getParentElements(element).reverse();
      _dom.fireEvent.pointerOver(element, init);
      for (const el of parentElements) {
        _dom.fireEvent.pointerEnter(el, init);
      }
      if (!(0, _utils.isDisabled)(element)) {
        _dom.fireEvent.mouseOver(element, (0, _utils.getMouseEventOptions)("mouseover", init));
        for (const el of parentElements) {
          _dom.fireEvent.mouseEnter(el, (0, _utils.getMouseEventOptions)("mouseenter", init));
        }
      }
      _dom.fireEvent.pointerMove(element, init);
      if (!(0, _utils.isDisabled)(element)) {
        _dom.fireEvent.mouseMove(element, (0, _utils.getMouseEventOptions)("mousemove", init));
      }
    }
    function unhover(element, init, {
      skipPointerEventsCheck = false
    } = {}) {
      if (!skipPointerEventsCheck && !(0, _utils.hasPointerEvents)(element)) {
        throw new Error('unable to unhover element as it has or inherits pointer-events set to "none".');
      }
      if ((0, _utils.isLabelWithInternallyDisabledControl)(element))
        return;
      const parentElements = getParentElements(element);
      _dom.fireEvent.pointerMove(element, init);
      if (!(0, _utils.isDisabled)(element)) {
        _dom.fireEvent.mouseMove(element, (0, _utils.getMouseEventOptions)("mousemove", init));
      }
      _dom.fireEvent.pointerOut(element, init);
      for (const el of parentElements) {
        _dom.fireEvent.pointerLeave(el, init);
      }
      if (!(0, _utils.isDisabled)(element)) {
        _dom.fireEvent.mouseOut(element, (0, _utils.getMouseEventOptions)("mouseout", init));
        for (const el of parentElements) {
          _dom.fireEvent.mouseLeave(el, (0, _utils.getMouseEventOptions)("mouseleave", init));
        }
      }
    }
  }
});

// node_modules/@testing-library/user-event/dist/blur.js
var require_blur = __commonJS({
  "node_modules/@testing-library/user-event/dist/blur.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.blur = blur;
    var _utils = require_utils();
    function blur(element) {
      if (!(0, _utils.isFocusable)(element))
        return;
      const wasActive = (0, _utils.getActiveElement)(element.ownerDocument) === element;
      if (!wasActive)
        return;
      (0, _utils.eventWrapper)(() => element.blur());
    }
  }
});

// node_modules/@testing-library/user-event/dist/focus.js
var require_focus = __commonJS({
  "node_modules/@testing-library/user-event/dist/focus.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.focus = focus;
    var _utils = require_utils();
    function focus(element) {
      if (!(0, _utils.isFocusable)(element))
        return;
      const isAlreadyActive = (0, _utils.getActiveElement)(element.ownerDocument) === element;
      if (isAlreadyActive)
        return;
      (0, _utils.eventWrapper)(() => element.focus());
    }
  }
});

// node_modules/@testing-library/user-event/dist/click.js
var require_click = __commonJS({
  "node_modules/@testing-library/user-event/dist/click.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.click = click;
    exports.dblClick = dblClick;
    var _dom = require_dist2();
    var _utils = require_utils();
    var _hover = require_hover();
    var _blur = require_blur();
    var _focus = require_focus();
    function getPreviouslyFocusedElement(element) {
      const focusedElement = element.ownerDocument.activeElement;
      const wasAnotherElementFocused = focusedElement && focusedElement !== element.ownerDocument.body && focusedElement !== element;
      return wasAnotherElementFocused ? focusedElement : null;
    }
    function clickLabel(label, init, {
      clickCount
    }) {
      if ((0, _utils.isLabelWithInternallyDisabledControl)(label))
        return;
      _dom.fireEvent.pointerDown(label, init);
      _dom.fireEvent.mouseDown(label, (0, _utils.getMouseEventOptions)("mousedown", init, clickCount));
      _dom.fireEvent.pointerUp(label, init);
      _dom.fireEvent.mouseUp(label, (0, _utils.getMouseEventOptions)("mouseup", init, clickCount));
      fireClick(label, (0, _utils.getMouseEventOptions)("click", init, clickCount));
      if (label.control)
        (0, _focus.focus)(label.control);
    }
    function clickBooleanElement(element, init, {
      clickCount
    }) {
      _dom.fireEvent.pointerDown(element, init);
      if (!element.disabled) {
        _dom.fireEvent.mouseDown(element, (0, _utils.getMouseEventOptions)("mousedown", init, clickCount));
      }
      (0, _focus.focus)(element);
      _dom.fireEvent.pointerUp(element, init);
      if (!element.disabled) {
        _dom.fireEvent.mouseUp(element, (0, _utils.getMouseEventOptions)("mouseup", init, clickCount));
        fireClick(element, (0, _utils.getMouseEventOptions)("click", init, clickCount));
      }
    }
    function clickElement(element, init, {
      clickCount
    }) {
      const previousElement = getPreviouslyFocusedElement(element);
      _dom.fireEvent.pointerDown(element, init);
      if (!(0, _utils.isDisabled)(element)) {
        const continueDefaultHandling = _dom.fireEvent.mouseDown(element, (0, _utils.getMouseEventOptions)("mousedown", init, clickCount));
        if (continueDefaultHandling) {
          const closestFocusable = findClosest(element, _utils.isFocusable);
          if (previousElement && !closestFocusable) {
            (0, _blur.blur)(previousElement);
          } else if (closestFocusable) {
            (0, _focus.focus)(closestFocusable);
          }
        }
      }
      _dom.fireEvent.pointerUp(element, init);
      if (!(0, _utils.isDisabled)(element)) {
        _dom.fireEvent.mouseUp(element, (0, _utils.getMouseEventOptions)("mouseup", init, clickCount));
        fireClick(element, (0, _utils.getMouseEventOptions)("click", init, clickCount));
        const parentLabel = element.closest("label");
        if (parentLabel != null && parentLabel.control)
          (0, _focus.focus)(parentLabel.control);
      }
    }
    function findClosest(element, callback) {
      let el = element;
      do {
        if (callback(el)) {
          return el;
        }
        el = el.parentElement;
      } while (el && el !== element.ownerDocument.body);
      return void 0;
    }
    function click(element, init, {
      skipHover = false,
      clickCount = 0,
      skipPointerEventsCheck = false
    } = {}) {
      if (!skipPointerEventsCheck && !(0, _utils.hasPointerEvents)(element)) {
        throw new Error('unable to click element as it has or inherits pointer-events set to "none".');
      }
      if (!skipHover)
        (0, _hover.hover)(element, init, {
          skipPointerEventsCheck: true
        });
      if ((0, _utils.isElementType)(element, "label")) {
        clickLabel(element, init, {
          clickCount
        });
      } else if ((0, _utils.isElementType)(element, "input")) {
        if (element.type === "checkbox" || element.type === "radio") {
          clickBooleanElement(element, init, {
            clickCount
          });
        } else {
          clickElement(element, init, {
            clickCount
          });
        }
      } else {
        clickElement(element, init, {
          clickCount
        });
      }
    }
    function fireClick(element, mouseEventOptions) {
      if (mouseEventOptions.button === 2) {
        _dom.fireEvent.contextMenu(element, mouseEventOptions);
      } else {
        _dom.fireEvent.click(element, mouseEventOptions);
      }
    }
    function dblClick(element, init, {
      skipPointerEventsCheck = false
    } = {}) {
      if (!skipPointerEventsCheck && !(0, _utils.hasPointerEvents)(element)) {
        throw new Error('unable to double-click element as it has or inherits pointer-events set to "none".');
      }
      (0, _hover.hover)(element, init, {
        skipPointerEventsCheck
      });
      click(element, init, {
        skipHover: true,
        clickCount: 0,
        skipPointerEventsCheck
      });
      click(element, init, {
        skipHover: true,
        clickCount: 1,
        skipPointerEventsCheck
      });
      _dom.fireEvent.dblClick(element, (0, _utils.getMouseEventOptions)("dblclick", init, 2));
    }
  }
});

// node_modules/@testing-library/user-event/dist/keyboard/getNextKeyDef.js
var require_getNextKeyDef = __commonJS({
  "node_modules/@testing-library/user-event/dist/keyboard/getNextKeyDef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getNextKeyDef = getNextKeyDef;
    var bracketDict;
    (function(bracketDict2) {
      bracketDict2["{"] = "}";
      bracketDict2["["] = "]";
    })(bracketDict || (bracketDict = {}));
    var legacyModifiers;
    (function(legacyModifiers2) {
      legacyModifiers2["alt"] = "alt";
      legacyModifiers2["ctrl"] = "ctrl";
      legacyModifiers2["meta"] = "meta";
      legacyModifiers2["shift"] = "shift";
    })(legacyModifiers || (legacyModifiers = {}));
    var legacyKeyMap;
    (function(legacyKeyMap2) {
      legacyKeyMap2["ctrl"] = "Control";
      legacyKeyMap2["del"] = "Delete";
      legacyKeyMap2["esc"] = "Escape";
      legacyKeyMap2["space"] = " ";
    })(legacyKeyMap || (legacyKeyMap = {}));
    function getNextKeyDef(text, options) {
      var _options$keyboardMap$;
      const {
        type,
        descriptor,
        consumedLength,
        releasePrevious,
        releaseSelf,
        repeat
      } = readNextDescriptor(text);
      const keyDef = (_options$keyboardMap$ = options.keyboardMap.find((def) => {
        if (type === "[") {
          var _def$code;
          return ((_def$code = def.code) == null ? void 0 : _def$code.toLowerCase()) === descriptor.toLowerCase();
        } else if (type === "{") {
          var _def$key;
          const key = mapLegacyKey(descriptor);
          return ((_def$key = def.key) == null ? void 0 : _def$key.toLowerCase()) === key.toLowerCase();
        }
        return def.key === descriptor;
      })) != null ? _options$keyboardMap$ : {
        key: "Unknown",
        code: "Unknown",
        [type === "[" ? "code" : "key"]: descriptor
      };
      return {
        keyDef,
        consumedLength,
        releasePrevious,
        releaseSelf,
        repeat
      };
    }
    function readNextDescriptor(text) {
      let pos = 0;
      const startBracket = text[pos] in bracketDict ? text[pos] : "";
      pos += startBracket.length;
      const startBracketRepeated = startBracket ? text.match(new RegExp(`^\\${startBracket}+`))[0].length : 0;
      const isEscapedChar = startBracketRepeated === 2 || startBracket === "{" && startBracketRepeated > 3;
      const type = isEscapedChar ? "" : startBracket;
      return {
        type,
        ...type === "" ? readPrintableChar(text, pos) : readTag(text, pos, type)
      };
    }
    function readPrintableChar(text, pos) {
      const descriptor = text[pos];
      assertDescriptor(descriptor, text, pos);
      pos += descriptor.length;
      return {
        consumedLength: pos,
        descriptor,
        releasePrevious: false,
        releaseSelf: true,
        repeat: 1
      };
    }
    function readTag(text, pos, startBracket) {
      var _text$slice$match, _text$slice$match$, _text$slice$match2;
      const releasePreviousModifier = text[pos] === "/" ? "/" : "";
      pos += releasePreviousModifier.length;
      const descriptor = (_text$slice$match = text.slice(pos).match(/^\w+/)) == null ? void 0 : _text$slice$match[0];
      assertDescriptor(descriptor, text, pos);
      pos += descriptor.length;
      const repeatModifier = (_text$slice$match$ = (_text$slice$match2 = text.slice(pos).match(/^>\d+/)) == null ? void 0 : _text$slice$match2[0]) != null ? _text$slice$match$ : "";
      pos += repeatModifier.length;
      const releaseSelfModifier = text[pos] === "/" || !repeatModifier && text[pos] === ">" ? text[pos] : "";
      pos += releaseSelfModifier.length;
      const expectedEndBracket = bracketDict[startBracket];
      const endBracket = text[pos] === expectedEndBracket ? expectedEndBracket : "";
      if (!endBracket) {
        throw new Error(getErrorMessage([!repeatModifier && "repeat modifier", !releaseSelfModifier && "release modifier", `"${expectedEndBracket}"`].filter(Boolean).join(" or "), text[pos], text));
      }
      pos += endBracket.length;
      return {
        consumedLength: pos,
        descriptor,
        releasePrevious: !!releasePreviousModifier,
        repeat: repeatModifier ? Math.max(Number(repeatModifier.substr(1)), 1) : 1,
        releaseSelf: hasReleaseSelf(startBracket, descriptor, releaseSelfModifier, repeatModifier)
      };
    }
    function assertDescriptor(descriptor, text, pos) {
      if (!descriptor) {
        throw new Error(getErrorMessage("key descriptor", text[pos], text));
      }
    }
    function getEnumValue(f, key) {
      return f[key];
    }
    function hasReleaseSelf(startBracket, descriptor, releaseSelfModifier, repeatModifier) {
      if (releaseSelfModifier) {
        return releaseSelfModifier === "/";
      }
      if (repeatModifier) {
        return false;
      }
      if (startBracket === "{" && getEnumValue(legacyModifiers, descriptor.toLowerCase())) {
        return false;
      }
      return true;
    }
    function mapLegacyKey(descriptor) {
      var _getEnumValue;
      return (_getEnumValue = getEnumValue(legacyKeyMap, descriptor)) != null ? _getEnumValue : descriptor;
    }
    function getErrorMessage(expected, found, text) {
      return `Expected ${expected} but found "${found != null ? found : ""}" in "${text}"
    See https://github.com/testing-library/user-event/blob/main/README.md#keyboardtext-options
    for more information about how userEvent parses your input.`;
    }
  }
});

// node_modules/@testing-library/user-event/dist/keyboard/plugins/arrow.js
var require_arrow = __commonJS({
  "node_modules/@testing-library/user-event/dist/keyboard/plugins/arrow.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.keydownBehavior = void 0;
    var _utils = require_utils();
    var keydownBehavior = [{
      matches: (keyDef, element) => (keyDef.key === "ArrowLeft" || keyDef.key === "ArrowRight") && (0, _utils.isElementType)(element, ["input", "textarea"]),
      handle: (keyDef, element) => {
        var _ref;
        const {
          selectionStart,
          selectionEnd
        } = (0, _utils.getSelectionRange)(element);
        const direction = keyDef.key === "ArrowLeft" ? -1 : 1;
        const newPos = (_ref = selectionStart === selectionEnd ? (selectionStart != null ? selectionStart : 0) + direction : direction < 0 ? selectionStart : selectionEnd) != null ? _ref : 0;
        (0, _utils.setSelectionRange)(element, newPos, newPos);
      }
    }];
    exports.keydownBehavior = keydownBehavior;
  }
});

// node_modules/@testing-library/user-event/dist/keyboard/shared/carryValue.js
var require_carryValue = __commonJS({
  "node_modules/@testing-library/user-event/dist/keyboard/shared/carryValue.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.carryValue = carryValue;
    var _utils = require_utils();
    function carryValue(element, state, newValue) {
      const value = (0, _utils.getValue)(element);
      state.carryValue = value !== newValue && value === "" && (0, _utils.hasUnreliableEmptyValue)(element) ? newValue : void 0;
    }
  }
});

// node_modules/@testing-library/user-event/dist/keyboard/shared/fireChangeForInputTimeIfValid.js
var require_fireChangeForInputTimeIfValid = __commonJS({
  "node_modules/@testing-library/user-event/dist/keyboard/shared/fireChangeForInputTimeIfValid.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.fireChangeForInputTimeIfValid = fireChangeForInputTimeIfValid;
    var _dom = require_dist2();
    var _utils = require_utils();
    function fireChangeForInputTimeIfValid(el, prevValue, timeNewEntry) {
      if ((0, _utils.isValidInputTimeValue)(el, timeNewEntry) && prevValue !== timeNewEntry) {
        _dom.fireEvent.change(el, {
          target: {
            value: timeNewEntry
          }
        });
      }
    }
  }
});

// node_modules/@testing-library/user-event/dist/keyboard/shared/fireInputEvent.js
var require_fireInputEvent = __commonJS({
  "node_modules/@testing-library/user-event/dist/keyboard/shared/fireInputEvent.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.fireInputEvent = fireInputEvent;
    var _dom = require_dist2();
    var _utils = require_utils();
    function fireInputEvent(element, {
      newValue,
      newSelectionStart,
      eventOverrides
    }) {
      if ((0, _utils.isContentEditable)(element)) {
        applyNative(element, "textContent", newValue);
      } else if ((0, _utils.isElementType)(element, ["input", "textarea"])) {
        applyNative(element, "value", newValue);
      } else {
        throw new Error("Invalid Element");
      }
      setSelectionRangeAfterInput(element, newSelectionStart);
      _dom.fireEvent.input(element, {
        ...eventOverrides
      });
      setSelectionRangeAfterInputHandler(element, newValue, newSelectionStart);
    }
    function setSelectionRangeAfterInput(element, newSelectionStart) {
      (0, _utils.setSelectionRange)(element, newSelectionStart, newSelectionStart);
    }
    function setSelectionRangeAfterInputHandler(element, newValue, newSelectionStart) {
      const value = (0, _utils.getValue)(element);
      const isUnreliableValue = value === "" && (0, _utils.hasUnreliableEmptyValue)(element);
      if (!isUnreliableValue && value === newValue) {
        const {
          selectionStart
        } = (0, _utils.getSelectionRange)(element);
        if (selectionStart === value.length) {
          (0, _utils.setSelectionRange)(element, newSelectionStart, newSelectionStart);
        }
      }
    }
    var initial = Symbol("initial input value/textContent");
    var onBlur = Symbol("onBlur");
    function applyNative(element, propName, propValue) {
      const descriptor = Object.getOwnPropertyDescriptor(element, propName);
      const nativeDescriptor = Object.getOwnPropertyDescriptor(element.constructor.prototype, propName);
      if (descriptor && nativeDescriptor) {
        Object.defineProperty(element, propName, nativeDescriptor);
      }
      if (element[initial] === void 0) {
        element[initial] = String(element[propName]);
      }
      element[propName] = propValue;
      if (!element[onBlur]) {
        var _element$ownerDocumen;
        (_element$ownerDocumen = element.ownerDocument.defaultView) == null ? void 0 : _element$ownerDocumen.addEventListener("blur", element[onBlur] = () => {
          const initV = element[initial];
          delete element[onBlur];
          delete element[initial];
          if (String(element[propName]) !== initV) {
            _dom.fireEvent.change(element);
          }
        }, {
          capture: true,
          once: true
        });
      }
      if (descriptor) {
        Object.defineProperty(element, propName, descriptor);
      }
    }
  }
});

// node_modules/@testing-library/user-event/dist/keyboard/shared/index.js
var require_shared2 = __commonJS({
  "node_modules/@testing-library/user-event/dist/keyboard/shared/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _carryValue = require_carryValue();
    Object.keys(_carryValue).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _carryValue[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _carryValue[key];
        }
      });
    });
    var _fireChangeForInputTimeIfValid = require_fireChangeForInputTimeIfValid();
    Object.keys(_fireChangeForInputTimeIfValid).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _fireChangeForInputTimeIfValid[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _fireChangeForInputTimeIfValid[key];
        }
      });
    });
    var _fireInputEvent = require_fireInputEvent();
    Object.keys(_fireInputEvent).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _fireInputEvent[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _fireInputEvent[key];
        }
      });
    });
  }
});

// node_modules/@testing-library/user-event/dist/keyboard/plugins/control.js
var require_control = __commonJS({
  "node_modules/@testing-library/user-event/dist/keyboard/plugins/control.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.keydownBehavior = void 0;
    var _utils = require_utils();
    var _shared = require_shared2();
    var keydownBehavior = [{
      matches: (keyDef, element) => (keyDef.key === "Home" || keyDef.key === "End") && ((0, _utils.isElementType)(element, ["input", "textarea"]) || (0, _utils.isContentEditable)(element)),
      handle: (keyDef, element) => {
        if (keyDef.key === "Home") {
          (0, _utils.setSelectionRange)(element, 0, 0);
        } else {
          var _getValue$length, _getValue;
          const newPos = (_getValue$length = (_getValue = (0, _utils.getValue)(element)) == null ? void 0 : _getValue.length) != null ? _getValue$length : 0;
          (0, _utils.setSelectionRange)(element, newPos, newPos);
        }
      }
    }, {
      matches: (keyDef, element) => (keyDef.key === "PageUp" || keyDef.key === "PageDown") && (0, _utils.isElementType)(element, ["input"]),
      handle: (keyDef, element) => {
        if (keyDef.key === "PageUp") {
          (0, _utils.setSelectionRange)(element, 0, 0);
        } else {
          var _getValue$length2, _getValue2;
          const newPos = (_getValue$length2 = (_getValue2 = (0, _utils.getValue)(element)) == null ? void 0 : _getValue2.length) != null ? _getValue$length2 : 0;
          (0, _utils.setSelectionRange)(element, newPos, newPos);
        }
      }
    }, {
      matches: (keyDef, element) => keyDef.key === "Delete" && (0, _utils.isEditable)(element) && !(0, _utils.isCursorAtEnd)(element),
      handle: (keDef, element, options, state) => {
        const {
          newValue,
          newSelectionStart
        } = (0, _utils.calculateNewValue)("", element, state.carryValue, void 0, "forward");
        (0, _shared.fireInputEvent)(element, {
          newValue,
          newSelectionStart,
          eventOverrides: {
            inputType: "deleteContentForward"
          }
        });
        (0, _shared.carryValue)(element, state, newValue);
      }
    }];
    exports.keydownBehavior = keydownBehavior;
  }
});

// node_modules/@testing-library/user-event/dist/keyboard/plugins/character.js
var require_character = __commonJS({
  "node_modules/@testing-library/user-event/dist/keyboard/plugins/character.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.keypressBehavior = void 0;
    var _dom = require_dist2();
    var _shared = require_shared2();
    var _utils = require_utils();
    var keypressBehavior = [{
      matches: (keyDef, element) => {
        var _keyDef$key;
        return ((_keyDef$key = keyDef.key) == null ? void 0 : _keyDef$key.length) === 1 && (0, _utils.isElementType)(element, "input", {
          type: "time",
          readOnly: false
        });
      },
      handle: (keyDef, element, options, state) => {
        var _state$carryValue;
        let newEntry = keyDef.key;
        const textToBeTyped = ((_state$carryValue = state.carryValue) != null ? _state$carryValue : "") + newEntry;
        const timeNewEntry = (0, _utils.buildTimeValue)(textToBeTyped);
        if ((0, _utils.isValidInputTimeValue)(element, timeNewEntry)) {
          newEntry = timeNewEntry;
        }
        const {
          newValue,
          newSelectionStart
        } = (0, _utils.calculateNewValue)(newEntry, element);
        const prevValue = (0, _utils.getValue)(element);
        if (prevValue !== newValue) {
          (0, _shared.fireInputEvent)(element, {
            newValue,
            newSelectionStart,
            eventOverrides: {
              data: keyDef.key,
              inputType: "insertText"
            }
          });
        }
        (0, _shared.fireChangeForInputTimeIfValid)(element, prevValue, timeNewEntry);
        state.carryValue = textToBeTyped;
      }
    }, {
      matches: (keyDef, element) => {
        var _keyDef$key2;
        return ((_keyDef$key2 = keyDef.key) == null ? void 0 : _keyDef$key2.length) === 1 && (0, _utils.isElementType)(element, "input", {
          type: "date",
          readOnly: false
        });
      },
      handle: (keyDef, element, options, state) => {
        var _state$carryValue2;
        let newEntry = keyDef.key;
        const textToBeTyped = ((_state$carryValue2 = state.carryValue) != null ? _state$carryValue2 : "") + newEntry;
        const isValidToBeTyped = (0, _utils.isValidDateValue)(element, textToBeTyped);
        if (isValidToBeTyped) {
          newEntry = textToBeTyped;
        }
        const {
          newValue,
          newSelectionStart
        } = (0, _utils.calculateNewValue)(newEntry, element);
        const prevValue = (0, _utils.getValue)(element);
        if (prevValue !== newValue) {
          (0, _shared.fireInputEvent)(element, {
            newValue,
            newSelectionStart,
            eventOverrides: {
              data: keyDef.key,
              inputType: "insertText"
            }
          });
        }
        if (isValidToBeTyped) {
          _dom.fireEvent.change(element, {
            target: {
              value: textToBeTyped
            }
          });
        }
        state.carryValue = textToBeTyped;
      }
    }, {
      matches: (keyDef, element) => {
        var _keyDef$key3;
        return ((_keyDef$key3 = keyDef.key) == null ? void 0 : _keyDef$key3.length) === 1 && (0, _utils.isElementType)(element, "input", {
          type: "number",
          readOnly: false
        });
      },
      handle: (keyDef, element, options, state) => {
        var _ref, _state$carryValue3, _newValue$match, _newValue$match2;
        if (!/[\d.\-e]/.test(keyDef.key)) {
          return;
        }
        const oldValue = (_ref = (_state$carryValue3 = state.carryValue) != null ? _state$carryValue3 : (0, _utils.getValue)(element)) != null ? _ref : "";
        const {
          newValue,
          newSelectionStart
        } = (0, _utils.calculateNewValue)(keyDef.key, element, oldValue);
        const valueParts = newValue.split("e", 2);
        if (Number((_newValue$match = newValue.match(/-/g)) == null ? void 0 : _newValue$match.length) > 2 || Number((_newValue$match2 = newValue.match(/\./g)) == null ? void 0 : _newValue$match2.length) > 1 || valueParts[1] && !/^-?\d*$/.test(valueParts[1])) {
          return;
        }
        (0, _shared.fireInputEvent)(element, {
          newValue,
          newSelectionStart,
          eventOverrides: {
            data: keyDef.key,
            inputType: "insertText"
          }
        });
        const appliedValue = (0, _utils.getValue)(element);
        if (appliedValue === newValue) {
          state.carryValue = void 0;
        } else {
          state.carryValue = newValue;
        }
      }
    }, {
      matches: (keyDef, element) => {
        var _keyDef$key4;
        return ((_keyDef$key4 = keyDef.key) == null ? void 0 : _keyDef$key4.length) === 1 && ((0, _utils.isElementType)(element, ["input", "textarea"], {
          readOnly: false
        }) && !(0, _utils.isClickableInput)(element) || (0, _utils.isContentEditable)(element)) && (0, _utils.getSpaceUntilMaxLength)(element) !== 0;
      },
      handle: (keyDef, element) => {
        const {
          newValue,
          newSelectionStart
        } = (0, _utils.calculateNewValue)(keyDef.key, element);
        (0, _shared.fireInputEvent)(element, {
          newValue,
          newSelectionStart,
          eventOverrides: {
            data: keyDef.key,
            inputType: "insertText"
          }
        });
      }
    }, {
      matches: (keyDef, element) => keyDef.key === "Enter" && ((0, _utils.isElementType)(element, "textarea", {
        readOnly: false
      }) || (0, _utils.isContentEditable)(element)) && (0, _utils.getSpaceUntilMaxLength)(element) !== 0,
      handle: (keyDef, element, options, state) => {
        const {
          newValue,
          newSelectionStart
        } = (0, _utils.calculateNewValue)("\n", element);
        const inputType = (0, _utils.isContentEditable)(element) && !state.modifiers.shift ? "insertParagraph" : "insertLineBreak";
        (0, _shared.fireInputEvent)(element, {
          newValue,
          newSelectionStart,
          eventOverrides: {
            inputType
          }
        });
      }
    }];
    exports.keypressBehavior = keypressBehavior;
  }
});

// node_modules/@testing-library/user-event/dist/keyboard/getEventProps.js
var require_getEventProps = __commonJS({
  "node_modules/@testing-library/user-event/dist/keyboard/getEventProps.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getKeyEventProps = getKeyEventProps;
    exports.getMouseEventProps = getMouseEventProps;
    function getKeyEventProps(keyDef, state) {
      var _keyDef$keyCode, _keyDef$key;
      return {
        key: keyDef.key,
        code: keyDef.code,
        altKey: state.modifiers.alt,
        ctrlKey: state.modifiers.ctrl,
        metaKey: state.modifiers.meta,
        shiftKey: state.modifiers.shift,
        keyCode: (_keyDef$keyCode = keyDef.keyCode) != null ? _keyDef$keyCode : ((_keyDef$key = keyDef.key) == null ? void 0 : _keyDef$key.length) === 1 ? keyDef.key.charCodeAt(0) : void 0
      };
    }
    function getMouseEventProps(state) {
      return {
        altKey: state.modifiers.alt,
        ctrlKey: state.modifiers.ctrl,
        metaKey: state.modifiers.meta,
        shiftKey: state.modifiers.shift
      };
    }
  }
});

// node_modules/@testing-library/user-event/dist/keyboard/plugins/functional.js
var require_functional = __commonJS({
  "node_modules/@testing-library/user-event/dist/keyboard/plugins/functional.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.preKeyupBehavior = exports.preKeydownBehavior = exports.postKeyupBehavior = exports.keyupBehavior = exports.keypressBehavior = exports.keydownBehavior = void 0;
    var _dom = require_dist2();
    var _utils = require_utils();
    var _getEventProps = require_getEventProps();
    var _shared = require_shared2();
    var modifierKeys = {
      Alt: "alt",
      Control: "ctrl",
      Shift: "shift",
      Meta: "meta"
    };
    var preKeydownBehavior = [
      ...Object.entries(modifierKeys).map(([key, modKey]) => ({
        matches: (keyDef) => keyDef.key === key,
        handle: (keyDef, element, options, state) => {
          state.modifiers[modKey] = true;
        }
      })),
      {
        matches: (keyDef) => keyDef.key === "AltGraph",
        handle: (keyDef, element, options, state) => {
          var _options$keyboardMap$;
          const ctrlKeyDef = (_options$keyboardMap$ = options.keyboardMap.find((k) => k.key === "Control")) != null ? _options$keyboardMap$ : {
            key: "Control",
            code: "Control"
          };
          _dom.fireEvent.keyDown(element, (0, _getEventProps.getKeyEventProps)(ctrlKeyDef, state));
        }
      }
    ];
    exports.preKeydownBehavior = preKeydownBehavior;
    var keydownBehavior = [{
      matches: (keyDef) => keyDef.key === "CapsLock",
      handle: (keyDef, element, options, state) => {
        state.modifiers.caps = !state.modifiers.caps;
      }
    }, {
      matches: (keyDef, element) => keyDef.key === "Backspace" && (0, _utils.isEditable)(element) && !(0, _utils.isCursorAtStart)(element),
      handle: (keyDef, element, options, state) => {
        const {
          newValue,
          newSelectionStart
        } = (0, _utils.calculateNewValue)("", element, state.carryValue, void 0, "backward");
        (0, _shared.fireInputEvent)(element, {
          newValue,
          newSelectionStart,
          eventOverrides: {
            inputType: "deleteContentBackward"
          }
        });
        (0, _shared.carryValue)(element, state, newValue);
      }
    }];
    exports.keydownBehavior = keydownBehavior;
    var keypressBehavior = [{
      matches: (keyDef, element) => keyDef.key === "Enter" && (0, _utils.isElementType)(element, "input") && ["checkbox", "radio"].includes(element.type),
      handle: (keyDef, element) => {
        const form = element.form;
        if ((0, _utils.hasFormSubmit)(form)) {
          _dom.fireEvent.submit(form);
        }
      }
    }, {
      matches: (keyDef, element) => keyDef.key === "Enter" && ((0, _utils.isClickableInput)(element) || (0, _utils.isElementType)(element, "a") && Boolean(element.href)),
      handle: (keyDef, element, options, state) => {
        _dom.fireEvent.click(element, (0, _getEventProps.getMouseEventProps)(state));
      }
    }, {
      matches: (keyDef, element) => keyDef.key === "Enter" && (0, _utils.isElementType)(element, "input"),
      handle: (keyDef, element) => {
        const form = element.form;
        if (form && (form.querySelectorAll("input").length === 1 || (0, _utils.hasFormSubmit)(form))) {
          _dom.fireEvent.submit(form);
        }
      }
    }];
    exports.keypressBehavior = keypressBehavior;
    var preKeyupBehavior = [
      ...Object.entries(modifierKeys).map(([key, modKey]) => ({
        matches: (keyDef) => keyDef.key === key,
        handle: (keyDef, element, options, state) => {
          state.modifiers[modKey] = false;
        }
      }))
    ];
    exports.preKeyupBehavior = preKeyupBehavior;
    var keyupBehavior = [{
      matches: (keyDef, element) => keyDef.key === " " && (0, _utils.isClickableInput)(element),
      handle: (keyDef, element, options, state) => {
        _dom.fireEvent.click(element, (0, _getEventProps.getMouseEventProps)(state));
      }
    }];
    exports.keyupBehavior = keyupBehavior;
    var postKeyupBehavior = [
      {
        matches: (keyDef) => keyDef.key === "AltGraph",
        handle: (keyDef, element, options, state) => {
          var _options$keyboardMap$2;
          const ctrlKeyDef = (_options$keyboardMap$2 = options.keyboardMap.find((k) => k.key === "Control")) != null ? _options$keyboardMap$2 : {
            key: "Control",
            code: "Control"
          };
          _dom.fireEvent.keyUp(element, (0, _getEventProps.getKeyEventProps)(ctrlKeyDef, state));
        }
      }
    ];
    exports.postKeyupBehavior = postKeyupBehavior;
  }
});

// node_modules/@testing-library/user-event/dist/keyboard/plugins/index.js
var require_plugins = __commonJS({
  "node_modules/@testing-library/user-event/dist/keyboard/plugins/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.replaceBehavior = exports.preKeyupBehavior = exports.preKeydownBehavior = exports.postKeyupBehavior = exports.keyupBehavior = exports.keypressBehavior = exports.keydownBehavior = void 0;
    var _utils = require_utils();
    var arrowKeys = _interopRequireWildcard(require_arrow());
    var controlKeys = _interopRequireWildcard(require_control());
    var characterKeys = _interopRequireWildcard(require_character());
    var functionalKeys = _interopRequireWildcard(require_functional());
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = new WeakMap();
      var cacheNodeInterop = new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    var replaceBehavior = [{
      matches: (keyDef, element) => keyDef.key === "selectall" && (0, _utils.isElementType)(element, ["input", "textarea"]),
      handle: (keyDef, element, options, state) => {
        var _state$carryValue;
        (0, _utils.setSelectionRange)(element, 0, ((_state$carryValue = state.carryValue) != null ? _state$carryValue : element.value).length);
      }
    }];
    exports.replaceBehavior = replaceBehavior;
    var preKeydownBehavior = [...functionalKeys.preKeydownBehavior];
    exports.preKeydownBehavior = preKeydownBehavior;
    var keydownBehavior = [...arrowKeys.keydownBehavior, ...controlKeys.keydownBehavior, ...functionalKeys.keydownBehavior];
    exports.keydownBehavior = keydownBehavior;
    var keypressBehavior = [...functionalKeys.keypressBehavior, ...characterKeys.keypressBehavior];
    exports.keypressBehavior = keypressBehavior;
    var preKeyupBehavior = [...functionalKeys.preKeyupBehavior];
    exports.preKeyupBehavior = preKeyupBehavior;
    var keyupBehavior = [...functionalKeys.keyupBehavior];
    exports.keyupBehavior = keyupBehavior;
    var postKeyupBehavior = [...functionalKeys.postKeyupBehavior];
    exports.postKeyupBehavior = postKeyupBehavior;
  }
});

// node_modules/@testing-library/user-event/dist/keyboard/keyboardImplementation.js
var require_keyboardImplementation = __commonJS({
  "node_modules/@testing-library/user-event/dist/keyboard/keyboardImplementation.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.keyboardImplementation = keyboardImplementation;
    exports.releaseAllKeys = releaseAllKeys;
    var _dom = require_dist2();
    var _utils = require_utils();
    var _getNextKeyDef = require_getNextKeyDef();
    var plugins = _interopRequireWildcard(require_plugins());
    var _getEventProps = require_getEventProps();
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = new WeakMap();
      var cacheNodeInterop = new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    async function keyboardImplementation(text, options, state) {
      var _state$repeatKey;
      const {
        document: document2
      } = options;
      const getCurrentElement = () => getActive(document2);
      const {
        keyDef,
        consumedLength,
        releasePrevious,
        releaseSelf,
        repeat
      } = (_state$repeatKey = state.repeatKey) != null ? _state$repeatKey : (0, _getNextKeyDef.getNextKeyDef)(text, options);
      const replace = applyPlugins(plugins.replaceBehavior, keyDef, getCurrentElement(), options, state);
      if (!replace) {
        const pressed = state.pressed.find((p) => p.keyDef === keyDef);
        if (pressed && !state.repeatKey) {
          keyup(keyDef, getCurrentElement, options, state, pressed.unpreventedDefault);
        }
        if (!releasePrevious) {
          const unpreventedDefault = keydown(keyDef, getCurrentElement, options, state);
          if (unpreventedDefault && hasKeyPress(keyDef, state)) {
            keypress(keyDef, getCurrentElement, options, state);
          }
          if (releaseSelf && repeat <= 1) {
            keyup(keyDef, getCurrentElement, options, state, unpreventedDefault);
          }
        }
      }
      if (repeat > 1) {
        state.repeatKey = {
          consumedLength: 0,
          keyDef,
          releasePrevious,
          releaseSelf,
          repeat: repeat - 1
        };
      } else {
        delete state.repeatKey;
      }
      if (text.length > consumedLength || repeat > 1) {
        if (options.delay > 0) {
          await (0, _utils.wait)(options.delay);
        }
        return keyboardImplementation(text.slice(consumedLength), options, state);
      }
      return void 0;
    }
    function getActive(document2) {
      var _getActiveElement;
      return (_getActiveElement = (0, _utils.getActiveElement)(document2)) != null ? _getActiveElement : document2.body;
    }
    function releaseAllKeys(options, state) {
      const getCurrentElement = () => getActive(options.document);
      for (const k of state.pressed) {
        keyup(k.keyDef, getCurrentElement, options, state, k.unpreventedDefault);
      }
    }
    function keydown(keyDef, getCurrentElement, options, state) {
      const element = getCurrentElement();
      if (element !== state.activeElement) {
        state.carryValue = void 0;
        state.carryChar = "";
      }
      state.activeElement = element;
      applyPlugins(plugins.preKeydownBehavior, keyDef, element, options, state);
      const unpreventedDefault = _dom.fireEvent.keyDown(element, (0, _getEventProps.getKeyEventProps)(keyDef, state));
      state.pressed.push({
        keyDef,
        unpreventedDefault
      });
      if (unpreventedDefault) {
        applyPlugins(plugins.keydownBehavior, keyDef, getCurrentElement(), options, state);
      }
      return unpreventedDefault;
    }
    function keypress(keyDef, getCurrentElement, options, state) {
      const element = getCurrentElement();
      const unpreventedDefault = _dom.fireEvent.keyPress(element, (0, _getEventProps.getKeyEventProps)(keyDef, state));
      if (unpreventedDefault) {
        applyPlugins(plugins.keypressBehavior, keyDef, getCurrentElement(), options, state);
      }
    }
    function keyup(keyDef, getCurrentElement, options, state, unprevented) {
      const element = getCurrentElement();
      applyPlugins(plugins.preKeyupBehavior, keyDef, element, options, state);
      const unpreventedDefault = _dom.fireEvent.keyUp(element, (0, _getEventProps.getKeyEventProps)(keyDef, state));
      if (unprevented && unpreventedDefault) {
        applyPlugins(plugins.keyupBehavior, keyDef, getCurrentElement(), options, state);
      }
      state.pressed = state.pressed.filter((k) => k.keyDef !== keyDef);
      applyPlugins(plugins.postKeyupBehavior, keyDef, element, options, state);
    }
    function applyPlugins(pluginCollection, keyDef, element, options, state) {
      const plugin = pluginCollection.find((p) => p.matches(keyDef, element, options, state));
      if (plugin) {
        plugin.handle(keyDef, element, options, state);
      }
      return !!plugin;
    }
    function hasKeyPress(keyDef, state) {
      var _keyDef$key;
      return (((_keyDef$key = keyDef.key) == null ? void 0 : _keyDef$key.length) === 1 || keyDef.key === "Enter") && !state.modifiers.ctrl && !state.modifiers.alt;
    }
  }
});

// node_modules/@testing-library/user-event/dist/keyboard/types.js
var require_types = __commonJS({
  "node_modules/@testing-library/user-event/dist/keyboard/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DOM_KEY_LOCATION = void 0;
    var DOM_KEY_LOCATION;
    exports.DOM_KEY_LOCATION = DOM_KEY_LOCATION;
    (function(DOM_KEY_LOCATION2) {
      DOM_KEY_LOCATION2[DOM_KEY_LOCATION2["STANDARD"] = 0] = "STANDARD";
      DOM_KEY_LOCATION2[DOM_KEY_LOCATION2["LEFT"] = 1] = "LEFT";
      DOM_KEY_LOCATION2[DOM_KEY_LOCATION2["RIGHT"] = 2] = "RIGHT";
      DOM_KEY_LOCATION2[DOM_KEY_LOCATION2["NUMPAD"] = 3] = "NUMPAD";
    })(DOM_KEY_LOCATION || (exports.DOM_KEY_LOCATION = DOM_KEY_LOCATION = {}));
  }
});

// node_modules/@testing-library/user-event/dist/keyboard/keyMap.js
var require_keyMap = __commonJS({
  "node_modules/@testing-library/user-event/dist/keyboard/keyMap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.defaultKeyMap = void 0;
    var _types = require_types();
    var defaultKeyMap = [
      ..."0123456789".split("").map((c) => ({
        code: `Digit${c}`,
        key: c
      })),
      ...")!@#$%^&*(".split("").map((c, i) => ({
        code: `Digit${i}`,
        key: c,
        shiftKey: true
      })),
      ..."abcdefghijklmnopqrstuvwxyz".split("").map((c) => ({
        code: `Key${c.toUpperCase()}`,
        key: c
      })),
      ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((c) => ({
        code: `Key${c}`,
        key: c,
        shiftKey: true
      })),
      {
        code: "Space",
        key: " "
      },
      {
        code: "AltLeft",
        key: "Alt",
        location: _types.DOM_KEY_LOCATION.LEFT,
        keyCode: 18
      },
      {
        code: "AltRight",
        key: "Alt",
        location: _types.DOM_KEY_LOCATION.RIGHT,
        keyCode: 18
      },
      {
        code: "ShiftLeft",
        key: "Shift",
        location: _types.DOM_KEY_LOCATION.LEFT,
        keyCode: 16
      },
      {
        code: "ShiftRight",
        key: "Shift",
        location: _types.DOM_KEY_LOCATION.RIGHT,
        keyCode: 16
      },
      {
        code: "ControlLeft",
        key: "Control",
        location: _types.DOM_KEY_LOCATION.LEFT,
        keyCode: 17
      },
      {
        code: "ControlRight",
        key: "Control",
        location: _types.DOM_KEY_LOCATION.RIGHT,
        keyCode: 17
      },
      {
        code: "MetaLeft",
        key: "Meta",
        location: _types.DOM_KEY_LOCATION.LEFT,
        keyCode: 93
      },
      {
        code: "MetaRight",
        key: "Meta",
        location: _types.DOM_KEY_LOCATION.RIGHT,
        keyCode: 93
      },
      {
        code: "OSLeft",
        key: "OS",
        location: _types.DOM_KEY_LOCATION.LEFT,
        keyCode: 91
      },
      {
        code: "OSRight",
        key: "OS",
        location: _types.DOM_KEY_LOCATION.RIGHT,
        keyCode: 91
      },
      {
        code: "CapsLock",
        key: "CapsLock",
        keyCode: 20
      },
      {
        code: "Backspace",
        key: "Backspace",
        keyCode: 8
      },
      {
        code: "Enter",
        key: "Enter",
        keyCode: 13
      },
      {
        code: "Escape",
        key: "Escape",
        keyCode: 27
      },
      {
        code: "ArrowUp",
        key: "ArrowUp",
        keyCode: 38
      },
      {
        code: "ArrowDown",
        key: "ArrowDown",
        keyCode: 40
      },
      {
        code: "ArrowLeft",
        key: "ArrowLeft",
        keyCode: 37
      },
      {
        code: "ArrowRight",
        key: "ArrowRight",
        keyCode: 39
      },
      {
        code: "Home",
        key: "Home",
        keyCode: 36
      },
      {
        code: "End",
        key: "End",
        keyCode: 35
      },
      {
        code: "Delete",
        key: "Delete",
        keyCode: 46
      },
      {
        code: "PageUp",
        key: "PageUp",
        keyCode: 33
      },
      {
        code: "PageDown",
        key: "PageDown",
        keyCode: 34
      }
    ];
    exports.defaultKeyMap = defaultKeyMap;
  }
});

// node_modules/@testing-library/user-event/dist/keyboard/specialCharMap.js
var require_specialCharMap = __commonJS({
  "node_modules/@testing-library/user-event/dist/keyboard/specialCharMap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.specialCharMap = void 0;
    var specialCharMap = {
      arrowLeft: "{arrowleft}",
      arrowRight: "{arrowright}",
      arrowDown: "{arrowdown}",
      arrowUp: "{arrowup}",
      enter: "{enter}",
      escape: "{esc}",
      delete: "{del}",
      backspace: "{backspace}",
      home: "{home}",
      end: "{end}",
      selectAll: "{selectall}",
      space: "{space}",
      whitespace: " ",
      pageUp: "{pageUp}",
      pageDown: "{pageDown}"
    };
    exports.specialCharMap = specialCharMap;
  }
});

// node_modules/@testing-library/user-event/dist/keyboard/index.js
var require_keyboard = __commonJS({
  "node_modules/@testing-library/user-event/dist/keyboard/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.keyboard = keyboard;
    exports.keyboardImplementationWrapper = keyboardImplementationWrapper;
    Object.defineProperty(exports, "specialCharMap", {
      enumerable: true,
      get: function() {
        return _specialCharMap.specialCharMap;
      }
    });
    var _dom = require_dist2();
    var _keyboardImplementation = require_keyboardImplementation();
    var _keyMap = require_keyMap();
    var _specialCharMap = require_specialCharMap();
    function keyboard(text, options) {
      var _options$delay;
      const {
        promise,
        state
      } = keyboardImplementationWrapper(text, options);
      if (((_options$delay = options == null ? void 0 : options.delay) != null ? _options$delay : 0) > 0) {
        return (0, _dom.getConfig)().asyncWrapper(() => promise.then(() => state));
      } else {
        promise.catch(console.error);
        return state;
      }
    }
    function keyboardImplementationWrapper(text, config = {}) {
      const {
        keyboardState: state = createKeyboardState(),
        delay = 0,
        document: doc = document,
        autoModify = false,
        keyboardMap = _keyMap.defaultKeyMap
      } = config;
      const options = {
        delay,
        document: doc,
        autoModify,
        keyboardMap
      };
      return {
        promise: (0, _keyboardImplementation.keyboardImplementation)(text, options, state),
        state,
        releaseAllKeys: () => (0, _keyboardImplementation.releaseAllKeys)(options, state)
      };
    }
    function createKeyboardState() {
      return {
        activeElement: null,
        pressed: [],
        carryChar: "",
        modifiers: {
          alt: false,
          caps: false,
          ctrl: false,
          meta: false,
          shift: false
        }
      };
    }
  }
});

// node_modules/@testing-library/user-event/dist/type/typeImplementation.js
var require_typeImplementation = __commonJS({
  "node_modules/@testing-library/user-event/dist/type/typeImplementation.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.typeImplementation = typeImplementation;
    var _utils = require_utils();
    var _click = require_click();
    var _keyboard = require_keyboard();
    async function typeImplementation(element, text, {
      delay,
      skipClick = false,
      skipAutoClose = false,
      initialSelectionStart = void 0,
      initialSelectionEnd = void 0
    }) {
      if (element.disabled)
        return;
      if (!skipClick)
        (0, _click.click)(element);
      const currentElement = () => (0, _utils.getActiveElement)(element.ownerDocument);
      const value = (0, _utils.getValue)(currentElement());
      const {
        selectionStart,
        selectionEnd
      } = (0, _utils.getSelectionRange)(element);
      if (value != null && (selectionStart === null || selectionStart === 0) && (selectionEnd === null || selectionEnd === 0)) {
        (0, _utils.setSelectionRange)(currentElement(), initialSelectionStart != null ? initialSelectionStart : value.length, initialSelectionEnd != null ? initialSelectionEnd : value.length);
      }
      const {
        promise,
        releaseAllKeys
      } = (0, _keyboard.keyboardImplementationWrapper)(text, {
        delay,
        document: element.ownerDocument
      });
      if (delay > 0) {
        await promise;
      }
      if (!skipAutoClose) {
        releaseAllKeys();
      }
      return promise;
    }
  }
});

// node_modules/@testing-library/user-event/dist/type/index.js
var require_type = __commonJS({
  "node_modules/@testing-library/user-event/dist/type/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.type = type;
    var _dom = require_dist2();
    var _typeImplementation = require_typeImplementation();
    function type(element, text, {
      delay = 0,
      ...options
    } = {}) {
      if (delay > 0) {
        return (0, _dom.getConfig)().asyncWrapper(() => (0, _typeImplementation.typeImplementation)(element, text, {
          delay,
          ...options
        }));
      } else {
        return void (0, _typeImplementation.typeImplementation)(element, text, {
          delay,
          ...options
        }).catch(console.error);
      }
    }
  }
});

// node_modules/@testing-library/user-event/dist/clear.js
var require_clear = __commonJS({
  "node_modules/@testing-library/user-event/dist/clear.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.clear = clear;
    var _utils = require_utils();
    var _type = require_type();
    function clear(element) {
      var _element$selectionSta, _element$selectionEnd;
      if (!(0, _utils.isElementType)(element, ["input", "textarea"])) {
        throw new Error("clear currently only supports input and textarea elements.");
      }
      if ((0, _utils.isDisabled)(element)) {
        return;
      }
      const elementType = element.type;
      if (elementType !== "textarea") {
        ;
        element.type = "text";
      }
      (0, _type.type)(element, "{selectall}{del}", {
        delay: 0,
        initialSelectionStart: (_element$selectionSta = element.selectionStart) != null ? _element$selectionSta : void 0,
        initialSelectionEnd: (_element$selectionEnd = element.selectionEnd) != null ? _element$selectionEnd : void 0
      });
      if (elementType !== "textarea") {
        ;
        element.type = elementType;
      }
    }
  }
});

// node_modules/@testing-library/user-event/dist/tab.js
var require_tab = __commonJS({
  "node_modules/@testing-library/user-event/dist/tab.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.tab = tab;
    var _dom = require_dist2();
    var _utils = require_utils();
    var _focus = require_focus();
    var _blur = require_blur();
    function getNextElement(currentIndex, shift, elements, focusTrap) {
      if ((0, _utils.isDocument)(focusTrap) && (currentIndex === 0 && shift || currentIndex === elements.length - 1 && !shift)) {
        return focusTrap.body;
      }
      const nextIndex = shift ? currentIndex - 1 : currentIndex + 1;
      const defaultIndex = shift ? elements.length - 1 : 0;
      return elements[nextIndex] || elements[defaultIndex];
    }
    function tab({
      shift = false,
      focusTrap
    } = {}) {
      var _focusTrap$ownerDocum, _focusTrap;
      const doc = (_focusTrap$ownerDocum = (_focusTrap = focusTrap) == null ? void 0 : _focusTrap.ownerDocument) != null ? _focusTrap$ownerDocum : document;
      const previousElement = (0, _utils.getActiveElement)(doc);
      if (!focusTrap) {
        focusTrap = doc;
      }
      const focusableElements = focusTrap.querySelectorAll(_utils.FOCUSABLE_SELECTOR);
      const enabledElements = Array.from(focusableElements).filter((el) => el === previousElement || el.getAttribute("tabindex") !== "-1" && !(0, _utils.isDisabled)(el) && (0, _utils.isVisible)(el));
      if (enabledElements.length === 0)
        return;
      const orderedElements = enabledElements.map((el, idx) => ({
        el,
        idx
      })).sort((a, b) => {
        if (previousElement && previousElement.getAttribute("tabindex") === "-1") {
          return a.idx - b.idx;
        }
        const tabIndexA = Number(a.el.getAttribute("tabindex"));
        const tabIndexB = Number(b.el.getAttribute("tabindex"));
        const diff = tabIndexA - tabIndexB;
        return diff === 0 ? a.idx - b.idx : diff;
      }).map(({
        el
      }) => el);
      const checkedRadio = {};
      let prunedElements = [];
      orderedElements.forEach((currentElement) => {
        const el = currentElement;
        if (el.type === "radio" && el.name) {
          const prev = previousElement;
          if (prev && prev.type === el.type && prev.name === el.name) {
            if (el === prev) {
              prunedElements.push(el);
            }
            return;
          }
          if (el.checked) {
            prunedElements = prunedElements.filter((e) => e.type !== el.type || e.name !== el.name);
            prunedElements.push(el);
            checkedRadio[el.name] = el;
            return;
          }
          if (typeof checkedRadio[el.name] !== "undefined") {
            return;
          }
        }
        prunedElements.push(el);
      });
      const index = prunedElements.findIndex((el) => el === previousElement);
      const nextElement = getNextElement(index, shift, prunedElements, focusTrap);
      const shiftKeyInit = {
        key: "Shift",
        keyCode: 16,
        shiftKey: true
      };
      const tabKeyInit = {
        key: "Tab",
        keyCode: 9,
        shiftKey: shift
      };
      let continueToTab = true;
      if (previousElement) {
        if (shift)
          _dom.fireEvent.keyDown(previousElement, {
            ...shiftKeyInit
          });
        continueToTab = _dom.fireEvent.keyDown(previousElement, {
          ...tabKeyInit
        });
      }
      const keyUpTarget = !continueToTab && previousElement ? previousElement : nextElement;
      if (continueToTab) {
        if (nextElement === doc.body) {
          if (previousElement) {
            (0, _blur.blur)(previousElement);
          }
        } else {
          (0, _focus.focus)(nextElement);
        }
      }
      _dom.fireEvent.keyUp(keyUpTarget, {
        ...tabKeyInit
      });
      if (shift) {
        _dom.fireEvent.keyUp(keyUpTarget, {
          ...shiftKeyInit,
          shiftKey: false
        });
      }
    }
  }
});

// node_modules/@testing-library/user-event/dist/upload.js
var require_upload = __commonJS({
  "node_modules/@testing-library/user-event/dist/upload.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.upload = upload;
    var _dom = require_dist2();
    var _click = require_click();
    var _blur = require_blur();
    var _focus = require_focus();
    var _utils = require_utils();
    function upload(element, fileOrFiles, init, {
      applyAccept = false
    } = {}) {
      var _input$files;
      const input = (0, _utils.isElementType)(element, "label") ? element.control : element;
      if (!input || !(0, _utils.isElementType)(input, "input", {
        type: "file"
      })) {
        throw new TypeError(`The ${input === element ? "given" : "associated"} ${input == null ? void 0 : input.tagName} element does not accept file uploads`);
      }
      if ((0, _utils.isDisabled)(element))
        return;
      (0, _click.click)(element, init == null ? void 0 : init.clickInit);
      const files = (Array.isArray(fileOrFiles) ? fileOrFiles : [fileOrFiles]).filter((file) => !applyAccept || isAcceptableFile(file, input.accept)).slice(0, input.multiple ? void 0 : 1);
      (0, _blur.blur)(element);
      (0, _focus.focus)(element);
      if (files.length === ((_input$files = input.files) == null ? void 0 : _input$files.length) && files.every((f, i) => {
        var _input$files2;
        return f === ((_input$files2 = input.files) == null ? void 0 : _input$files2.item(i));
      })) {
        return;
      }
      const inputFiles = {
        ...files,
        length: files.length,
        item: (index) => files[index],
        [Symbol.iterator]() {
          let i = 0;
          return {
            next: () => ({
              done: i >= files.length,
              value: files[i++]
            })
          };
        }
      };
      (0, _dom.fireEvent)(input, (0, _dom.createEvent)("input", input, {
        target: {
          files: inputFiles
        },
        bubbles: true,
        cancelable: false,
        composed: true
      }));
      _dom.fireEvent.change(input, {
        target: {
          files: inputFiles
        },
        ...init == null ? void 0 : init.changeInit
      });
    }
    function isAcceptableFile(file, accept) {
      if (!accept) {
        return true;
      }
      const wildcards = ["audio/*", "image/*", "video/*"];
      return accept.split(",").some((acceptToken) => {
        if (acceptToken.startsWith(".")) {
          return file.name.endsWith(acceptToken);
        } else if (wildcards.includes(acceptToken)) {
          return file.type.startsWith(acceptToken.substr(0, acceptToken.length - 1));
        }
        return file.type === acceptToken;
      });
    }
  }
});

// node_modules/@testing-library/user-event/dist/select-options.js
var require_select_options = __commonJS({
  "node_modules/@testing-library/user-event/dist/select-options.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.selectOptions = exports.deselectOptions = void 0;
    var _dom = require_dist2();
    var _utils = require_utils();
    var _click = require_click();
    var _focus = require_focus();
    var _hover = require_hover();
    function selectOptionsBase(newValue, select, values2, init, {
      skipPointerEventsCheck = false
    } = {}) {
      if (!newValue && !select.multiple) {
        throw (0, _dom.getConfig)().getElementError(`Unable to deselect an option in a non-multiple select. Use selectOptions to change the selection instead.`, select);
      }
      const valArray = Array.isArray(values2) ? values2 : [values2];
      const allOptions = Array.from(select.querySelectorAll('option, [role="option"]'));
      const selectedOptions = valArray.map((val) => {
        if (typeof val !== "string" && allOptions.includes(val)) {
          return val;
        } else {
          const matchingOption = allOptions.find((o) => o.value === val || o.innerHTML === val);
          if (matchingOption) {
            return matchingOption;
          } else {
            throw (0, _dom.getConfig)().getElementError(`Value "${String(val)}" not found in options`, select);
          }
        }
      }).filter((option) => !(0, _utils.isDisabled)(option));
      if ((0, _utils.isDisabled)(select) || !selectedOptions.length)
        return;
      if ((0, _utils.isElementType)(select, "select")) {
        if (select.multiple) {
          for (const option of selectedOptions) {
            const withPointerEvents = skipPointerEventsCheck ? true : (0, _utils.hasPointerEvents)(option);
            if (withPointerEvents) {
              _dom.fireEvent.pointerOver(option, init);
              _dom.fireEvent.pointerEnter(select, init);
              _dom.fireEvent.mouseOver(option);
              _dom.fireEvent.mouseEnter(select);
              _dom.fireEvent.pointerMove(option, init);
              _dom.fireEvent.mouseMove(option, init);
              _dom.fireEvent.pointerDown(option, init);
              _dom.fireEvent.mouseDown(option, init);
            }
            (0, _focus.focus)(select);
            if (withPointerEvents) {
              _dom.fireEvent.pointerUp(option, init);
              _dom.fireEvent.mouseUp(option, init);
            }
            selectOption(option);
            if (withPointerEvents) {
              _dom.fireEvent.click(option, init);
            }
          }
        } else if (selectedOptions.length === 1) {
          const withPointerEvents = skipPointerEventsCheck ? true : (0, _utils.hasPointerEvents)(select);
          if (withPointerEvents) {
            (0, _click.click)(select, init, {
              skipPointerEventsCheck
            });
          } else {
            (0, _focus.focus)(select);
          }
          selectOption(selectedOptions[0]);
          if (withPointerEvents) {
            _dom.fireEvent.pointerOver(select, init);
            _dom.fireEvent.pointerEnter(select, init);
            _dom.fireEvent.mouseOver(select);
            _dom.fireEvent.mouseEnter(select);
            _dom.fireEvent.pointerUp(select, init);
            _dom.fireEvent.mouseUp(select, init);
            _dom.fireEvent.click(select, init);
          }
        } else {
          throw (0, _dom.getConfig)().getElementError(`Cannot select multiple options on a non-multiple select`, select);
        }
      } else if (select.getAttribute("role") === "listbox") {
        selectedOptions.forEach((option) => {
          (0, _hover.hover)(option, init, {
            skipPointerEventsCheck
          });
          (0, _click.click)(option, init, {
            skipPointerEventsCheck
          });
          (0, _hover.unhover)(option, init, {
            skipPointerEventsCheck
          });
        });
      } else {
        throw (0, _dom.getConfig)().getElementError(`Cannot select options on elements that are neither select nor listbox elements`, select);
      }
      function selectOption(option) {
        option.selected = newValue;
        (0, _dom.fireEvent)(select, (0, _dom.createEvent)("input", select, {
          bubbles: true,
          cancelable: false,
          composed: true,
          ...init
        }));
        _dom.fireEvent.change(select, init);
      }
    }
    var selectOptions = selectOptionsBase.bind(null, true);
    exports.selectOptions = selectOptions;
    var deselectOptions = selectOptionsBase.bind(null, false);
    exports.deselectOptions = deselectOptions;
  }
});

// node_modules/@testing-library/user-event/dist/paste.js
var require_paste = __commonJS({
  "node_modules/@testing-library/user-event/dist/paste.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.paste = paste;
    var _dom = require_dist2();
    var _utils = require_utils();
    function isSupportedElement(element) {
      return (0, _utils.isElementType)(element, "input") && Boolean(_utils.editableInputTypes[element.type]) || (0, _utils.isElementType)(element, "textarea");
    }
    function paste(element, text, init, {
      initialSelectionStart,
      initialSelectionEnd
    } = {}) {
      if (!isSupportedElement(element)) {
        throw new TypeError(`The given ${element.tagName} element is currently unsupported.
      A PR extending this implementation would be very much welcome at https://github.com/testing-library/user-event`);
      }
      if ((0, _utils.isDisabled)(element)) {
        return;
      }
      (0, _utils.eventWrapper)(() => element.focus());
      if (element.selectionStart === 0 && element.selectionEnd === 0) {
        (0, _utils.setSelectionRange)(element, initialSelectionStart != null ? initialSelectionStart : element.value.length, initialSelectionEnd != null ? initialSelectionEnd : element.value.length);
      }
      _dom.fireEvent.paste(element, init);
      if (element.readOnly) {
        return;
      }
      text = text.substr(0, (0, _utils.getSpaceUntilMaxLength)(element));
      const {
        newValue,
        newSelectionStart
      } = (0, _utils.calculateNewValue)(text, element);
      _dom.fireEvent.input(element, {
        inputType: "insertFromPaste",
        target: {
          value: newValue
        }
      });
      (0, _utils.setSelectionRange)(element, {
        newSelectionStart,
        selectionEnd: newSelectionStart
      }, {});
    }
  }
});

// node_modules/@testing-library/user-event/dist/index.js
var require_dist3 = __commonJS({
  "node_modules/@testing-library/user-event/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    Object.defineProperty(exports, "specialChars", {
      enumerable: true,
      get: function() {
        return _keyboard.specialCharMap;
      }
    });
    var _click = require_click();
    var _type = require_type();
    var _clear = require_clear();
    var _tab = require_tab();
    var _hover = require_hover();
    var _upload = require_upload();
    var _selectOptions = require_select_options();
    var _paste = require_paste();
    var _keyboard = require_keyboard();
    var userEvent2 = {
      click: _click.click,
      dblClick: _click.dblClick,
      type: _type.type,
      clear: _clear.clear,
      tab: _tab.tab,
      hover: _hover.hover,
      unhover: _hover.unhover,
      upload: _upload.upload,
      selectOptions: _selectOptions.selectOptions,
      deselectOptions: _selectOptions.deselectOptions,
      paste: _paste.paste,
      keyboard: _keyboard.keyboard
    };
    var _default = userEvent2;
    exports.default = _default;
  }
});

// src/stories/Page.stories.tsx
import React from "react";

// node_modules/core-js/modules/es.array.concat.js
"use strict";
var $ = require_export();
var fails = require_fails();
var isArray = require_is_array();
var isObject = require_is_object();
var toObject = require_to_object();
var lengthOfArrayLike = require_length_of_array_like();
var doesNotExceedSafeInteger = require_does_not_exceed_safe_integer();
var createProperty = require_create_property();
var arraySpeciesCreate = require_array_species_create();
var arrayMethodHasSpeciesSupport = require_array_method_has_species_support();
var wellKnownSymbol = require_well_known_symbol();
var V8_VERSION = require_engine_v8_version();
var IS_CONCAT_SPREADABLE = wellKnownSymbol("isConcatSpreadable");
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function() {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});
var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("concat");
var isConcatSpreadable = function(O) {
  if (!isObject(O))
    return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== void 0 ? !!spreadable : isArray(O);
};
var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;
$({ target: "Array", proto: true, arity: 1, forced: FORCED }, {
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        doesNotExceedSafeInteger(n + len);
        for (k = 0; k < len; k++, n++)
          if (k in E)
            createProperty(A, n, E[k]);
      } else {
        doesNotExceedSafeInteger(n + 1);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});

// node_modules/@storybook/client-logger/dist/esm/index.js
var import_es_array_iterator = __toModule(require_es_array_iterator());

// node_modules/core-js/modules/es.object.to-string.js
var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
var defineBuiltIn = require_define_built_in();
var toString = require_object_to_string();
if (!TO_STRING_TAG_SUPPORT) {
  defineBuiltIn(Object.prototype, "toString", toString, { unsafe: true });
}

// node_modules/core-js/modules/es.set.js
require_es_set_constructor();

// node_modules/core-js/modules/es.string.iterator.js
"use strict";
var charAt = require_string_multibyte().charAt;
var toString2 = require_to_string();
var InternalStateModule = require_internal_state();
var defineIterator = require_iterator_define();
var createIterResultObject = require_create_iter_result_object();
var STRING_ITERATOR = "String Iterator";
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
defineIterator(String, "String", function(iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString2(iterated),
    index: 0
  });
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length)
    return createIterResultObject(void 0, true);
  point = charAt(string, index);
  state.index += point.length;
  return createIterResultObject(point, false);
});

// node_modules/core-js/modules/web.dom-collections.iterator.js
var global2 = require_global();
var DOMIterables = require_dom_iterables();
var DOMTokenListPrototype = require_dom_token_list_prototype();
var ArrayIteratorMethods = require_es_array_iterator();
var createNonEnumerableProperty = require_create_non_enumerable_property();
var wellKnownSymbol2 = require_well_known_symbol();
var ITERATOR = wellKnownSymbol2("iterator");
var TO_STRING_TAG = wellKnownSymbol2("toStringTag");
var ArrayValues = ArrayIteratorMethods.values;
var handlePrototype = function(CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    if (CollectionPrototype[ITERATOR] !== ArrayValues)
      try {
        createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
      } catch (error2) {
        CollectionPrototype[ITERATOR] = ArrayValues;
      }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME])
      for (var METHOD_NAME in ArrayIteratorMethods) {
        if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME])
          try {
            createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
          } catch (error2) {
            CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
          }
      }
  }
};
for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global2[COLLECTION_NAME] && global2[COLLECTION_NAME].prototype, COLLECTION_NAME);
}
handlePrototype(DOMTokenListPrototype, "DOMTokenList");

// node_modules/@storybook/client-logger/dist/esm/index.js
var import_es_regexp_exec = __toModule(require_es_regexp_exec());

// node_modules/core-js/modules/es.string.replace.js
"use strict";
var apply = require_function_apply();
var call = require_function_call();
var uncurryThis = require_function_uncurry_this();
var fixRegExpWellKnownSymbolLogic = require_fix_regexp_well_known_symbol_logic();
var fails2 = require_fails();
var anObject = require_an_object();
var isCallable = require_is_callable();
var isNullOrUndefined = require_is_null_or_undefined();
var toIntegerOrInfinity = require_to_integer_or_infinity();
var toLength = require_to_length();
var toString3 = require_to_string();
var requireObjectCoercible = require_require_object_coercible();
var advanceStringIndex = require_advance_string_index();
var getMethod = require_get_method();
var getSubstitution = require_get_substitution();
var regExpExec = require_regexp_exec_abstract();
var wellKnownSymbol3 = require_well_known_symbol();
var REPLACE = wellKnownSymbol3("replace");
var max = Math.max;
var min = Math.min;
var concat2 = uncurryThis([].concat);
var push = uncurryThis([].push);
var stringIndexOf = uncurryThis("".indexOf);
var stringSlice = uncurryThis("".slice);
var maybeToString = function(it) {
  return it === void 0 ? it : String(it);
};
var REPLACE_KEEPS_$0 = function() {
  return "a".replace(/./, "$0") === "$0";
}();
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function() {
  if (/./[REPLACE]) {
    return /./[REPLACE]("a", "$0") === "";
  }
  return false;
}();
var REPLACE_SUPPORTS_NAMED_GROUPS = !fails2(function() {
  var re = /./;
  re.exec = function() {
    var result = [];
    result.groups = { a: "7" };
    return result;
  };
  return "".replace(re, "$<a>") !== "7";
});
fixRegExpWellKnownSymbolLogic("replace", function(_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? "$" : "$0";
  return [
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = isNullOrUndefined(searchValue) ? void 0 : getMethod(searchValue, REPLACE);
      return replacer ? call(replacer, searchValue, O, replaceValue) : call(nativeReplace, toString3(O), searchValue, replaceValue);
    },
    function(string, replaceValue) {
      var rx = anObject(this);
      var S = toString3(string);
      if (typeof replaceValue == "string" && stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 && stringIndexOf(replaceValue, "$<") === -1) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done)
          return res.value;
      }
      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace)
        replaceValue = toString3(replaceValue);
      var global9 = rx.global;
      if (global9) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null)
          break;
        push(results, result);
        if (!global9)
          break;
        var matchStr = toString3(result[0]);
        if (matchStr === "")
          rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = "";
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = toString3(result[0]);
        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        for (var j = 1; j < result.length; j++)
          push(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat2([matched], captures, position, S);
          if (namedCaptures !== void 0)
            push(replacerArgs, namedCaptures);
          var replacement = toString3(apply(replaceValue, void 0, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + stringSlice(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

// node_modules/@storybook/client-logger/dist/esm/index.js
var import_global = __toModule(require_window());
var LOGLEVEL = import_global.default.LOGLEVEL;
var console2 = import_global.default.console;
var levels = {
  trace: 1,
  debug: 2,
  info: 3,
  warn: 4,
  error: 5,
  silent: 10
};
var currentLogLevelString = LOGLEVEL;
var currentLogLevelNumber = levels[currentLogLevelString] || levels.info;
var logger = {
  trace: function trace(message) {
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }
    return currentLogLevelNumber <= levels.trace && console2.trace.apply(console2, [message].concat(rest));
  },
  debug: function debug(message) {
    for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      rest[_key2 - 1] = arguments[_key2];
    }
    return currentLogLevelNumber <= levels.debug && console2.debug.apply(console2, [message].concat(rest));
  },
  info: function info(message) {
    for (var _len3 = arguments.length, rest = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      rest[_key3 - 1] = arguments[_key3];
    }
    return currentLogLevelNumber <= levels.info && console2.info.apply(console2, [message].concat(rest));
  },
  warn: function warn(message) {
    for (var _len4 = arguments.length, rest = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      rest[_key4 - 1] = arguments[_key4];
    }
    return currentLogLevelNumber <= levels.warn && console2.warn.apply(console2, [message].concat(rest));
  },
  error: function error(message) {
    for (var _len5 = arguments.length, rest = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
      rest[_key5 - 1] = arguments[_key5];
    }
    return currentLogLevelNumber <= levels.error && console2.error.apply(console2, [message].concat(rest));
  },
  log: function log(message) {
    for (var _len6 = arguments.length, rest = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
      rest[_key6 - 1] = arguments[_key6];
    }
    return currentLogLevelNumber < levels.silent && console2.log.apply(console2, [message].concat(rest));
  }
};
var logged = new Set();
var once = function once2(type) {
  return function(message) {
    if (logged.has(message))
      return void 0;
    logged.add(message);
    for (var _len7 = arguments.length, rest = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
      rest[_key7 - 1] = arguments[_key7];
    }
    return logger[type].apply(logger, [message].concat(rest));
  };
};
once.clear = function() {
  return logged.clear();
};
once.trace = once("trace");
once.debug = once("debug");
once.info = once("info");
once.warn = once("warn");
once.error = once("error");
once.log = once("log");
var pretty = function pretty2(type) {
  return function() {
    var argArray = [];
    for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      args[_key8] = arguments[_key8];
    }
    if (args.length) {
      var startTagRe = /<span\s+style=(['"])([^'"]*)\1\s*>/gi;
      var endTagRe = /<\/span>/gi;
      var reResultArray;
      argArray.push(args[0].replace(startTagRe, "%c").replace(endTagRe, "%c"));
      while (reResultArray = startTagRe.exec(args[0])) {
        argArray.push(reResultArray[2]);
        argArray.push("");
      }
      for (var j = 1; j < args.length; j++) {
        argArray.push(args[j]);
      }
    }
    logger[type].apply(logger, argArray);
  };
};
pretty.trace = pretty("trace");
pretty.debug = pretty("debug");
pretty.info = pretty("info");
pretty.warn = pretty("warn");
pretty.error = pretty("error");

// node_modules/core-js/modules/es.symbol.js
require_es_symbol_constructor();
require_es_symbol_for();
require_es_symbol_key_for();
require_es_json_stringify();
require_es_object_get_own_property_symbols();

// node_modules/core-js/modules/es.symbol.description.js
"use strict";
var $2 = require_export();
var DESCRIPTORS = require_descriptors();
var global4 = require_global();
var uncurryThis2 = require_function_uncurry_this();
var hasOwn = require_has_own_property();
var isCallable2 = require_is_callable();
var isPrototypeOf = require_object_is_prototype_of();
var toString4 = require_to_string();
var defineProperty = require_object_define_property().f;
var copyConstructorProperties = require_copy_constructor_properties();
var NativeSymbol = global4.Symbol;
var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;
if (DESCRIPTORS && isCallable2(NativeSymbol) && (!("description" in SymbolPrototype) || NativeSymbol().description !== void 0)) {
  EmptyStringDescriptionStore = {};
  SymbolWrapper = function Symbol2() {
    var description = arguments.length < 1 || arguments[0] === void 0 ? void 0 : toString4(arguments[0]);
    var result = isPrototypeOf(SymbolPrototype, this) ? new NativeSymbol(description) : description === void 0 ? NativeSymbol() : NativeSymbol(description);
    if (description === "")
      EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  SymbolWrapper.prototype = SymbolPrototype;
  SymbolPrototype.constructor = SymbolWrapper;
  NATIVE_SYMBOL = String(NativeSymbol("test")) == "Symbol(test)";
  thisSymbolValue = uncurryThis2(SymbolPrototype.valueOf);
  symbolDescriptiveString = uncurryThis2(SymbolPrototype.toString);
  regexp = /^Symbol\((.*)\)[^)]+$/;
  replace = uncurryThis2("".replace);
  stringSlice2 = uncurryThis2("".slice);
  defineProperty(SymbolPrototype, "description", {
    configurable: true,
    get: function description() {
      var symbol = thisSymbolValue(this);
      if (hasOwn(EmptyStringDescriptionStore, symbol))
        return "";
      var string = symbolDescriptiveString(symbol);
      var desc = NATIVE_SYMBOL ? stringSlice2(string, 7, -1) : replace(string, regexp, "$1");
      return desc === "" ? void 0 : desc;
    }
  });
  $2({ global: true, constructor: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}
var EmptyStringDescriptionStore;
var SymbolWrapper;
var NATIVE_SYMBOL;
var thisSymbolValue;
var symbolDescriptiveString;
var regexp;
var replace;
var stringSlice2;

// node_modules/core-js/modules/es.symbol.iterator.js
var defineWellKnownSymbol = require_well_known_symbol_define();
defineWellKnownSymbol("iterator");

// node_modules/core-js/modules/es.symbol.to-primitive.js
var defineWellKnownSymbol2 = require_well_known_symbol_define();
var defineSymbolToPrimitive = require_symbol_define_to_primitive();
defineWellKnownSymbol2("toPrimitive");
defineSymbolToPrimitive();

// node_modules/core-js/modules/es.date.to-primitive.js
var hasOwn2 = require_has_own_property();
var defineBuiltIn2 = require_define_built_in();
var dateToPrimitive = require_date_to_primitive();
var wellKnownSymbol4 = require_well_known_symbol();
var TO_PRIMITIVE = wellKnownSymbol4("toPrimitive");
var DatePrototype = Date.prototype;
if (!hasOwn2(DatePrototype, TO_PRIMITIVE)) {
  defineBuiltIn2(DatePrototype, TO_PRIMITIVE, dateToPrimitive);
}

// node_modules/core-js/modules/es.number.constructor.js
"use strict";
var DESCRIPTORS2 = require_descriptors();
var global5 = require_global();
var uncurryThis3 = require_function_uncurry_this();
var isForced = require_is_forced();
var defineBuiltIn3 = require_define_built_in();
var hasOwn3 = require_has_own_property();
var inheritIfRequired = require_inherit_if_required();
var isPrototypeOf2 = require_object_is_prototype_of();
var isSymbol = require_is_symbol();
var toPrimitive = require_to_primitive();
var fails3 = require_fails();
var getOwnPropertyNames = require_object_get_own_property_names().f;
var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
var defineProperty2 = require_object_define_property().f;
var thisNumberValue = require_this_number_value();
var trim = require_string_trim().trim;
var NUMBER = "Number";
var NativeNumber = global5[NUMBER];
var NumberPrototype = NativeNumber.prototype;
var TypeError2 = global5.TypeError;
var arraySlice = uncurryThis3("".slice);
var charCodeAt = uncurryThis3("".charCodeAt);
var toNumeric = function(value) {
  var primValue = toPrimitive(value, "number");
  return typeof primValue == "bigint" ? primValue : toNumber(primValue);
};
var toNumber = function(argument) {
  var it = toPrimitive(argument, "number");
  var first, third, radix, maxCode, digits, length, index, code;
  if (isSymbol(it))
    throw TypeError2("Cannot convert a Symbol value to a number");
  if (typeof it == "string" && it.length > 2) {
    it = trim(it);
    first = charCodeAt(it, 0);
    if (first === 43 || first === 45) {
      third = charCodeAt(it, 2);
      if (third === 88 || third === 120)
        return NaN;
    } else if (first === 48) {
      switch (charCodeAt(it, 1)) {
        case 66:
        case 98:
          radix = 2;
          maxCode = 49;
          break;
        case 79:
        case 111:
          radix = 8;
          maxCode = 55;
          break;
        default:
          return +it;
      }
      digits = arraySlice(it, 2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = charCodeAt(digits, index);
        if (code < 48 || code > maxCode)
          return NaN;
      }
      return parseInt(digits, radix);
    }
  }
  return +it;
};
if (isForced(NUMBER, !NativeNumber(" 0o1") || !NativeNumber("0b1") || NativeNumber("+0x1"))) {
  NumberWrapper = function Number2(value) {
    var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
    var dummy = this;
    return isPrototypeOf2(NumberPrototype, dummy) && fails3(function() {
      thisNumberValue(dummy);
    }) ? inheritIfRequired(Object(n), dummy, NumberWrapper) : n;
  };
  for (keys2 = DESCRIPTORS2 ? getOwnPropertyNames(NativeNumber) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), j = 0; keys2.length > j; j++) {
    if (hasOwn3(NativeNumber, key = keys2[j]) && !hasOwn3(NumberWrapper, key)) {
      defineProperty2(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  defineBuiltIn3(global5, NUMBER, NumberWrapper, { constructor: true });
}
var NumberWrapper;
var keys2;
var j;
var key;

// node_modules/@storybook/instrumenter/dist/esm/instrumenter.js
var import_es_array_iterator2 = __toModule(require_es_array_iterator());

// node_modules/core-js/modules/es.map.js
require_es_map_constructor();

// node_modules/core-js/modules/es.array.filter.js
"use strict";
var $3 = require_export();
var $filter = require_array_iteration().filter;
var arrayMethodHasSpeciesSupport2 = require_array_method_has_species_support();
var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport2("filter");
$3({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
  }
});

// node_modules/core-js/modules/es.array.from.js
var $4 = require_export();
var from = require_array_from();
var checkCorrectnessOfIteration = require_check_correctness_of_iteration();
var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function(iterable) {
  Array.from(iterable);
});
$4({ target: "Array", stat: true, forced: INCORRECT_ITERATION }, {
  from
});

// node_modules/core-js/modules/es.object.assign.js
var $5 = require_export();
var assign = require_object_assign();
$5({ target: "Object", stat: true, arity: 2, forced: Object.assign !== assign }, {
  assign
});

// node_modules/core-js/modules/es.array.map.js
"use strict";
var $6 = require_export();
var $map = require_array_iteration().map;
var arrayMethodHasSpeciesSupport3 = require_array_method_has_species_support();
var HAS_SPECIES_SUPPORT2 = arrayMethodHasSpeciesSupport3("map");
$6({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT2 }, {
  map: function map(callbackfn) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
  }
});

// node_modules/core-js/modules/es.array.find-index.js
"use strict";
var $7 = require_export();
var $findIndex = require_array_iteration().findIndex;
var addToUnscopables = require_add_to_unscopables();
var FIND_INDEX = "findIndex";
var SKIPS_HOLES = true;
if (FIND_INDEX in [])
  Array(1)[FIND_INDEX](function() {
    SKIPS_HOLES = false;
  });
$7({ target: "Array", proto: true, forced: SKIPS_HOLES }, {
  findIndex: function findIndex(callbackfn) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
  }
});
addToUnscopables(FIND_INDEX);

// node_modules/core-js/modules/es.array.slice.js
"use strict";
var $8 = require_export();
var isArray2 = require_is_array();
var isConstructor = require_is_constructor();
var isObject2 = require_is_object();
var toAbsoluteIndex = require_to_absolute_index();
var lengthOfArrayLike2 = require_length_of_array_like();
var toIndexedObject = require_to_indexed_object();
var createProperty2 = require_create_property();
var wellKnownSymbol5 = require_well_known_symbol();
var arrayMethodHasSpeciesSupport4 = require_array_method_has_species_support();
var nativeSlice = require_array_slice();
var HAS_SPECIES_SUPPORT3 = arrayMethodHasSpeciesSupport4("slice");
var SPECIES = wellKnownSymbol5("species");
var $Array = Array;
var max2 = Math.max;
$8({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT3 }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = lengthOfArrayLike2(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === void 0 ? length : end, length);
    var Constructor, result, n;
    if (isArray2(O)) {
      Constructor = O.constructor;
      if (isConstructor(Constructor) && (Constructor === $Array || isArray2(Constructor.prototype))) {
        Constructor = void 0;
      } else if (isObject2(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null)
          Constructor = void 0;
      }
      if (Constructor === $Array || Constructor === void 0) {
        return nativeSlice(O, k, fin);
      }
    }
    result = new (Constructor === void 0 ? $Array : Constructor)(max2(fin - k, 0));
    for (n = 0; k < fin; k++, n++)
      if (k in O)
        createProperty2(result, n, O[k]);
    result.length = n;
    return result;
  }
});

// node_modules/core-js/modules/es.array.find.js
"use strict";
var $9 = require_export();
var $find = require_array_iteration().find;
var addToUnscopables2 = require_add_to_unscopables();
var FIND = "find";
var SKIPS_HOLES2 = true;
if (FIND in [])
  Array(1)[FIND](function() {
    SKIPS_HOLES2 = false;
  });
$9({ target: "Array", proto: true, forced: SKIPS_HOLES2 }, {
  find: function find(callbackfn) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
  }
});
addToUnscopables2(FIND);

// node_modules/core-js/modules/es.object.values.js
var $10 = require_export();
var $values = require_object_to_array().values;
$10({ target: "Object", stat: true }, {
  values: function values(O) {
    return $values(O);
  }
});

// node_modules/core-js/modules/web.dom-collections.for-each.js
var global6 = require_global();
var DOMIterables2 = require_dom_iterables();
var DOMTokenListPrototype2 = require_dom_token_list_prototype();
var forEach = require_array_for_each();
var createNonEnumerableProperty2 = require_create_non_enumerable_property();
var handlePrototype2 = function(CollectionPrototype) {
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach)
    try {
      createNonEnumerableProperty2(CollectionPrototype, "forEach", forEach);
    } catch (error2) {
      CollectionPrototype.forEach = forEach;
    }
};
for (var COLLECTION_NAME in DOMIterables2) {
  if (DOMIterables2[COLLECTION_NAME]) {
    handlePrototype2(global6[COLLECTION_NAME] && global6[COLLECTION_NAME].prototype);
  }
}
handlePrototype2(DOMTokenListPrototype2);

// node_modules/core-js/modules/es.object.entries.js
var $11 = require_export();
var $entries = require_object_to_array().entries;
$11({ target: "Object", stat: true }, {
  entries: function entries(O) {
    return $entries(O);
  }
});

// node_modules/core-js/modules/es.object.keys.js
var $12 = require_export();
var toObject2 = require_to_object();
var nativeKeys = require_object_keys();
var fails4 = require_fails();
var FAILS_ON_PRIMITIVES = fails4(function() {
  nativeKeys(1);
});
$12({ target: "Object", stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject2(it));
  }
});

// node_modules/core-js/modules/es.promise.js
require_es_promise_constructor();
require_es_promise_all();
require_es_promise_catch();
require_es_promise_race();
require_es_promise_reject();
require_es_promise_resolve();

// node_modules/core-js/modules/es.function.name.js
var DESCRIPTORS3 = require_descriptors();
var FUNCTION_NAME_EXISTS = require_function_name().EXISTS;
var uncurryThis4 = require_function_uncurry_this();
var defineProperty3 = require_object_define_property().f;
var FunctionPrototype = Function.prototype;
var functionToString = uncurryThis4(FunctionPrototype.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec2 = uncurryThis4(nameRE.exec);
var NAME = "name";
if (DESCRIPTORS3 && !FUNCTION_NAME_EXISTS) {
  defineProperty3(FunctionPrototype, NAME, {
    configurable: true,
    get: function() {
      try {
        return regExpExec2(nameRE, functionToString(this))[1];
      } catch (error2) {
        return "";
      }
    }
  });
}

// node_modules/core-js/modules/es.array.includes.js
"use strict";
var $13 = require_export();
var $includes = require_array_includes().includes;
var fails5 = require_fails();
var addToUnscopables3 = require_add_to_unscopables();
var BROKEN_ON_SPARSE = fails5(function() {
  return !Array(1).includes();
});
$13({ target: "Array", proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : void 0);
  }
});
addToUnscopables3("includes");

// node_modules/core-js/modules/es.array.sort.js
"use strict";
var $14 = require_export();
var uncurryThis5 = require_function_uncurry_this();
var aCallable = require_a_callable();
var toObject3 = require_to_object();
var lengthOfArrayLike3 = require_length_of_array_like();
var deletePropertyOrThrow = require_delete_property_or_throw();
var toString5 = require_to_string();
var fails6 = require_fails();
var internalSort = require_array_sort();
var arrayMethodIsStrict = require_array_method_is_strict();
var FF = require_engine_ff_version();
var IE_OR_EDGE = require_engine_is_ie_or_edge();
var V8 = require_engine_v8_version();
var WEBKIT = require_engine_webkit_version();
var test = [];
var nativeSort = uncurryThis5(test.sort);
var push2 = uncurryThis5(test.push);
var FAILS_ON_UNDEFINED = fails6(function() {
  test.sort(void 0);
});
var FAILS_ON_NULL = fails6(function() {
  test.sort(null);
});
var STRICT_METHOD = arrayMethodIsStrict("sort");
var STABLE_SORT = !fails6(function() {
  if (V8)
    return V8 < 70;
  if (FF && FF > 3)
    return;
  if (IE_OR_EDGE)
    return true;
  if (WEBKIT)
    return WEBKIT < 603;
  var result = "";
  var code, chr, value, index;
  for (code = 65; code < 76; code++) {
    chr = String.fromCharCode(code);
    switch (code) {
      case 66:
      case 69:
      case 70:
      case 72:
        value = 3;
        break;
      case 68:
      case 71:
        value = 4;
        break;
      default:
        value = 2;
    }
    for (index = 0; index < 47; index++) {
      test.push({ k: chr + index, v: value });
    }
  }
  test.sort(function(a, b) {
    return b.v - a.v;
  });
  for (index = 0; index < test.length; index++) {
    chr = test[index].k.charAt(0);
    if (result.charAt(result.length - 1) !== chr)
      result += chr;
  }
  return result !== "DGBEFHACIJK";
});
var FORCED2 = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;
var getSortCompare = function(comparefn) {
  return function(x, y) {
    if (y === void 0)
      return -1;
    if (x === void 0)
      return 1;
    if (comparefn !== void 0)
      return +comparefn(x, y) || 0;
    return toString5(x) > toString5(y) ? 1 : -1;
  };
};
$14({ target: "Array", proto: true, forced: FORCED2 }, {
  sort: function sort(comparefn) {
    if (comparefn !== void 0)
      aCallable(comparefn);
    var array = toObject3(this);
    if (STABLE_SORT)
      return comparefn === void 0 ? nativeSort(array) : nativeSort(array, comparefn);
    var items = [];
    var arrayLength = lengthOfArrayLike3(array);
    var itemsLength, index;
    for (index = 0; index < arrayLength; index++) {
      if (index in array)
        push2(items, array[index]);
    }
    internalSort(items, getSortCompare(comparefn));
    itemsLength = lengthOfArrayLike3(items);
    index = 0;
    while (index < itemsLength)
      array[index] = items[index++];
    while (index < arrayLength)
      deletePropertyOrThrow(array, index++);
    return array;
  }
});

// node_modules/core-js/modules/es.string.includes.js
"use strict";
var $15 = require_export();
var uncurryThis6 = require_function_uncurry_this();
var notARegExp = require_not_a_regexp();
var requireObjectCoercible2 = require_require_object_coercible();
var toString6 = require_to_string();
var correctIsRegExpLogic = require_correct_is_regexp_logic();
var stringIndexOf2 = uncurryThis6("".indexOf);
$15({ target: "String", proto: true, forced: !correctIsRegExpLogic("includes") }, {
  includes: function includes2(searchString) {
    return !!~stringIndexOf2(toString6(requireObjectCoercible2(this)), toString6(notARegExp(searchString)), arguments.length > 1 ? arguments[1] : void 0);
  }
});

// node_modules/@storybook/instrumenter/dist/esm/instrumenter.js
var import_es_regexp_exec2 = __toModule(require_es_regexp_exec());

// node_modules/core-js/modules/es.string.search.js
"use strict";
var call2 = require_function_call();
var fixRegExpWellKnownSymbolLogic2 = require_fix_regexp_well_known_symbol_logic();
var anObject2 = require_an_object();
var isNullOrUndefined2 = require_is_null_or_undefined();
var requireObjectCoercible3 = require_require_object_coercible();
var sameValue = require_same_value();
var toString7 = require_to_string();
var getMethod2 = require_get_method();
var regExpExec3 = require_regexp_exec_abstract();
fixRegExpWellKnownSymbolLogic2("search", function(SEARCH, nativeSearch, maybeCallNative) {
  return [
    function search(regexp) {
      var O = requireObjectCoercible3(this);
      var searcher = isNullOrUndefined2(regexp) ? void 0 : getMethod2(regexp, SEARCH);
      return searcher ? call2(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString7(O));
    },
    function(string) {
      var rx = anObject2(this);
      var S = toString7(string);
      var res = maybeCallNative(nativeSearch, rx, S);
      if (res.done)
        return res.value;
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0))
        rx.lastIndex = 0;
      var result = regExpExec3(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex))
        rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});

// node_modules/@storybook/addons/dist/esm/index.js
var import_global2 = __toModule(require_window());

// node_modules/core-js/modules/es.object.freeze.js
var $16 = require_export();
var FREEZING = require_freezing();
var fails7 = require_fails();
var isObject3 = require_is_object();
var onFreeze = require_internal_metadata().onFreeze;
var $freeze = Object.freeze;
var FAILS_ON_PRIMITIVES2 = fails7(function() {
  $freeze(1);
});
$16({ target: "Object", stat: true, forced: FAILS_ON_PRIMITIVES2, sham: !FREEZING }, {
  freeze: function freeze(it) {
    return $freeze && isObject3(it) ? $freeze(onFreeze(it)) : it;
  }
});

// node_modules/core-js/modules/es.regexp.to-string.js
"use strict";
var PROPER_FUNCTION_NAME = require_function_name().PROPER;
var defineBuiltIn4 = require_define_built_in();
var anObject3 = require_an_object();
var $toString = require_to_string();
var fails8 = require_fails();
var getRegExpFlags = require_regexp_get_flags();
var TO_STRING = "toString";
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];
var NOT_GENERIC = fails8(function() {
  return nativeToString.call({ source: "a", flags: "b" }) != "/a/b";
});
var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name != TO_STRING;
if (NOT_GENERIC || INCORRECT_NAME) {
  defineBuiltIn4(RegExp.prototype, TO_STRING, function toString8() {
    var R = anObject3(this);
    var pattern = $toString(R.source);
    var flags = $toString(getRegExpFlags(R));
    return "/" + pattern + "/" + flags;
  }, { unsafe: true });
}

// node_modules/core-js/modules/web.immediate.js
require_web_clear_immediate();
require_web_set_immediate();

// node_modules/@storybook/channels/dist/esm/index.js
var import_util_deprecate = __toModule(require_browser());

// node_modules/ts-dedent/esm/index.js
function dedent(templ) {
  var values2 = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    values2[_i - 1] = arguments[_i];
  }
  var strings = Array.from(typeof templ === "string" ? [templ] : templ);
  strings[strings.length - 1] = strings[strings.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var indentLengths = strings.reduce(function(arr, str) {
    var matches = str.match(/\n([\t ]+|(?!\s).)/g);
    if (matches) {
      return arr.concat(matches.map(function(match) {
        var _a, _b;
        return (_b = (_a = match.match(/[\t ]/g)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
      }));
    }
    return arr;
  }, []);
  if (indentLengths.length) {
    var pattern_1 = new RegExp("\n[	 ]{" + Math.min.apply(Math, indentLengths) + "}", "g");
    strings = strings.map(function(str) {
      return str.replace(pattern_1, "\n");
    });
  }
  strings[0] = strings[0].replace(/^\r?\n/, "");
  var string = strings[0];
  values2.forEach(function(value, i) {
    var endentations = string.match(/(?:^|\n)( *)$/);
    var endentation = endentations ? endentations[1] : "";
    var indentedValue = value;
    if (typeof value === "string" && value.includes("\n")) {
      indentedValue = String(value).split("\n").map(function(str, i2) {
        return i2 === 0 ? str : "" + endentation + str;
      }).join("\n");
    }
    string += indentedValue + strings[i + 1];
  });
  return string;
}
var esm_default = dedent;

// node_modules/@storybook/channels/dist/esm/index.js
var _templateObject;
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
var generateRandomId = function generateRandomId2() {
  return Math.random().toString(16).slice(2);
};
var Channel = /* @__PURE__ */ function() {
  function Channel2() {
    var _this = this;
    var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, transport = _ref.transport, _ref$async = _ref.async, async = _ref$async === void 0 ? false : _ref$async;
    _classCallCheck(this, Channel2);
    this.isAsync = void 0;
    this.sender = generateRandomId();
    this.events = {};
    this.data = {};
    this.transport = void 0;
    this.addPeerListener = (0, import_util_deprecate.default)(function(eventName, listener) {
      _this.addListener(eventName, listener);
    }, esm_default(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      channel.addPeerListener is deprecated\n    "]))));
    this.isAsync = async;
    if (transport) {
      this.transport = transport;
      this.transport.setHandler(function(event) {
        return _this.handleEvent(event);
      });
    }
  }
  _createClass(Channel2, [{
    key: "hasTransport",
    get: function get() {
      return !!this.transport;
    }
  }, {
    key: "addListener",
    value: function addListener(eventName, listener) {
      this.events[eventName] = this.events[eventName] || [];
      this.events[eventName].push(listener);
    }
  }, {
    key: "emit",
    value: function emit(eventName) {
      var _this2 = this;
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var event = {
        type: eventName,
        args,
        from: this.sender
      };
      var options = {};
      if (args.length >= 1 && args[0] && args[0].options) {
        options = args[0].options;
      }
      var handler = function handler2() {
        if (_this2.transport) {
          _this2.transport.send(event, options);
        }
        _this2.handleEvent(event);
      };
      if (this.isAsync) {
        setImmediate(handler);
      } else {
        handler();
      }
    }
  }, {
    key: "last",
    value: function last(eventName) {
      return this.data[eventName];
    }
  }, {
    key: "eventNames",
    value: function eventNames() {
      return Object.keys(this.events);
    }
  }, {
    key: "listenerCount",
    value: function listenerCount(eventName) {
      var listeners = this.listeners(eventName);
      return listeners ? listeners.length : 0;
    }
  }, {
    key: "listeners",
    value: function listeners(eventName) {
      var listeners2 = this.events[eventName];
      return listeners2 || void 0;
    }
  }, {
    key: "once",
    value: function once3(eventName, listener) {
      var onceListener = this.onceListener(eventName, listener);
      this.addListener(eventName, onceListener);
    }
  }, {
    key: "removeAllListeners",
    value: function removeAllListeners(eventName) {
      if (!eventName) {
        this.events = {};
      } else if (this.events[eventName]) {
        delete this.events[eventName];
      }
    }
  }, {
    key: "removeListener",
    value: function removeListener(eventName, listener) {
      var listeners = this.listeners(eventName);
      if (listeners) {
        this.events[eventName] = listeners.filter(function(l) {
          return l !== listener;
        });
      }
    }
  }, {
    key: "on",
    value: function on(eventName, listener) {
      this.addListener(eventName, listener);
    }
  }, {
    key: "off",
    value: function off(eventName, listener) {
      this.removeListener(eventName, listener);
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      var listeners = this.listeners(event.type);
      if (listeners && listeners.length) {
        listeners.forEach(function(fn) {
          fn.apply(event, event.args);
        });
      }
      this.data[event.type] = event.args;
    }
  }, {
    key: "onceListener",
    value: function onceListener(eventName, listener) {
      var _this3 = this;
      var onceListener2 = function onceListener3() {
        _this3.removeListener(eventName, onceListener3);
        return listener.apply(void 0, arguments);
      };
      return onceListener2;
    }
  }]);
  return Channel2;
}();
var esm_default2 = Channel;

// node_modules/@storybook/addons/dist/esm/storybook-channel-mock.js
function mockChannel() {
  var transport = {
    setHandler: function setHandler() {
    },
    send: function send() {
    }
  };
  return new esm_default2({
    transport
  });
}

// node_modules/@storybook/addons/dist/esm/types.js
var types;
(function(types2) {
  types2["TAB"] = "tab";
  types2["PANEL"] = "panel";
  types2["TOOL"] = "tool";
  types2["TOOLEXTRA"] = "toolextra";
  types2["PREVIEW"] = "preview";
  types2["NOTES_ELEMENT"] = "notes-element";
})(types || (types = {}));

// node_modules/@storybook/addons/dist/esm/index.js
function _defineProperties2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass2(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties2(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties2(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _classCallCheck2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var AddonStore = /* @__PURE__ */ _createClass2(function AddonStore2() {
  var _this = this;
  _classCallCheck2(this, AddonStore2);
  this.loaders = {};
  this.elements = {};
  this.config = {};
  this.channel = void 0;
  this.serverChannel = void 0;
  this.promise = void 0;
  this.resolve = void 0;
  this.getChannel = function() {
    if (!_this.channel) {
      _this.setChannel(mockChannel());
    }
    return _this.channel;
  };
  this.getServerChannel = function() {
    if (!_this.serverChannel) {
      throw new Error("Accessing non-existent serverChannel");
    }
    return _this.serverChannel;
  };
  this.ready = function() {
    return _this.promise;
  };
  this.hasChannel = function() {
    return !!_this.channel;
  };
  this.hasServerChannel = function() {
    return !!_this.serverChannel;
  };
  this.setChannel = function(channel) {
    _this.channel = channel;
    _this.resolve();
  };
  this.setServerChannel = function(channel) {
    _this.serverChannel = channel;
  };
  this.getElements = function(type) {
    if (!_this.elements[type]) {
      _this.elements[type] = {};
    }
    return _this.elements[type];
  };
  this.addPanel = function(name, options) {
    _this.add(name, Object.assign({
      type: types.PANEL
    }, options));
  };
  this.add = function(name, addon) {
    var type = addon.type;
    var collection = _this.getElements(type);
    collection[name] = Object.assign({
      id: name
    }, addon);
  };
  this.setConfig = function(value) {
    Object.assign(_this.config, value);
  };
  this.getConfig = function() {
    return _this.config;
  };
  this.register = function(name, registerCallback) {
    if (_this.loaders[name]) {
      logger.warn("".concat(name, " was loaded twice, this could have bad side-effects"));
    }
    _this.loaders[name] = registerCallback;
  };
  this.loadAddons = function(api) {
    Object.values(_this.loaders).forEach(function(value) {
      return value(api);
    });
  };
  this.promise = new Promise(function(res) {
    _this.resolve = function() {
      return res(_this.getChannel());
    };
  });
});
var KEY = "__STORYBOOK_ADDONS";
function getAddonsStore() {
  if (!import_global2.default[KEY]) {
    import_global2.default[KEY] = new AddonStore();
  }
  return import_global2.default[KEY];
}
var addons = getAddonsStore();

// node_modules/@storybook/core-events/dist/esm/index.js
var events;
(function(events2) {
  events2["CHANNEL_CREATED"] = "channelCreated";
  events2["CONFIG_ERROR"] = "configError";
  events2["STORY_INDEX_INVALIDATED"] = "storyIndexInvalidated";
  events2["STORY_SPECIFIED"] = "storySpecified";
  events2["SET_STORIES"] = "setStories";
  events2["SET_CURRENT_STORY"] = "setCurrentStory";
  events2["CURRENT_STORY_WAS_SET"] = "currentStoryWasSet";
  events2["FORCE_RE_RENDER"] = "forceReRender";
  events2["FORCE_REMOUNT"] = "forceRemount";
  events2["PRELOAD_STORIES"] = "preloadStories";
  events2["STORY_PREPARED"] = "storyPrepared";
  events2["STORY_CHANGED"] = "storyChanged";
  events2["STORY_UNCHANGED"] = "storyUnchanged";
  events2["STORY_RENDERED"] = "storyRendered";
  events2["STORY_MISSING"] = "storyMissing";
  events2["STORY_ERRORED"] = "storyErrored";
  events2["STORY_THREW_EXCEPTION"] = "storyThrewException";
  events2["STORY_RENDER_PHASE_CHANGED"] = "storyRenderPhaseChanged";
  events2["UPDATE_STORY_ARGS"] = "updateStoryArgs";
  events2["STORY_ARGS_UPDATED"] = "storyArgsUpdated";
  events2["RESET_STORY_ARGS"] = "resetStoryArgs";
  events2["SET_GLOBALS"] = "setGlobals";
  events2["UPDATE_GLOBALS"] = "updateGlobals";
  events2["GLOBALS_UPDATED"] = "globalsUpdated";
  events2["REGISTER_SUBSCRIPTION"] = "registerSubscription";
  events2["PREVIEW_KEYDOWN"] = "previewKeydown";
  events2["SELECT_STORY"] = "selectStory";
  events2["STORIES_COLLAPSE_ALL"] = "storiesCollapseAll";
  events2["STORIES_EXPAND_ALL"] = "storiesExpandAll";
  events2["DOCS_RENDERED"] = "docsRendered";
  events2["SHARED_STATE_CHANGED"] = "sharedStateChanged";
  events2["SHARED_STATE_SET"] = "sharedStateSet";
  events2["NAVIGATE_URL"] = "navigateUrl";
  events2["UPDATE_QUERY_PARAMS"] = "updateQueryParams";
})(events || (events = {}));
var CHANNEL_CREATED = events.CHANNEL_CREATED;
var CONFIG_ERROR = events.CONFIG_ERROR;
var STORY_INDEX_INVALIDATED = events.STORY_INDEX_INVALIDATED;
var STORY_SPECIFIED = events.STORY_SPECIFIED;
var SET_STORIES = events.SET_STORIES;
var SET_CURRENT_STORY = events.SET_CURRENT_STORY;
var CURRENT_STORY_WAS_SET = events.CURRENT_STORY_WAS_SET;
var FORCE_RE_RENDER = events.FORCE_RE_RENDER;
var FORCE_REMOUNT = events.FORCE_REMOUNT;
var STORY_PREPARED = events.STORY_PREPARED;
var STORY_CHANGED = events.STORY_CHANGED;
var STORY_UNCHANGED = events.STORY_UNCHANGED;
var PRELOAD_STORIES = events.PRELOAD_STORIES;
var STORY_RENDERED = events.STORY_RENDERED;
var STORY_MISSING = events.STORY_MISSING;
var STORY_ERRORED = events.STORY_ERRORED;
var STORY_THREW_EXCEPTION = events.STORY_THREW_EXCEPTION;
var STORY_RENDER_PHASE_CHANGED = events.STORY_RENDER_PHASE_CHANGED;
var UPDATE_STORY_ARGS = events.UPDATE_STORY_ARGS;
var STORY_ARGS_UPDATED = events.STORY_ARGS_UPDATED;
var RESET_STORY_ARGS = events.RESET_STORY_ARGS;
var SET_GLOBALS = events.SET_GLOBALS;
var UPDATE_GLOBALS = events.UPDATE_GLOBALS;
var GLOBALS_UPDATED = events.GLOBALS_UPDATED;
var REGISTER_SUBSCRIPTION = events.REGISTER_SUBSCRIPTION;
var PREVIEW_KEYDOWN = events.PREVIEW_KEYDOWN;
var SELECT_STORY = events.SELECT_STORY;
var STORIES_COLLAPSE_ALL = events.STORIES_COLLAPSE_ALL;
var STORIES_EXPAND_ALL = events.STORIES_EXPAND_ALL;
var DOCS_RENDERED = events.DOCS_RENDERED;
var SHARED_STATE_CHANGED = events.SHARED_STATE_CHANGED;
var SHARED_STATE_SET = events.SHARED_STATE_SET;
var NAVIGATE_URL = events.NAVIGATE_URL;
var UPDATE_QUERY_PARAMS = events.UPDATE_QUERY_PARAMS;
var IGNORED_EXCEPTION = new Error("ignoredException");

// node_modules/@storybook/instrumenter/dist/esm/instrumenter.js
var import_global3 = __toModule(require_window());

// node_modules/@storybook/instrumenter/dist/esm/types.js
var CallStates;
(function(CallStates2) {
  CallStates2["DONE"] = "done";
  CallStates2["ERROR"] = "error";
  CallStates2["ACTIVE"] = "active";
  CallStates2["WAITING"] = "waiting";
})(CallStates || (CallStates = {}));

// node_modules/@storybook/instrumenter/dist/esm/instrumenter.js
var _global$FEATURES;
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _classCallCheck3(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties3(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass3(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties3(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties3(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
var EVENTS = {
  CALL: "instrumenter/call",
  SYNC: "instrumenter/sync",
  START: "instrumenter/start",
  BACK: "instrumenter/back",
  GOTO: "instrumenter/goto",
  NEXT: "instrumenter/next",
  END: "instrumenter/end"
};
var debuggerDisabled = ((_global$FEATURES = import_global3.default.FEATURES) === null || _global$FEATURES === void 0 ? void 0 : _global$FEATURES.interactionsDebugger) !== true;
var controlsDisabled = {
  debugger: !debuggerDisabled,
  start: false,
  back: false,
  goto: false,
  next: false,
  end: false
};
var alreadyCompletedException = new Error("This function ran after the play function completed. Did you forget to `await` it?");
var isObject4 = function isObject5(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
};
var isModule = function isModule2(o) {
  return Object.prototype.toString.call(o) === "[object Module]";
};
var isInstrumentable = function isInstrumentable2(o) {
  if (!isObject4(o) && !isModule(o))
    return false;
  if (o.constructor === void 0)
    return true;
  var proto = o.constructor.prototype;
  if (!isObject4(proto))
    return false;
  if (Object.prototype.hasOwnProperty.call(proto, "isPrototypeOf") === false)
    return false;
  return true;
};
var construct = function construct2(obj) {
  try {
    return new obj.constructor();
  } catch (e) {
    return {};
  }
};
var getInitialState = function getInitialState2() {
  return {
    renderPhase: void 0,
    isDebugging: false,
    isPlaying: false,
    isLocked: false,
    cursor: 0,
    calls: [],
    shadowCalls: [],
    callRefsByResult: new Map(),
    chainedCallIds: new Set(),
    parentId: void 0,
    playUntil: void 0,
    resolvers: {},
    syncTimeout: void 0,
    forwardedException: void 0
  };
};
var getRetainedState = function getRetainedState2(state) {
  var isDebugging = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var calls = (isDebugging ? state.shadowCalls : state.calls).filter(function(call3) {
    return call3.retain;
  });
  if (!calls.length)
    return void 0;
  var callRefsByResult = new Map(Array.from(state.callRefsByResult.entries()).filter(function(_ref) {
    var _ref2 = _slicedToArray(_ref, 2), ref = _ref2[1];
    return ref.retain;
  }));
  return {
    cursor: calls.length,
    calls,
    callRefsByResult
  };
};
var Instrumenter = /* @__PURE__ */ function() {
  function Instrumenter2() {
    var _this = this;
    _classCallCheck3(this, Instrumenter2);
    this.channel = void 0;
    this.initialized = false;
    this.state = void 0;
    this.channel = addons.getChannel();
    this.state = import_global3.default.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ || {};
    var resetState = function resetState2(_ref3) {
      var storyId = _ref3.storyId, _ref3$isPlaying = _ref3.isPlaying, isPlaying = _ref3$isPlaying === void 0 ? true : _ref3$isPlaying, _ref3$isDebugging = _ref3.isDebugging, isDebugging = _ref3$isDebugging === void 0 ? false : _ref3$isDebugging;
      var state = _this.getState(storyId);
      _this.setState(storyId, Object.assign({}, getInitialState(), getRetainedState(state, isDebugging), {
        shadowCalls: isDebugging ? state.shadowCalls : [],
        chainedCallIds: isDebugging ? state.chainedCallIds : new Set(),
        playUntil: isDebugging ? state.playUntil : void 0,
        isPlaying,
        isDebugging
      }));
      if (!isDebugging)
        _this.sync(storyId);
    };
    this.channel.on(FORCE_REMOUNT, resetState);
    this.channel.on(STORY_RENDER_PHASE_CHANGED, function(_ref4) {
      var storyId = _ref4.storyId, newPhase = _ref4.newPhase;
      var _this$getState = _this.getState(storyId), isDebugging = _this$getState.isDebugging, forwardedException = _this$getState.forwardedException;
      _this.setState(storyId, {
        renderPhase: newPhase
      });
      if (newPhase === "playing") {
        resetState({
          storyId,
          isDebugging
        });
      }
      if (newPhase === "played") {
        _this.setState(storyId, {
          isLocked: false,
          isPlaying: false,
          isDebugging: false,
          forwardedException: void 0
        });
        if (forwardedException)
          throw forwardedException;
      }
    });
    this.channel.on(SET_CURRENT_STORY, function() {
      if (_this.initialized)
        _this.cleanup();
      else
        _this.initialized = true;
    });
    var start = function start2(_ref5) {
      var storyId = _ref5.storyId, playUntil = _ref5.playUntil;
      if (!_this.getState(storyId).isDebugging) {
        _this.setState(storyId, function(_ref6) {
          var calls = _ref6.calls;
          return {
            calls: [],
            shadowCalls: calls.map(function(call3) {
              return Object.assign({}, call3, {
                status: CallStates.WAITING
              });
            }),
            isDebugging: true
          };
        });
      }
      var log2 = _this.getLog(storyId);
      _this.setState(storyId, function(_ref7) {
        var _shadowCalls$slice$fi;
        var shadowCalls = _ref7.shadowCalls;
        var firstRowIndex = shadowCalls.findIndex(function(call3) {
          return call3.id === log2[0].callId;
        });
        return {
          playUntil: playUntil || ((_shadowCalls$slice$fi = shadowCalls.slice(0, firstRowIndex).filter(function(call3) {
            return call3.interceptable;
          }).slice(-1)[0]) === null || _shadowCalls$slice$fi === void 0 ? void 0 : _shadowCalls$slice$fi.id)
        };
      });
      _this.channel.emit(FORCE_REMOUNT, {
        storyId,
        isDebugging: true
      });
    };
    var back = function back2(_ref8) {
      var _log;
      var storyId = _ref8.storyId;
      var _this$getState2 = _this.getState(storyId), isDebugging = _this$getState2.isDebugging;
      var log2 = _this.getLog(storyId);
      var next3 = isDebugging ? log2.findIndex(function(_ref9) {
        var status = _ref9.status;
        return status === CallStates.WAITING;
      }) : log2.length;
      start({
        storyId,
        playUntil: (_log = log2[next3 - 2]) === null || _log === void 0 ? void 0 : _log.callId
      });
    };
    var goto = function goto2(_ref10) {
      var storyId = _ref10.storyId, callId = _ref10.callId;
      var _this$getState3 = _this.getState(storyId), calls = _this$getState3.calls, shadowCalls = _this$getState3.shadowCalls, resolvers = _this$getState3.resolvers;
      var call3 = calls.find(function(_ref11) {
        var id = _ref11.id;
        return id === callId;
      });
      var shadowCall = shadowCalls.find(function(_ref12) {
        var id = _ref12.id;
        return id === callId;
      });
      if (!call3 && shadowCall && Object.values(resolvers).length > 0) {
        var _this$getLog$find;
        var nextId = (_this$getLog$find = _this.getLog(storyId).find(function(c) {
          return c.status === CallStates.WAITING;
        })) === null || _this$getLog$find === void 0 ? void 0 : _this$getLog$find.callId;
        if (shadowCall.id !== nextId)
          _this.setState(storyId, {
            playUntil: shadowCall.id
          });
        Object.values(resolvers).forEach(function(resolve) {
          return resolve();
        });
      } else {
        start({
          storyId,
          playUntil: callId
        });
      }
    };
    var next2 = function next3(_ref13) {
      var storyId = _ref13.storyId;
      var _this$getState4 = _this.getState(storyId), resolvers = _this$getState4.resolvers;
      if (Object.values(resolvers).length > 0) {
        Object.values(resolvers).forEach(function(resolve) {
          return resolve();
        });
      } else {
        var _this$getLog$find2;
        var nextId = (_this$getLog$find2 = _this.getLog(storyId).find(function(c) {
          return c.status === CallStates.WAITING;
        })) === null || _this$getLog$find2 === void 0 ? void 0 : _this$getLog$find2.callId;
        if (nextId)
          start({
            storyId,
            playUntil: nextId
          });
        else
          end({
            storyId
          });
      }
    };
    var end = function end2(_ref14) {
      var storyId = _ref14.storyId;
      _this.setState(storyId, {
        playUntil: void 0,
        isDebugging: false
      });
      Object.values(_this.getState(storyId).resolvers).forEach(function(resolve) {
        return resolve();
      });
    };
    this.channel.on(EVENTS.START, start);
    this.channel.on(EVENTS.BACK, back);
    this.channel.on(EVENTS.GOTO, goto);
    this.channel.on(EVENTS.NEXT, next2);
    this.channel.on(EVENTS.END, end);
  }
  _createClass3(Instrumenter2, [{
    key: "getState",
    value: function getState(storyId) {
      return this.state[storyId] || getInitialState();
    }
  }, {
    key: "setState",
    value: function setState(storyId, update) {
      var state = this.getState(storyId);
      var patch = typeof update === "function" ? update(state) : update;
      this.state = Object.assign({}, this.state, _defineProperty({}, storyId, Object.assign({}, state, patch)));
      import_global3.default.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ = this.state;
    }
  }, {
    key: "cleanup",
    value: function cleanup() {
      this.state = Object.entries(this.state).reduce(function(acc, _ref15) {
        var _ref16 = _slicedToArray(_ref15, 2), storyId = _ref16[0], state = _ref16[1];
        var retainedState = getRetainedState(state);
        if (!retainedState)
          return acc;
        acc[storyId] = Object.assign(getInitialState(), retainedState);
        return acc;
      }, {});
      this.channel.emit(EVENTS.SYNC, {
        controlStates: controlsDisabled,
        logItems: []
      });
      import_global3.default.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ = this.state;
    }
  }, {
    key: "getLog",
    value: function getLog(storyId) {
      var _this$getState5 = this.getState(storyId), calls = _this$getState5.calls, shadowCalls = _this$getState5.shadowCalls;
      var merged = _toConsumableArray(shadowCalls);
      calls.forEach(function(call3, index) {
        merged[index] = call3;
      });
      var seen = new Set();
      return merged.reduceRight(function(acc, call3) {
        call3.args.forEach(function(arg) {
          if (arg !== null && arg !== void 0 && arg.__callId__) {
            seen.add(arg.__callId__);
          }
        });
        call3.path.forEach(function(node) {
          if (node.__callId__) {
            seen.add(node.__callId__);
          }
        });
        if (call3.interceptable && !seen.has(call3.id)) {
          acc.unshift({
            callId: call3.id,
            status: call3.status
          });
          seen.add(call3.id);
        }
        return acc;
      }, []);
    }
  }, {
    key: "instrument",
    value: function instrument2(obj, options) {
      var _this2 = this;
      if (!isInstrumentable(obj))
        return obj;
      var _options$mutate = options.mutate, mutate = _options$mutate === void 0 ? false : _options$mutate, _options$path = options.path, path = _options$path === void 0 ? [] : _options$path;
      return Object.keys(obj).reduce(function(acc, key) {
        var value = obj[key];
        if (typeof value !== "function") {
          acc[key] = _this2.instrument(value, Object.assign({}, options, {
            path: path.concat(key)
          }));
          return acc;
        }
        if (typeof value.__originalFn__ === "function") {
          acc[key] = value;
          return acc;
        }
        acc[key] = function() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return _this2.track(key, value, args, options);
        };
        acc[key].__originalFn__ = value;
        Object.defineProperty(acc[key], "name", {
          value: key,
          writable: false
        });
        if (Object.keys(value).length > 0) {
          Object.assign(acc[key], _this2.instrument(Object.assign({}, value), Object.assign({}, options, {
            path: path.concat(key)
          })));
        }
        return acc;
      }, mutate ? obj : construct(obj));
    }
  }, {
    key: "track",
    value: function track(method, fn, args, options) {
      var _args$, _global$window$__STOR, _global$window$__STOR2, _global$window$__STOR3;
      var storyId = (args === null || args === void 0 ? void 0 : (_args$ = args[0]) === null || _args$ === void 0 ? void 0 : _args$.__storyId__) || ((_global$window$__STOR = import_global3.default.window.__STORYBOOK_PREVIEW__) === null || _global$window$__STOR === void 0 ? void 0 : (_global$window$__STOR2 = _global$window$__STOR.urlStore) === null || _global$window$__STOR2 === void 0 ? void 0 : (_global$window$__STOR3 = _global$window$__STOR2.selection) === null || _global$window$__STOR3 === void 0 ? void 0 : _global$window$__STOR3.storyId);
      var _this$getState6 = this.getState(storyId), cursor = _this$getState6.cursor, parentId = _this$getState6.parentId;
      this.setState(storyId, {
        cursor: cursor + 1
      });
      var id = "".concat(parentId || storyId, " [").concat(cursor, "] ").concat(method);
      var _options$path2 = options.path, path = _options$path2 === void 0 ? [] : _options$path2, _options$intercept = options.intercept, intercept = _options$intercept === void 0 ? false : _options$intercept, _options$retain = options.retain, retain = _options$retain === void 0 ? false : _options$retain;
      var interceptable = typeof intercept === "function" ? intercept(method, path) : intercept;
      var call3 = {
        id,
        parentId,
        storyId,
        cursor,
        path,
        method,
        args,
        interceptable,
        retain
      };
      var result = (interceptable ? this.intercept : this.invoke).call(this, fn, call3, options);
      return this.instrument(result, Object.assign({}, options, {
        mutate: true,
        path: [{
          __callId__: call3.id
        }]
      }));
    }
  }, {
    key: "intercept",
    value: function intercept(fn, call3, options) {
      var _this3 = this;
      var _this$getState7 = this.getState(call3.storyId), chainedCallIds = _this$getState7.chainedCallIds, isDebugging = _this$getState7.isDebugging, playUntil = _this$getState7.playUntil;
      var isChainedUpon = chainedCallIds.has(call3.id);
      if (!isDebugging || isChainedUpon || playUntil) {
        if (playUntil === call3.id) {
          this.setState(call3.storyId, {
            playUntil: void 0
          });
        }
        return this.invoke(fn, call3, options);
      }
      return new Promise(function(resolve) {
        _this3.setState(call3.storyId, function(_ref17) {
          var resolvers = _ref17.resolvers;
          return {
            isLocked: false,
            resolvers: Object.assign({}, resolvers, _defineProperty({}, call3.id, resolve))
          };
        });
      }).then(function() {
        _this3.setState(call3.storyId, function(state) {
          var _state$resolvers = state.resolvers, _call$id = call3.id, _ = _state$resolvers[_call$id], resolvers = _objectWithoutProperties(_state$resolvers, [_call$id].map(_toPropertyKey));
          return {
            isLocked: true,
            resolvers
          };
        });
        return _this3.invoke(fn, call3, options);
      });
    }
  }, {
    key: "invoke",
    value: function invoke(fn, call3, options) {
      var _this4 = this;
      var _this$getState8 = this.getState(call3.storyId), callRefsByResult = _this$getState8.callRefsByResult, forwardedException = _this$getState8.forwardedException, renderPhase = _this$getState8.renderPhase;
      var info2 = Object.assign({}, call3, {
        args: call3.args.map(function(arg) {
          if (callRefsByResult.has(arg)) {
            return callRefsByResult.get(arg);
          }
          if (arg instanceof import_global3.default.window.HTMLElement) {
            var prefix = arg.prefix, localName = arg.localName, id = arg.id, classList = arg.classList, innerText = arg.innerText;
            var classNames = Array.from(classList);
            return {
              __element__: {
                prefix,
                localName,
                id,
                classNames,
                innerText
              }
            };
          }
          return arg;
        })
      });
      call3.path.forEach(function(ref) {
        if (ref !== null && ref !== void 0 && ref.__callId__) {
          _this4.setState(call3.storyId, function(_ref18) {
            var chainedCallIds = _ref18.chainedCallIds;
            return {
              chainedCallIds: new Set(Array.from(chainedCallIds).concat(ref.__callId__))
            };
          });
        }
      });
      var handleException = function handleException2(e) {
        if (e instanceof Error) {
          var name = e.name, message = e.message, stack = e.stack;
          var exception = {
            name,
            message,
            stack
          };
          _this4.update(Object.assign({}, info2, {
            status: CallStates.ERROR,
            exception
          }));
          _this4.setState(call3.storyId, function(state) {
            return {
              callRefsByResult: new Map([].concat(_toConsumableArray(Array.from(state.callRefsByResult.entries())), [[e, {
                __callId__: call3.id,
                retain: call3.retain
              }]]))
            };
          });
          if (call3.interceptable && e !== alreadyCompletedException) {
            throw IGNORED_EXCEPTION;
          }
          _this4.setState(call3.storyId, {
            forwardedException: e
          });
          return e;
        }
        throw e;
      };
      try {
        if (forwardedException) {
          this.setState(call3.storyId, {
            forwardedException: void 0
          });
          throw forwardedException;
        }
        if (renderPhase === "played" && !call3.retain) {
          throw alreadyCompletedException;
        }
        var finalArgs = options.getArgs ? options.getArgs(call3, this.getState(call3.storyId)) : call3.args;
        var result = fn.apply(void 0, _toConsumableArray(finalArgs.map(function(arg) {
          if (typeof arg !== "function" || Object.keys(arg).length)
            return arg;
          return function() {
            var _this4$getState = _this4.getState(call3.storyId), cursor = _this4$getState.cursor, parentId = _this4$getState.parentId;
            _this4.setState(call3.storyId, {
              cursor: 0,
              parentId: call3.id
            });
            var restore = function restore2() {
              return _this4.setState(call3.storyId, {
                cursor,
                parentId
              });
            };
            var res = arg.apply(void 0, arguments);
            if (res instanceof Promise)
              res.then(restore, restore);
            else
              restore();
            return res;
          };
        })));
        if (result && ["object", "function", "symbol"].includes(_typeof(result))) {
          this.setState(call3.storyId, function(state) {
            return {
              callRefsByResult: new Map([].concat(_toConsumableArray(Array.from(state.callRefsByResult.entries())), [[result, {
                __callId__: call3.id,
                retain: call3.retain
              }]]))
            };
          });
        }
        this.update(Object.assign({}, info2, {
          status: result instanceof Promise ? CallStates.ACTIVE : CallStates.DONE
        }));
        if (result instanceof Promise) {
          return result.then(function(value) {
            _this4.update(Object.assign({}, info2, {
              status: CallStates.DONE
            }));
            return value;
          }, handleException);
        }
        return result;
      } catch (e) {
        return handleException(e);
      }
    }
  }, {
    key: "update",
    value: function update(call3) {
      var _this5 = this;
      clearTimeout(this.getState(call3.storyId).syncTimeout);
      this.channel.emit(EVENTS.CALL, call3);
      this.setState(call3.storyId, function(_ref19) {
        var calls = _ref19.calls;
        var callsById = calls.concat(call3).reduce(function(a, c) {
          return Object.assign(a, _defineProperty({}, c.id, c));
        }, {});
        return {
          calls: Object.values(callsById).sort(function(a, b) {
            return a.id.localeCompare(b.id, void 0, {
              numeric: true
            });
          }),
          syncTimeout: setTimeout(function() {
            return _this5.sync(call3.storyId);
          }, 0)
        };
      });
    }
  }, {
    key: "sync",
    value: function sync(storyId) {
      var _this$getState9 = this.getState(storyId), isLocked = _this$getState9.isLocked, isPlaying = _this$getState9.isPlaying;
      var logItems = this.getLog(storyId);
      var hasActive = logItems.some(function(item) {
        return item.status === CallStates.ACTIVE;
      });
      if (debuggerDisabled || isLocked || hasActive || logItems.length === 0) {
        this.channel.emit(EVENTS.SYNC, {
          controlStates: controlsDisabled,
          logItems
        });
        return;
      }
      var hasPrevious = logItems.some(function(item) {
        return [CallStates.DONE, CallStates.ERROR].includes(item.status);
      });
      var controlStates = {
        debugger: true,
        start: hasPrevious,
        back: hasPrevious,
        goto: true,
        next: isPlaying,
        end: isPlaying
      };
      this.channel.emit(EVENTS.SYNC, {
        controlStates,
        logItems
      });
    }
  }]);
  return Instrumenter2;
}();
function instrument(obj) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  try {
    var _global$window$locati, _global$window$locati2, _global$window$locati3, _global$window$locati4;
    var forceInstrument = false;
    var skipInstrument = false;
    if (((_global$window$locati = import_global3.default.window.location) === null || _global$window$locati === void 0 ? void 0 : (_global$window$locati2 = _global$window$locati.search) === null || _global$window$locati2 === void 0 ? void 0 : _global$window$locati2.indexOf("instrument=true")) !== -1) {
      forceInstrument = true;
    } else if (((_global$window$locati3 = import_global3.default.window.location) === null || _global$window$locati3 === void 0 ? void 0 : (_global$window$locati4 = _global$window$locati3.search) === null || _global$window$locati4 === void 0 ? void 0 : _global$window$locati4.indexOf("instrument=false")) !== -1) {
      skipInstrument = true;
    }
    if (import_global3.default.window.parent === import_global3.default.window && !forceInstrument || skipInstrument) {
      return obj;
    }
    if (!import_global3.default.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__) {
      import_global3.default.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ = new Instrumenter();
    }
    var instrumenter = import_global3.default.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__;
    return instrumenter.instrument(obj, options);
  } catch (e) {
    once.warn(e);
    return obj;
  }
}

// node_modules/@storybook/testing-library/dist/esm/index.js
var domTestingLibrary = __toModule(require_dist2());
var import_user_event = __toModule(require_dist3());
var __makeTemplateObject = function(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
};
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var debugOptions = {
  timeout: 2147483647,
  interval: 2147483647
};
var testingLibrary = instrument(__assign({}, domTestingLibrary), {
  intercept: function(method, path) {
    return path[0] === "fireEvent" || method.startsWith("findBy");
  },
  getArgs: function(call3, state) {
    if (!state.isDebugging)
      return call3.args;
    if (call3.method.startsWith("findBy")) {
      var _a = call3.args, value = _a[0], queryOptions = _a[1], waitForOptions = _a[2];
      return [value, queryOptions, __assign(__assign({}, waitForOptions), debugOptions)];
    }
    if (call3.method.startsWith("waitFor")) {
      var _b = call3.args, callback = _b[0], options = _b[1];
      return [callback, __assign(__assign({}, options), debugOptions)];
    }
    return call3.args;
  }
});
testingLibrary.screen = Object.entries(testingLibrary.screen).reduce(function(acc, _a) {
  var key = _a[0], val = _a[1];
  return Object.defineProperty(acc, key, {
    get: function() {
      once.warn(esm_default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          You are using Testing Library's `screen` object. Use `within(canvasElement)` instead.\n          More info: https://storybook.js.org/docs/react/essentials/interactions\n        "], ["\n          You are using Testing Library's \\`screen\\` object. Use \\`within(canvasElement)\\` instead.\n          More info: https://storybook.js.org/docs/react/essentials/interactions\n        "]))));
      return val;
    }
  });
}, __assign({}, testingLibrary.screen));
var buildQueries = testingLibrary.buildQueries;
var configure = testingLibrary.configure;
var createEvent = testingLibrary.createEvent;
var findAllByAltText = testingLibrary.findAllByAltText;
var findAllByDisplayValue = testingLibrary.findAllByDisplayValue;
var findAllByLabelText = testingLibrary.findAllByLabelText;
var findAllByPlaceholderText = testingLibrary.findAllByPlaceholderText;
var findAllByRole = testingLibrary.findAllByRole;
var findAllByTestId = testingLibrary.findAllByTestId;
var findAllByText = testingLibrary.findAllByText;
var findAllByTitle = testingLibrary.findAllByTitle;
var findByAltText = testingLibrary.findByAltText;
var findByDisplayValue = testingLibrary.findByDisplayValue;
var findByLabelText = testingLibrary.findByLabelText;
var findByPlaceholderText = testingLibrary.findByPlaceholderText;
var findByRole = testingLibrary.findByRole;
var findByTestId = testingLibrary.findByTestId;
var findByText = testingLibrary.findByText;
var findByTitle = testingLibrary.findByTitle;
var fireEvent = testingLibrary.fireEvent;
var getAllByAltText = testingLibrary.getAllByAltText;
var getAllByDisplayValue = testingLibrary.getAllByDisplayValue;
var getAllByLabelText = testingLibrary.getAllByLabelText;
var getAllByPlaceholderText = testingLibrary.getAllByPlaceholderText;
var getAllByRole = testingLibrary.getAllByRole;
var getAllByTestId = testingLibrary.getAllByTestId;
var getAllByText = testingLibrary.getAllByText;
var getAllByTitle = testingLibrary.getAllByTitle;
var getByAltText = testingLibrary.getByAltText;
var getByDisplayValue = testingLibrary.getByDisplayValue;
var getByLabelText = testingLibrary.getByLabelText;
var getByPlaceholderText = testingLibrary.getByPlaceholderText;
var getByRole = testingLibrary.getByRole;
var getByTestId = testingLibrary.getByTestId;
var getByText = testingLibrary.getByText;
var getByTitle = testingLibrary.getByTitle;
var getConfig = testingLibrary.getConfig;
var getDefaultNormalizer = testingLibrary.getDefaultNormalizer;
var getElementError = testingLibrary.getElementError;
var getNodeText = testingLibrary.getNodeText;
var getQueriesForElement = testingLibrary.getQueriesForElement;
var getRoles = testingLibrary.getRoles;
var getSuggestedQuery = testingLibrary.getSuggestedQuery;
var isInaccessible = testingLibrary.isInaccessible;
var logDOM = testingLibrary.logDOM;
var logRoles = testingLibrary.logRoles;
var prettyDOM = testingLibrary.prettyDOM;
var queries = testingLibrary.queries;
var queryAllByAltText = testingLibrary.queryAllByAltText;
var queryAllByAttribute = testingLibrary.queryAllByAttribute;
var queryAllByDisplayValue = testingLibrary.queryAllByDisplayValue;
var queryAllByLabelText = testingLibrary.queryAllByLabelText;
var queryAllByPlaceholderText = testingLibrary.queryAllByPlaceholderText;
var queryAllByRole = testingLibrary.queryAllByRole;
var queryAllByTestId = testingLibrary.queryAllByTestId;
var queryAllByText = testingLibrary.queryAllByText;
var queryAllByTitle = testingLibrary.queryAllByTitle;
var queryByAltText = testingLibrary.queryByAltText;
var queryByAttribute = testingLibrary.queryByAttribute;
var queryByDisplayValue = testingLibrary.queryByDisplayValue;
var queryByLabelText = testingLibrary.queryByLabelText;
var queryByPlaceholderText = testingLibrary.queryByPlaceholderText;
var queryByRole = testingLibrary.queryByRole;
var queryByTestId = testingLibrary.queryByTestId;
var queryByText = testingLibrary.queryByText;
var queryByTitle = testingLibrary.queryByTitle;
var queryHelpers = testingLibrary.queryHelpers;
var screen = testingLibrary.screen;
var waitFor = testingLibrary.waitFor;
var waitForElementToBeRemoved = testingLibrary.waitForElementToBeRemoved;
var within = testingLibrary.within;
var prettyFormat = testingLibrary.prettyFormat;
var userEvent = instrument({ userEvent: import_user_event.default }, { intercept: true }).userEvent;
var templateObject_1;

// src/stories/Page.stories.tsx
import { Page } from "./Page.js";
var Page_stories_default = {
  title: "Example/Page",
  component: Page,
  parameters: {
    layout: "fullscreen"
  }
};
var Template = (args) => /* @__PURE__ */ React.createElement(Page, __spreadValues({}, args));
var LoggedOut = Template.bind({});
var LoggedIn = Template.bind({});
LoggedIn.play = (_0) => __async(void 0, [_0], function* ({ canvasElement }) {
  const canvas = within(canvasElement);
  const loginButton = yield canvas.getByRole("button", { name: /Log in/i });
  yield userEvent.click(loginButton);
});
export {
  LoggedIn,
  LoggedOut,
  Page_stories_default as default
};
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
