function hovin(x)
         {
                x.style.backgroundColor="beige";
                x.style.color="#D7C49EFF"
                x.style.padding="10px"
                x.style.borderRadius="2px";
        }
 function hovout(x)
        {
                x.style.backgroundColor="#D7C49EFF";
                x.style.color="#343148FF";
        }
function imgin(x)
        {
                x.style.opacity="0.7";
        }
function imgout(x)
        {
                x.style.opacity="1";
        }

$("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});