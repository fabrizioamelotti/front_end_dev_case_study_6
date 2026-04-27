# Front-end Dev Case Study 6
This is the code for the challenge of Front-end Dev Case Study 6.

File: `Front_End_Dev_Case_Study 6.pdf`

## Local setup

### Requirements
Install the following apps and tools:

- [NodeJs](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [Google Chrome](https://www.google.com/intl/en/chrome/) | [Mozilla](https://www.mozilla.org/en-US/firefox/new/) | or any other browser

## Run the project

### 1. Install dependencies
```bash
npm install
```

### 2. Run the project
```bash
npm run dev
```

### 3. Open the browser
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How I build this project

### 1. Create a Next.js project
Executed the command below to create a Next.js project.
```bash
npx create-next-app@latest front_end_dev_case_study_6 --yes 
```

### 2. Created three pages
- List | Custom CSS
- Tailwind | Built with Tailwind CSS
- MUI | Built with MUI CSS

### 3. Building pages
Firstly, I built the List page with custom CSS.
Page: `/list/page.tsx`

#### Custom CSS
Created some CSS variables on `global.css` file:
```css
:root {
    --border-radius: 3px;
    --font-size: 16px;
    --black: #000;
    --main-background-color: #1FAAA0;
    --main-color: #FFF;
    --disabled-background-color: #d6dce1;
    --disabled-color: #FFF;
}
```
To handle the global styles and easy to change if it is necessary.

#### Dictionary
I created a dictionary to handle the labels.
The dictionary is located on `/components/dictionary/dictionary.ts`.

#### Icons
I created the icons to use in the buttons chat and call.
The icons is located on `/components/icons`.

### 4. Built the Tailwind and MUI pages
I remember during my interview the interviewer mentioned Tailwind CSS and MUI CSS.
So, I think it will be a good idea to build the pages with these two CSS libraries.
I built the Tailwind page first and then built the MUI page.
Pages:
- `/tailwind/page.tsx`
- `/mui/page.tsx`

### 5. Handle update the call and chat availability for each advisor
For this feature, I created the `useAdvisorAvailability` hook.
This hook will be used for all advisor pages.

### 6. Getting data from the API
To get the advisor list, I created the: `advisors.service.ts`.

#### ISSUE
I didn't have the chance to correctly execute the API:
https://demo2255213.mockable.io/listings
I don't know why this is not working for me.
I tried with a VPN in a different country without success.
- Argentina
- USA
- Italy

So, that's why I created mocked data and random data to check 
the availability of each advisor.

### 7. Conclusions
I think this project is a good example of how to build a Next.js project 
with custom CSS, Tailwind CSS and MUI CSS.

Getting the advisor list first and then pass by props to the pages.
Every example is using the `useAdvisorAvailability` hook.

#### Time taken
Around 2 hours to complete this project.

