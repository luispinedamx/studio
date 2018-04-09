/* global define */

define(
    [
        'backbone'
    ],

    function (Backbone) {

        'use strict';

        return Backbone.Router.extend({
            routes: {
                '' : 'gotoWorkflows',

                'workflows' : 'listWorkflows',
                'workflows/:id' : 'openWorkflow',
                'workflows/:id/' : 'openWorkflow',
                'workflows/:id/templates/:bucketName' : 'openWorkflowWithTemplates',
                'workflows/:id/templates/' : 'openWorkflow',
                'workflows/templates/:bucketName' : 'listWorkflowsWithTemplates',
                'workflowcatalog/:bucketName/workflow/:workflowName' : 'openCatalogWorkflow',
                '*others' : 'gotoWorkflows'
            },

            initialize: function(app) {
                this.app = app;

                Backbone.history.stop();
                Backbone.history.start();
            },
            gotoWorkflows: function() {
                this.navigate('workflows', {trigger: true});
            },

            listWorkflows: function() {
                this.app.views.propertiesView.listWorkflows();
                this.app.views.palleteView.setTemplateMainBucket();
            },
            openWorkflow: function(id) {
                this.app.views.propertiesView.listWorkflows(id);
                this.app.views.palleteView.setTemplateMainBucket();
            },
            openWorkflowWithTemplates: function(id, bucketName) {
                this.app.views.propertiesView.listWorkflows(id);
                this.app.views.palleteView.setTemplateMainBucket(bucketName);
            },
            listWorkflowsWithTemplates: function(bucketName) {
                this.app.views.propertiesView.listWorkflows();
                this.app.views.palleteView.setTemplateMainBucket(bucketName);
            },
            openCatalogWorkflow : function(bucketName, workflowName) {
                this.app.views.propertiesView.listWorkflows();
                this.app.views.palleteView.setTemplateMainBucket();
                this.app.openWorkflowFromCatalog(bucketName, workflowName);
            }
        });
    });
