import React from "react";
import './styles/App.css'
import Ksp1920 from "./components/ksp-1920/ksp1920";
import Ksp1000 from "./components/ksp-1000/ksp1000";
import Ksp768 from "./components/ksp-768/ksp768";
import Ksp320 from "./components/ksp-320/ksp320";

function App() {
    const currentWidth = window.screen.width
    // debugger
    return (
        <div className="App">
            {currentWidth >= 1920 &&
                <div>
                    <Ksp1920/>
                </div>
            }
            {currentWidth >= 1000 && currentWidth < 1920 &&
                <div>
                    <Ksp1000/>
                </div>
            }
            {currentWidth >= 768 && currentWidth < 1000 &&
                <div>
                    <Ksp768/>
                </div>
            }
            {currentWidth >= 320 && currentWidth < 768 &&
                <div>
                    <Ksp320/>
                </div>
            }
        </div>
    );
}

export default App;
