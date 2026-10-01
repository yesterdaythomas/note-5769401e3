# ICS Interactive Training Project: Summary and Context

> Purpose of this file: paste into a new chat so the project can be continued without re-explaining.
> Source: notes from a team meeting (transcript was auto-generated, so some names are garbled or uncertain) plus follow-up research.

## 1. Project in one paragraph

Create an **interactive learning path on internal control (ICS)** for Signify, in the style of the existing **corporate security training** and the **Responsible AI Use 2026** training. It is **web/HTML based, playful, story driven**, with short quizzes, and **not a PowerPoint**. The owners of the task are two GAR interns (the user and Sofia), supported by the GAR/ICS leads. The first deliverable is a **structure and storyboard**, not detailed slides.

## 2. People mentioned (names may be mis-transcribed)

| Name (as heard) | Role / involvement |
|---|---|
| The user (Thomas) and Sofia | Interns who prepare the structure, storyboard and content |
| Ericka (the speaker) | Leads the ICS work; will contact corporate security; supports the interns |
| Kasia ("Kasha") | Colleague supporting; earlier discussed the follow-up approach |
| "Ghana" | Colleague supporting; mentioned as a possible character and contact |
| Lydia | Will ask the management/CEO for the intro video (tone at the top) |
| Frida (HR business partner) | Will be asked for a contact in learning management |
| A lady from training (visited a few weeks ago) | Another possible contact for learning management |
| Corporate security team / digital team | Built the security and AI trainings; may know the tool and who built them |
| Learning management team | Likely owns the learning platform and content development; must be asked how to add a new learning path and how to get a **Q1 slot** |

## 3. Why the training is needed

- Even with **templates, videos and written instructions**, many control owners still deliver **no (or weak) evidence** and do not substantiate their self-assessments.
- Plan is a **two-step approach**:
  1. **Training** (this project).
  2. In the **substantiation phase**, hold **calls per process group** and ask directly: "We gave you templates, training and videos, so why is the evidence still missing?"
- Philosophy: "more carrot than stick, but probably about 50/50 to get the result".
- **Tone at the top** must be visible: people should understand this is not just the ICS team's request. An **intro video from senior management** (CEO) is planned, which Lydia will request.

### Illustrative case (anonymise before using in the training)
An executor marked a control **compliant**; the financial controller marked it **non-compliant**. After a long email thread the executor had attached **no evidence** and argued only that "**SAP is the source of data and the whole process works, so anyone can check it in SAP**". He did not understand why that was not enough, and the conversation became negative.

**Lesson for the training:** a statement is not evidence. "It's in the system" is not proof. The executor must attach what shows the control was performed (dated screenshot or report, the sample, who performed or approved it).

## 4. Requirements and guidance from the meeting

- Format: **web/HTML based**, interactive and **playful**, like the corporate security training (each person has an "island", a store, a street) and the AI training.
- Ideas: visuals, **cartoon characters** (including colleagues as characters), a story world, storyboard.
- Structure should follow the **ICS cycle**, with each step ("bucket") explained.
- Content to cover:
  - Why we do ICS (the entry piece)
  - The ICS cycle (risk assessment, allocation, monitoring, improvement)
  - How to use the tool (ServiceNow basics, roles: executor and reviewer)
  - How to perform an assessment and **what evidence is required**
  - The **quality review** piece
  - **Issue management** and the **remediation plan**
- **Quizzes / small tests** in the middle of each chapter, with examples.
- **Do not go into every detail**: the aim is that people know they can always come back to the material. Give a glimpse, keep it playful. Roughly 10 minutes of content per chapter or section was mentioned.
- **Reuse existing material** rather than reading everything:
  - SharePoint → Trainings: the refresher training, **generic training** (what is ICS, the cycle, how to use the tool) and last year's **recording**
  - The **issue management** training and the 15-minute video from the tool launch (2024)
  - Work instructions (step by step)
  - From this year's process-specific trainings: take **the first 1–2 slides** (the first four slides are generic and the template is the same for all processes). There are about 15–20 documents, so do not go through them all.
