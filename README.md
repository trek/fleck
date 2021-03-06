`fleck` is a functional styled library for string inflection that doesn't pollute `String.prototype`.

Basic Use
====================
All the inflections are stored inside `fleck`.  They are:

```javascript
// Capitals
fleck.capitalize('acme') == 'Acme'

// CamelCase and camelCase
fleck.camelize('border-radius') == 'borderRadius'
fleck.camelize('border-radius', true) == 'BorderRadius' // alias for upperCamelize
fleck.upperCamelize('we-the-people') == 'WeThePeople'

// Changes underscores and spaces into dashes
fleck.dasherize('we_the_people') == 'we-the-people'

// Underscore
// Converts camelCase, CamelCase, dash-es, and Name::Spaced to underscores
fleck.underscore("camelCase") == 'camel_case'
fleck.underscore("CamelCase") == 'camel_case'
fleck.underscore("dash-es")   == 'dash_es'
fleck.underscore("Name::Spaced") == 'name_spaced'

// Plurals and Singular, even strange ones
fleck.pluralize('dog') == 'dogs'
fleck.pluralize('person') == 'people'
fleck.pluralize('sheep') == 'sheep'
fleck.singularize('dogs') == 'dog'
fleck.singularize('people') == 'person'

// Whitespace stripping
fleck.strip('    hello!   ') == 'hello!'

// Ordinals
fleck.ordinalize(4) == "4th"
fleck.ordinalize("13") == "13th"
fleck.ordinalize("122") == "122nd"
```

Functional Programing
======
`fleck` doesn't contain any unpredictable javascript object orientation. Feel free to combine
with other functional libraries at will; no new anonymous functions, no silly `bind`s:

```javascript
// underscore.js
_.each(['dog','cat','mouse'], fleck.pluralize) == ["dogs", "cats", "mice"]

// jQuery.js
$.ajax({
  url:'/data/sync_from_server/new/uncountablewords',
  success: fleck.uncountable
})
```

Chaining
======
Inflections can be chained using `fleck.inflect`

```javascript
fleck.inflect('     posts', 'strip', 'singularize', 'capitalize') == 'Post'
```
