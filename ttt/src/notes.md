React (library):
    * declarative
    * efficient
    * flexible

compose complex UI's with isolated "components"
    * subclasses

components:
    * take in props (properties)
    * render (will dispaly a) hierarchy of views

render:
    * is a description of what will be displayed
    * it can display
        ** React Elements
        ** JSX ()
    * for example: (the 2 below are equally the same)
        * return ( <div><h1>hello</h1></div> );
        * return React.createElement ('div', null, 
                    React.createElement ('h1', null, "hello")
          );

pass data (from main component --=[to]>> sub-compenents) via "props"
    * define use of data in the child component
        class Square extends ...
            render() {
                return (
                    <div className="box-display">
                        {this.props.value}
                    </div>
                );
            }
        }
    * assign data in the parent component as a property
        class Board extends ...
            <Square value="1" />
        }

making component interactive
    * define interactivity in the child component
        class Square extends ...
            render() {
                return (
                    <div className="box-display" onClick={() => alert('you clicked?')}>
                        {this.props.value}
                    </div>
                );
            }
        }
    * assign data in the parent component as a property
        class Board extends ...
            <Square value="1" />
        }

