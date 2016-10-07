import Ember from 'ember'
import ObjectBrowserMixin from 'ember-frost-object-browser/mixins/object-browser-mixin'

export default Ember.Controller.extend(ObjectBrowserMixin, {

  objectBrowserConfig: {
    listConfig: {
      items: 'model.resources',
      component: 'lts/user-list-item',
      sorting: {
        active: [{value: 'alias', direction: ':desc'}],

        properties: [
          {
            value: 'alias',
            label: 'Alias'
          },
          {
            value: 'id',
            label: 'Id'
          }
        ]
      }
    },

    facetsConfig: {
      bunsenModel: {
        type: 'object',
        properties: {
          id: {
            type: 'string'
          },
          alias: {
            type: 'string'
          }
        }
      },
      bunsenView: {
        version: '1.0',
        type: 'form',
        'rootContainers': [{
          label: 'Main',
          container: 'main'
        }],
        containers: [{
          id: 'main',
          rows: [[{
            model: 'id',
            label: 'element Id'
          }], [{
            model: 'alias'
          }]
          ]
        }]
      }
    },

    controlsConfig: [
      {
        component: 'frost-button',
        text: 'Delete',
        disable: 'type1',
        description: {
          priority: 'secondary',
          size: 'medium'
        }
      },
      {
        component: 'frost-button',
        text: 'Edit',
        disable: 'type2',
        description: {
          priority: 'secondary',
          size: 'medium'
        }
      },
      {
        component: 'frost-button',
        text: 'Detail',
        disable: 'type2',
        description: {
          priority: 'secondary',
          size: 'medium'
        }
      }
    ]
  },

  activeFacets: [],

  actions: {
    triggerAction () {
      this.notifications.addNotification({
        message: 'Action sent',
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
    },

    triggerDelete () {
      this.notifications.addNotification({
        message: 'Delete Action fired',
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
    },

    triggerEdit () {
      this.notifications.addNotification({
        message: 'Edit Action fired',
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
    },

    triggerDetail () {
      this.notifications.addNotification({
        message: 'Detail Action fired',
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
    }
  }

})