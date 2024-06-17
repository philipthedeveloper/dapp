import classnames from "classnames";
import { CSSProperties, PropsWithChildren } from "react";
import styled from "styled-components";

interface DefiCardProps extends PropsWithChildren {
  color: string;
  badgeIcon: string;
  badgeText: string;
  className?: string;
  inlineStyle?: CSSProperties;
}

const DefiCard = ({
  color,
  badgeIcon,
  badgeText,
  children,
  className,
  inlineStyle,
}: DefiCardProps) => {
  const bgColorVariant: Record<string, string> = {
    blue: "bg-[#0066ff0a]",
    pink: "bg-[#fc72ff1f]",
    green: "bg-[#00c3a00f]",
    purple: "bg-[#883fff0f]",
    red: "bg-[#ff4d0014]",
    brown: "bg-[#62543229]",
    darkPink: "bg-[#311c31]",
  };

  const colorVariant: Record<string, string> = {
    blue: "text-[#2abdff]",
    pink: "text-[#fc72ff]",
    green: "text-[#00c3a0]",
    purple: "text-[#9e62ff]",
    red: "text-[#ff4d00]",
    brown: "text-[#8e8767]",
    darkPink: "text-[#fc72ff]",
  };

  return (
    <CardContainer
      className={classnames(
        "w-full rounded-2xl md:rounded-3xl p-6",
        bgColorVariant[color],
        className
      )}
      href="#"
      style={inlineStyle}
    >
      <div className="black-bg p-4 py-3 rounded-full badge-el w-max flex items-center gap-2 relative overflow-hidden">
        <div className="vanishing-badge-el flex items-center gap-3 duration-200">
          <i
            className={classnames(
              badgeIcon,
              "flex w-4 duration-200 opacity-100",
              colorVariant[color]
            )}
          ></i>
          <span
            className={classnames(
              colorVariant[color],
              "montserrat-all font-semibold text-base"
            )}
          >
            {badgeText}
          </span>
        </div>
        <div className="badge-arrow-cont w-4 absolute right-0 translate-x-5 duration-200 opacity-0">
          <i
            className={classnames(
              "fi fi-rr-arrow-small-right flex text-2xl",
              colorVariant[color]
            )}
          ></i>
        </div>
      </div>
      {children}
    </CardContainer>
  );
};

const CardContainer = styled.a`
  &:hover {
    .vanishing-badge-el {
      transform: translateX(-24px);

      i {
        opacity: 0;
      }
    }

    .badge-arrow-cont {
      opacity: 1;
      transform: translateX(-18px);
    }
  }
`;

export default DefiCard;