- Way of working: first **organise the topics and sections**, then **present the structure each week** for feedback before building slides.
- Also asked: a **timeline** (how much time the interns will invest, first steps, what information is needed), and ideas for what is missing or worth adding.
- Find out **who built the corporate security and AI trainings** and which tool they used, and (if possible) ask their intern or team how they did it.
- Check with the **learning management team** about a **Q1 (2027) slot**, how to add a new learning path, and who develops the content.

### Related discussion (idea only, not decided)
- The team discussed that self-assessments have not given good results, and floated the idea that the **reviewer should come from a different team or geography** than the executor, similar to the quality review (independence). Not decided; could become a training topic later.
- Also discussed: failed controls get a remediation plan, but follow-up in remediation is lighter than in substantiation.

## 5. Proposed structure (draft to propose to the team)

| # | Chapter | Content | Quiz |
|---|---|---|---|
| 0 | Intro | Senior management video, "why this matters" (tone at the top) | |
| 1 | Why ICS | Purpose and the cycle | Yes |
| 2 | Risk and control cycle | Risk assessment, allocation, monitoring, improvement | Yes |
| 3 | Using the tool | ServiceNow, roles (executor, reviewer) | Yes |
| 4 | Performing an assessment | Testing attributes, **what counts as evidence** (and what does not), scoring | Yes |
| 5 | Quality review | What it checks, how scoring works, **good vs weak (anonymised) examples** | Yes |
| 6 | Issue management | Raising an issue, remediation plan | Yes |
| 7 | Wrap-up | Where to find help, final quiz | Yes |

**Suggested additions from the case above:**
- A chapter or section "What counts as evidence" with a short list of what is accepted and what is not.
- **Scenario quiz questions**, for example: "The executor writes 'SAP is the source of data' and attaches nothing. Is the control compliant? What should the reviewer do?"
- A small section on **consequences** (control reopened, issue raised, results go to management), delivered with the tone from the top (the "stick", kept gentle). The "carrot" is checklists, examples and an easy way to ask for help.

**Story idea:** a "control town" where each district is a step of the ICS cycle (assessment office, evidence archive, issue desk). The user walks through it, solves small challenges, and the missing evidence becomes a mystery to solve. This matches the "everyone has an island" style of the security training.

## 6. How the existing trainings are delivered (observed from screenshots)

- The **Responsible AI Use 2026** course sits in **Workday Learning**: 30 minutes, 2 lessons, self-directed, with contacts and ratings.
- The lesson content is an HTML game: a "Lumina City" theme, XP and "city power" bars, drag-and-drop quiz questions, a Signify-branded interface.
- The address bar shows `wd3-media.myworkdaycdn.com/scorm/.../index_lms...`, which indicates the lesson is a **SCORM package** that Workday stores and serves from its own CDN.

## 7. Research: building and publishing in Workday Learning

- Workday Learning plays **SCORM 1.2 and SCORM 2004 (2nd, 3rd, 4th editions)** and AICC packaged content, on desktop and mobile.
- A **SCORM package is a zip file** containing the HTML, CSS, JavaScript and media, with an **`imsmanifest.xml` at the root** of the zip describing the content. The manifest plus the SCORM API calls make a zip a SCORM package.
- Upload: an administrator adds a **media course lesson** and uploads the zip ("Select File").
- **Hosting:** Workday hosts the files itself, so no separate web server is needed.
- **Tracking:** the package sends **completion and score signals** to Workday through the SCORM runtime. There are settings for **interaction reporting** (learner responses to questions in packaged content) and for completing a SCORM 2004 lesson without exit.
- **Not verified:** whether Workday allows simply linking to an external web page as a lesson, and how completion works then. Ask the learning team.
- Building options:
  1. **Authoring tool** (for example Articulate Rise or Storyline, iSpring, Captivate) that exports SCORM. Easiest, and likely what the digital team used.
  2. **Hand-built HTML plus a SCORM wrapper library** and a manifest. Fully custom, more work.
  3. **In-house digital or learning team builds it** from the interns' storyboard.
