import React, { FunctionComponent, PropsWithChildren } from "react";

interface AccordionGroupComponents {
  Accordion: FunctionComponent<AccordionProps>;
}

interface AccordionGroupProps extends PropsWithChildren {
  isRadio?: boolean;
}

export const AccordionGroup: FunctionComponent<AccordionGroupProps> &
  AccordionGroupComponents = ({
  children,
  isRadio = false,
}: AccordionGroupProps) => {
  const [openAccordions, setOpenAccordions] = React.useState<string[]>([]);
  const handleOnClick = (id: string) => {
    if (isRadio) {
      setOpenAccordions([id]);
    } else if (openAccordions.includes(id)) {
      setOpenAccordions(
        openAccordions.filter((accordionId) => accordionId !== id)
      );
    } else {
      setOpenAccordions([...openAccordions, id]);
    }
  };
  return (
    <div className="w-full bg-primary flex flex-col gap-3">
      {React.Children.map(children, (child) =>
        React.cloneElement(child as React.ReactElement, {
          isOpen: openAccordions.includes(
            (child as React.ReactElement).props.id
          ),
          onClick: handleOnClick,
        })
      )}
    </div>
  );
};

interface AccordionComponents {
  AccordionTrigger: FunctionComponent<AccordionTriggerProps>;
  AccordionContent: FunctionComponent<AccordionContentProps>;
}

interface AccordionProps extends PropsWithChildren {
  id?: string;
  isOpen?: boolean;
  onClick?: (id?: string) => void;
  children: React.ReactNode;
}

export const Accordion: FunctionComponent<AccordionProps> &
  AccordionComponents = ({ children, isOpen, id, onClick }: AccordionProps) => {
  return (
    <div className="w-full bg-primary">
      {React.Children.map(children, (child) =>
        React.cloneElement(child as React.ReactElement, { isOpen, onClick, id })
      )}
    </div>
  );
};

interface AccordionTriggerProps extends PropsWithChildren {
  id?: string;
  isOpen?: boolean;
  onClick?: (id?: string) => void;
}

const AccordionTrigger: FunctionComponent<AccordionTriggerProps> = ({
  children,
  isOpen,
  id,
  onClick,
}: AccordionTriggerProps) => {
  const handleOnClick = () => {
    if (onClick) {
      onClick(id);
    }
  };
  return (
    <div
      onClick={handleOnClick}
      className="w-full border border-gray-300 p-3 bg-primary flex flex-row justify-between cursor-pointer"
    >
      {children}
      {isOpen ? <div>-</div> : <div>+</div>}
    </div>
  );
};

interface AccordionContentProps extends PropsWithChildren {
  isOpen?: boolean;
}

const AccordionContent: FunctionComponent<AccordionContentProps> = ({
  children,
  isOpen,
}: AccordionContentProps) => {
  return (
    <div
      className={`w-full border border-t-0 border-gray-300 bg-primary p-3 flex flex-col transition-all ${
        isOpen || "max-h-0 p-0 overflow-hidden"
      }`}
    >
      {children}
    </div>
  );
};

Accordion.AccordionContent = AccordionContent;
Accordion.AccordionTrigger = AccordionTrigger;
AccordionGroup.Accordion = Accordion;
