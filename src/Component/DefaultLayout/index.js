import Content from "./Content/Content";
import Header from "./Header";
import SimpleSlider from "./Slider";
import Comment from "../../SocialPlugin/Commentplugin";
import BasicExample from "../../Boostrap/Toast/Toast";
function DefaultLayout() {
    return (
        <div>
            <Header/>
            <SimpleSlider/>
            <Content/>
        </div>
    );
}

export default DefaultLayout
