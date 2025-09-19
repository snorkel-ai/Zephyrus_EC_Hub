// Guidelines data extracted from text files
export const guidelines = [
  {
    id: 1,
    title: "Project Overview & Workflow",
    content: `Project Overview
For this pilot phase of Project Zephyrus, you will create complex questions, answers, and explanations for images containing one or more scientific charts.

On the Snorkel Expert Platform, you will see:
1. An image on the left side containing one or more charts.
2. Empty fields on the right that need to be filled.

The task is to analyze the chart(s) and, if they are sufficiently "interesting", come up with a complex question and answer pair.

Step-by-Step Workflow
Please see the UI Walkthrough for many additional details and screenshots.

Submission
In Submission, you will be shown an image of 1+ charts/plots of some kind. Your task is to generate a complex QA pair with appropriate units based on the image.

1. Determine if the chart is interesting or not, skip it if not
2. Generate a complex question and precise answer using Excalidraw
3. Fill out the units for the answer
4. Indicate the type of answer
   • Please note - "Inherently Multiple Choice" does not mean a literal multiple-choice question with given answer options. It just means that the answer comes from a discrete set of choices and cannot take any value. Do not give multiple choice answer options on any question.
5. Fill out AHT
6. Submit task

Review
In Review, you will be shown the chart(s) and corresponding question from a submitted task. Your task is to generate a precise answer to the given question. Your workflow mirrors the Submission workflow, with the one exception that the question will be given to you instead of you creating it.

1. Come up with a precise answer using Excalidraw
2. Fill out the units for the answer
3. Indicate the type of answer
4. Fill out AHT
5. Submit task

Do not edit the question in the review stage.

Adjudication
In Adjudication, you will be shown the original question, answers from submitter and reviewers (including units), and answer type. Your task is to use this submitted/reviewed data to either accept the task or send it back for revision.

1. Look at the answers - determine if at least two out of three answers are within 10% of each other
   • If there is not agreement between at least two answers, one being the submitter's, then the task must be sent back for revision with comments that the answers do not match.
   • Agreement includes all of the following:
     - Answer value
     - Units
     - Type of Answer
2. If at least two answers align, then solve the question yourself and see if your answer aligns with the two (or more)
   • If your answer does not align, then the task should be sent back for revision with comments that your answer differed.
3. If your answer agrees with at least two others, accept the task, fill out AHT, and submit.`,
    category: "Overview"
  },
  {
    id: 2,
    title: '"Interesting" Criteria',
    content: `Chart images must be sufficiently "interesting" to generate good QA pairs. To determine if a chart is interesting or not, use the below criteria as guidelines (not strict requirements) for an interesting chart:

1. Axes are clearly marked and have ranges, titles, and units, if applicable.
2. Chart is readable and elements of the chart can be clearly made out.
3. Chart does not represent simple functions/trends (e.g. linear, cosine, etc.).
4. Chart should represent some meaningful relationship between elements.
5. Not necessary, but helps if there are multiple values/plots in same image.

Note: Charts in other languages (ex. German, French, Russian) can be marked as interesting as long as they fit the criteria above.

Avoid:
• Charts without clear labels.
• Charts that show simple functions.
• Charts that show simple trends.
• Blurry images
• Cut-off Charts/Graphs

Examples of Not Interesting:
• Too simple of trends
• Too simple of functions
• No labels
• Complex image, but simple trends

Examples of Interesting:
• Nicely labeled, several related panels
• Only one chart, but sufficiently complex and labeled with a non-trivial representation
• Many values/plots on same panel`,
    category: "Criteria"
  },
  {
    id: 3,
    title: "Grading Criteria",
    content: `The created questions should:

1. Be complex and not straightforward to answer, requiring extraction from and reasoning across several elements from the image.
   • Follow these guideline criteria on complexity:
     - Question requires analyzing 3+ regions of the image
     - Question requires at least two calculations or two reasoning steps
     - Question requires reasoning over relationship between multiple data points
     - Avoid questions that are overly complex (i.e. requiring 5+ reasoning steps) - especially in terms of mathematical computation. Math operations should be limited to one per question - i.e. you can ask for a ratio, or you can ask for a difference. Do not require too many mathematical steps to the point that accuracy is very difficult (i.e. asking the difference between 2 ratios).

2. Cover multiple different domains, which are determined by the provided images.

3. Require reading intermediate values to answer, including those that are not explicitly labeled in the image.

4. Not be able to be solved without looking at the image.

5. Potentially require comparing different plots in the same image.

6. Potentially require reading values from plots, particularly those that are not explicitly labeled

7. Questions should not be multiple choice or contain multiple parts.

The answer should be numeric and verifiable. The question should have one objectively correct answer that is not open to interpretation. Free text/sentence-type answers are not permitted.`,
    category: "Grading"
  },
  {
    id: 4,
    title: "Rate Schedule",
    content: `Current Rate Schedule:

"Interesting" Accepted Submission: $5
"Interesting" Review: $5
"Interesting" Adjudication Accepted: $7
"Not Interesting" Accepted Submission: $1
"Not Interesting" Adjudication Accepted: $1

* These rates only apply for the current batch and are subject to change
* Submissions must pass through a review process to become "Accepted."

Historical Rate Schedules:

Rate Schedule (8/26-9/14):
• "Not Interesting" Accepted Submission: $1
• "Interesting" Accepted Submission: $5
• "Interesting" Review: $6
• "Interesting" Adjudication Accepted: $7

Rate Schedule (8/22-8/26):
• "Not Interesting" Accepted Submission: $1
• "Interesting" Accepted Submission: $15
• "Interesting" Review: $5
• Adjudication Accepted: $5

Original Rate Schedule (pre-8/22):
• "Not Interesting" Accepted Submission: $1
• "Interesting" Accepted Submission: $15
• "Interesting" Review: $5
• "Not Interesting" Review: $1
• Adjudication Accepted: $3`,
    category: "Rates"
  },
  {
    id: 5,
    title: "Change Log",
    content: `Guidelines
• 8/14/2025 - client updated spec request to specify that binary/natively MC questions are allowed but should be max 30% of total data delivered
• 8/13/2025 - client asked for spec to change to not include binary or natively multiple-choice questions

Rate Schedule
• 9/15 - Revised rate schedule
• 8/22 - 8/24/25 - $200 Volume Bonus was offered to any adjudicators that completed >50 interesting adjudications in this 3 day period
• 8/5/2025 - Revised rate schedule, previous rate schedule below`,
    category: "Updates"
  },
  {
    id: 6,
    title: "UI Walkthrough - Submission",
    content: `Submission Workflow

1. Decide if you think the image is interesting (err on the side of not interesting if unsure). The below is likely a non-interesting image due to the simplicity and repetition of the curves.
   • See "Interesting" Criteria for more information on defining this criteria, along with some examples.

2. If you rule that the image is not interesting, the task should be skipped and that provided as the reason why.

3. If you agree that the image is interesting, then you should fill out a complex Question and Answer pair for the image. Note that the answer should be JUST the value or term, with no additional commentary or text, including units.
   • See Grading Criteria for more information on complexity criteria and the Correct Examples for end-to-end examples.
   • When estimating value(s) from the chart that are not explicitly labeled, you need to be very precise with the value(s) selected.
     - Please use a combination of Excalidraw and a ruler to accurately obtain approximate values.
     - First, use Excalidraw to project the point(s) onto the appropriate axis
     - Then, if not exactly on a tick mark, use a ruler to measure the distance from the tick where the line intersects the axis.
     - Take the reading as a fraction of the overall length between tick marks, then multiply that fraction by the tick distance to get a value for how far above/below a tick the intersection point is
       Example: Tick marks are labeled 10 and 20, ticks are 20mm apart, and intersection point is 3mm above the 10 mark:
       - 3mm / 20mm (measured tick distance) = 0.15
       - 0.15 * 10 (labeled tick distance) = 1.5
       - Intersection is then 1.5 above 10 mark - value is 11.5
     - When an answer is estimated to any extent (even using the above method), please use the word "approximately" before your numeric answer or use a range (e.g. 10 to 12) to indicate that this is an approximation and not an explicitly labeled value.
     - For approximation values, ensure answers are within ±10% of the correct value.

4. Provide the units associated with your answer. This should always be filled, even if you're just putting 'unitless' (for example, on a ratio of the same units).

5. Give the answer type. If you are reading any unlabeled points off a chart that aren't exactly on a tick mark, it should be marked an Approximation Value. If you are reading only explicitly labeled points or points align exactly on tick marks, you can call it an Exact Value. If the question requires picking between a set of discrete options (e.g. giving the name of one curve) then it is Inherently Multiple Choice.
   • Only use natively binary or multiple-choice questions a maximum of 30% of the time
   • The majority of questions should not be inherently binary in answer or have only a small set of fixed possible answers. For example, avoid questions like "Which curve is …" when there are only 4 curves, as there are only 4 possible answers. Another similar question would be "Which panel is…".
   • Aim for no more than 1 out of 3 samples to be of this format, the others should all be unconstrained in their answers, meaning that they could take any numeric value.

6. Input how long the task took you to complete rounded to the nearest minute. Do not input anything else in this field.

7. Submit your task.`,
    category: "UI Guide"
  },
  {
    id: 7,
    title: "Correct Examples",
    content: `Example 1
Question: Which colorectal cancer cell line shows the largest absolute increase in VEGF protein concentration (ng/l) when treated with IL-17 compared to its PBS control?
Answer: LoVo

Why is this good?
• Requires identification of the panel of interest (panel B) without explicitly saying Panel B, need to check axes of multiple charts
• Requires identification of which bars correspond to PBS treatment vs. IL-17
• Requires multiple calculations - need to find absolute increase for each cell line

Example 2
Question: Based on the convergence plots for minimizing Nesterov's function, which algorithm variant first reduces the normalized error (f(x_k)–f(x) over f(x_0)–f(x)) down to 10^-4 using the fewest oracle calls?
Answer: RDD_NE with parameter NE=12000

Why is this good?
• Requires identification and comparison across numerous different algorithm curves
• Requires comparison across many different panels
• Requires extrapolation of values from unlabeled points

Example 3
Question: What is the approximate value of the dispersion curve at the r value where there is the largest difference between velocity and PSF?
Answer: Approximately 70 km/s

Why is this good?
• Requires reading labels to identify curves (i.e. "Velocity" curve vs. saying "the red curve")
• Requires several sequential steps of reasoning - not just reading a single value
  - Identify the Velocity and PSF curves
  - Find location of largest difference between
  - Find the corresponding r value
  - Identify the Dispersion curve
  - Get the Dispersion value at that r value

Additional Examples:
• Calculate the ratio of the fold-change in cytosolic cytochrome c release to the fold-change in apoptotic index when comparing SID Wt to Wt. (Answer: Approximately 1.6)
• What is the difference in median 30-year government bond yields between Canada and the United States as predicted by the banks in March 2019? (Answer: Approximately 0.8)
• Calculate the ratio of cell numbers between the concentration 10^-6 M Met Enkephalin and the concentration of 10^-4 M Met Enkephalin at the 24-hour time point. (Answer: Approximately 2.2)`,
    category: "Examples"
  },
  {
    id: 8,
    title: "Incorrect Examples",
    content: `Example 1 - Multiple Asks
Incorrect Question: At frame index n approximately 460, estimate the values of the magnitude of D sub n for the three window lengths: k = 1 (red), k = 2 (green), and k = 4 (blue). Then, compute the percentage decrease in magnitude when going from k = 1 to k = 4 at that frame.

Why this is incorrect: This example question has multiple asks. A correct question will have only one ask that has a numerical or short answer. Part 1 is also not complex as it is simply just looking at the x-axis at 460 and then seeing what each line's value is.

Corrected Question: Compute the percentage decrease in magnitude when going from k = 1 to k = 4 at that frame.

Example 2 - Multiple Choice Format
Incorrect Question: How does 1-NN rul affect the accuracy in general?
A: It only increased the accuracy of the results with filtering.
B: It only increased the accuracy of results without filtering.
C: It increased the accuracy of results both with and without filtering.
D: It doesn't increase the accuracy with or without filtering.

Why this is incorrect: Questions should not be in a multiple choice format. The question should be singular and that has a singular answer.

Corrected Question: Which class (specifically with/without filtering) shows the greatest increase from the 1-NN rul?

Example 3 - Open-ended Question
Incorrect question: Why is the PSF curve critical for interpreting the flux and kinematic data in such studies?

Why this is incorrect: The question is open-ended and requires a text-based answer instead of a single numerical value.

Corrected question: What .1 r (arsec) interval has the greatest increase in Velocity?

Example 4 - Too Simple
Incorrect Question: Which trace has the greatest change in velocity between radius -5" and 5"?

Why this is incorrect: The question/answer is merely picking which trace has the greatest change. The answer is also very obvious from a quick glance at the traces and doesn't require calculation or multi-step reasoning. This would also be considered a binary question, so it's acceptable but only 30% of the time.

Corrected Question: What is the net change in velocity of the blue trace between radius -5" and 5"?`,
    category: "Examples"
  }
];

export const categories = [
  "Overview",
  "Criteria", 
  "Grading",
  "Rates",
  "Updates",
  "UI Guide",
  "Examples"
];
