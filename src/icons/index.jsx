export function FakebookTitle(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" {...props}>
      <path fill="none" d="M0 0H200V60H0z" />
      <text
        x={10}
        y={45}
        fontFamily="Helvetica, Arial, sans-serif"
        fontSize={40}
        fontWeight="bold"
        fill="#1877F2"
        letterSpacing={-1}
      >
        {"faKebook"}
      </text>
    </svg>
  )
}

export function FakebookLogo(props) {
  return (
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <path
        fill="#1877F2"
        d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"
      />
      <path
        fill="#fff"
        d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"
      />
    </svg>
  )
}

export function SearchIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.796 15.811L21 21m-3-10.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function HomeIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g stroke="#1C274C" strokeWidth={1.5}>
        <path
          d="M22 22H2M2 11l8.126-6.5a3 3 0 013.748 0L22 11"
          strokeLinecap="round"
        />
        <path
          opacity={0.5}
          d="M15.5 5.5v-2A.5.5 0 0116 3h2.5a.5.5 0 01.5.5v5"
          strokeLinecap="round"
        />
        <path d="M4 22V9.5M20 22V9.5" strokeLinecap="round" />
        <path
          opacity={0.5}
          d="M15 22v-5c0-1.414 0-2.121-.44-2.56C14.122 14 13.415 14 12 14c-1.414 0-2.121 0-2.56.44C9 14.878 9 15.585 9 17v5M14 9.5a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </g>
    </svg>
  )
}

export function PlayIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.409 9.353a2.998 2.998 0 010 5.294L7.597 21.614C5.534 22.736 3 21.276 3 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648l12.812 6.968z"
        stroke="#1C274C"
        strokeWidth={1.5}
      />
    </svg>
  )
}

export function MarketIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g stroke="#1C274C" strokeWidth={1.5} strokeLinecap="round">
        <path d="M9.5 21.5v-3c0-.935 0-1.402.201-1.75a1.5 1.5 0 01.549-.549C10.598 16 11.065 16 12 16s1.402 0 1.75.201a1.5 1.5 0 01.549.549c.201.348.201.815.201 1.75v3M21 22H9m-6 0h2.5M19 22v-7M5 22v-7" />
        <path
          d="M12 2H7.472c-1.203 0-1.804 0-2.287.299-.484.298-.753.836-1.29 1.912L2.49 7.76c-.324.82-.608 1.786-.062 2.479A2 2 0 006 9a2 2 0 104 0 2 2 0 104 0 2 2 0 104 0 2 2 0 003.571 1.238c.546-.693.262-1.659-.062-2.479l-1.404-3.548c-.537-1.076-.806-1.614-1.29-1.912C18.332 2 17.731 2 16.528 2H16"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

export function FriendsIcon(props) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={3}
      stroke="#000"
      fill="none"
      {...props}
    >
      <circle cx={22.83} cy={22.57} r={7.51} />
      <path d="M38 49.94a15.2 15.2 0 00-15.21-15.2h0a15.2 15.2 0 00-15.2 15.2z" />
      <circle cx={44.13} cy={27.22} r={6.05} />
      <path d="M42.4 49.94h14A12.24 12.24 0 0044.13 37.7h0a12.21 12.21 0 00-5.75 1.43" />
    </svg>
  )
}

export function MenuIcon(props) {
  return (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M0 0h4v4H0V0zm0 6h4v4H0V6zm0 6h4v4H0v-4zM6 0h4v4H6V0zm0 6h4v4H6V6zm0 6h4v4H6v-4zm6-12h4v4h-4V0zm0 6h4v4h-4V6zm0 6h4v4h-4v-4z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export function MessengerIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.002 2C6.369 2 2 6.126 2 11.701c0 2.916 1.195 5.435 3.14 7.174.162.146.26.349.268.57l.056 1.78a.798.798 0 001.121.705l1.986-.875a.81.81 0 01.533-.04c.912.25 1.883.386 2.894.386C17.631 21.4 22 17.275 22 11.7 22 6.125 17.632 2 12.002 2zm5.25 7.579L14.75 13.55a1.279 1.279 0 01-1.85.342l-1.992-1.493a.513.513 0 00-.615 0l-2.688 2.04c-.357.273-.828-.157-.589-.536L9.52 9.932a1.28 1.28 0 011.85-.342l1.992 1.493a.514.514 0 00.614 0l2.688-2.04c.36-.277.832.153.589.536z"
        stroke="#000"
        strokeLinejoin="round"
      />
    </svg>
  )
}


