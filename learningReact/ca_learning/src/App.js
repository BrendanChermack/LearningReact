import './App.css';
let joeMama = 1001;
const App = () => {
    return (
        <div className="App">
            <h1>YO</h1>
            <p>
                {(joeMama) > 1000 ? "fat as hell" : "not fat"}
            </p>
        </div>
    );
}

export default App;
