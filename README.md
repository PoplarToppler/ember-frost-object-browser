[ci-img]: https://img.shields.io/travis/ciena-frost/ember-frost-object-browser.svg "CI Build Status"
[ci-url]: https://travis-ci.org/ciena-frost/ember-frost-object-browser

[cov-img]: https://img.shields.io/coveralls/ciena-frost/ember-frost-object-browser.svg "Code Coverage"
[cov-url]: https://coveralls.io/github/ciena-frost/ember-frost-object-browser

[npm-img]: https://img.shields.io/npm/v/ember-frost-object-browser.svg "Version"
[npm-url]: https://www.npmjs.com/package/ember-frost-object-browser

[![Travis][ci-img]][ci-url] [![Coveralls][cov-img]][cov-url] [![NPM][npm-img]][npm-url]

# ember-frost-object-browser

 * [Installation](#installation)
 * [API](#api)
 * [Examples](#examples)
 * [Contributing](#contributing)

## Installation
```
ember install ember-frost-object-browser
```

## API

| Attribute | Type | Value | Description |
| --------- | ---- | ----- | ----------- |
| ` ` | ` ` | ` ` | Coming soon |

## Examples
### Template:
```handlebars
{f#rost-object-browser
  facets=model.facets
  filters=filters
  model=model.model
  onCreate=(action 'onCreate')
  onDetailChange=(action 'onDetailChange')
  onFacetChange=(action 'onOptionSelected')
  onFilter=onFilter
  onRowSelect=(action 'onRowSelect')
  title='Resources'
  values=model.visibleResources
  viewSchema=viewSchema
as |slot|}}
  {{block-slot slot 'actions'}}
    <!-- actions go here -->
  {{/block-slot}}
  {{#block-slot slot 'filters' as |filters onFilter|}}
    {{frost-object-browser-filter filters=filters onFilter=onFilter}}
  {{/block-slot}}
  {{#block-slot slot 'info-bar' as |infoBar|}}
    <div class="primary-title">
      {{infoBar.title}}
    </div>
    <div class="sub-title">
      {{infoBar.summary}}
    </div>
  {{/block-slot}}
  {{#block-slot slot 'view-controls' as |viewControl viewLevel onDetailChange|}}
    <div class="button-bar {{ viewControl.detailLevel }}">
    {{#if viewLevel.low}}
      {{frost-button
        disabled=(eq viewControl.detailLevel 'low')
        onClick=(action onDetailChange 'low')
        priority='tertiary'
        size='small'
        icon='frost/list-small'
      }}
    {{/if}}
    {{#if viewLevel.medium}}
      {{frost-button
        disabled=(eq viewControl.detailLevel 'medium')
        onClick=(action onDetailChange 'medium')
        priority='tertiary'
        size='small'
        icon='frost/list-medium'
      }}
    {{/if}}
    {{#if viewLevel.high}}
      {{frost-button
        disabled=(eq viewControl.detailLevel 'high')
        onClick=(action onDetailChange 'high')
        priority='tertiary'
        size='small'
        icon='frost/list-large'
      }}
    {{/if}}
    </div>
  {{/block-slot}}
{{/frost-object-browser}}
```

### Controller:
```
  viewSchema: {
    low: {
      'version': '1.0',
      'type': 'form',
      'rootContainers': [
        {'label': 'Main', 'container': 'main'}
      ],
      'containers': [
        {
          'id': 'main',
          'className': 'flex-row',
          'rows': [
            [
              {'model': 'alias', 'labelClassName': 'ob-label', 'inputClassName': 'ob-input'}
            ],
            [
              {
                'model': 'updatedAt',
                'label': 'Last Updated',
                'labelClassName': 'ob-label',
                'inputClassName': 'ob-input'
              }
            ]
          ]
        }
      ]
    }
  }
```

Your controller will also need to implement the following callbacks:

`onCreate () {…}`
`onDetailChange (level) {…}`
`onFilter (filterState) {...} //Optional, used with filters`
`onRowSelect (allSelected, newSelected, deSelected) {…}`

You can also check out the demo app bundled with this addon to see an example of using this addon.

###Adding filters
An optional `filters` attribute can be passed to the component. `filters` should be an array of objects

```javascript
    filters: [{
      label: 'A label for the filter',
      name: '', // Key for filter state hash
      type: 'select', // Currently only 'select' type is supported
      clearable: true, // Whether or not the value can be cleared
      showing: true,  // True for expanded and false for collapsed, optional
      selectedValue: 'value', // Value in the list to set as selected, should match
                              // the value attribute of an item in the 'data' list

      // List of values
      data: [{
        label: 'Label for an item',
        value: 'value'
      }]
    }]

```

Currently `frost-select` style filters are supported.

When a filter is changed or cleared, the `onFilter` callback is called with the argument
`filterState`, which is a hash where the keys correspond to the filter names and the value is
the value currently reported by the filter.

## Development
### Setup
```
git clone git@github.com:ciena-frost/ember-frost-object-browser.git
cd ember-frost-object-browser
npm install && bower install
```

### Development Server
A dummy application for development is available under `ember-frost-object-browser/tests/dummy`.
To run the server run `ember server` (or `npm start`) from the root of the repository and
visit the app at http://localhost:4200.

### Testing
Run `npm test` from the root of the project to run linting checks as well as execute the test suite
and output code coverage.