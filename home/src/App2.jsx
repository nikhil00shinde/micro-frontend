// Error handling

// new File -> Safe component

export class SafeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }



  static getDerivedStateFromError(error){
    return { hasError : true };
  }

  componentDidCatch(){}
  
  render() {
    if (this.state.hasError){
      return <h1>Something went wrong</h1>
    }

    return this.props.childer;
  }


}




// Lazy loading (async handling)
import React, { Suspense } from 'react'


const Header = React.lazy(() => import("home/Header"));

function App2() {
  return (
    <div>
      <SafeComponent>

          <Suspense fallback={<div>Loading</div>}>
              <Header/>
          </Suspense>

      </SafeComponent>
    </div>
  )
}

export default App2


// PORT=3000 npx servor
