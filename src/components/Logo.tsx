export const SnapPDFLogo = ({ size = 24, className = "" }: { size?: number, className?: string, iconColor?: string, partColor?: string }) => (
  <img 
    src="/icons/logo.png" 
    width={size} 
    height={size} 
    alt="SnapPDF Logo"
    className={className}
  />
)