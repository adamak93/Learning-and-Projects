### 1.  Top three browsers and the name of the JS engine using there.

1. Safari. Safari web browser is a freeware browser from the tech giant Apple Inc. .
    1. • [JavaScriptCore](https://en.wikipedia.org/wiki/JavaScriptCore) is [Apple](https://en.wikipedia.org/wiki/Apple_Inc.)'s engine for its [Safari](https://en.wikipedia.org/wiki/Safari_(web_browser)) browser. Other [WebKit](https://en.wikipedia.org/wiki/WebKit)-based browsers also use it. [KJS](https://en.wikipedia.org/wiki/KJS_(software)) from KDE was the starting point for its development.[[7]](https://en.wikipedia.org/wiki/JavaScript_engine#cite_note-7)
2. Firefox. Firefox is the second most popular web browser in the world. ...
    1. • [SpiderMonkey](https://en.wikipedia.org/wiki/SpiderMonkey) is developed by [Mozilla](https://en.wikipedia.org/wiki/Mozilla) for use in [Firefox](https://en.wikipedia.org/wiki/Firefox) and its [forks](https://en.wikipedia.org/wiki/Fork_(software_development)). The [GNOME Shell](https://en.wikipedia.org/wiki/GNOME_Shell) uses it for extension support.
3. Google Chrome. Google Chrome is pretty recent when compared to other browsers out there. Today, Google Chrome has become the most used web browsers in the world.
    1. • [V8](https://en.wikipedia.org/wiki/V8_(JavaScript_engine)) from [Google](https://en.wikipedia.org/wiki/Google) is the most used JavaScript engine. [Google Chrome](https://en.wikipedia.org/wiki/Google_Chrome) and the many other [Chromium](https://en.wikipedia.org/wiki/Chromium_(web_browser))-based browsers use it, as do [applications](https://en.wikipedia.org/wiki/Application_software) built with [CEF](https://en.wikipedia.org/wiki/Chromium_Embedded_Framework), [Electron](https://en.wikipedia.org/wiki/Electron_(software_framework)), or any other [framework](https://en.wikipedia.org/wiki/Software_framework) that embeds Chromium. Other uses include the [Node.js](https://en.wikipedia.org/wiki/Node.js) and [Deno](https://en.wikipedia.org/wiki/Deno_(software)) [runtime systems](https://en.wikipedia.org/wiki/Runtime_system).

### 2.  Brief history of JS

### **Creation at Netscape[[edit](https://en.wikipedia.org/w/index.php?title=JavaScript&action=edit&section=2)]**

The first [web browser](https://en.wikipedia.org/wiki/Web_browser) with a [graphical user interface](https://en.wikipedia.org/wiki/Graphical_user_interface), [Mosaic](https://en.wikipedia.org/wiki/Mosaic_(web_browser)), was released in 1993. Accessible to non-technical people, it played a prominent role in the rapid growth of the nascent [World Wide Web](https://en.wikipedia.org/wiki/World_Wide_Web).[[15]](https://en.wikipedia.org/wiki/JavaScript#cite_note-15) The lead developers of Mosaic then founded the [Netscape](https://en.wikipedia.org/wiki/Netscape) corporation, which released a more polished browser, [Netscape Navigator](https://en.wikipedia.org/wiki/Netscape_Navigator), in 1994. This quickly became the most-used.[[16]](https://en.wikipedia.org/wiki/JavaScript#cite_note-16)[[17]](https://en.wikipedia.org/wiki/JavaScript#cite_note-17)

During these formative years of the Web, [web pages](https://en.wikipedia.org/wiki/Web_page) could only be static, lacking the capability for dynamic behavior after the page was loaded in the browser. There was a desire in the flourishing web development scene to remove this limitation, so in 1995, Netscape decided to add a [scripting language](https://en.wikipedia.org/wiki/Scripting_language) to Navigator. They pursued two routes to achieve this: collaborating with [Sun Microsystems](https://en.wikipedia.org/wiki/Sun_Microsystems) to embed the [Java](https://en.wikipedia.org/wiki/Java_(programming_language)) [programming language](https://en.wikipedia.org/wiki/Programming_language), while also hiring [Brendan Eich](https://en.wikipedia.org/wiki/Brendan_Eich) to embed the [Scheme](https://en.wikipedia.org/wiki/Scheme_(programming_language)) language.[[6]](https://en.wikipedia.org/wiki/JavaScript#cite_note-origin-6)

Netscape management soon decided that the best option was for Eich to devise a new language, with syntax similar to Java and less like Scheme or other extant scripting languages.[[5]](https://en.wikipedia.org/wiki/JavaScript#cite_note-looklikejava-5)[[6]](https://en.wikipedia.org/wiki/JavaScript#cite_note-origin-6) Although the new language and its [interpreter](https://en.wikipedia.org/wiki/Interpreter_(computing)) implementation were called LiveScript when first shipped as part of a Navigator [beta](https://en.wikipedia.org/wiki/Beta_software) in September 1995, the name was changed to JavaScript for the official release in December.[[6]](https://en.wikipedia.org/wiki/JavaScript#cite_note-origin-6)[[1]](https://en.wikipedia.org/wiki/JavaScript#cite_note-press_release-1)[[18]](https://en.wikipedia.org/wiki/JavaScript#cite_note-techvision-18)

The choice of the JavaScript name has caused confusion, implying that it is directly related to Java. At the time, the [dot-com boom](https://en.wikipedia.org/wiki/Dot-com_bubble) had begun and Java was the hot new language, so Eich considered the JavaScript name a marketing ploy by Netscape.[[19]](https://en.wikipedia.org/wiki/JavaScript#cite_note-19)

### **Adoption by Microsoft[[edit](https://en.wikipedia.org/w/index.php?title=JavaScript&action=edit&section=3)]**

[Microsoft](https://en.wikipedia.org/wiki/Microsoft) debuted [Internet Explorer](https://en.wikipedia.org/wiki/Internet_Explorer) in 1995, leading to a [browser war](https://en.wikipedia.org/wiki/Browser_war) with Netscape. On the JavaScript front, Microsoft [reverse-engineered](https://en.wikipedia.org/wiki/Reverse_engineering#Reverse_engineering_of_software) the Navigator [interpreter](https://en.wikipedia.org/wiki/Interpreter_(computing)) to create its own, called [JScript](https://en.wikipedia.org/wiki/JScript).[[20]](https://en.wikipedia.org/wiki/JavaScript#cite_note-sjsch5-20)

JScript was first released in 1996, alongside initial support for [CSS](https://en.wikipedia.org/wiki/CSS) and extensions to [HTML](https://en.wikipedia.org/wiki/HTML). Each of these implementations was noticeably different from their counterparts in Navigator.[[21]](https://en.wikipedia.org/wiki/JavaScript#cite_note-O'Reilly-2001-21)[[22]](https://en.wikipedia.org/wiki/JavaScript#cite_note-22) These differences made it difficult for developers to make their websites work well in both browsers, leading to widespread use of "best viewed in Netscape" and "best viewed in Internet Explorer" logos for several years.[[21]](https://en.wikipedia.org/wiki/JavaScript#cite_note-O'Reilly-2001-21)[[23]](https://en.wikipedia.org/wiki/JavaScript#cite_note-23)

### **The rise of JScript[[edit](https://en.wikipedia.org/w/index.php?title=JavaScript&action=edit&section=4)]**

In November 1996, [Netscape](https://en.wikipedia.org/wiki/Netscape) submitted JavaScript to [Ecma International](https://en.wikipedia.org/wiki/Ecma_International), as the starting point for a standard specification that all browser vendors could conform to. This led to the official release of the first [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript) language specification in June 1997.

The standards process continued for a few years, with the release of ECMAScript 2 in June 1998 and ECMAScript 3 in December 1999. Work on ECMAScript 4 began in 2000.[[20]](https://en.wikipedia.org/wiki/JavaScript#cite_note-sjsch5-20)

Meanwhile, [Microsoft](https://en.wikipedia.org/wiki/Microsoft) gained an increasingly dominant position in the browser market. By the early 2000s, Internet Explorer's market share reached 95%.[[24]](https://en.wikipedia.org/wiki/JavaScript#cite_note-searchenginejournal.com-24) This meant that [JScript](https://en.wikipedia.org/wiki/JScript) became the de facto standard for [client-side scripting](https://en.wikipedia.org/wiki/Client-side_scripting) on the Web.

Microsoft initially participated in the standards process and implemented some proposals in its JScript language, but eventually it stopped collaborating on Ecma work. Thus ECMAScript 4 was mothballed.

### **Growth and standardization[[edit](https://en.wikipedia.org/w/index.php?title=JavaScript&action=edit&section=5)]**

During the period of [Internet Explorer](https://en.wikipedia.org/wiki/Internet_Explorer) dominance in the early 2000s, client-side scripting was stagnant. This started to change in 2004, when the successor of Netscape, [Mozilla](https://en.wikipedia.org/wiki/Mozilla), released the [Firefox](https://en.wikipedia.org/wiki/Firefox) browser. Firefox was well received by many, taking significant market share from Internet Explorer.[[25]](https://en.wikipedia.org/wiki/JavaScript#cite_note-25)

In 2005, Mozilla joined ECMA International, and work started on the [ECMAScript for XML](https://en.wikipedia.org/wiki/ECMAScript_for_XML) (E4X) standard. This led to Mozilla working jointly with [Macromedia](https://en.wikipedia.org/wiki/Macromedia) (later acquired by [Adobe Systems](https://en.wikipedia.org/wiki/Adobe_Systems)), who were implementing E4X in their ActionScript 3 language, which was based on an ECMAScript 4 draft. The goal became standardizing ActionScript 3 as the new ECMAScript 4. To this end, Adobe Systems released the [Tamarin](https://en.wikipedia.org/wiki/Tamarin_(software)) implementation as an [open source](https://en.wikipedia.org/wiki/Open-source_model) project. However, Tamarin and ActionScript 3 were too different from established client-side scripting, and without cooperation from [Microsoft](https://en.wikipedia.org/wiki/Microsoft), ECMAScript 4 never reached fruition.

Meanwhile, very important developments were occurring in open-source communities not affiliated with ECMA work. In 2005, [Jesse James Garrett](https://en.wikipedia.org/wiki/Jesse_James_Garrett) released a white paper in which he coined the term [Ajax](https://en.wikipedia.org/wiki/Ajax_(programming)) and described a set of technologies, of which JavaScript was the backbone, to create [web applications](https://en.wikipedia.org/wiki/Web_application) where data can be loaded in the background, avoiding the need for full page reloads. This sparked a renaissance period of JavaScript, spearheaded by open-source libraries and the communities that formed around them. Many new libraries were created, including [jQuery](https://en.wikipedia.org/wiki/JQuery), [Prototype](https://en.wikipedia.org/wiki/Prototype_JavaScript_Framework), [Dojo Toolkit](https://en.wikipedia.org/wiki/Dojo_Toolkit), and [MooTools](https://en.wikipedia.org/wiki/MooTools).

[Google](https://en.wikipedia.org/wiki/Google) debuted its [Chrome](https://en.wikipedia.org/wiki/Google_Chrome) browser in 2008, with the [V8](https://en.wikipedia.org/wiki/V8_(JavaScript_engine)) JavaScript engine that was faster than its competition.[[26]](https://en.wikipedia.org/wiki/JavaScript#cite_note-26)[[27]](https://en.wikipedia.org/wiki/JavaScript#cite_note-27) The key innovation was [just-in-time compilation](https://en.wikipedia.org/wiki/Just-in-time_compilation) (JIT),[[28]](https://en.wikipedia.org/wiki/JavaScript#cite_note-28) so other browser vendors needed to overhaul their engines for JIT.[[29]](https://en.wikipedia.org/wiki/JavaScript#cite_note-29)

In July 2008, these disparate parties came together for a conference in [Oslo](https://en.wikipedia.org/wiki/Oslo). This led to the eventual agreement in early 2009 to combine all relevant work and drive the language forward. The result was the ECMAScript 5 standard, released in December 2009.

### **Reaching maturity[[edit](https://en.wikipedia.org/w/index.php?title=JavaScript&action=edit&section=6)]**

Ambitious work on the language continued for several years, culminating in an extensive collection of additions and refinements being formalized with the publication of [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript) 6 in 2015.[[30]](https://en.wikipedia.org/wiki/JavaScript#cite_note-30)

The creation of [Node.js](https://en.wikipedia.org/wiki/Node.js) in 2009 by [Ryan Dahl](https://en.wikipedia.org/wiki/Ryan_Dahl) sparked a significant increase in the usage of JavaScript outside of web browsers. Node combines the [V8](https://en.wikipedia.org/wiki/V8_(JavaScript_engine)) engine, an [event loop](https://en.wikipedia.org/wiki/Event_loop), and [I/O](https://en.wikipedia.org/wiki/Input/output) [APIs](https://en.wikipedia.org/wiki/Application_programming_interface), thereby providing a stand-alone JavaScript runtime system.[[31]](https://en.wikipedia.org/wiki/JavaScript#cite_note-31)[[32]](https://en.wikipedia.org/wiki/JavaScript#cite_note-b3-32) As of 2018, Node had been used by millions of developers,[[33]](https://en.wikipedia.org/wiki/JavaScript#cite_note-33) and [npm](https://en.wikipedia.org/wiki/Npm_(software)) had the most modules of any [package manager](https://en.wikipedia.org/wiki/Package_manager) in the world.[[34]](https://en.wikipedia.org/wiki/JavaScript#cite_note-34)

The ECMAScript draft specification is currently maintained openly on [GitHub](https://en.wikipedia.org/wiki/GitHub), and editions are produced via regular annual snapshots.[[35]](https://en.wikipedia.org/wiki/JavaScript#cite_note-branscombe-35) Potential revisions to the language are vetted through a comprehensive proposal process.[[36]](https://en.wikipedia.org/wiki/JavaScript#cite_note-36)[[37]](https://en.wikipedia.org/wiki/JavaScript#cite_note-37) Now, instead of edition numbers, developers check the status of upcoming features individually.[[35]](https://en.wikipedia.org/wiki/JavaScript#cite_note-branscombe-35)

The current JavaScript ecosystem has many [libraries](https://en.wikipedia.org/wiki/List_of_JavaScript_libraries) and [frameworks](https://en.wikipedia.org/wiki/Web_framework), established programming practices, and substantial usage of JavaScript outside of web browsers. Plus, with the rise of [single-page applications](https://en.wikipedia.org/wiki/Single-page_application) and other JavaScript-heavy websites, several [transpilers](https://en.wikipedia.org/wiki/Source-to-source_compiler) have been created to aid the development process.[[38]](https://en.wikipedia.org/wiki/JavaScript#cite_note-transpilers-38)

### 3.  ECMAScript vs JavaScript.

### Explanations:

Created in 1995 in only 10 days by Brendan Eich for the Netscape browser, the language was first called “Mocha”, then “LiveScript” to be finally renamed “Javascript”.

The registered trademark “Java” is then held by Sun Microsystems and a commercial agreement will be signed between the two groups to allow Netscape to use the name “Javascript”.

With the emergence of browser-interpreted programming languages, the need for uniformity and standardization of technologies is becoming increasingly important.

This is why the European Computer Manufacturers Association (ECMA) wrote the first version of the ECMAScript 1 standard in June 1997 with the help of the ISO and the IEC (International Electrotechnical Commission).

Since then, each web browser editor has been working on its own language implementations, working on new features but continuing to respect the evolutions of the standard. 

### Conclusion:

To make it short, “Javascript” is the commercial name of the language implementation interpreted by the browser and owned by Oracle, while the name ECMAScript designates the global language standard, managed by ECMA International and the ISO.

### 4.  How Browser parse JavaScript code (interpreter vs compiler).

### JavaScript Compilation

While the CSS is being parsed and the CSSOM created, other assets, including JavaScript files, are downloading (thanks to the preload scanner). JavaScript is interpreted, compiled, parsed and executed. The scripts are parsed into abstract syntax trees. Some browser engines take the [Abstract Syntax Tree](https://en.wikipedia.org/wiki/Abstract_Syntax_Tree) and pass it into an interpreter, outputting bytecode which is executed on the main thread. This is known as JavaScript compilation.

## **The Interpreter**

Here we read the files line by line on the fly.

![https://miro.medium.com/max/1016/1*Hi-nGZSsxVQFsdjAkKHoYg.png](https://miro.medium.com/max/1016/1*Hi-nGZSsxVQFsdjAkKHoYg.png)

Let’s take the above code as an example. Here, all we are doing is looping over our calculation (5+4) 1000 times. This is looping over and over. Our result is 9.

Now if we gave this file to an interpreter, the translation happens line by line; and normally it's how you would assume code is run.

> Babel is a Javascript compiler that takes your modern JS code and returns browser compatible JS (older JS code).Typescript is a superset of Javascript that compiles down to Javascript.
> 

From line one (function) ->second line(return) ->third part (for loop) and -> the calculations.Because interpreting code means taking a set of instructions and returning an answer. This is how initially javascript worked.

## **A Compiler**

A compiler, unlike an interpreter, doesn't translate on the fly. It works ahead of time to create a translation of the code we have written. It compiles it down to a language that can be understood by the machine.

![https://miro.medium.com/max/1008/1*LqqmqCZ6Oi7cDwihMTg9Qg.png](https://miro.medium.com/max/1008/1*LqqmqCZ6Oi7cDwihMTg9Qg.png)

A compiler will take one pass through the code and try to understand what the code does. It will take a program in javascript and write the program in a new language x. And if we take this language x it spits out and interpreted it, we would create the same results as our language.

So a compiler will try to understand what we want to do and will turn our language into usually a low-level language such as machine code.

## In**terpreters**

PROS: They are easy to get up and running because we don't have to convert our code into another language like how we saw language x. There is no compilation step before you start running your code. You just give the interpreter a file and it starts translating it line by line on the fly.

In a sense, this means that an interpreter is good for a language like Javascript because when a file is sent from the server, we want it to execute right away; a user will be waiting to interact with our application. Javascript was created for the browser and so being able to interpret Javascript and run it as fast as possible was ideal. It’s why the language used interpreters at the beginning.

CONS:

When you are running the same code over and over, for example, when you are in a loop, things get really slow.

## **Compiler PROS**

Because a compiler doesn't need to repeat the translation for each pass through in a loop, for example, the code generated is faster. These edits compilers do are called optimizations. The code from a compiler gradually gets faster and faster as more optimizations are done.

## **CONS**

The compiler takes a little more time to start because it has to go through that compilation step at the beginning but when it sees repeated code or loops, it will simplify the code.

## **So compiler or interpreter?**

The compiler which takes a little bit longer to get up and running but the code is eventually going to be faster or the interpreter that is easy to get up and running right away but unfortunately doesn't do any optimizations?

But what if we combine the best of both worlds?What if instead of just using an interpreter and compiler, we combine them and create something called a JIT (Just in time compilation)compiler? This is something that browsers like Chrome started doing to make the engines faster.

### 5.  ES5 and ES6.

# Difference between ES5 and ES6

[ES5 and ES6 compared](https://www.notion.so/aace0e754ed2460b8bfc818bd09d6a01)

# Transpilation

As of now, there are no browsers that fully support the ES6 features; however, we can convert the ES6 code to the ES5 code by using **the transpilation**.

There are two major compilers **Babel** and **Traceur**, which are used to convert the ES6 code to ES5 code as part of the build process.

# Spread Operator (...)

It is introduced in ES6, which makes it easy to merge arrays and objects.

# Template Literal (`)

It is a new feature introduced in ES6 that allows us to work with strings. Template literals allow us to perform string interpolation easily.

### 6.  Let/Var/Const -> How scoping works in JS (scope chain).

- **Var keyword in JavaScript:** The *var* is the oldest keyword to declare a variable in JavaScript
    - **Scope:** Global scoped or function scoped. The scope of the *var*keyword is the global or function scope. It means variables defined outside the function can be accessed globally, and variables defined inside a particular function can be accessed within the function.]
- **Let keyword in JavaScript:** The *let* keyword is an improved version of the *var* keyword.
    - **Scope: [block scoped:](https://www.geeksforgeeks.org/javascript-es2015-block-scoping/)** The scope of a *let* variable is only block scoped. It can’t be accessible outside the particular block ({block}).
- **[const](https://www.geeksforgeeks.org/javascript-const/) keyword in JavaScript:** The *const* keyword has all the properties that are the same as the *let* keyword, except the user cannot update it.
    - **Scope: [block scoped:](https://www.geeksforgeeks.org/javascript-es2015-block-scoping/)** When users declare a *const* variable, they need to initialize it, otherwise, it returns an error. The user cannot update the *const* variable once it is declared.
    
    ## Summary:
    
    The scope chain is used to resolve the value of variable names in javascript. Without a scope chain the Javascript engine wouldn't know which value to pick for a certain variable name if there are multiple defined at different scopes. Scope chain in javascript is **lexically defined**, which means that we can see what the scope chain will be by looking at the code.
    
    At the top of the scope chain is the global scope, which is the `window` object in the browser (`global` in `NodeJS`). Besides from the global scope, functions have their own scoping of variables. The scope chain can be determined by looking at where functions are defined.
    
    When resolving a variable, inner functions first look at their own scope. If the variable cannot be found in its own scope it will **climb up the scope chain** and looks for the variable name in the environment where the function was defined. This look like this:
    
    ![https://i.stack.imgur.com/YdoHp.png](https://i.stack.imgur.com/YdoHp.png)
    
    So in our image example when `innerFoo` uses the variable `bar` it first tries to find it within the scope of the innerFoo (code within function body). Then when it doesn't find it here it **climbs up the scope chain** to `foo`. In `foo` there is also no variable which is named `bar`. Therefore, it will climb up the scope chain and now look in the global scope. In the global scope is a variable named bar with a value of 10 to which `bar` will be resolved.
    

### 7.  function expression vs function declaration.

The **`function`** keyword can be used to define a function inside an expression.

A function expression is very similar to and has almost the same syntax as a function declaration (see `[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)` statement for details). The main difference between a function expression and a function declaration is the *function name*, which can be omitted in function expressions to create *anonymous* functions.

A function expression can be used as an [IIFE (Immediately Invoked Function Expression)](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) which runs as soon as it is defined. See also the chapter about [functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions) for more information.

The **function declaration** (function statement) defines a function with the specified parameters.

A function created with a function declaration is a `Function` object and has all the properties, methods and behavior of `Function` objects. See `[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)`for detailed information on functions.

A function can also be created using an expression (see [function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)).

By default, functions return `undefined`. To return any other value, the function must have a `[return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)` statement that specifies the value to return.

### 8.  What is Coercion in JS.

# **JavaScript Type Coercion (Implicit Conversion) and Why to use “===” and avoid “==”.**

# **What is Type Coercion in JavaScript?**

Type coercion is the automatic or implicit conversion of values from one data type to another. For example, converting a string value to an equivalent number value. It is also known as type conversion.

Type coercion can be useful but it can cause inconsistencies.

- Avoid “==” and use “===”. The double equal sign (==) performs abstract equality comparison and Triple equal sign (===) perform strict equality comparison.
- Don’t rely on JavaScript’s automatic type conversion specially when performing arithmetic operations. Provide explicit type conversion whenever necessary.

### 9.  Hoisting (both function and variable hoisting).

JavaScript **Hoisting** refers to the process whereby the interpreter appears to move the *declaration* of functions, variables or classes to the top of their scope, prior to execution of the code.

Hoisting allows functions to be safely used in code before they are declared.

Variable and class *declarations* are also hoisted, so they too can be referenced before they are declared. Note that doing so can lead to unexpected errors, and is not generally recommended.

## [Function hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting#function_hoisting)

One of the advantages of hoisting is that it lets you use a function before you declare it in your code.

`catName("Tiger");

function catName(name) {
  console.log("My cat's name is " + name);
}
/*
The result of the code above is: "My cat's name is Tiger"
*/`

## [Variable hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting#variable_hoisting)

Hoisting works with variables too, so you can use a variable in code before it is declared and/or initialized.

However JavaScript only hoists declarations, not initializations! This means that initialization doesn't happen until the associated line of code is executed, even if the variable was originally initialized then declared, or declared and initialized in the same line.

Until that point in the execution is reached the variable has its *default*initialization (`undefined` for a variable declared using `var`, otherwise uninitialized).

**Note:** Conceptually variable hoisting is often presented as the interpreter "splitting variable declaration and initialization, and moving (just) the declarations to the top of the code".

## [Function and class expression hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting#function_and_class_expression_hoisting)

[Function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function) and [class expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#class_expressions) are not hoisted.

The expressions evaluate to a function or class (respectively), which are typically assigned to a variable. In this case the variable declaration is hoisted and the expression is its initialization. Therefore the expressions are not evaluated until the relevant line is executed.

### 10. JS modules (CommonJs vs ES6 modules).

A **module system** allows us to split up our code in different parts or to include code written by other developers.

Since the very beginning of NodeJS, the **CommonJS module system** is the default module system within the ecosystem. However, recently a new module system was added to NodeJS - **ES modules**.

## **ES Modules: The ECMAScript Standard**

So, why would we need another option for imports?

As we already learned, CommonJS was initially chosen to be the default module system for NodeJS. At this time there was no such thing as a built-in module system in JavaScript. Thanks to the enormous growth of the world-wide JavaScript usage, the language evolved a lot.

Since the 2015 edition of the underlying ECMAScript standard (ES2015) we actually have a standardized module system in the language itself, which is simply called ES Modules.

It took a while before the browser vendors and the NodeJS maintainers actually fully implemented the standard. This was finally the case for NodeJS with version 14, when it first got stable. So, let’s just dive into it!

## **CommonJS: The Default NodeJS Module System**

In NodeJS each `.js` file is handled as a separate CommonJS module. This means that variables, functions, classes, etc. are not accessible to other files by default. You need to explicitly tell the module system which parts of your code should be exported.

This is done via the `module.exports` object or the `exports` shortcut, which are both available in every CommonJS module. Whenever you want to import code into a file, you use the `require()` function. Let’s see how this all works together.

## **Differences Between CommonJS and ES Modules**

There are a few key differences which you need to keep in mind when working with the two different NodeJS module systems. We are going to highlight the most important ones here.

### **File Extensions**

As you might already have noticed, in all of our ES modules imports we explicitly added the file extension to all file imports. This is mandatory for ES Modules (as opposed to e.g. CommonJS, Webpack or TypeScript).

This is significant as NodeJS distinguishes between CommonJS modules and ES Modules via the file extension. By default, files with the `.js` extension will be treated as CommonJS modules, while files with the `.mjs` extension are treated as ES Modules.

However, you might want to configure your NodeJS project to use ES Modules as the default module system. Please consult the [NodeJS documentation on file extensions](https://nodejs.org/api/packages.html#packagejson-and-file-extensions) to find out how to correctly configure your project.

As we already have seen, ES Modules can import CommonJS modules. Vice versa is not the case. **CommonJS modules cannot import ES Modules**. You are not able to import `.mjs` files from `.js` files. This is due to the different nature of the two systems.

### **Dynamic vs. Static**

The two module systems do not only have a different syntax. They also differ in the way how imports and exports are treated.

**CommonJS imports are dynamically resolved at runtime**. The `require()` function is simply run at the time our code executes. As a consequence, you can call it everywhere in your code.

**With ES Modules, imports are static, which means they are executed at parse time**. This is why imports are “hoisted”. They are implicitly moved to the top of the file. Therefore, we cannot use the import syntax we have seen above just in the middle of your code. The upside of this is that errors can be caught upfront and developer tools can better support us with writing valid code.

There might be cases where we really need to dynamically import modules at runtime. There is a solution: The dynamic `import()` function. As we really should treat this as a special use case, we did not cover it in this article. You may consult the [NodeJS documentation](https://nodejs.org/api/esm.html#import-expressions) if you want to know more.

## **When to Use Which?**

We have now learned about the two module system options in NodeJS. We have seen how we can create and import modules in CommonJS. We have also seen how to accomplish the same things with ES Modules.

Now you might wonder which module system you should use. Of course, the answer is: it depends. My personal advice is the following:

**If you are starting a new project, use ES Modules**. It has been standardized for many years now. NodeJS has stable support for it since version 14, which was released in April 2020. You can find a lot of documentation and examples out there. Many package maintainers already published their libraries with ES Modules support. There is no reason not to use it.

**Things may be different if you are maintaining an existing NodeJS project which uses CommonJS**. The most important fact is that currently there is no pressure to migrate your existing code. CommonJS is still the default module system of NodeJS and there are no signs that this will change soon. However, you might migrate to the ES Modules syntax while using CommonJS under the hood. This can be accomplished by tools like Babel or TypeScript and allows you to decide to more easily switch to ES Modules at a later point in time.

Whatever you choose, you won’t make a huge mistake. Both options are valid options, and this is the beauty of the JavaScript ecosystem. As we have just seen, it has evolved a lot in the past decade, and you have options for nearly anything you want to achieve.

[https://reflectoring.io/nodejs-modules-imports/#commonjs-the-default-nodejs-module-system](https://reflectoring.io/nodejs-modules-imports/#commonjs-the-default-nodejs-module-system)

### 11. Higher order functions.

### **So how can we define a Higher Order Function?**

Higher Orders Functions are functions that perform operations on other functions.

In this definition, *operations* can mean taking one or more functions as an argument OR returning a function as the result. It doesn't have to do both. Doing one or the other qualifies a function as a higher order function.

[https://www.freecodecamp.org/news/higher-order-functions-in-javascript-examples/](https://www.freecodecamp.org/news/higher-order-functions-in-javascript-examples/)

### 12. Closure.

In JavaScript, a closure is a [function](https://www.javascripttutorial.net/javascript-function/) that references variables in the outer scope from its inner scope. The closure preserves the outer scope inside its inner scope.

To understand the closures, you need to know how the lexical scoping works first.

### Lexical scoping

Lexical scoping defines the [scope of a variable](https://www.javascripttutorial.net/javascript-variable-scope/) by the position of that variable declared in the source code. For example:

```
let name = 'John';

function greeting() {
    let message = 'Hi';
    console.log(message + ' '+ name);
}
Code language: JavaScript (javascript)
```

In this example:

- The variable `name` is a global variable. It is accessible from anywhere including within the `greeting()` function.
- The variable `message` is a local variable that is accessible only within the `greeting()` function.

If you try to access the `message` variable outside the `greeting()` function, you will get an error.

So the JavaScript engine uses the scope to manage the variable accessibility.

According to lexical scoping, the scopes can be nested and the inner function can access the variables declared in its outer scope. For example:

```
function greeting() {
    let message = 'Hi';

    function sayHi() {
        console.log(message);
    }

    sayHi();
}

greeting();
Code language: JavaScript (javascript)
```

The `greeting()` function creates a local variable named `message` and a function named `sayHi()`.

The `sayHi()` is the inner function that is available only within the body of the `greeting()` function.

The `sayHi()` function can access the variables of the outer function such as the `message` variable of the `greeting()` function.

Inside the `greeting()` function, we call the `sayHi()` function to display the message `Hi`.

### JavaScript closures

Let’s modify the `greeting()` function:

```
function greeting() {
    let message = 'Hi';

    function sayHi() {
        console.log(message);
    }

    return sayHi;
}
let hi = greeting();
hi();// still can access the message variable
Code language: JavaScript (javascript)
```

Now, instead of executing the `sayHi()` function inside the `greeting()` function, the `greeting()` function returns the `sayHi()` function object.

Note that functions are the [first-class citizens in JavaScript](https://www.javascripttutorial.net/javascript-functions-are-first-class-citizens/), therefore, you can return a function from another function.

Outside of the `greeting()` function, we assigned the `hi` variable the value returned by the `greeting()` function, which is a reference of the `sayHi()` function.

Then we executed the `sayHi()` function using the reference of that function: `hi()`. If you run the code, you will get the same effect as the one above.

However, the interesting point here is that, normally, a local variable only exists during the execution of the function.

It means that when the `greeting()` function has completed executing, the `message`variable is no longer accessible.

In this case, we execute the `hi()` function that references the `sayHi()` function, the `message` variable still exists.

The magic of this is closure. In other words, the `sayHi()` function is a closure.

A closure is a function that preserves the outer scope in its inner scope.

## Summary

- Lexical scoping describes how the JavaScript engine uses the location of the variable in the code to determine where that variable is available.
- A closure is a combination of a function and its ability to remember variables in the outer scope.

### 13. Spread vs Rest.

In **[Javascript](https://www.geeksforgeeks.org/javascript-tutorial/)** both spread operator and rest parameter have the same syntax which is three dots**(…)**. Even though they have the same syntax they differ in functions.

**[Spread operator:](https://www.geeksforgeeks.org/javascript-spread-operator/)** The **[spread](https://www.geeksforgeeks.org/javascript-spread-operator/)** operator helps us expand an iterable such as an array where multiple arguments are needed, it also helps to expand the object expressions. In cases where we require all the elements of an iterable or object to help us achieve a task, we use a spread operator.

**Note:** There can be more than one spread operator in javascript functions.

**Syntax:**

```
var var_name = [...iterable];
```

**[Rest operator:](https://www.geeksforgeeks.org/javascript-rest-operator/)** The **[rest](https://www.geeksforgeeks.org/javascript-rest-operator/)** parameter is converse to the spread operator. while spread operator expands elements of an iterable, rest operator compresses them. It collects several elements. In functions when we require to pass arguments but were not sure how many we have to pass, the rest parameter makes it easier.

**Note:** There must be only one rest operator in javascript functions.

**Syntax:**

```
function function_name(...arguments) {
    statements;
}
```

### 14. Call/Apply/bind.

# ****Call() Method in JavaScript****

The `call()` method invokes a function with a specified context. In other words, you can tie a function into an object as if it belonged to the object.

# Apply() Method in JavaScript

The `apply()` method does the exact same as `call()`. The difference is that `call()` accepts an argument list, but `apply()` accepts an **array** of arguments.

# **Bind() Method in JavaScript**

You previously learned what `call()` and `apply()` methods do. As you saw, they executed the function immediately when called (and returned a value).

The `bind()` method is reminiscent of `call()` and `apply()`. But instead of executing a function immediately, `bind()` returns a function ****that can be executed later on.

In JavaScript, you can use `call()`, `apply()`, and `bind()` methods to couple a function with an object. This way you can call the function on the object as if it belonged to it.

- The `call()` and `apply()` are very similar methods. They both execute the bound function on the object immediately.
- The `bind()` method does not execute the function right away. Instead, it creates and returns a bound function that can be executed later.

This example summarizes using these methods:

```jsx
var obj = { num: 2 };

function add(a, b){
  return this.num + a + b;
}

const resultCall  = add.call(obj, 3, 5);
const resultApply = add.apply(obj, [3, 5]);
const funcBind    = add.bind(obj, 3, 5)
const resultBind  = funcBind();

console.log(resultCall, resultApply, resultBind);
```

### 15. Arrays (Map, Filter, reduce etc).

The Array object is used to store multiple values in a single variable:

const cars = ["Saab", "Volvo", "BMW"]

[JavaScript Array Methods and Properties](https://www.notion.so/598f8b5489d14755bfd9f711d7279c92)

[JavaScript - The Complete Guide (Beginner + Advanced)](https://www.notion.so/JavaScript-The-Complete-Guide-Beginner-Advanced-7e02329ac0f444a08d4f79c19e5e55ad)

### 16. Object (different ways to create Object).

In JavaScript, there are four methods to use to create an object:

1. Object Literals.
    
    An object literal, also called an object initializer, is a comma-separated set of paired names and values. You can create an object literal as shown below:
    
    ```jsx
    var car = {
        model: 'bmw',
        color: 'red',
        price: 2000
    }
    console.log(JSON.stringify(car));
    ```
    
    You can add properties dynamically in an object, including after you have created the object. Here we add the dynamic property **car.type**:
    
    ```jsx
    var car = {
        model: 'bmw',
        color: 'red',
        price: 2000
    }
    console.log(JSON.stringify(car));
    car.type = 'manual'; // dynamic property  console.log(JSON.stringify(car));
    ```
    
    The object literal is a simple expression that creates an object each time the statement that it appears in is executed in the code. You can also use `Object.defineProperty` to create properties in the object literal as shown below:
    
    ```jsx
    var car = {
        model: 'bmw',
        color: 'red',
        price: 2000
    }
    
    Object.defineProperty(car, "type", {
        writable: true,
        enumerable: true,
        configurable: false,
        value: 'gas'
    });
    console.log(car.type); //gas
    ```
    
    The main advantage of using `Object.defineProperty` is that you can set values for object property descriptors or modify existing properties. You can [learn more about Object Property Descriptor here](https://infragistics.com/community/blogs/infragistics/archive/2017/09/07/easy-javascript-part-7-what-are-property-descriptors.aspx).
    
2. New operator or constructor.
    
    The second way to create an object is to use the constructor function. If you call a function using a **new** operator, the function acts as a constructor and returns an object. Consider the following code:
    
    ```jsx
    function Car(model, color) {
        this.model = model;
        this.color = color;
    }
    
    var c1 = new Car('BMW', 'red');
    console.log(c1.model);
    ```
    
    This method of creating an object is also called the **Constructor Invocation Pattern**. There are two steps to work with the constructor function:
    
    1. Create a function, which will define the object type.
    2. Create an instance of an object using a **new** operator.
    
    To create a Student object, first, create a function as shown below. In this example, **this** represents the object being created, so name and age will be properties of the newly created object.
    
    ```jsx
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    ```
    
    Next, create instances of the Student object type as shown below:
    
    ```jsx
    var s1 = new Student('foo', 7);
    console.log(s1.name);
    var s2 = new Student('koo', 9);
    console.log(s2.name);
    ```
    
    You can use the `instanceof` operator to find types of the instance and determine whether s1 is an instance of the Student object, as shown below:
    
    ```jsx
    var s1 = new Student('foo', 9);
    console.log(s1 instanceof Student);
    ```
    
    You can also use `Object.defineProperty` to create properties in the constructor function, as shown below:
    
    ```jsx
    function Car(model) {
        Object.defineProperty(this, "model", {
            writable: true,
            enumerable: true,
            configurable: false,
            value: model
        });
    }
    
    var myCar = new Car("Audi A3");
    console.log(myCar.model);    // Audi  A3
    ```
    
    The main advantage of using `Object.defineProperty` is that you can set values for object property descriptors. You can [learn more about Object Property Descriptors here](https://infragistics.com/community/blogs/infragistics/archive/2017/09/07/easy-javascript-part-7-what-are-property-descriptors.aspx).
    
3. Object.create method.
    
    You can also create new objects using the `Object.create()` method, which allows you to specify the prototype object and the properties. For example:
    
    ```jsx
    var Car = {
        model: 'BMW',
        color: 'red'
    }
    ```
    
    You can use the `Car` object as a prototype to create another object, as shown below:
    
    ```jsx
    var ElectricCar = Object.create(Car);
    console.log(ElectricCar.model); // BMW
    ```
    
    In this example, you have created an object called `ElectricCar` using the `Car` object as a prototype, so the `ElectricCar` object will have all the properties of the `Car` object. You can also add properties as shown below:
    
    ```jsx
    var ElectricCar = Object.create(Car, {
        type: {
            value: 'Electric',
            writable: true,
            configurable: false,
            enumerable: true
        }
    });
    console.log(ElectricCar.type); // Electric
    ```
    
    Properties should be passed as objects and can be set using the property descriptor. You can also use the `Object.create` method to create inheritance between objects.
    
4. Class.
    
    ECMAScript 6 introduced the class keyword to create classes in JavaScript. Now you can use the class attribute to create a class in JavaScript instead of a function constructor, and use the new operator to create an instance. Consider the following code:
    
    ```jsx
    class Car {
    
        constructor(maker, price) {
            this.maker = maker;
            this.price = price;
        }
    
        getInfo() {
            console.log(this.maker + " costs : " + this.price);
        }
    }
    ```
    
    You can use the `Car` class to create objects as shown below:
    
    ```jsx
    var car1 = new Car("BMW", 100);
    car1.getInfo();
    var car2 = new Car("Audi", 150);
    car2.getInfo();
    ```
    

### 17. Prototype inheritance.

# **What Does Inheritance Mean in JavaScript?**

JavaScript inheritance is more widely known as “prototypal inheritance.” Prototypal inheritance uses the concept of **prototype chaining,** and it refers to the linking of objects via the prototype property. When a constructor function creates an object, it does not create it based on the constructor’s prototype; instead, it creates an object linked to the constructor’s prototype object.

This form of inheritance via the prototype chain is commonly referred to as delegation in JavaScript.

# **[[Prototype]] vs. .prototype vs. Prototype Object**

All objects in JavaScript have an internal slot called `[[Prototype]]`, which is a reference or link to another object. The value pointed at by the prototype internal slot of an object is generally referred to as “the prototype of that object.”

There is a difference between an object’s own `[[Prototype]]`, a prototype property on a constructor function, and a prototype object.

Let’s recap:

- All objects in JavaScript have a hidden `[[Prototype]]` property that is either another object or null.
- JavaScript’s inheritance system, as we have seen, is prototypal because objects can inherit properties from other objects.
- Adding methods or properties to the prototype of the constructor makes it available in memory only once and not for every instance.
- When a constructor is called with the new keyword, it creates a new object, and its prototype is set as the prototype of the resulting object.

### 18. Constructor Functions vs Normal Functions in JS.

In JavaScript, functions can be used as templates for creating other objects. These functions are called constructor functions and have special properties that are different from regular functions.

## Constructor Functions

Constructor functions are the equivalent of classes in many programming languages. Sometimes people will refer to them as reference types, classes, data types, or simply constructors. If you aren’t familiar with classes, they are a construct that allows you to specify some properties and behaviors (functions), and multiple objects can be created with those properties and behaviors. A common analogy you’ll often hear is, a class is to a blueprint as an object is to a house. Multiple houses can be created from a single blueprint, as multiple objects can be created from a class.

Let’s define a constructor function:

`function Person(name, position) {
  this.name = name;
  this.position = position;
}`

There is really nothing special about this function except that the function name starts with a capital letter. This isn’t mandatory, but it is a popular convention so that other developers know to invoke it as a constructor function. So how is the invocation different? Normally, functions are invoked with parenthesis. Constructor functions instead are invoked using the `new` operator:

`const david = new Person('David Tang', 'Lecturer');
const patrick = new Person('Patrick Dent', 'Associate Professor');`

Here we are *constructing* two `Person` objects.

When a constructor function is invoked with the `new` keyword, *this* refers to the object that is being constructed.

## Methods

Methods can be defined on constructor functions by assigning a function to a property.

`function Person(name) {
  this.name = name;
  this.hi = function () {
    console.log(`Hi! My name is ${this.name}.`);
  };
}

const eminem = new Person('Slim Shady');
eminem.hi(); // Hi! My name is Slim Shady.`

In this example, the `hi` property is assigned a function. When it is invoked off of a `Person` object, the keyword *this* will correspond to the newly constructed `Person`object.

Although methods can be defined this way, this approach does have a downside. Every time an instance of `Person` is created, a new function is defined and assigned to the `hi`property of that object. If we create 5 `Person` objects, they will all have their own `hi`method that does the same thing. A more efficient way to do this is to define `hi` once, and have each `Person` object use that same function reference. To do this, we can use a function’s `prototype`.

`function Person(name) {
  this.name = name;
}

Person.prototype.hi = function () {
  console.log(`Hi! My name is ${this.name}.`);
};

const david = new Person('David');
david.hi(); // Hi! My name is David.

const patrick = new Person('Patrick');
patrick.hi(); // Hi! My name is Patrick.`

Every function in JavaScript has a property called `prototype` which contains an almost empty object (more on this later). Whenever a `Person` instance is created, the object will inherit any properties or methods defined on `Person.prototype`.

We could have written the example above like this:

`function Person(name) {
  this.name = name;
}

Person.prototype = {
  constructor: Person,
  hi() {
    console.log(`Hi! My name is ${this.name}.`);
  },
};`

Rather than adding new methods to `Person.prototype` in several statements, we can just redefine the `Person.prototype` object. There is one caviat though. Remember when I said that the prototype is an “almost empty” object? Technically it has a property on it named `constructor` that points back to its constructor function. If we override the prototype by setting it to a completely new object, we should reset this `constructor` property.

## What Should Be Set On `prototype`?

Because anything on the prototype is shared across all object instances of that constructor, typically you only see methods defined on the prototype and properties stored on the constructed object itself. Methods are shared behaviors so each object doesn’t need its own unique method. However, each object often needs its own unique set of properties. Properties defined on the an object itself and not the prototype are referred to as “own properties”.

## ES6 Classes

Thanks to ES6, we can write the above constructor function using a common class syntax:

`class Person {
  constructor(name) {
    this.name = name;
  }

  hi() {
    console.log(`Hi! My name is ${this.name}.`);
  }
}`

In this example, `hi` will be stored on `Person.prototype`.

## Property Lookups

What happens if we define a property with the same name on an object and its constructor’s prototype? For example:

`function Person(name) {
  this.name = name;
  this.walk = function () {
    console.log('moon walking');
  };
}

Person.prototype.walk = function () {
  console.log('normal walking');
};

const mj = new Person('Michael Jackson');
mj.walk();`

In this example, a `walk` method is defined both on a `Person` instance and `Person.prototype`. What do you think will get logged to the console?

JavaScript will first try and look up a property on the object itself (an “own property”). If it exists, that property is used. If not, it will look at the prototype of the function that created the object.

So in the example above, `walk` is found on the `mj` object itself so it will log “moon walking” to the console. If our `Person` function looked like the following, then “normal walking” would be logged to the console because a `walk` method was not found on the object itself, so JavaScript looked next on `Person.prototype` in which the `walk`method was found.

`function Person(name) {
  this.name = name;
}`

## Inheritance

If you’ve come from a class-based language, you might be wondering how inheritance works. Let’s say we have an `Animal` constructor.

`function Animal() {}
Animal.prototype.eat = function () {
  console.log('eating');
};`

Now let’s say we have a `Cat` constructor:

`function Cat() {}
Cat.prototype.meow = function () {
  console.log('meowing');
};`

A cat is a type of animal and we want `Cat` to extend from `Animal`. One way to achieve inheritance is like this:

`function Animal() {}
Animal.prototype.eat = function () {
  console.log('eating');
};

function Cat() {}
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
Cat.prototype.meow = function () {
  console.log('meowing');
};`

If you’ve used classes in other languages before, you’re probably reading this and thinking “what the …“. Yes, it is very clunky. Thankfully, ES6 / ES2015 classes make this much much cleaner:

`class Animal {
  eat() {
    console.log('eating');
  }
}

class Cat extends Animal {
  meow() {
    console.log('meowing');
  }
}`

## Native Constructor Functions & Their Shorthand (literal) Counterparts

JavaScript has several built in functions that can be used as constructors including `String`, `Number`, `Boolean`, `Array`, `Function`, `Object`, `RegExp`, `Date`.

`const str = new String('some string');
// OR
const str = 'some string'; // literal syntax`

`const age = new Number(26);
// OR
const age = 26; // literal syntax`

`const person = new Object();
// OR
const person = {}; // literal syntax`

`const x = new Boolean(false);
// OR
const x = false; // literal syntax`

`const add = new Function('a', 'b', 'return a + b;');
const add = function (a, b) {
  return a + b;
}; // literal syntax`

Even though you can technically create numbers, strings, objects, booleans, and functions using the native constructors, it is almost always simpler and more straightforward to use the literal syntax.

## Extending Native Constructors

Native constructor functions can be extended as well. This is often considered a bad practice because if you create a custom `String` method and browsers in the future implement that method slightly differently, code may not work as you’d expect. Despite that, it is still a good exercise and worthwhile to learn for understanding prototypes.

`String.prototype.dasherize = function () {
  return this.replace(/\s/g, '-');
};

'hello world'.dasherize()`

### 19. Classes. (Why Classes are called syntactic sugar).

Classes are the syntactic sugar in the [javascript](https://reactgo.com/tutorials/javascript/) unlike the other programming languages javascript doesn’t contain proper classes.

Classes use the prototype-based inheritance by using constructors.

# **What is a constructor?**

A constructor is a function object which is used to create and initializes the objects.

![https://miro.medium.com/max/1400/0*mYHmWqr65p5Su6MS.png](https://miro.medium.com/max/1400/0*mYHmWqr65p5Su6MS.png)

Let’s discuss now by using examples.

```
function Student(){}const student = Student();
console.log(student) // undefined
```

If we invoke a function with the new keyword it will return the empty object instead of undefined.

```
function Student(){
}const student1 = new Student();console.log(student1); //  { }
```

![https://miro.medium.com/max/632/0*UZVDakFCH9t3Pa91.png](https://miro.medium.com/max/632/0*UZVDakFCH9t3Pa91.png)

**How to add properties into that returned empty object?**

```
function Student(name,age){  this.name = name
  this.age = age
}const student1 = new Student('king',20)
// { name : 'king',age:20 }
```

The new object is created by the constructor and assigned to **this** keyword so that we can add the properties to the object by using this.propertyname.

At last, the constructor returns `this` object like the below image.

![https://miro.medium.com/max/1400/0*8Dfw7MMtSg0hPakg.png](https://miro.medium.com/max/1400/0*8Dfw7MMtSg0hPakg.png)

# **Classes**

Classes are also a special type of functions using prototype-based inheritance. To declare the class we need to use the class keyword.

```
class Student{constructor(name,age){
  this.name = name
  this.age = age
}}const student1 = new Student('king',20)// { name : 'king',age:20 }
```

# **Methods in classes**

```
class Student{ constructor(name,age){
  this.name = name
  this.age = age
} getAge(){
   return this.age;
 }}const student1 = new Student('king',20)
student1.getAge();
```

The methods we declare inside the Student class are added to its prototype and it assigns the methods to the `this.__proto__` property. so that at the time of accessing the getAge method javascript engine first look on its object, if it fails to find then it will look up at the `__proto__` property.

check out the below image you will get the clarity.

![https://miro.medium.com/max/730/0*PjjQF-pDSuxBDAi-.png](https://miro.medium.com/max/730/0*PjjQF-pDSuxBDAi-.png)

# **Extends in classes**

Extends keyword helps us to access the properties and methods present in the other class or parent class.

**super**If we extend the class from the parent class we need to invoke the parent class before using the child class there is a super method provided by the javascript, it does the invocation for us.

```
class Csestudent extends  Student{    
constructor(name,age,course){
      super(name,age);
     this.course = course
    }   getCourse(){
      return this.course
   }
}const student = new Csestudent('king',20,'JavaScript')
```

In the below image, I have shown how the javascript engine process the code.

![https://miro.medium.com/max/1400/0*_tdhRoDDscWRT5ZC.gif](https://miro.medium.com/max/1400/0*_tdhRoDDscWRT5ZC.gif)

Let me explain what happens when we invoke a Csestudent class javascript engine first adds the Csestudent to the call stack once it sees the super method it invokes the parent class which is a Student and it returns the object with two properties at final we are adding **course** property to that object.

The final student object might look like these.

![https://miro.medium.com/max/946/0*xTOzbmfWT5e2fHoo.png](https://miro.medium.com/max/946/0*xTOzbmfWT5e2fHoo.png)

But the methods we declared in the Student class are present in the `this.__proto__.__proto__`

### 20. Pure Functions.

A **Pure Function** is a function (a block of code) that **always returns the same result if the same arguments are passed**. It does not depend on any state or data change during a program’s execution. Rather, it only depends on its input arguments.

Also a pure function does not produce any observable side effects such as network requests or data mutation etc.

Let’s see the below JavaScript Function:

```
function calculateGST( productPrice ) {
    return productPrice * 0.05;
}
```

The above function will always return the same result, if we pass the same productPrice. In other words, its output doesn’t get affected by any other values / state changes. So we can call “calculateGST” function a Pure Function.

Now, let’s see one more function below:

```
var tax = 20;
function calculateGST( productPrice ) {
    return productPrice * (tax / 100) + productPrice;
}
```

Pause a second and can you guess whether the above function is Pure or not ?

If you guessed that it is isn’t, you are right! It is not a pure function as the output is dependent on an external variable “tax”. So if the tax value is updated somehow, then we will get a different output though we pass the same productPrice as a parameter to the function.

But here we need to make an important note:

**Note:** If a pure function calls a pure function, this isn’t a side effect and the calling function is still considered pure. (Example: using Math.max() inside a function)

Below are some side effects (but not limited to) which a function should not produce in order to be considered as a pure function –

- Making a HTTP request
- Mutating data
- Printing to a screen or console
- DOM Query/Manipulation
- Math.random()
- Getting the current time

### 21. Partial functions vs Curried functions.

Currying is converting a single function of *n* arguments into *n* functions with a single argument each. Given the following function:

```
function f(x,y,z) { z(x(y));}

```

When curried, becomes:

```
function f(x) { lambda(y) { lambda(z) { z(x(y)); } } }

```

In order to get the full application of f(x,y,z), you need to do this:

```
f(x)(y)(z);

```

Many functional languages let you write `f x y z`. If you only call `f x y` or *f(x)(y)* then you get a partially-applied function—the return value is a closure of `lambda(z){z(x(y))}` with passed-in the values of x and y to `f(x,y)`.

One way to use partial application is to define functions as partial applications of generalized functions, like **fold**:

```
function fold(combineFunction, accumulator, list) {/* ... */}
function sum     = curry(fold)(lambda(accum,e){e+accum}))(0);
function length  = curry(fold)(lambda(accum,_){1+accum})(empty-list);
function reverse = curry(fold)(lambda(accum,e){concat(e,accum)})(empty-list);

/* ... */
@list = [1, 2, 3, 4]
sum(list) //returns 10
@f = fold(lambda(accum,e){e+accum}) //f = lambda(accumulator,list) {/*...*/}
f(0,list) //returns 10
@g = f(0) //same as sum
g(list)  //returns 10
```

### 22. Composition (what is composition, Object/function composition).

J**[avaScript Composition:](https://www.geeksforgeeks.org/what-are-the-class-compositions-in-javascript/)** 
Composition means to Compose. Everything in JavaScript is treated as an object even functions in JavaScript are treated as a high-class object. Such objects are quite complex in nature to make large complex objects simple, many small objects are composed together. Thus, we can say that composition is the cleaner, reusable and better solution for such large complex objects.

## Object Composition

This type of composition is about combining objects or other data types to create something more complex than what we started with. This can be accomplished in different ways depending on what language you have in front of you. In Java and C# you only have one way to create objects, by using a class. In other languages like JavaScript, you have objects that can be created in many ways and thereby you open up for different ways of composing.

### Object composition with Classes

Using classes is about a class referencing one or more other classes via instance variables. It describes a *has-a* association. Which means what exactly? A person has four limbs, a caave 4 wheels, and so on. Think of these classes being referenced as parts or *composites* that gives you the ability to do something, a capability. Let's look at an example:

   `class SteeringWheel {
     steer(){}
   }

   class Engine {
     run(){}
   }

   class Car {
     constructor(steeringWheel, engine) {
       this.steeringWheel = steeringWheel;
       this.engine = engine;
      }

     steer() {
       this.steeringWheel.steer();
     }

     run() {
       this.engine.run();
     }
   }

   class Tractor {
     constructor(steeringWheel) {
       this.steeringWheel = steeringWheel;
     }

     steer() {
       this.steeringWheel.steer();
     }
   }`

What we are getting above is first a more complex class `Car` consisting of many parts `steeringWheel` and `engine` and through that, we gain the ability to *steer* and a vehicle that *runs*. We also get *reusability* as we can use the `SteeringWheel` and use it in a `Tractor`.

### Object composition without classes

JavaScript is a little different than C# and Java in that it can create objects in a number of ways like the following:

- **Object literal**, you can create an object by just typing it out like so:

   `let myObject { name: 'a name' }``

- `Object.create()`, you can just pass in an object and it will use that as template. Like this for example:

   `const template = {
     a: 1,
     print() { return this.a }
   }

   const test = Object.create(template);
   test.a = 2
   console.log(test.print()); // 2`

- **Using `new`**. You can apply the `new` operator on both a class and a function, like so:

   `class Plane {
     constructor() {
       this.name = 'a plane'
     }
   }

   function AlsoAPlane() {
     this.name = 'a plane';
   }

   const plane = new Plane();
   console.log(plane.name); // a plane

   const anotherPlane = new AlsoAPlane();
   console.log(anotherPlane) // a plane`

There is a difference between the two approaches. You need to do a bit more work if you want *inheritance* to work for the functional approach among other things. For now, we are happy knowing that there are different ways to create objects using *new*.

So how would we actually *compose*? To *compose* we need a way to express behavior. We don't need to use classes if we don't want to, but we can skip directly to objects instead. We can express our composites in the following way:

`const steer = {
  steer() {
    console.log(`steering ${this.name}`)
  }
}

const run = {
  run() {
    console.log(`${this.name} is running`)
  }
}

const fly = {
  fly() {
    console.log(`${this.name} is flying`)
  }
}`

and *compose* them like so:

`const steerAndRun = { ...steer, ...run };
const flyingAndRunning = { ...run, ...fly };`

Above we are using the *spread* operator to combine different properties from different classes and place them into one class. The resulting `steerAndRun` now contains `{ steer(){ ... }, run() { ... } }` and `flyingAndRunning` contains `{ fly(){...}, run() {...} }`.

Then using the method `createVehicle()` we create what we need like so:

`function createVehicle(name, behaviors) {
  return {
    name,
    ...behaviors
  }
}

const car = createVehicle('Car', steerAndRun)
car.steer();
car.run();

const crappyDelorean = createVehicle('Crappy Delorean', flyingAndRunning)
crappyDelorean.run();
crappyDelorean.fly();`

The end result is two different objects with different capabilities.

### 23. Callbacks (What's callback in JS).

# Callback function

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

Here is a quick example:

`function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);`
Copy to Clipboard

The above example is a [synchronous](https://developer.mozilla.org/en-US/docs/Glossary/Synchronous) callback, as it is executed immediately.

Note, however, that callbacks are often used to continue code execution after an [asynchronous](https://developer.mozilla.org/en-US/docs/Glossary/Asynchronous) operation has completed — these are called asynchronous callbacks. A good example is the callback functions executed inside a `[.then()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)` block chained onto the end of a promise after that promise fulfills or rejects. This structure is used in many modern web APIs, such as `[fetch()](https://developer.mozilla.org/en-US/docs/Web/API/fetch)`.

### 24. How JS is Single Threaded.

Javascript is a single threaded language. This means it has one call stack and one memory heap. As expected, it executes code in order and must finish executing a piece code before moving onto the next. It's synchronous, but at times that can be harmful. For example, if a function takes awhile to execute or has to wait on something, it freezes everything up in the meanwhile.

A good example of this happening is the window alert function. alert("Hello World")

You can't interact with the webpage at all until you hit OK and dismiss the alert. You're stuck.

So how do we get asynchronous code with Javascript then?

Well, we can thank the Javascript engine (V8, Spidermonkey, JavaScriptCore, etc...) for that, which has Web API that handle these tasks in the background. The call stack recognizes functions of the Web API and hands them off to be handled by the browser. Once those tasks are finished by the browser, they return and are pushed onto the stack as a callback.

Open your console and type window then press enter. You'll see most everything the Web API has to offer. This includes things like ajax calls, event listeners, the fetch API, and setTimeout. Javascript uses low level programming languages like C++ to perform these behind the scenes.

Let's look at a simple example, run this code your console:

```jsx
console.log("first")

setTimeout(() => {

console.log("second")

}, 1000)

console.log("third")
```

What did we get back?

```jsx
first

third

undefined

second
```

Feels odd, right? Well, let's break this down line by line:

console.log("first") is on the stack first, so it gets printed. Next, the engine notices setTimeout, which isn't handled by Javascript and pushes it off to the WebAPI to be done asynchronously. The call stack moves on without caring about the code handed off to the Web APIs and console.log("three") is printed.

Next, the Javascript engine's event loop kicks in, like a little kid asking "Are we there yet?" on a road trip. It starts firing, waiting for events to be pushed into it. Since the setTimeout isn't finished, it returns undefined, as the default, well because it hasn't been given the value yet. Once the callback finally does hits we get console.log("second") printed.

### 25. Event Loop.

# The event loop

JavaScript has a runtime model based on an **event loop**, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. This model is quite different from models in other languages like C and Java.

## [Runtime concepts](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#runtime_concepts)

The following sections explain a theoretical model. Modern JavaScript engines implement and heavily optimize the described semantics.

### [Visual representation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#visual_representation)

![https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop/the_javascript_runtime_environment_example.svg](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop/the_javascript_runtime_environment_example.svg)

### [Stack](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#stack)

Function calls form a stack of *frames*.

`function foo(b) {
  let a = 10
  return a + b + 11
}

function bar(x) {
  let y = 3
  return foo(x * y)
}

const baz = bar(7) // assigns 42 to baz`

Order of operations:

1. When calling `bar`, a first frame is created containing references to `bar`'s arguments and local variables.
2. When `bar` calls `foo`, a second frame is created and pushed on top of the first one, containing references to `foo`'s arguments and local variables.
3. When `foo` returns, the top frame element is popped out of the stack (leaving only `bar`'s call frame).
4. When `bar` returns, the stack is empty.

Note that the arguments and local variables may continue to exist, as they are stored outside the stack — so they can be accessed by any [nested functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#nested_functions_and_closures) long after their outer function has returned.

### [Heap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#heap)

Objects are allocated in a heap which is just a name to denote a large (mostly unstructured) region of memory.

### [Queue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#queue)

A JavaScript runtime uses a message queue, which is a list of messages to be processed. Each message has an associated function that gets called to handle the message.

At some point during the [event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#event_loop), the runtime starts handling the messages on the queue, starting with the oldest one. To do so, the message is removed from the queue and its corresponding function is called with the message as an input parameter. As always, calling a function creates a new stack frame for that function's use.

The processing of functions continues until the stack is once again empty. Then, the event loop will process the next message in the queue (if there is one).

## [Event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#event_loop)

The **event loop** got its name because of how it's usually implemented, which usually resembles:

`while (queue.waitForMessage()) {
  queue.processNextMessage()
}`
Copy to Clipboard

`queue.waitForMessage()` waits synchronously for a message to arrive (if one is not already available and waiting to be handled).

### ["Run-to-completion"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#run-to-completion)

Each message is processed completely before any other message is processed.

This offers some nice properties when reasoning about your program, including the fact that whenever a function runs, it cannot be preempted and will run entirely before any other code runs (and can modify data the function manipulates). This differs from C, for instance, where if a function runs in a thread, it may be stopped at any point by the runtime system to run some other code in another thread.

A downside of this model is that if a message takes too long to complete, the web application is unable to process user interactions like click or scroll. The browser mitigates this with the "a script is taking too long to run" dialog. A good practice to follow is to make message processing short and if possible cut down one message into several messages.

### [Adding messages](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#adding_messages)

In web browsers, messages are added anytime an event occurs and there is an event listener attached to it. If there is no listener, the event is lost. So a click on an element with a click event handler will add a message — likewise with any other event.

The function `[setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)` is called with 2 arguments: a message to add to the queue, and a time value (optional; defaults to `0`). The *time value* represents the (minimum) delay after which the message will be pushed into the queue. If there is no other message in the queue, and the stack is empty, the message is processed right after the delay. However, if there are messages, the `setTimeout` message will have to wait for other messages to be processed. For this reason, the second argument indicates a *minimum* time — not a *guaranteed* time.

Here is an example that demonstrates this concept (`setTimeout` does not run immediately after its timer expires):

`const seconds = new Date().getSeconds();

setTimeout(function() {
  // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
  console.log(`Ran after ${new Date().getSeconds() - seconds} seconds`);
}, 500)

while (true) {
  if (new Date().getSeconds() - seconds >= 2) {
    console.log("Good, looped for 2 seconds")
    break;
  }
}`

### [Zero delays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#zero_delays)

Zero delay doesn't mean the call back will fire-off after zero milliseconds. Calling `[setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)` with a delay of `0` (zero) milliseconds doesn't execute the callback function after the given interval.

The execution depends on the number of waiting tasks in the queue. In the example below, the message `"this is just a message"` will be written to the console before the message in the callback gets processed, because the delay is the *minimum* time required for the runtime to process the request (not a *guaranteed* time).

The `setTimeout` needs to wait for all the code for queued messages to complete even though you specified a particular time limit for your `setTimeout`.

`(function() {

  console.log('this is the start');

  setTimeout(function cb() {
    console.log('Callback 1: this is a msg from call back');
  }); // has a default time value of 0

  console.log('this is just a message');

  setTimeout(function cb1() {
    console.log('Callback 2: this is a msg from call back');
  }, 0);

  console.log('this is the end');

})();

// "this is the start"
// "this is just a message"
// "this is the end"
// "Callback 1: this is a msg from call back"
// "Callback 2: this is a msg from call back"`
Copy to Clipboard

### [Several runtimes communicating together](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#several_runtimes_communicating_together)

A web worker or a cross-origin `iframe` has its own stack, heap, and message queue. Two distinct runtimes can only communicate through sending messages via the `[postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)` method. This method adds a message to the other runtime if the latter listens to `message` events.

## [Never blocking](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#never_blocking)

A very interesting property of the event loop model is that JavaScript, unlike a lot of other languages, never blocks. Handling I/O is typically performed via events and callbacks, so when the application is waiting for an [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)query to return or an [XHR](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) request to return, it can still process other things like user input.

Legacy exceptions exist like `alert` or synchronous XHR, but it is considered good practice to avoid them. Beware: [exceptions to the exception do exist](https://stackoverflow.com/questions/2734025/is-javascript-guaranteed-to-be-single-threaded/2734311#2734311)(but are usually implementation bugs, rather than anything else).

### 26. Asynchronous JavaScript (Callback vs Promise vs Async await).

Callback:

An event handler is a particular type of callback. A callback is just a function that's passed into another function, with the expectation that the callback will be called at the appropriate time. As we just saw, callbacks used to be the main way asynchronous functions were implemented in JavaScript.

However, callback-based code can get hard to understand when the callback itself has to call functions that accept a callback. This is a common situation if you need to perform some operation that breaks down into a series of asynchronous functions. For example, consider the following:

`function doStep1(init) {
  return init + 1;
}

function doStep2(init) {
  return init + 2;
}

function doStep3(init) {
  return init + 3;
}

function doOperation() {
  let result = 0;
  result = doStep1(result);
  result = doStep2(result);
  result = doStep3(result);
  console.log(`result: ${result}`);
}

doOperation();`
Copy to Clipboard

Here we have a single operation that's split into three steps, where each step depends on the last step. In our example, the first step adds 1 to the input, the second adds 2, and the third adds 3. Starting with an input of 0, the end result is 6 (0 + 1 + 2 + 3). As a synchronous program, this is very straightforward. But what if we implemented the steps using callbacks?

`function doStep1(init, callback) {
  const result = init + 1;
  callback(result);
}

function doStep2(init, callback) {
  const result = init + 2;
  callback(result);
}

function doStep3(init, callback) {
  const result = init + 3;
  callback(result);
}

function doOperation() {
  doStep1(0, result1 => {
    doStep2(result1, result2 => {
      doStep3(result2, result3 => {
        console.log(`result: ${result3}`);
      });
    });
  });

}

doOperation();`
Copy to Clipboard

Because we have to call callbacks inside callbacks, we get a deeply nested `doOperation()`function, which is much harder to read and debug. This is sometimes called "callback hell" or the "pyramid of doom" (because the indentation looks like a pyramid on its side).

When we nest callbacks like this, it can also get very hard to handle errors: often you have to handle errors at each level of the "pyramid", instead of having error handling only once at the top level.

For these reasons, most modern asynchronous APIs don't use callbacks. Instead, the foundation of asynchronous programming in JavaScript is the `[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)`.

Promise:

**Promises** are the foundation of asynchronous programming in modern JavaScript. A promise is an object returned by an asynchronous function, which represents the current state of the operation. At the time the promise is returned to the caller, the operation often isn't finished, but the promise object provides methods to handle the eventual success or failure of the operation.

With a promise-based API, the asynchronous function starts the operation and returns a `[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)` object. You can then attach handlers to this promise object, and these handlers will be executed when the operation has succeeded or failed.

Async/Await:

An async function is a function declared with the `async` keyword, and the `await` keyword is permitted within it. The `async` and `await` keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.

Async functions can contain zero or more `[await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)` expressions. Await expressions make promise-returning functions behave as though they're synchronous by suspending execution until the returned promise is fulfilled or rejected. The resolved value of the promise is treated as the return value of the await expression. Use of `async` and `await` enables the use of ordinary `try` / `catch` blocks around asynchronous code.

**Note:** The `await` keyword is only valid inside async functions within regular JavaScript code. If you use it outside of an async function's body, you will get a `[SyntaxError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)`.

`await` can be used on its own with [JavaScript modules.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

**Note:** The purpose of `async`/`await` is to simplify the syntax necessary to consume promise-based APIs. The behavior of `async`/`await` is similar to combining [generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators) and promises.

Async functions always return a promise. If the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise.

For example, the following:

`async function foo() {
   return 1
}`
Copy to Clipboard

...is similar to:

`function foo() {
   return Promise.resolve(1)
}`
Copy to Clipboard

**Note:**

Even though the return value of an async function behaves as if it's wrapped in a `Promise.resolve`, they are not equivalent.

An async function will return a different *reference*, whereas `Promise.resolve` returns the same reference if the given value is a promise.

It can be a problem when you want to check the equality of a promise and a return value of an async function.

`const p = new Promise((res, rej) => {
  res(1);
})

async function asyncReturn() {
  return p;
}

function basicReturn() {
  return Promise.resolve(p);
}

console.log(p === basicReturn()); // true
console.log(p === asyncReturn()); // false`
Copy to Clipboard

The body of an async function can be thought of as being split by zero or more await expressions. Top-level code, up to and including the first await expression (if there is one), is run synchronously. In this way, an async function without an await expression will run synchronously. If there is an await expression inside the function body, however, the async function will always complete asynchronously.

For example:

`async function foo() {
   await 1
}`
Copy to Clipboard

...is equivalent to:

`function foo() {
   return Promise.resolve(1).then(() => undefined)
}`
Copy to Clipboard

Code after each await expression can be thought of as existing in a `.then` callback. In this way a promise chain is progressively constructed with each reentrant step through the function. The return value forms the final link in the chain.

In the following example, we successively await two promises. Progress moves through function `foo` in three stages.

1. The first line of the body of function `foo` is executed synchronously, with the await expression configured with the pending promise. Progress through `foo` is then suspended and control is yielded back to the function that called `foo`.
2. Some time later, when the first promise has either been fulfilled or rejected, control moves back into `foo`. The result of the first promise fulfillment (if it was not rejected) is returned from the await expression. Here `1` is assigned to `result1`. Progress continues, and the second await expression is evaluated. Again, progress through `foo` is suspended and control is yielded.
3. Some time later, when the second promise has either been fulfilled or rejected, control re-enters `foo`. The result of the second promise resolution is returned from the second await expression. Here `2` is assigned to `result2`. Control moves to the return expression (if any). The default return value of `undefined` is returned as the resolution value of the current promise.

`async function foo() {
   const result1 = await new Promise((resolve) => setTimeout(() => resolve('1')))
   const result2 = await new Promise((resolve) => setTimeout(() => resolve('2')))
}
foo()`
Copy to Clipboard

Note how the promise chain is not built-up in one go. Instead, the promise chain is constructed in stages as control is successively yielded from and returned to the async function. As a result, we must be mindful of error handling behavior when dealing with concurrent asynchronous operations.

For example, in the following code an unhandled promise rejection error will be thrown, even if a `.catch` handler has been configured further along the promise chain. This is because `p2`will not be "wired into" the promise chain until control returns from `p1`.

`async function foo() {
   const p1 = new Promise((resolve) => setTimeout(() => resolve('1'), 1000))
   const p2 = new Promise((_,reject) => setTimeout(() => reject('2'), 500))
   const results = [await p1, await p2] // Do not do this! Use Promise.all or Promise.allSettled instead.
}
foo().catch(() => {}) // Attempt to swallow all errors...`

### 27. Generator Functions.

**Generator functions** provide a powerful alternative: they allow you to define an iterative algorithm by writing a single function whose execution is not continuous. Generator functions are written using the `[function*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)` syntax.

When called, generator functions do not initially execute their code. Instead, they return a special type of iterator, called a **Generator**. When a value is consumed by calling the generator's `next` method, the Generator function executes until it encounters the `yield`keyword.

The function can be called as many times as desired, and returns a new Generator each time. Each Generator may only be iterated once.

We can now adapt the example from above. The behavior of this code is identical, but the implementation is much easier to write and read.

`function* makeRangeIterator(start = 0, end = 100, step = 1) {
    let iterationCount = 0;
    for (let i = start; i < end; i += step) {
        iterationCount++;
        yield i;
    }
    return iterationCount;
}`

### 28. This keyword in JS.

In JavaScript, the `this` keyword refers to an **object**.

**Which** object depends on how `this` is being invoked (used or called).

The `this` keyword refers to different objects depending on how it is used:

In an object method,  this refers  to the **object**

---

Alone,this refers to the **global object**

---

In a function, this refers to   **object**

---

In a function, in strict mode, this is undefined

---

In an event, this refers to the **element T**hat received the event.

---

Methods like call() and bind () can refer this to ANY object.

<aside>
💡 NOTE

this is not a variable. It’s a keyword. You *cannot* change the value of this.

</aside>

---

### 29. JavaScript API vs Browser's API.

**API** stands for **Application Programming Interface**, which is a set of protocols and definitions that allows communication between two software. APIs provide instructions for building and integrating application software that can access the features or data of another application.

API requests are made to the server, then the responses are returned to the app. See a visual depiction of this process below:

[https://www.educative.io/api/edpresso/shot/5167658265214976/image/6162907884158976](https://www.educative.io/api/edpresso/shot/5167658265214976/image/6162907884158976)

## 

### **Introduction to browser APIs**

**Browser APIs** are APIs that are built into the browser and provide native features that can also be used in a web app. These can also be called web APIs.

With the use of **web APIs**, we can easily implement certain features with fewer lines of code, such as:

- making network requests
- managing client-side storage
- retrieving device media streams, etc.

## 

### **Categories of browser APIs**

Web APIs can be grouped into different categories depending on the functions they perform.

- **Fetch API**: These are capable of making HTTP requests to a web server. The response can be in JSON, plain text, or XML format. The fetch API is a modern replacement for XHR. It was introduced in browsers recently to make asynchronous HTTP requests easier.
- **APIs for manipulating document structure**: APIs such as the [DOM (Document Object Model) API](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) can be placed in this category. This allows you to manipulate HTML and CSS in creating, removing, and also dynamically applying new styles to your page.
- **Device APIs**: These are APIs that give mobile functionality to web apps. Many APIs have been developed to help extend and shape the functionality of the web to match the capabilities of modern devices. A good example is the [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API), which is used to get the geographical position of a user. It takes advantage of the device’s capability to pinpoint the user’s location that can then be used in the web app.
- **APIs for drawing graphics**: Modern web browsers today now support the creation of graphics on the web. One of the APIs is the [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API). It provides a means for drawing graphics using JavaScript and HTML. Different shapes, objects, and styles can be created using this API. The Canvas API is solely based on 2D graphics, currently.
- **Storage APIs**: These APIs give the ability to store data on the client-side, which is very useful for storing certain user data for some time. One of which is the [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API). These can either be the sessionStorage, which keeps data for the duration of the session, or the localStorage, which retains the data even after the browser is closed.
- **Audio and Video APIs**: These APIs can manage, display, and create different media types. Some of which are:
    - The **[Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)** provides a platform for controlling audio and allowing developers to choose audio sources, add effects to audio, and much more.
    - The **WebRTC (Web Real-Time Communication) API** makes it possible to stream live audio and video, as well as transfer arbitrary data between two peers over the internet without requiring an intermediary.
    - The **[HTML Media Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement)** uses HTML elements with properties and methods needed to support basic media-related capabilities that are common to audio and video.
    - You can also capture local media using local cameras and microphones via the **[Media Capture and Streams API](https://developer.mozilla.org/en-US/docs/Web/API/Media_Streams_API)**.

> One major limitation of using a browser API is that most of them are not standardized yet. This means the support for a web API may differ from one web browser to another. For example, an API may work with the Chrome browser that is not yet supported by Firefox or Edge browsers.
> 

You can find out the various support for a particular API on the [Can I Use](https://caniuse.com/)website.

Alternatively….

# JavaScript APIs

JavaScript APIs for WebExtensions can be used inside the extension's [background scripts](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts)and in any other documents bundled with the extension, including [browser action](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_action) or [page action](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) popups, [sidebars](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars), [options pages](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages), or [new tab pages](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides). A few of these APIs can also be accessed by an extension's [content scripts](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#content_scripts). (See the [list in the content script guide](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#webextension_apis).)

To use the more powerful APIs, you need to [request permission](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in your extension's `manifest.json`.

You can access the APIs using the `browser` namespace:

`function logTabs(tabs) {
  console.log(tabs)
}

browser.tabs.query({currentWindow: true}, logTabs)`
Copy to Clipboard

Many of the APIs are asynchronous, returning a `[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)`:

`function logCookie(c) {
  console.log(c)
}

function logError(e) {
  console.error(e)
}

let setCookie = browser.cookies.set(
  {url: "https://developer.mozilla.org/"}
);
setCookie.then(logCookie, logError)`
Copy to Clipboard

## [Browser API differences](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API#browser_api_differences)

Note that this is different from Google Chrome's extension system, which uses the `chrome`namespace instead of `browser`, and which uses callbacks instead of promises for asynchronous functions. As a porting aid, the Firefox implementation of WebExtensions APIs supports `chrome` and callbacks as well as `browser` and promises. Mozilla has also written a polyfill which enables code that uses `browser` and promises to work unchanged in Chrome: [https://github.com/mozilla/webextension-polyfill](https://github.com/mozilla/webextension-polyfill).

Firefox also implements these APIs under the `chrome` namespace using callbacks. This allows code written for Chrome to run largely unchanged in Firefox for the APIs documented here.

Microsoft Edge uses the `browser` namespace, but doesn't yet support promise-based asynchronous APIs. In Edge, for the time being, asynchronous APIs must use callbacks.

Not all browsers support all the APIs: for the details, see [Browser support for JavaScript APIs](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)and [Chrome incompatibilities](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities).

## [Examples](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API#examples)

Throughout the JavaScript API listings, you will find short code examples that illustrate how the API is used. You can experiment using these examples—*without* needing to create a web extension—using the console in the [Toolbox](https://extensionworkshop.com/documentation/develop/debugging/#developer-tools-toolbox).

For example, here is the first code example on this page running in the Toolbox console in Firefox Developer Edition:

![https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/javascript_exercised_in_console.jpg](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/javascript_exercised_in_console.jpg)

## [JavaScript API listing](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API#javascript_api_listing)

See below for a complete list of JavaScript APIs:

[action](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/action)Adds a button to the browser's toolbar.

[alarms](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/alarms)Schedule code to run at a specific time in the future. This is like `[setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)` and `[setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)`, except that those functions don't work with background pages that are loaded on demand.

[bookmarks](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks)The [WebExtensions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions) `bookmarks` API lets an extension interact with and manipulate the browser's bookmarking system. You can use it to bookmark pages, retrieve existing bookmarks, and edit, remove, and organize bookmarks.

[browserAction](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserAction)Adds a button to the browser's toolbar.

[browserSettings](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings)Enables an extension to modify certain global browser settings. Each property of this API is a `types.BrowserSetting` object, providing the ability to modify a particular setting.

[browsingData](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browsingData)Enables extensions to clear the data that is accumulated while the user is browsing.

[captivePortal](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/captivePortal)Determine the captive portal state of the user's connection. A captive portal is a web page displayed when a user first connects to a Wi-Fi network. The user provides information or acts on the captive portal web page to gain broader access to network resources, such as accepting terms and conditions or making a payment.

[clipboard](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/clipboard)The WebExtension `clipboard` API (which is different from the [standard Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)) enables an extension to copy items to the system clipboard. Currently the WebExtension `clipboard` API only supports copying images, but it's intended to support copying text and HTML in the future.

[commands](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/commands)Listen for the user executing commands that you have registered using the `[commands`manifest.json key](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands).

[contentScripts](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/contentScripts)Use this API to register content scripts. Registering a content script instructs the browser to insert the given content scripts into pages that match the given URL patterns.

[contextualIdentities](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities)Work with contextual identities: list, create, remove, and update contextual identities.

[cookies](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies)Enables extensions to get and set cookies, and be notified when they change.

[devtools](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/devtools)Enables extensions to interact with the browser's Developer Tools. You can use this API to create Developer Tools pages, interact with the window that is being inspected, inspect the page network usage.

[dns](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/dns)Enables an extension to resolve domain names.

[downloads](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/downloads)Enables extensions to interact with the browser's download manager. You can use this API module to download files, cancel, pause, resume downloads, and show downloaded files in the file manager.

[events](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/events)Common types used by APIs that dispatch events.

[extension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/extension)Utilities related to your extension. Get URLs to resources packages with your extension. Get the `[Window](https://developer.mozilla.org/en-US/docs/Web/API/Window)` object for your extension's pages. Get the values for various settings.

[extensionTypes](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/extensionTypes)Some common types used in other WebExtension APIs.

[find](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/find)Finds text in a web page, and highlights matches.

[history](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/history)Use the `history` API to interact with the browser history.[i18n](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n)Functions to internationalize your extension. You can use these APIs to get localized strings from locale files packaged with your extension, find out the browser's current language, and find out the value of its [Accept-Language  header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation#the_accept-language_header).

[identity](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/identity)Use the identity API to get an [OAuth2](https://oauth.net/2/) authorization code or access token, which an extension can then use to access user data from a service that supports OAuth2 access (such as Google or Facebook).

[idle](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/idle)Find out when the user's system is idle, locked, or active.

[management](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/management)Get information about installed add-ons.

[menus](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/menus)Add items to the browser's menu system.

[notifications](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/notifications)Display notifications to the user, using the underlying operating system's notification mechanism. Because this API uses the operating system's notification mechanism, the details of how notifications appear and behave may differ according to the operating system and the user's settings.

[omnibox](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/omnibox)Enables extensions to implement customized behavior when the user types into the browser's address bar.

[pageAction](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/pageAction)A [page action](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) is a clickable icon inside the browser's address bar.

[permissions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/permissions)Enables extensions to request extra permissions at runtime, after they have been installed.[pkcs11](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/pkcs11)The `pkcs11` API enables an extension to enumerate [PKCS #11](https://en.wikipedia.org/wiki/PKCS_11) security modules and to make them accessible to the browser as sources of keys and certificates

.[privacy](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/privacy)Access and modify various privacy-related browser settings.

[proxy](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/proxy)Use the proxy API to proxy web requests. You can use the `proxy.onRequest` event listener to intercept web requests, and return an object that describes whether and how to proxy them.

[runtime](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime)This module provides information about your extension and the environment it's running in.

[scripting](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/scripting)Inserts JavaScript and CSS into websites. This API offers two approaches to inserting content:

[search](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/search)Retrieves search engines and executes a search with a specific search engine.

[sessions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/sessions)Use the sessions API to list, and restore, tabs and windows that have been closed while the browser has been running.

[sidebarAction](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction)Gets and sets properties of an extension's sidebar.

[storage](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage)Enables extensions to store and retrieve data, and listen for changes to stored items.

[tabs](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs)Interact with the browser's tab system.

[theme](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/theme)Enables browser extensions to update the browser theme.

[topSites](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/topSites)Use the topSites API to get an array containing pages that the user has visited frequently.

[types](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/types)Defines the `BrowserSetting` type, which is used to represent a browser setting.

[userScripts](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/userScripts)Use this API to register user scripts, third-party scripts designed to manipulate webpages or provide new features. Registering a user script instructs the browser to attach the script to pages that match the URL patterns specified during registration.

[webNavigation](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webNavigation)Add event listeners for the various stages of a navigation. A navigation consists of a frame in the browser transitioning from one URL to another, usually (but not always) in response to a user action like clicking a link or entering a URL in the location bar.

[webRequest](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest)Add event listeners for the various stages of making an HTTP request, which includes websocket requests on `ws://` and `wss://`. The event listener receives detailed information about the request and can modify or cancel the request.

[windows](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/windows)Interact with browser windows. You can use this API to get information about open windows and to open, modify, and close windows. You can also listen for window open, close, and activate events.

### 30. Mutable vs Immutable.

By the definition of [Mozilla](https://developer.mozilla.org/en-US/docs/Glossary/Mutable) -

> Mutable is a type of variable that can be changed. In JavaScript, only objects and arrays are mutable, not primitive values.
> 
> 
> *A **mutable object** is an object whose state can be modified after it is created.*
> 
> ***Immutables** are the objects whose state cannot be changed once the object is created.*
> 

# **Let’s break it down**

There are two data types in JavaScript — Primitive Types (value type) and Non-Primitive Types (reference type).

![https://miro.medium.com/max/1400/1*jWWisFncH1QZFP4ZSbxTQw.png](https://miro.medium.com/max/1400/1*jWWisFncH1QZFP4ZSbxTQw.png)

## **Value Types**

Value types are been stored on the **Stack** in our memory. The stack is simply a **stack of data** that has a “LIFO” (last in, first out) data structure. It doesn’t have much space (compare to other data structures) but due to how it works, it is very fast to access.

When storing a value type in memory, it adds an element to the top of the stack with the value of the newly created variable. When creating a new variable and assigned the first one to the new one, it adds a new element on top of the stack with the value of the new variable (which is the value of the first created variable).

By creating

```
var name = "Maya";
var newName = name;
```

The first variable — **name** gets into the stack with the value of the variable data. Then, the **newName** gets into the stack in a new memory location with the value of the variable data.

![https://miro.medium.com/max/1312/1*shQBULqHJR1AsRbqGPikAw.png](https://miro.medium.com/max/1312/1*shQBULqHJR1AsRbqGPikAw.png)

## **Reference Types**

reference types are been stored on the **Heap**. The Heap, indifference from the stack, has no order of how to store the data. You can think of it as it stores the data randomly, where each of the data has its own address. It is slower to access but has much more space since it handles more complex variables.

When storing a reference type in memory, it adds a new element to the top of the **stack** when its value is a pointer/reference to the address of the object that has been stored on the **heap**.

By creating

```
var Person = {name: "Maya", age: "29"}
var newPerson = Person;
```

A new element gets into the **stack** with a value of the **pointer/reference** to the **Person** object that has been stored on the **heap**.

![https://miro.medium.com/max/1400/1*9sL85S8e6uxdZ-H-Fc8ffA.png](https://miro.medium.com/max/1400/1*9sL85S8e6uxdZ-H-Fc8ffA.png)

When creating a **newPerson** object and assigned the **Person** object to it, it adds a new element to the top of the **stack** with a value of the **pointer/reference** to the first **Person** object that has been stored on the **heap**.

![https://miro.medium.com/max/1400/1*18hC__pL122erNSZ1wA01w.png](https://miro.medium.com/max/1400/1*18hC__pL122erNSZ1wA01w.png)

## **Let’s see some code**

let’s create a variable with a string as a value. Then, we create a new variable and assigned the first variable to it. Then, we will change the first variable value. We will print each variable after we created it.

```
var name = 'Maya';
console.log(name);var newName = name;
console.log(newName);name = 'Joe';
console.log(newName);
```

With no surprises, we will see that in the console.

![https://miro.medium.com/max/380/1*O2WYzAhumSQ4gYWA3aBxiw.png](https://miro.medium.com/max/380/1*O2WYzAhumSQ4gYWA3aBxiw.png)

Now, let’s create an object variable. Then, we will create a new object variable and assigned the first object to it. Then, we will change the data of the first object. Again, we will print each variable after we created it.

```
var person = {name:'Maya', age:29};
console.log(person);var newPerson = person;
console.log(newPerson);person.name = 'Joe';
console.log(newPerson);
```

This time, we will see in the console

![https://miro.medium.com/max/430/1*7v0vSfQEyw_hTp36wc5Rrw.png](https://miro.medium.com/max/430/1*7v0vSfQEyw_hTp36wc5Rrw.png)

## **Mutable and Immutable**

Did you see how changing the value type **name** data does NOT affect the **newName** data but when changing the **Person** object data it affects the **newPerson** data?

This is happening because of how the data is been stored.

Each time a value type is been created, a new element gets into the top of the stack and stores the data of that variable. On the other hand, when creating a reference type a new element gets into the top of the stack but this time, it stores the reference/pointer to the address location of the object in the heap. Then, when we assign the created object to a new object variable a new element gets into the top of the stack BUT with the same reference/pointer to the first object.

**Therefore, when changing the data of a created object, all other objects that point to the same address location on the heap are being changed also.**

With that in mind, we can say that a **value type is immutable** where a **reference type is mutable**.

### 31. DOM vs BOM vs CSSOM

DOM: Document Object Model

DOM stands for Document Object Model. It is a standard defined by `W3C (World Wide Web Consortium)`. DOM is a programming interface (API) for representing and interacting with HTML, XHTML and XML documents. It organizes the elements of the document in a tree structure (DOM tree) and in the DOM tree, all elements of the document are defined as `objects (tree nodes)` which have properties and methods.

In simple terms, the DOM is a way to represent the webpage in a structured hierarchical manner so that it will become easier for programmers and end-users to glide through the whole document. With the DOM, we can easily access and manipulate various tags available in DOM, attributes, IDs, classes, or the whole piece elements using commands or methods provided by Document objects and one of the most popular is "getElementById()" to access the specific element by using the ID attribute.

DOM tree objects can be accessed and manipulated with the help of any programming language since it is cross-platform and language-independent. Typically, we manipulate the DOM tree with the help of JavaScript and jQuery using multiple ways of accessing elements by their class names, ID, or the name of the element.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2a5f76ae-3288-456d-ac70-5c57642a5c85/Untitled.png)

# **BOM**

BOM stands for Browser Object Model. Unlike DOM, there is no standard defined for BOM, hence different browsers implement it in different ways. Typically, the collection of browser objects is collectively known as the Browser Object Model.

BOM's main task is to manage browser windows and enable communication between the windows. Each HTML page that is loaded into a browser window becomes a `Document object` and document object is an object in the BOM. You can say BOM is a superset of DOM. BOM has many objects, methods, and properties that are not the part of the DOM structure.

# CSS Object Model (CSSOM)

The **CSS Object Model** is a set of APIs allowing the manipulation of CSS from JavaScript. It is much like the DOM, but for the CSS rather than the HTML. It allows users to read and modify CSS style dynamically.

The values of CSS are represented untyped, that is using `[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)` objects.

### 32. Transpilation Vs Compilation

**Transpilation is defined as source-to-source compilation. Tools have been written to do this and they are called transpilers. Transpilers take the source code and convert it into another language. Transpilers are important for two reasons. First, not every browser supports every new syntax in ES6, and second, many developers use programming languages based off of JavaScript, such as CoffeeScript or TypeScript.**

****Note**** The ES6 compatibility table can be found at [https://kangax.github.io/compat-table/es6/](https://kangax.github.io/compat-table/es6/)[.](https://subscription.packtpub.com/book/application-development/9781789800104/1/ch01lvl1sec12/ERROR%20PARSING%20ATTRIBUTE%20CONTENT)

# Compiling

Compiling is a catch all term for turning code written, into some lower-level executable for the computer (generally machine code). An example of some compiled languages are Java, C# or C. Sometimes it's compiled in multiple steps, each step optimising the code and getting it closer to machine code with each "pass" it does. A high level, closer to human readable language ends up "lower" or closer to binary.

# Transpile

Transpiling are sometimes referred to as "source to source compilers", a short hand way of saying "source code to source code". Transpiling is converting one higher level language to another higher level language. For example, Typescript is a high level language but after it's transpiled it's turned into JavaScript (another high level language). Or Babel for example can transpile ES6 JavaScript code into ES5 JavaScript. The benefits of transpiling is you can write one language and still end up with another high level language.