export function NotificationIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g stroke="#1C274C" strokeWidth={1.5}>
        <path d="M18.75 9.71v-.705C18.75 5.136 15.726 2 12 2S5.25 5.136 5.25 9.005v.705a4.4 4.4 0 01-.692 2.375L3.45 13.81c-1.011 1.575-.239 3.716 1.52 4.214a25.775 25.775 0 0014.06 0c1.759-.498 2.531-2.639 1.52-4.213l-1.108-1.725a4.4 4.4 0 01-.693-2.375z" />
        <path
          opacity={0.5}
          d="M7.5 19c.655 1.748 2.422 3 4.5 3s3.845-1.252 4.5-3"
          strokeLinecap="round"
        />
      </g>
    </svg>
  )
}

export function DropdownArrow(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.707 14.707a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L12 12.586l4.293-4.293a1 1 0 111.414 1.414l-5 5z"
        fill="#000"
      />
    </svg>
  )
}

export function ClockIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22.7 11.5l-2 2-2-2m2.245 1.5A9 9 0 1019 17.657M12 7v5l3 2"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}


export function BookmarkIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5 6.2c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874C6.52 3 7.08 3 8.2 3h7.6c1.12 0 1.68 0 2.108.218a2 2 0 01.874.874C19 4.52 19 5.08 19 6.2V21l-7-5-7 5V6.2z"
        stroke="#000"
        strokeWidth={2}
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function GroupIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={12} cy={9} r={1.5} stroke="#222" strokeLinecap="round" />
      <path
        d="M15.701 8.25a1.5 1.5 0 112.598 1.5 1.5 1.5 0 01-2.598-1.5h0zM5.701 8.25a1.5 1.5 0 112.598 1.5 1.5 1.5 0 01-2.598-1.5h0z"
        stroke="#222"
      />
      <path
        d="M20.364 15.512l.486-.116-.486.116zM14.1 13.185l-.29-.406-.533.38.507.414.316-.388zm1.28 2.325l-.489.103.49-.103zm4.12.49h-5v1h5v-1zm.378-.371a.254.254 0 01-.061.243.427.427 0 01-.317.128v1c.8 0 1.57-.683 1.35-1.604l-.972.233zM16.5 13c1.226 0 1.99.409 2.482.912.506.517.765 1.174.896 1.717l.972-.233c-.154-.642-.475-1.49-1.153-2.184C19.004 12.505 17.977 12 16.5 12v1zm-2.11.592c.478-.341 1.15-.592 2.11-.592v-1c-1.146 0-2.025.303-2.69.779l.58.813zm-.606-.02c.653.534.964 1.362 1.107 2.04l.979-.205c-.162-.767-.54-1.863-1.454-2.609l-.632.775zm1.107 2.04a.278.278 0 01-.07.257.435.435 0 01-.321.131v1c.804 0 1.561-.68 1.37-1.593l-.979.206zM9.9 13.185l.316.388.507-.414-.532-.38-.291.406zm-6.264 2.327l.486.117-.486-.117zm4.984-.002l-.49-.103.49.103zM7.5 13c.96 0 1.631.25 2.11.592l.58-.814C9.526 12.303 8.647 12 7.5 12v1zm-3.378 2.629c.13-.543.39-1.2.896-1.717C5.51 13.409 6.274 13 7.5 13v-1c-1.478 0-2.504.505-3.197 1.212-.678.693-1 1.542-1.153 2.184l.972.233zM4.5 16a.427.427 0 01-.317-.128.254.254 0 01-.06-.243l-.973-.233C2.93 16.317 3.7 17 4.5 17v-1zm5 0h-5v1h5v-1zm0 0a.435.435 0 01-.322-.13.278.278 0 01-.07-.257l-.978-.206C7.938 16.319 8.696 17 9.5 17v-1zm-.391-.387c.143-.68.454-1.507 1.107-2.04l-.632-.775c-.914.746-1.292 1.842-1.454 2.609l.979.206z"
        fill="#222"
      />
      <path
        d="M12 12.5c2.364 0 3.131 1.825 3.38 3.01.114.54-.328.99-.88.99h-5c-.552 0-.994-.45-.88-.99.249-1.185 1.016-3.01 3.38-3.01zM18.5 21.5H20a1.5 1.5 0 001.5-1.5v-1.5M18.5 2.5H20A1.5 1.5 0 0121.5 4v1.5M5.5 21.5H4A1.5 1.5 0 012.5 20v-1.5M5.5 2.5H4A1.5 1.5 0 002.5 4v1.5"
        stroke="#222"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function MoreIcon(props) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      className="icon"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M478.312 644.16c24.38 26.901 64.507 26.538 88.507-.89l270.57-309.222c7.758-8.867 6.86-22.344-2.008-30.103-8.866-7.759-22.344-6.86-30.103 2.007L534.71 615.173c-7.202 8.231-17.541 8.325-24.782.335L229.14 305.674c-7.912-8.73-21.403-9.394-30.133-1.482s-9.394 21.403-1.482 30.134l280.786 309.833z" />
    </svg>
  )
}

