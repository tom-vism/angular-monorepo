# AngularMonorepo
Angular 17.2.x + NX 18.x + Tailwindcss 3.4.x + postcss 8.x

The issue:
Tailwind configuration file is ignored when postcss configuration file is added to Angular 17.2 project with "application" builder.
Warnings are given about "content" property is missing when serving the app1.


![image](https://github.com/tom-vism/angular-monorepo/assets/142388200/82fc2038-1dc8-4948-9fe8-11a5634f643e)


- To run the project use nx serve app1.
- To make the tailwind work without postcss, you'd need to remove postcss.config.json and comment the '.../headers.css' import statement in styles.css of the app1.
