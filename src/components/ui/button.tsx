import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-3 border px-5 py-3 text-sm font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        dark: "border-foreground bg-foreground text-background hover:border-accent hover:bg-accent",
        accent: "border-accent bg-accent text-accent-foreground hover:bg-accent/90",
        outline: "border-border bg-transparent text-foreground hover:border-foreground hover:bg-foreground hover:text-background",
        ghost: "border-transparent bg-transparent px-2 text-muted-foreground hover:text-accent",
      },
      size: {
        default: "",
        icon: "size-11 px-0",
        sm: "min-h-9 px-3 py-2 text-xs",
      },
    },
    defaultVariants: { variant: "dark", size: "default" },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  ),
);

Button.displayName = "Button";