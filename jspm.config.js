SystemJS.config({
  transpiler: "plugin-babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  map: {
    "babel": "npm:babel-core@5.8.35"
  },
  packages: {
    "singpath-core": {
      "main": "index.js"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "ace": "github:ajaxorg/ace-builds@1.2.3",
    "angular": "github:angular/bower-angular@1.5.0",
    "angular-animate": "github:angular/bower-angular-animate@1.5.0",
    "angular-loading-bar": "github:chieffancypants/angular-loading-bar@0.8.0",
    "angular-material": "github:angular/bower-material@1.0.6",
    "angular-messages": "github:angular/bower-angular-messages@1.5.0",
    "angular-route": "github:angular/bower-angular-route@1.5.0",
    "angularfire": "github:firebase/angularfire@1.1.4",
    "babel-runtime": "npm:babel-runtime@5.8.35",
    "core-js": "npm:core-js@1.2.6",
    "cryptojs": "github:sytelus/cryptojs@3.1.2",
    "css": "github:systemjs/plugin-css@0.1.20",
    "firebase": "github:firebase/firebase-bower@2.4.1",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.8",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "text": "github:systemjs/plugin-text@0.0.7"
  },
  packages: {
    "github:angular/bower-angular-animate@1.5.0": {
      "map": {
        "angular": "github:angular/bower-angular@1.5.0"
      }
    },
    "github:angular/bower-angular-aria@1.5.0": {
      "map": {
        "angular": "github:angular/bower-angular@1.5.0"
      }
    },
    "github:angular/bower-angular-messages@1.5.0": {
      "map": {
        "angular": "github:angular/bower-angular@1.5.0"
      }
    },
    "github:angular/bower-angular-route@1.5.0": {
      "map": {
        "angular": "github:angular/bower-angular@1.5.0"
      }
    },
    "github:angular/bower-material@1.0.6": {
      "map": {
        "angular": "github:angular/bower-angular@1.5.0",
        "angular-animate": "github:angular/bower-angular-animate@1.5.0",
        "angular-aria": "github:angular/bower-angular-aria@1.5.0",
        "css": "github:systemjs/plugin-css@0.1.20"
      }
    },
    "github:chieffancypants/angular-loading-bar@0.8.0": {
      "map": {
        "angular": "github:angular/bower-angular@1.5.0",
        "css": "github:systemjs/plugin-css@0.1.20"
      }
    },
    "github:firebase/angularfire@1.1.4": {
      "map": {
        "angular": "github:angular/bower-angular@1.5.0",
        "firebase": "github:firebase/firebase-bower@2.4.1"
      }
    },
    "npm:babel-runtime@5.8.35": {
      "map": {}
    },
    "npm:core-js@1.2.6": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    }
  }
});
