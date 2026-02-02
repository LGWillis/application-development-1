1. Original bug and why did Node throw an error:
    - The original bug stemmed from the discount variable not being defined in the function "applyDiscount". This led to Node throwing a ReferenceError, which is a runtime error because the code was being executed until it came across the undefined discount variable. When this happened, Node subsequently crashed.

2. Logging to help explain behavior:
    - By adding logging to the program, I was able to see things like the program starting up, the input values, and whether any discount was used. In this case, my program used structured logging with console.info, console.warn, and console.error. This enabled me to actually understand what was happening when my code was being executed instead of just assuming.

3. Testing over manually re-running the script:
    - When you manually re-run a script, you must try and remember the inputs and outputs, which could potentially lead to future errors. You also could forget edge cases when manually running a script. Testing, in comparison, is faster, consistent, and includes edge cases systemically. By using a test framework like Jest, like we did in this assignment, we can run all the tests quickly and the expected behavior will be documented.

4. Which case would you keep if you could only keep one:
    - If I could only keep one case, it would be between the edge case test or the invalid input test. If I keep the the edge case test, I could ensure that no discount is being applied when the total is 100. However, I think that the invalid input test is more important, as a negative input could crash my program or make it produce unwanted results. So, for that reason, I would have to keep the invalid input test.


<img width="2219" height="1272" alt="Screenshot 2026-02-02 170416" src="https://github.com/user-attachments/assets/f0417198-7d41-4e76-b116-f75a048759ee" />
