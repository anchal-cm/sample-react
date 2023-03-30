import { useState } from "react";

export default function useDialog() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return {
        isOpen,
        toggle
    }
}