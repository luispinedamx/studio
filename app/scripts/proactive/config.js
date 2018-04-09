/* global define */

define(function () {

    'use strict';
    
    return {
        restApiUrl: '/rest/studio',
        execution_scheduler_restApiUrl: '/job-planner/planned_jobs',
        docUrl: 'http://doc.activeeon.com/' + (function () {
            if (conf.studioVersion.indexOf("SNAPSHOT") > -1) {
                return "dev";
            }
            else {
                return conf.studioVersion;
            }
        })(),
        tasks: {
            'Linux Bash': 'templates/script_bash.xml',
            'Windows Cmd': 'templates/script_cmd.xml',
            'Docker': 'templates/script_docker_compose.xml',
            'Java': 'templates/java.xml',
            'Scalaw': 'templates/script_scala.xml',
            'Javascript': 'templates/script_javascript.xml',
            'Groovy': 'templates/script_groovy.xml',
            'Ruby': 'templates/script_ruby.xml',
            'Jython': 'templates/script_python.xml',
            'Python': 'templates/script_cpython.xml',
	        'Perl': 'templates/script_perl.xml',
            'PHP' : 'templates/php_script.xml',
	    	'PowerShell': 'templates/script_powershell.xml',
	        'R': 'templates/script_r.xml',
	        'Cron': 'templates/script_cron.xml',
            'LDAP Query': 'templates/script_ldap_query.xml'
        },
        manuals: {
            'Email Notification' : 'templates/email.xml',
            'Web Notification' : 'templates/webnotification.xml',
            'Email Validation' : 'templates/email_validation.xml',
            'Web Validation' : 'templates/web_validation.xml'
        },
        controls: {
            'If': 'templates/07_workflow_branch.xml',
            'Loop': 'templates/06_workflow_loop.xml',
            'Replicate': 'templates/05_workflow_replication.xml',
            'Task Dependencies': 'templates/02_task_dependencies.xml',
            'Submit Job No Wait': 'templates/SubmitJobNoWait.xml',
            'Submit Job And Wait': 'templates/SubmitJobAndWait.xml',
            'Wait for Any': 'templates/wait_for_any.xml',
            'Wait for Any Replicate': 'templates/wait_for_any_replicate.xml',
            'Submit and Wait for Any': 'templates/submit_and_wait_for_any.xml'
        }
    };
});
