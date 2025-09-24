// import { cn } from "@/lib/utils";

// export function Logo(props: { className?: string }) {
//   return (
//     <div
//       className={cn(
//         "flex items-end gap-1.5 font-extrabold",
//         props.className,
//       )}
//     >
//       <span className="text-3xl tracking-tight bg-gradient-to-r from-brand via-brand2 to-brand bg-[length:200%_200%] animate-gradient-x bg-clip-text text-transparent drop-shadow-[0_2px_8px_hsla(var(--brand),0.35)]">
//         fast
//       </span>
//       <span className="inline-flex items-center justify-center rounded-full border border-brand/60 bg-gradient-to-r from-brand/10 to-brand2/10 px-3.5 py-0.5 leading-none shadow-[0_0_24px_hsl(var(--brand)/0.25)] backdrop-blur">
//         <span className="text-[2rem] tracking-[0.18em] text-transparent bg-gradient-to-r from-brand to-brand2 bg-clip-text font-mono">IO</span>
//       </span>
//     </div>
//   );
// }




import { cn } from "@/lib/utils";
import fastioLogo from "./fastiologo1.svg";

export function Logo(props: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center",
        props.className,
      )}
    >
      <img
        src={fastioLogo}
        alt="FastIO"
        className="h-8 w-auto"
        // style={{ 
        //   background: 'transparent',
        //   mixBlendMode: 'multiply'
        // }}
      />
    </div>
  );
}
