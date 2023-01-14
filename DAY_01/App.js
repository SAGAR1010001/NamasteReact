
            /**
             *
             *
             *              ****** PURE REACT*******
             *
             *
             * ! React give us this "createElement" API which creates the element in REACT.
             * ! React.createElement(<tag>,{},<what u want to put inside the element>) ==> this will create h1 tag
             *
             *
             *
             *
             *
             *
             *
             *                      React element is nothing but an OBJECT
             *
             *
             *
             *
             */

            //Got Heading
            const heading = React.createElement(
              "h1",
              {
                  id: "heading",
               className: "mdk",
                style: { color: "red" }
              },
              "Namaste Everyone!"
            );
            console.log(heading); //   React element is nothing but an OBJECT

               const heading1 = React.createElement(
              "h1",
              {
                  id: "heading",
               className: "mdk",
                style: { color: "red" }
              },
              "HEADING 1"
            );



               const heading2= React.createElement(
              "h1",
              {
                  id: "heading",
               className: "mdk",
                style: { color: "red" }
              },
              "HEADING 2"
            );

            const container = React.createElement(
                "div",
                {
              id:"container"
           
            },
               [heading1,heading2] )
            /**
       *
       * ? How to put heading element into "root" div element in REACT ?
       *
       *? How to tell React that div#root is the  root element and i want to run REACT code inside it?
       *todo   ANS:  WE are using  ReactDOM similar to document in JavaScript
       *todo          BCZ NOW WE WANT TO MODIFY my DOM which is done by ReactDOM
       *todo          createRoot() this tells react what is the root el ement of my APP and here div#root is the root element of react as we giving it inside createRoot()



      *
      *
      *
      *
      *
      *
      *
      *
      */
            // Got the root
            const root = ReactDOM.createRoot(document.getElementById("root"));

            // ?How to put heading inside div#root element ?
            // WE ARE PROVIDING heading react root element to div#root with help of ReactDOM as it is web version of react which give access to DOM
           // root.render(heading); //by doing this we are injecting the REACT element which is heading in this case inside our root which is div#root
            root.render(container);
