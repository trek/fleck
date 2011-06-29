describe("fleck", function() {
  describe("inflect", function() {
    it("chains inflections", function() {
      expect(fleck.inflect('  posts', 'strip', 'capitalize', 'singularize')).toEqual('Post');
    });
  });
  
  describe("dasherize", function() {
    var dashes = {
      "street"                : "street",
      "street_address"        : "street-address",
      "person_street_address" : "person-street-address"
    }
    
    it("replaces underscores with dashes", function() {
      for(var word in dashes){
        expect(fleck.dasherize(word)).toEqual(dashes[word]);
      }
    });
  });

  describe("camelize", function() {
    var camels = {
      "street":                 "street",
      "street-address":         "streetAddress",
      "street_address":         "streetAddress",
      "person_street_address":  "personStreetAddress"
    }

    it("converts words to camelCase", function(){
      for(var word in camels){
        expect(fleck.camelize(word)).toEqual(camels[word]);
      }
    });

  });
  
  describe("pluralize", function() {
    var plural;
    describe("uncountables remain the same", function() {
      var uncountableWords = [
          'equipment', 'information', 'rice', 'money', 'species', 'series',
          'fish', 'sheep', 'moose', 'deer', 'news'
      ]
      
      for(var i = 0, l = uncountableWords.length; i < l; i++){
        expect(fleck.pluralize(uncountableWords[i])).toEqual(uncountableWords[i]);
      }
    });
    
    it("children", function() {
      expect(fleck.pluralize('child')).toEqual('children');
      expect(fleck.pluralize('Child')).toEqual('Children');
    });
    
    it("people", function() {
      expect(fleck.pluralize('person')).toEqual('people');
      expect(fleck.pluralize('Person')).toEqual('People');
    });
    
    it("men", function() {
      expect(fleck.pluralize('man')).toEqual('men');
      expect(fleck.pluralize('Man')).toEqual('Men');
    });
    
    it("oxen", function() {
      expect(fleck.pluralize('ox')).toEqual('oxen');
      expect(fleck.pluralize('Ox')).toEqual('Oxen');
    });
    
    it("axes", function() {
      expect(fleck.pluralize('axis')).toEqual('axes');
      expect(fleck.pluralize('Axis')).toEqual('Axes');
    });
    
    it("testes", function() {
      expect(fleck.pluralize('testis')).toEqual('testes');
      expect(fleck.pluralize('Testis')).toEqual('Testes');
    });
    
    it("octopi", function() {
      expect(fleck.pluralize('octopus')).toEqual('octopi');
      expect(fleck.pluralize('Octopus')).toEqual('Octopi');
    });
    
    it("viri", function() {
      expect(fleck.pluralize('virus')).toEqual('viri');
      expect(fleck.pluralize('Virus')).toEqual('Viri');
    });
    
    it("alises", function() {
      expect(fleck.pluralize('alias')).toEqual('aliases');
      expect(fleck.pluralize('Alias')).toEqual('Aliases');
    });
    
    it("statuses", function() {
      expect(fleck.pluralize('status')).toEqual('statuses');
      expect(fleck.pluralize('Status')).toEqual('Statuses');
    });
    
    it("buses", function() {
      expect(fleck.pluralize('bus')).toEqual('buses');
      expect(fleck.pluralize('Bus')).toEqual('Buses');
    });
    
    it("buffaloes", function() {
      expect(fleck.pluralize('buffalo')).toEqual('buffaloes');
      expect(fleck.pluralize('Buffalo')).toEqual('Buffaloes');
    });
    
    it("tomatoes", function() {
      expect(fleck.pluralize('tomato')).toEqual('tomatoes');
      expect(fleck.pluralize('Tomato')).toEqual('Tomatoes');
    });
    
    it("potatoes", function() {
      expect(fleck.pluralize('potato')).toEqual('potatoes');
      expect(fleck.pluralize('Potato')).toEqual('Potatoes');
    });
    // [new RegExp('([ti])um$', 'gi'),              '$1a'],
    // [new RegExp('sis$', 'gi'),                   'ses'],
    // [new RegExp('(?:([^f])fe|([lr])f)$', 'gi'),  '$1$2ves'],
    
    it("hives", function() {
      expect(fleck.pluralize('hive')).toEqual('hives');
      expect(fleck.pluralize('Hive')).toEqual('Hives');
    });
    // [new RegExp('([^aeiouy]|qu)y$', 'gi'),       '$1ies'],
    // [new RegExp('(x|ch|ss|sh)$', 'gi'),          '$1es'],
    
    it("matrices", function() {
      expect(fleck.pluralize('matrix')).toEqual('matrices');
      expect(fleck.pluralize('Matrix')).toEqual('Matrices');
    });
    
    it("vertices", function() {
      expect(fleck.pluralize('vertex')).toEqual('vertices');
      expect(fleck.pluralize('Vertex')).toEqual('Vertices');
    });
    
    it("indecies", function() {
      expect(fleck.pluralize('index')).toEqual('indices');
      expect(fleck.pluralize('Index')).toEqual('Indices');
    });
    
    it("mice", function() {
      expect(fleck.pluralize('mouse')).toEqual('mice');
      expect(fleck.pluralize('Mouse')).toEqual('Mice');
    });
    
    it("lice", function() {
      expect(fleck.pluralize('louse')).toEqual('lice');
      expect(fleck.pluralize('Louse')).toEqual('Lice');
    });
    
    it("quizzes", function() {
      expect(fleck.pluralize('quiz')).toEqual('quizzes');
      expect(fleck.pluralize('Quiz')).toEqual('Quizzes');
    });
    
    it("dogs", function() {
      expect(fleck.pluralize('dog')).toEqual('dogs');
      expect(fleck.pluralize('Dog')).toEqual('Dogs');
    });
    
    // [new RegExp('s$', 'gi'),                     's'],
  });
  
  describe("ordinalize", function() {
    var ordinalNumberStrings = {
      "0" : "0th",
      "1" : "1st",
      "2" : "2nd",
      "3" : "3rd",
      "4" : "4th",
      "5" : "5th",
      "6" : "6th",
      "7" : "7th",
      "8" : "8th",
      "9" : "9th",
      "10" : "10th",
      "11" : "11th",
      "12" : "12th",
      "13" : "13th",
      "14" : "14th",
      "20" : "20th",
      "21" : "21st",
      "22" : "22nd",
      "23" : "23rd",
      "24" : "24th",
      "100" : "100th",
      "101" : "101st",
      "102" : "102nd",
      "103" : "103rd",
      "104" : "104th",
      "110" : "110th",
      "111" : "111th",
      "112" : "112th",
      "113" : "113th",
      "1000" : "1000th",
      "1001" : "1001st"
    };
    
    var ordinalNumbers = {
      0 : "0th",
      1 : "1st",
      2 : "2nd",
      3 : "3rd",
      4 : "4th",
      5 : "5th",
      6 : "6th",
      7 : "7th",
      8 : "8th",
      9 : "9th",
      10 : "10th",
      11 : "11th",
      12 : "12th",
      13 : "13th",
      14 : "14th",
      20 : "20th",
      21 : "21st",
      22 : "22nd",
      23 : "23rd",
      24 : "24th",
      100 : "100th",
      101 : "101st",
      102 : "102nd",
      103 : "103rd",
      104 : "104th",
      110 : "110th",
      111 : "111th",
      112 : "112th",
      113 : "113th",
      1000 : "1000th",
      1001 : "1001st"
    };
    
    it("ordinalizes numbers as strings", function() {
      for(var n in ordinalNumberStrings) {
        expect(fleck.ordinalize(n)).toEqual(ordinalNumberStrings[n]);
      }
    });
    
    it("ordinalizes numbers", function() {
      for(var n in ordinalNumbers) {
        expect(fleck.ordinalize(n)).toEqual(ordinalNumbers[n]);
      }
    });
  });

  describe("adding uncountable words", function(){
    var oldUncountables;
    beforeEach(function() {
      oldUncountables = {};
      for(var word in fleck.uncountableWords){
        oldUncountables[word] = fleck.uncountableWords[word];
      } // clone old collection
    });
    
    afterEach(function() {
      fleck.uncountableWords = oldUncountables;
    });
    
    it("can make a single word uncountable", function() {
      fleck.uncountable('dog')
      expect(fleck.pluralize('dog')).toEqual('dog');
    });
    
    it("can make a several words uncountable", function() {
      fleck.uncountable('dog', 'cat', 'monster')
      expect(fleck.pluralize('dog')).toEqual('dog');
      expect(fleck.pluralize('cat')).toEqual('cat');
      expect(fleck.pluralize('monster')).toEqual('monster');
    });
  });
});
