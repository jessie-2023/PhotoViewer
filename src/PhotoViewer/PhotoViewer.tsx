import React from "react";  // import React (to provide access to TSX)
import './PhotoViewer.css';


export default function PhotoViewer(props) {   // React component必须【大写开头】，使调用<LargeViewer />区别于html tag如<img />
    return ( // Without (), any code on the lines after return will be ignored!
        <div className="viewer">               
            <img // not html but【JSX】：embed markup inside JavaScript
                src={props.src}
            />
        </div>
    );
}

// 【export default】mark the main function in a file  
// Components【parent】 can render 【child】other components, but you must never nest their definitions
// When a child component needs some data from a parent, pass it by props instead of nesting definitions