- Test a package in a SCORM tester before uploading, **using placeholder content only**.
- Likely needs: Workday Learning administrator rights to create the course and upload, approval, audience and assignment settings, Signify branding rules, and a security or IT review if hosted elsewhere.

### Sources
- Workday: Workday Learning components, https://doc.workday.com/workday-education/en-us/course-manuals/learning-for-administrators/workday-learning-components.html
- Articulate Community: SCORM packages and Workday data, https://community.articulate.com/discussions/discuss/scorm-packages-and-workday-data/889148
- Workday LMS and SCORM compliance, https://unifi.atlaspackaging.co.uk/atlaspackaging-news/workday-lms-and-scorm-compliance-what-you-need-to-know-1764799568
- Pipwerks: Packaging a SCORM course, https://pipwerks.com/2024/09/15/packaging-a-scorm-course/
- LearnUpon: How to upload SCORM content into your LMS, https://www.learnupon.com/blog/scorm-content-lms/

## 8. Questions to ask the learning management / digital team

1. How do we add a **new learning path**, and what are the process and lead time?
2. Which **authoring tool** and which **LMS (Workday Learning)** features are available to us?
3. Who **builds** the content: do we provide the storyboard and they build it, or do we build it ourselves?
4. Is a **Q1 2027 slot** realistic, and what is the deadline for the content?
5. Can we upload a **SCORM package**, who has the rights to upload it, and can we link to external HTML?
6. How are **quiz scores and completion** tracked and reported?
7. Are there **branding, accessibility or security** rules?

Suggested message when a contact is known:
> Hi [name], we are preparing an interactive learning path on internal control (ICS) and would like to include it in the Q1 learning schedule. Could we have a short call to understand how to add a new learning path, which tools you use, and who develops the content?

## 9. Open questions to clarify with the ICS leads

- Audience: executors, reviewers, financial controllers, everyone? How many people?
- Target length (for example 20–30 minutes) and language(s).
- The main message to reinforce.
- Is the management intro video confirmed, and how long is it?
- Can ServiceNow screenshots be used (anything sensitive)?
- Deadlines for the structure, the draft and the final version, and the Q1 target.
- Who approves the structure.
- Freedom to invent the story and characters, and whether colleagues can appear as cartoon characters.

## 10. Next steps (plan)

| Step | What | Output |
|---|---|---|
| 1. Gather | Collect last year's trainings, work instructions and generic process slides from SharePoint | A source folder |
| 2. Structure | Chapters that follow the ICS cycle, with a learning goal for each | A one-page outline |
| 3. Storyboard | Per chapter: scene or story, key messages, visuals, quiz | Storyboard document |
| 4. Feedback | Present the outline and storyboard to the team weekly, before detailed content | Approved structure |
| 5. Content | Short, playful text, examples and quiz questions | Draft content |
| 6. Build | Learning management or the authoring tool builds it, packaged as SCORM for Workday | Learning path |
| 7. Test | Pilot with a few colleagues and fix | Final version |

Also prepare a simple **timeline** (time the interns will invest, first steps, information needed).

## 11. Cautions

- **Confidentiality:** do not paste internal documents, screenshots or data into external tools that are not approved by IT. Use made-up placeholder content for prototypes and tests.
- **Anonymise real cases** (no names, entities or control IDs) before using them in the training.
- Names from the recording are uncertain, so confirm them before contacting anyone.

## 12. Possible help to ask for in the new chat

- Draft the **storyboard** chapter by chapter, with the story and characters.
- Write **scenario quiz questions** (for example the "SAP is the source of data" case and good-versus-weak evidence examples).
- Draft the **timeline** with a Q1 target.
- Build a **prototype** (HTML with placeholder content) and package it as **SCORM** for the learning team to test.
