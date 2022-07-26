import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/** Image styles */
const logoStyles = {
  maxWidth: '148px',
  maxHeight: '148px',
};

/** Type info */
type PurchaseDetails = {
  label: string,
  description: string,
  level: number,
};

export type PurchaseDetailsProps = {
  /** Purchase details to display */
  purchaseDetails?: PurchaseDetails[],
  /** Image logo src */
  logoSrc?: string,
  /** Name of the merchant to display as alt for image */
  merchantName?: string,
};

const title = 'Your order';

/**
 * Purchase Details section of the wallet that will optionally display a logo or text from the merchant
 * @param {PurchaseDetailsProps} PurchaseDetailsProps Component properties
 * @returns {JSX.Element}
 */
const PurchaseDetails: React.FC<PurchaseDetailsProps> = ({
  purchaseDetails = [],
  logoSrc,
  merchantName,
}) => (
  <Box sx={{ width: '327px' }}>
    <Typography variant='h6' sx={{ fontWeight: 500, mb: '12px', lineHeight: '26px' }}>
      {title}
    </Typography>
    <Box sx={{ display: 'flex' }}>
      { logoSrc && (
        <Box sx={{ maxWidth: '148px', maxHeight: '148px', mr: '8px' }}>
          <img style={logoStyles} src={logoSrc} alt={merchantName} />
        </Box>
      )}
      <Box sx={{ maxWidth: logoSrc ? '170px' : '327px'}}>
      { purchaseDetails?.map((purchaseDetail) => {
        const { label, description, level } = {...purchaseDetail};
        const displayPair = label && description;
        const containsNewLine = description?.includes('\n')

        return displayPair && (
          <div key={`label-and-description-pair-level${level}`}>
            <Typography key={`label-level${level}`} variant={level === 1 ? 'subtitle1' : 'subtitle2'}>
              { label }
            </Typography>
            <Typography key={`description-level${level}`} variant='body2' noWrap={!containsNewLine} color='textSecondary' sx={{ mb: '6px' }}>
              {description?.split('\n').map(str =>
                <span key={`${str}-line-br`}>{str} <br/> </span>
              )}
            </Typography>
          </div>
        )})
      }
      </Box>
    </Box>
  </Box>
);

export default PurchaseDetails;
