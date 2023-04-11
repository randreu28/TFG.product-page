export default function Signature() {
  return (
    <div className="flex justify-between gap-10 p-10 text-teal-300 bg-black/50">
      <a
        href="https://randreu.dev"
        target="_blank"
        className="max-w-xl flex gap-5"
      >
        <svg
          className="fill-current h-10 w-fit"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 150.2 231.96"
        >
          <defs>
            <linearGradient
              id="a"
              x1={75.1}
              x2={75.1}
              y1={231.96}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#ef079b" />
              <stop offset={0.11} stopColor="#f11890" />
              <stop offset={0.36} stopColor="#f43a7a" />
              <stop offset={0.6} stopColor="#f6526a" />
              <stop offset={0.82} stopColor="#f86160" />
              <stop offset={1} stopColor="#f8665d" />
            </linearGradient>
          </defs>
          <g data-name="Capa 2">
            <path
              d="m0 27.38 50.51 30.19S0 86.51 0 87.74ZM50.51 0v57.57l49.58 29.08v57.61l50.11-29V57.57ZM0 144.4V203l50.51-29.28L150.2 232v-57.8l-99.69-58.55Z"
              data-name="Isotipo T"
            />
          </g>
        </svg>
        <span className="my-auto">
          <p>randreu.dev</p> <p>Rubén Chiquin</p>
        </span>
      </a>

      <p className="my-auto hidden md:block">07/01/2023</p>

      <p className="text-right">
        <p>Bachelor's Thesis</p>
        <p>Interactive 3D components</p>
      </p>
    </div>
  );
}
