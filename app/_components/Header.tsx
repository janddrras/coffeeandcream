import Container from "./Container"

/* eslint-disable @next/next/no-img-element */
const Header = () => {
  return (
    <header className="fixed h-52 w-full">
      <Container border={false}>
        <div className="w-80 h-full absolute -top-16 -left-24">
          <svg id="objects" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 123.72 123.21" className="w-full">
            <path
              className="fill-cream-20 dark:fill-coffee-90"
              d="m123.62,65.79l-.02.13c-.3-2.63.45-5.36-.67-7.92.12-.42-.02-.79-.18-1.16-.06-.77-.13-1.55-.19-2.32.12-.45.59-.8.43-1.34.47-1.06-.2-1.87-.58-2.75.05-.34-.28-.48-.4-.73-.1-.33-.2-.67-.31-1,0-.07-.02-.14-.06-.21-.02-.11-.04-.21-.06-.32-.02-.31-.13-.57-.35-.78.02-.41-.09-.91.1-1.22.28-.44.29-.8.11-1.23.26-1.22-.11-2.37-.4-3.53-.16-.49-.37-.96-.7-1.36-.32-.53.09-1.25-.46-1.72-.1-.76-.52-1.31-1.11-1.76-.13-.14-.26-.28-.39-.42-.04-.41-.35-.63-.66-.76-.52-.21-.77-.66-1.05-1.08-.82-1.23-1.04-2.72-1.75-4.01-.49-.89-.9-1.86-1.33-2.8-.84-1.86-1.62-3.71-3.58-4.69-.14-.07-.26-.13-.34-.31-.81-1.82-2.44-2.97-3.71-4.41-.76-.86-1.88-1.4-2.76-2.16-2.05-1.78-4.31-3.28-6.44-4.95-1.05-.82-2.36-1.16-3.41-1.89-1.58-1.1-3.21-2.04-4.88-2.98-1.61-.91-3.32-1.43-5.01-2.04-1.64-.6-3.36-.98-5.03-1.5-2.86-.89-5.79-1.43-8.76-1.79-.7-.08-1.39-.03-2.1-.13-2.31-.34-4.62-1.03-7-.38-.5.13-1.06-.25-1.56.12-1.65.19-3.32.08-4.97.41-.39.08-.82.06-.92.5-.1.46.37.51.67.66-.41.93-.74.93-1.67-.03-.15-.4-.32-.64-.87-.58-1.19.14-2.4.16-3.6.22-.13-.09-.26-.09-.39,0-.92-.05-1.84-.18-2.74.15h-.08l-.07.04c-.8.29-1.6.6-2.41.88-1.25.42-2.23,1.33-3.4,1.9-2.3,1.12-4.73,1.98-6.91,3.37-.32.2-.71.32-.8.76-1.68.48-3.17,1.43-4.58,2.35-2,1.3-3.81,2.95-5.55,4.61-.98.94-1.97,1.9-2.96,2.81-2.12,1.93-4.01,4.03-5.45,6.5-.27.46-.46,1.08-.12,1.72.95,1.82-.84,4.06-2.02,4.86-.2.14-.43.15-.63.02-.27-.17-.05-.4-.05-.61,0-.45.35-.64.62-.91.4-.42.16-.91-.15-1.18-.35-.31-.39.2-.57.38-.74.77-1.11,1.78-1.79,2.59-.57.76-.57,1.77-1.16,2.51-1.58,1.69-2.91,3.49-2.94,5.94-.34.37-.1.86-.28,1.28-.38.87,0,1.09.81.89.04.25.08.49.12.74v.95c-.24.43.12.97-.22,1.38-.27.29-.53.8-.82.81-.75.04-.52.45-.35.75.35.62.26,1.45.06,1.83-.51.95-.34,1.82-.2,2.75-.37,1.14-.28,2.41-1.09,3.35.19.26.48-.14.46.1-.05.68.25,1.51-.66,1.92-.36.16-.51.41-.31.82.18.36-.15.44-.37.45-.17,0,.23-.54-.23-.39-.31.1-.04.47-.11.67-.17.53.04.89.4,1.21.08.07.28.19.16.26-1.31.71-.52,2.02-.77,3-.38,1.5.17,3.13.13,4.72-.01.47-.23.95-.09,1.4.4,1.33.67,2.68.62,4.08,0,.05.06.11.1.16-.19.48.43.85.42.87-.53,1.04.15,1.45.9,1.84-.13.42.22.83.1,1.2-.22.68.08,1.02.65,1.18,1.11.32,1.14,1.22,1.15,2.1,0,.45-.04.88.21,1.29-.05.08-.11.16-.14.25-.08.31-1.19,1,.28.75.2-.03.24.17.32.3.16.25-.15.28-.17.37-.2.75-.75.01-1.06.23.17.87.63,1.53,1.14,2.16.17.22.24.46.17.74-.01.45.04.87.56,1.03.11,0,.16-.09.21-.19.16-.11.31-.22.47-.33.1.11.17.24.24.38-.21.13-.56.06-.58.44.15.2.63-.12.63.29,0,.58.49.51.78.7,0,0,.03.01.04.02h0c.57.62-.01,1.38.24,2.05.19.09.44.3.55-.03.36-1.04.68-.7,1.06-.01.12.22.3.41.49.58.41.38.35.63-.17.8-.16.06-.46.28-.31.3.49.09-.14.59.43.8.45.17,1.52.2,1.39,1.24,0,0,.02,0,.03,0,0,0-.01,0-.02.01.21.58.99.84.91,1.56-.12,1.01.36,1.42,1.3,1.38.28-.01.38.06.47.33.52,1.63,2.33,2.28,2.95,3.84,0,.02.06.03.09.03,1.53.18,1.76,1.42,1.99,2.57.16.79.35,1,.94.35.28-.31.55-.26.84-.05.34.25.31.51.05.81-.07.08-.07.24-.11.36.51.52.97,1.24,1.81.5.12.2.09.33-.01.41-.38.33-.12.7.03.95.25.42.49-.05.7-.14.31-.14.6-.16.79.08.78,1,1.97,1.53,2.72,2.63.4.59.86,1.05.91,1.8.02.29.2.56.49.45.43-.16-.01-.33-.08-.48-.2-.46.18-.77.28-1.15.03-.13.24-.23.3-.14.39.59,1.28.52,1.58,1.24.2.49.52.53.8,0,.35-.65.71-.62,1.05,0,.08.54-.5,1.21.48,1.56.58.2.96.41,1.54-.06.43-.35.85.1.76.55-.13.61.16.7.58.67.96-.07,1.67,1.15,2.74.52.02-.01.14.08.14.11-.19.87.7.92,1.03,1.39.22.32.44.61.77.81.3-.08.22-.38.36-.54.27-.33.47-.39.69.05.5.98,1.49.97,2.36,1.21.03.06.06.12.1.17.28.28.53.93.9.68.76-.51,1.32-.09,1.95.14h.05c0,.32-.43.54-.25,1.02.55-.83,1.23-.5,1.88-.38.02.02.05.02.07.03.01.21,0,.59.09.56.59-.26,1.28.47,1.8-.17.02.03.04.05.07.08.19.06.37.05.54-.08.58-.44,1.05-.08,1.52.22,0,0,.02.01.04.02,0,.05.02.1.03.1.61.14,1.43-.3,1.74.67.03.11.25.08.33-.03.38-.48.53-.32.58.19.02.16.05.34.23.39.23.06.37-.13.44-.29.4-.88,1.1-.59,1.48-.18.35.37.66.42,1.05.39.04.03.07.07.11.11,1.19.11,2.1,1,3.37,1.08.94.06,1.83.06,2.67-.25.57-.21,1.01-.22,1.53.02.43.2.88.55,1.4.17,1.29-.27,2.6.06,3.9-.15,1.5-.24,2.92-.82,4.46-.86,1.52-.04,3.04.06,4.38-1.14.68-.61,1.92-.56,2.89-.95.8-.32,1.66-.39,2.4-.98.38-.3.94-.57,1.53-.43.32.08.54-.08.8-.23,1.03-.61,2.06-1.24,3.13-1.76,1.1-.54,2.43-.65,3.19-1.81.09-.14.31-.26.49-.29,1.24-.23,2.16-1.02,3.18-1.69.97-.64,1.57-1.7,2.62-2.22.54-.27,1.08-.5,1.38-1.06.45-.56,1.17-.75,1.66-1.25,1.37-1.4,2.7-2.85,4.32-4,.33-.23.57-.6.81-.94.91-1.29,1.68-2.66,2.72-3.86.49-.57.82-1.24,1.06-1.96.37-.34.86-.58.94-1.16,0,0,.04-.09.05-.14.01.01.02.02.03.03.36-.19.28-.63.53-.89,1.56-1.58,2.12-3.76,3.3-5.58,1-1.54,1.29-3.41,2.23-4.97.59-.98,1.05-1.91,1.14-3.08.06-.72.48-1.47.64-2.18.26-1.12,1.08-1.93,1.36-3,0-.06,0-.11,0-.16.01.01.02.02.03.04.14-.43.29-.86.43-1.29.28-.43.42-.88.32-1.39.89-2.56,1.16-5.18.86-7.87Zm-4.52,1.1c-.07-.07-.14-.14-.21-.21.08.06.15.13.21.21Zm-8.35-28.51h-.01s-.04-.04-.05-.09c0,0,.04.06.06.09Zm-11.53-16.34h-.01l-.1-.1s.05-.02.08-.02c.02.04.02.08.03.12Zm-24.48-13.97s-.05,0-.07,0c0,0,0,0,0-.01.03,0,.05,0,.07,0Zm35.06,26.11s0,.02,0,.03c-.06-.02-.11-.04-.14-.09l.13.06Zm7.43,31.64c-.06,0-.12-.02-.18-.01.06-.03.12-.04.18.01Zm-21.9-53.84s-.07.07-.17.08c-.1.01-.16-.02-.21-.07.09.02.21.01.38-.02Zm-7.26-5.08s-.06-.04-.06-.1c.02.03.04.07.06.1Zm-36.36-3.12c-.05.06-.1.1-.15.18-.02.03-.22,0-.25-.05-.04-.08-.09-.14-.14-.21.17.04.35.07.54.08ZM3.42,52.36s-.01.03-.02.04c0,0-.01,0-.02,0,.01-.01.02-.03.03-.04Zm5.98,34.91s.03,0,.05,0c0,.02,0,.04,0,.07-.01-.03-.03-.04-.04-.07Zm39.46,11.72s.1-.06.17-.07c.06.03.08.08.09.14-.09-.03-.19-.06-.26-.07Zm14.19,19.47s-.02.03-.03.04c0-.01.02-.03.03-.04Zm37.82-13.61l-.06.21c-.03-.08-.03-.16.06-.21Zm-3.53-1.6s0,0,0,0c0,0,.01-.01.02-.02,0,0-.01.02-.02.02Zm9.22-8.75s-.05-.02-.07-.02c.03-.02.05-.04.08-.07,0,.03,0,.06,0,.09Zm6.56-18.25c-.41.75-.43,1.59-.45,2.4-.04,1.58-.33,3.1-1,4.54-.23.49-.42,1-.44,1.55.03.12.04.25.06.38-.21.3-.16.67-.19,1.01.04.18.04.34.03.49-.26.31-.62.57-.67,1-.05.03-.08.07-.13.1-.3.45-.86.69-1.01,1.27v.04c-.21.17-.31.41-.4.66-.04.02-.08.04-.12.06-.54.67-.99,1.43-1.73,1.92.01.05,0,.09,0,.14-.25.18-.4.42-.52.68-.13.09-.24.18-.31.31-.67.69-1.14,1.53-1.88,2.17-1.21,1.04-2.44,2.04-3.68,3.04-.96.77-2.01,1.46-2.74,2.49v.06c-.11,0-.23,0-.31.08-.06,0-.12.02-.18.04-.35.58-.99.89-1.4,1.42h-.08c-1.37.47-2.52,1.19-3.24,2.53-.75,1.4-2.06,2.18-3.51,2.68-1.18.4-2.18,1.05-3.18,1.74-.47.33-.93.69-1.43.97-2.07,1.18-3.85,2.87-6.24,3.46-.05.05-.12.08-.17.12-.6-.09-1.02.45-1.54.62-.83.27-1.63.64-2.43.99-.16,0-.32,0-.48-.03-.72-.05-1.33.35-1.99.48-2.23.45-4.5.68-6.76.57-1.34-.06-2.67-.16-4.02-.09-1.08.06-2.06-.7-2.2-1.73-.1-.72-.45-1.19-.99-1.55-.57-.38-.6-.8-.51-1.46.16-1.22-.06-2.45-1.17-3.21-.63-.44-1.08-.98-1.49-1.6-.04-.05-.05-.11-.08-.17.08-.08.23-.09.35-.13.29-.12.54-.33.3-.65-.45-.61-.71-1.34-1.04-1.99h0c-.5-.97-1.51-1.28-2.06-2.13-.37-.57-.71-1.2-1.35-1.55,0,0-.01,0-.02-.01-.37-.54-.93-.88-1.43-1.27-.51-.38-.86-1.02-1.61-1.03,0,0-.01,0-.02-.01-.81-1.38-2.28-2.01-3.53-2.77-1.27-.77-2.83-1.31-4.4-.87-.96.27-1.76-.25-2.65-.26-1.89-.02-3.72.37-5.54.79-1.26.3-2.58.23-3.79.75-.46.2-.9.49-1.38.57-2.55.46-5.02.12-7.38-.95-.01,0-.02-.02-.04-.03-.56-.65-.8-1.53-1.51-2.06,0,0,0-.02,0-.02-.55-.78-1.18-1.5-1.9-2.12-.01,0-.02.01-.03.02,0-.01.01-.02.02-.04-.34-1.27-1.44-2.02-2.12-3.06-.33-.52-.57-1-.66-1.63-.15-1.06-.41-2.1-1.27-2.86-.41-1.22-.85-2.44-1.52-3.55-.41-.67-.64-1.34-.64-2.15.01-1.69-.03-3.39-.09-5.08-.07-1.91-1.33-3.41-1.85-5.19-.78-2.66-1.12-5.28-.81-8.04.18-1.61.43-3.2.63-4.8,0-.01,0-.02-.01-.03.05-.02.1-.04.16-.07.2-.3.25-.65.33-1,.51-2.17,1.01-4.35,1.52-6.52.25-1.06.61-2.09.85-3.15,0-.13-.05-.24-.1-.33.28-.51.84-.89.76-1.58.03.01.05.02.08.01.69-.34.7-1.05.87-1.67,0-.08.02-.17.04-.25.21-.28.26-.65.35-.99h0c.06-.01.13.01.17-.02.29-.73.82-1.38.75-2.23.05-.01.09-.01.14-.03.66-1.61,1.77-2.95,2.58-4.48.8-1.51,1.99-2.75,3.07-4.04,1.47-1.77,3.44-3.05,5.28-4.43.98-.73,2.01-1.53,3.29-1.69,2.96-.38,5.13-1.89,6.75-4.36,1.09-1.68,2.29-3.3,4.14-4.27.01-.07.03-.11.05-.16.24-.05.5-.06.72-.17.11.02.21.03.3-.02.77-.57,1.65-.96,2.48-1.42.04-.05.07-.09.1-.13.88-.18,1.8-.28,2.49-.95.13-.13.24-.11.41-.1,1.13.04,2.27-.04,3.34-.39,1.96-.64,3.72-1.73,5.9-1.95,1.69-.17,3.28-.38,4.87.23,1.76.68,3.7.18,5.46.86.27.1.59.34.91.18.07.05.13.09.2.14.33.18.68.12,1.03.1,1.69-.11,3.39.01,5.08.05,1.24.03,2.43.64,3.7.29.06-.03.1-.06.13-.1.07.05.14.1.2.15,0,0,0-.01.01-.02.71.42,1.55.51,2.25.87,1.21.6,2.35,1.3,3.71,1.52,1.38.23,2.53,1.05,3.69,1.72,1.15.67,2.25,1.28,3.61,1.27.01-.02.03-.03.04-.05,0,0,0,.02,0,.03.08.07.16.14.24.2.19.51.55.77,1.1.75,1.18.57,1.79,1.82,2.99,2.42,1.23.62,2.2,1.63,3.11,2.68,1.7,1.97,3.49,3.85,5.59,5.39.47.35.89.73,1.18,1.23,1.94,3.34,4.38,6.37,6.2,9.8.37.7,1.04,1.18,1.35,1.94,1.06,2.59,2.02,5.2,2.54,7.96-.34.38-.11.76,0,1.14,0,.14.01.27.02.41v1.72c.1.36.32.66.35,1.06.07,1.06.3,2.09.64,3.09-.03.11-.06.22-.11.33.01.18.05.36.17.51h.04c-.12.14-.16.3-.17.46-.06.2-.06.49-.14.67-.01.14,0,.27.06.4.02.01.03.03.05.04-.22.37.04.67.18.98.02-.02.03-.03.05-.04-.05.06-.12.13-.2.19-.03.91-.05,1.82-.37,2.7-.15.41-.15.87.08,1.29.07.01.11.01.16.02-.02.02-.03.03-.05.05-.21.12-.37.32-.34.54.2,1.39-.35,2.72-.33,4.08.03,1.91-.02,3.82-.02,5.73,0,.35,0,.7.14,1.04,0,.11.11.1.21.09,0,.02-.02.04-.03.05v.41s.03.03.05.05c-.09-.04-.18-.13-.18,0-.2.54-.34,1.09-.14,1.66.01,0,.02,0,.03,0-.07.01-.14.04-.22.08Z"
            />
          </svg>
        </div>
      </Container>
    </header>
  )
}

export default Header
