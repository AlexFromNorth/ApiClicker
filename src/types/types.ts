export interface ClickerProps {
    clicks: number;
    setClicks: React.Dispatch<React.SetStateAction<number>>;
    setClickerEvent: React.Dispatch<React.SetStateAction<boolean>>;
    clickerEvent: boolean;
  }
  
  export interface UpdateClicksProps {
    displayedClicks: number;
    setDisplayedClicks: React.Dispatch<React.SetStateAction<number>>;
    setClickerEvent: React.Dispatch<React.SetStateAction<boolean>>;
    clicks: number;
    setClicks?: React.Dispatch<React.SetStateAction<number>>;

  }