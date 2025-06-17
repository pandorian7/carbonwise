import React from "react";

/**
 * @typedef {"Default" | "DefaultOutlined" | "Secondary" | "SecondaryOutlined"} ButtonVariant
 */

/**
 * @param {{
 *   title?: string,
 *   LeftIcon?: React.ElementType | null,
 *   variant?: ButtonVariant
 * }} props
 */
function Button({ title = "Button", LeftIcon = null, variant = "Default" }) {
  // Style mapping for each variant
  const variantStyles = {
    Default: {
      bg: "bg-lime-400",
      border: "border border-lime-400",
      text: "text-base-primary-foreground",
      icon: "text-base-primary-foreground",
    },
    DefaultOutlined: {
      bg: "bg-base-background",
      border: "outline outline-1 outline-lime-400",
      text: "text-lime-400",
      icon: "text-lime-400",
    },
    Secondary: {
      bg: "bg-base-secondary",
      border: "",
      text: "text-base-secondary-foreground",
      icon: "text-base-secondary-foreground",
    },
    SecondaryOutlined: {
      bg: "bg-base-background",
      border: "outline outline-1 outline-base-input",
      text: "text-base-foreground",
      icon: "text-base-foreground",
    },
  };
  const styles = variantStyles[variant] || variantStyles.Default;
  return (
    <button
      className={`h-10 px-4 py-2 rounded-md flex justify-center items-center gap-2 font-['Inter'] text-sm font-medium leading-tight ${styles.bg} ${styles.border}`}
      type="button"
    >
      {LeftIcon && (
        <span
          className={`w-4 h-4 relative overflow-hidden flex items-center justify-center`}
        >
          <LeftIcon className={`${styles.icon} icon16`} />
        </span>
      )}
      <span className={`justify-center ${styles.text}`}>{title}</span>
    </button>
  );
}

export default Button;
