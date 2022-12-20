import { useEffect } from "react";

function Comment({dataHref, width, numPost}) {
    useEffect(()=>{
      const initFacebookSDK=()=> {
        if (window.FB) {
            window.FB.XFBML.parse();
        }

        window.fbAsyncInit = function () {
            window.FB.init({
                appId: 1110063469583295,
                cookie: true,  // enable cookies to allow the server to access
                // the session
                xfbml: true,  // parse social plugins on this page
                version: 'v2.5' // use version 2.1
            });
        };
        // Load the SDK asynchronously
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            // js.src = `//connect.facebook.net/${locale}/sdk.js`;
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }
    initFacebookSDK()
    },[])
    return (
        <>
        <div className="fb-comments" 
        data-href={dataHref}
        data-width={width? width :''} 
        data-numposts={numPost? numPost : 5}>
        </div>
        </>
    );
}

export default Comment;