export function VideoIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 10l2.577-1.546c.793-.476 1.19-.714 1.516-.683a1 1 0 01.713.403c.194.264.194.727.194 1.652v4.348c0 .925 0 1.388-.194 1.652a1 1 0 01-.713.404c-.326.03-.723-.208-1.516-.684L16 14m-9.8 4h6.6c1.12 0 1.68 0 2.108-.218a2 2 0 00.874-.874C16 16.48 16 15.92 16 14.8V9.2c0-1.12 0-1.68-.218-2.108a2 2 0 00-.874-.874C14.48 6 13.92 6 12.8 6H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 00-.874.874C3 7.52 3 8.08 3 9.2v5.6c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874C4.52 18 5.08 18 6.2 18z"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function PhotoIcon(props) {
  return (
    <svg viewBox="0 -0.5 18 18" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        d="M474.188 259.776h6.655l-3.293-3.293-3.174 3.174a.506.506 0 01-.188.119zm-.188-1.157v-10.843h12v7.193l-2.342-2.342a.504.504 0 00-.752.054l-3.872 3.872-1.115-1.115a.505.505 0 00-.411-.143.51.51 0 00-.333.149L474 258.619zm8.257 1.157H486v-3.399l-.003.003-2.688-2.688-3.568 3.568 2.516 2.516zm4.743-.37l.96.136a1.006 1.006 0 001.138-.857l1.668-11.87a1.006 1.006 0 00-.857-1.137l-11.87-1.668a1.006 1.006 0 00-1.137.857l-.268 1.909h-2.627c-.557 0-1.007.45-1.007 1.007v11.986c0 .557.45 1.007 1.007 1.007h11.986c.557 0 1.007-.45 1.007-1.007v-.362zm0-1.009l1.107.156 1.67-11.884-11.884-1.67-.25 1.777h8.35c.556 0 1.007.45 1.007 1.007v10.614z"
        transform="translate(-473 -244)"
      />
    </svg>
  )
}

export function ActivityIcon(props) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#fff" fillOpacity={0.01} d="M0 0H48V48H0z" />
      <path
        d="M36 15a5 5 0 100-10 5 5 0 000 10z"
        fill="#2F88FF"
        stroke="#000"
        strokeWidth={4}
      />
      <path
        d="M12 16.77l8.003-2.772L31 19.247l-10.997 8.197L31 34.684l-6.992 9.314M35.32 21.643L38 23.102 44 17.466M16.849 31.545l-2.97 3.912-9.875 5.54"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}