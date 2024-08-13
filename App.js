const heading = React.createElement("div",{id:"heading"} ,React.createElement("h1",{id : "child"},"this is heading from react child") )
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)