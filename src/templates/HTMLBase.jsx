import React from 'react';

const HTMLBase = ({ title, children }) => (
       <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <style type="text/tailwindcss" dangerouslySetInnerHTML={{
            __html: ` @layer base {
                html {
                  @apply text-zinc-900 h-full bg-gray-100;
                }
      
                body {
                  @apply h-full py-16 overflow-y-auto;
                }
              }`
        }} />
    </head>
    <body>
        {children}
    </body>
    </html>
);

export default HTMLBase;