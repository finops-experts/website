// for hamburger menu-------------------------
let ham = document.getElementById('hamburger');
let hamMenu = document.getElementById('ham-menu');

ham.addEventListener('click', hamburger);

function hamburger() {
    hamMenu.classList.toggle('active');
    // if (hamMenu.classList.contains('active')) {
    //     ham.innerHTML = '<path d="M38.9824 6.97071C38.4539 6.98319 37.9518 7.20438 37.5859 7.58595L24 21.1719L10.4141 7.58595C10.2275 7.39412 10.0043 7.2417 9.75767 7.13769C9.51108 7.03369 9.24614 6.98023 8.97852 6.98048C8.58082 6.98097 8.19229 7.10001 7.86258 7.32238C7.53286 7.54476 7.27691 7.86038 7.12744 8.22892C6.97797 8.59746 6.94176 9.0022 7.02343 9.39142C7.10509 9.78065 7.30094 10.1367 7.58594 10.4141L21.1719 24L7.58594 37.5859C7.39399 37.7702 7.24075 37.991 7.13518 38.2352C7.02961 38.4795 6.97383 38.7424 6.97113 39.0084C6.96842 39.2745 7.01883 39.5385 7.11941 39.7848C7.21999 40.0312 7.36871 40.255 7.55687 40.4431C7.74503 40.6313 7.96884 40.78 8.21519 40.8806C8.46155 40.9812 8.72549 41.0316 8.99158 41.0289C9.25766 41.0262 9.52052 40.9704 9.76478 40.8648C10.009 40.7593 10.2298 40.606 10.4141 40.4141L24 26.8281L37.5859 40.4141C37.7702 40.606 37.991 40.7593 38.2352 40.8648C38.4795 40.9704 38.7424 41.0262 39.0084 41.0289C39.2745 41.0316 39.5385 40.9812 39.7848 40.8806C40.0312 40.78 40.255 40.6313 40.4431 40.4432C40.6313 40.255 40.78 40.0312 40.8806 39.7848C40.9812 39.5385 41.0316 39.2745 41.0289 39.0084C41.0262 38.7424 40.9704 38.4795 40.8648 38.2352C40.7593 37.991 40.606 37.7702 40.4141 37.5859L26.8281 24L40.4141 10.4141C40.7051 10.135 40.905 9.7745 40.9875 9.37983C41.0701 8.98517 41.0314 8.57477 40.8766 8.20246C40.7218 7.83015 40.4581 7.51332 40.1201 7.29351C39.7821 7.0737 39.3855 6.96118 38.9824 6.97071Z" fill="#5B5B5B"/>';
    // }
}

// hide hamburger menu------------------------
function hideMenu() {
    hamMenu.classList.remove('active');
}


// for tabs section---------------------------
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





// for dropdown FAQ -----------------------------
const boxes = document.getElementsByClassName('drop');

for (const box of boxes) {
    box.addEventListener('click', function handleClick(e) {
        for (const box of boxes) {
            box.classList.remove('active');

            if (box.id === e.currentTarget.id && !box.classList.contains('active')) {
                box.classList.add('active')
            }
        }
    });
}



//for animation---------------------------------
const intersectionCallback = (entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.classList.add('fadeInUp');
        }
    }
}

const observer = new IntersectionObserver(intersectionCallback);

const items = document.querySelectorAll('.wow');
for (const item of items) {
    observer.observe(item);
}





(function() {
    try {
        var f = document.createElement("iframe");
        f.src = 'https://forms.zohopublic.com/seanfinops1/form/ContactUs/formperma/0_sU0byohmht4_6egronBHbAfXNd3WHMBJHhfdrC7jI?zf_rszfm=1';
        f.style.border = "none";
        f.style.height = "993px";
        f.style.width = "90%";
        f.style.transition = "all 0.5s ease";
        f.setAttribute("aria-label", 'Contact\x20Us');



        var d = document.getElementById("zf_div_0_sU0byohmht4_6egronBHbAfXNd3WHMBJHhfdrC7jI");
        d.appendChild(f);
        window.addEventListener('message', function() {
            var evntData = event.data;
            if (evntData && evntData.constructor == String) {
                var zf_ifrm_data = evntData.split("|");
                if (zf_ifrm_data.length == 2 || zf_ifrm_data.length == 3) {
                    var zf_perma = zf_ifrm_data[0];
                    var zf_ifrm_ht_nw = (parseInt(zf_ifrm_data[1], 10) + 15) + "px";
                    var iframe = document.getElementById("zf_div_0_sU0byohmht4_6egronBHbAfXNd3WHMBJHhfdrC7jI").getElementsByTagName("iframe")[0];
                    if ((iframe.src).indexOf('formperma') > 0 && (iframe.src).indexOf(zf_perma) > 0) {
                        var prevIframeHeight = iframe.style.height;
                        var zf_tout = false;
                        if (zf_ifrm_data.length == 3) {
                            iframe.scrollIntoView();
                            zf_tout = true;
                        }
                        if (prevIframeHeight != zf_ifrm_ht_nw) {
                            if (zf_tout) {
                                setTimeout(function() {
                                    iframe.style.height = zf_ifrm_ht_nw;
                                }, 500);
                            } else {
                                iframe.style.height = zf_ifrm_ht_nw;
                            }
                        }
                    }
                }
            }
        }, false);
    } catch (e) {}
})();