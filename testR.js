// class Component
class App extends React.Component {

    //render method
    render() {
        return (
            <div className = 'test'>
                <NavBar />
            <h1>Hello World!
            </h1>
            <Paragraph />
            <Image/>
            <Image/>
            <Image/>
            <Image/>
            <Image/>
            <Image/>
        
            
            </div>
        )
    }
}

class Paragraph extends React.Component {
    render() {
        return (
            <p>Paragraph Component</p>
        )
    }
}
class Image extends React.Component {
    render() {
        return (
            <div id = "img-container">
            <img src = "https://timesofindia.indiatimes.com/photo/67586673.cms"></img>
            </div>
        )
    }
}

class NavBar extends React.Component {
    render() {
        return (
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Links</li>
                <li>Contact</li>
            </ul>
        )
    }
}


// First argument: What we want to display (elements,etc...)
//Second argument: Where we want to display it (root div container)
ReactDOM.render(
    <App />,
    document.getElementById('root')
)