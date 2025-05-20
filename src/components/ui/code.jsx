import React, { useCallback } from "react";
import { cn } from "@/lib/utils";
import { CopyIcon, CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
const Code = React.forwardRef(
  (
    {
      className,
      children,
      language,
      copyable = true,
      showLineNumbers = false,
      ...props
    },
    ref,
  ) => {
    const [copied, setCopied] = React.useState(false);
    const codeString = React.useMemo(() => {
      if (typeof children === "string") return children;
      if (
        React.isValidElement(children) &&
        typeof children.props.children === "string"
      )
        return children.props.children;
      return "";
    }, [children]);
    const handleCopy = useCallback(() => {
      navigator.clipboard.writeText(codeString).then(() => setCopied(true));
      toast("Copied to clipboard", {
        description: "Code snippet has been copied to your clipboard",
        duration: 2000,
      });
      setTimeout(() => setCopied(false), 2000);
    }, [codeString]);
    const lines = codeString.split("\n");
    return (
      <div className="relative group">
        <pre
          ref={ref}
          className={cn(
            "px-4 py-3 rounded-lg bg-secondary/50 overflow-auto relative",
            showLineNumbers && "pl-12",
            className,
          )}
          data-language={language}
          {...props}
        >
          {showLineNumbers && (
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-muted flex flex-col items-end pr-2 py-3 text-xs text-muted-foreground select-none">
              {lines.map((_, i) => (
                <div key={i} className="leading-relaxed">
                  {i + 1}
                </div>
              ))}
            </div>
          )}
          <code className="text-sm font-mono">{children}</code>
        </pre>
        {copyable && (
          <Button
            variant="ghost"
            size="icon"
            onClick={handleCopy}
            className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {copied ? (
              <CheckIcon className="h-4 w-4" />
            ) : (
              <CopyIcon className="h-4 w-4" />
            )}
          </Button>
        )}
      </div>
    );
  },
);
Code.displayName = "Code";
export { Code };
