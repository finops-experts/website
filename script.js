let ham = document.getElementById('hamburger');
ham.addEventListener('click', hamburger);

function hamburger() {
    document.getElementById('ham-menu').classList.toggle('active');
}

let info = document.getElementById('info');
let optimization = document.getElementById('optimization');
let operation = document.getElementById('operation');

info.addEventListener('click', tabInfo);
optimization.addEventListener('click', tabOptimization);
operation.addEventListener('click', tabOperation);



function tabInfo() {
    document.getElementById('tab-p').innerHTML = "We analyze 40+ AWS services for resource level data<br><br> We roll up this data so you understand not just the EC2 costs for a group of servers, but the volumes and backups as well <br><br> We deliver an Excel or Google Sheets report explaining where you spend your money.";
    info.classList.add('active');
    operation.classList.remove('active');
    optimization.classList.remove('active');
}

function tabOptimization() {
    document.getElementById('tab-p').innerHTML = "We use over 50 strategies for saving you money<br><br> We offer options and recommendations for savings with actual dollar amounts<br><br> Should you be paying upfront for EC2 instances? We'll tell you how much it would save.<br><br> Which S3 storage class is best for a bucket? How much will it save?";
    info.classList.remove('active');
    operation.classList.remove('active');
    optimization.classList.add('active');
}

function tabOperation() {
    document.getElementById('tab-p').innerHTML = "We train all the key stakeholders on the benefits of FinOps<br><br> We help you put the processes in place to continue to save<br><br> We follow up yearly to make sure your costs remain optimized<br><br> We offer ongoing support on your FinOps journey.";
    info.classList.remove('active');
    operation.classList.add('active');
    optimization.classList.remove('active');
}