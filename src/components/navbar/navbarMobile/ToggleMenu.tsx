"use client";

import React, {
  useState,
  ReactNode,
  useRef,
  useEffect,
  ReactElement,
} from "react";

interface ToggleMenuProps {
  children: ReactNode;
}

const ToggleMenu = ({ children }: ToggleMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Cierra el menú si haces clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !menuButtonRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={menuButtonRef} className="w-full h-full">
      <div
        className="w-full h-full flex justify-center items-center p-4"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${
            isOpen ? "rotate-90" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>

      <div
        ref={menuRef}
        className={`absolute top-full left-0 w-[100dvw] h-[100dvh] bg-(--background-navbar-rgb) shadow-md z-50 flex flex-col text-center items-center transition-opacity duration-200
            ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return child;

          const typedChild = child as ReactElement<{
            onClick?: (e: MouseEvent) => void;
          }>;

          const handleClick = (e: MouseEvent) => {
            typedChild.props.onClick?.(e);
            setIsOpen(false);
          };

          return React.cloneElement(typedChild, { onClick: handleClick });
        })}
      </div>
    </div>
  );
};

export default ToggleMenu;
