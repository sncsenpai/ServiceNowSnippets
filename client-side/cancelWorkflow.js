(function(){
    var table = "table_name",
        sys_id = "84fba106db0180102c44c34405961944",
        workflow_name = "WORKFLOW_NAME";

    var grGlideRecord = new GlideRecord (table);
    grGlideRecord.get(sys_id);

    var oldWorkflow = new Workflow();
    oldWorkflow.cancel(grGlideRecord);
    new WorkflowApprovalUtils().cancelAll(grGlideRecord, "");
    var newWorkflow = new Workflow();
    newWorkflow.startFlow(new Workflow().getWorkflowFromName(workflow_name), grGlideRecord, '');
})();
