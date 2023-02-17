const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {

    // getting input values
    const bucket = core.getInput('bucket',{ required:true});
    const bucketregion = core.getInput('bucket-region',{ required:true});
    const distfolder = core.getInput('dist-folder',{ required:true});

    //upload files
    //const localfolder = distfolder
    const s3Uri = `s3:://${bucket}`

    AWS_ACCESS_KEY_ID = //copied access key
    exec.exec(`aws s3 sync <distfolder> <s3Uri> --region ${bucketregion}`)

    const websiteurl = `http://${bucket}.s3-website-${bucketregion}.amazonaws.com`;
    core.setOutput('website-url', websiteurl);  //::set-output

    core.notice('Custom Javascript action');

}
run();