import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, TrendingDown, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const SavingsWarning: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const { amount, sourceAccount, destinationAccount, currency } = location.state || {};

  const handleBack = () => {
    navigate('/review-transfer', { 
      state: { 
        amount,
        sourceAccount,
        destinationAccount,
        currency
      } 
    });
  };

  const handleContinue = () => {
    navigate('/pin-confirmation', { 
      state: { 
        amount,
        sourceAccount,
        destinationAccount,
        currency
      } 
    });
  };

  return (
    <div className="min-h-screen bg-[#F3F3F3] dark:bg-black text-foreground max-w-[480px] mx-auto flex flex-col">
      <div className="px-4 py-6 flex flex-col flex-1">
        {/* Header */}
        <header className="flex items-center mb-8">
          <button 
            onClick={handleBack}
            className="w-12 h-12 rounded-full bg-white dark:bg-[#211E1E] border border-border flex items-center justify-center hover:bg-gray-50 dark:hover:bg-[#2a2626] transition-colors text-foreground"
            aria-label="Go back"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="flex-1 text-center text-lg font-medium pr-12 text-foreground">Review transfer</h1>
        </header>

        {/* Warning Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-white dark:bg-[#211E1E] border border-border rounded-2xl flex items-center justify-center">
            <div className="w-12 h-12 bg-[#A488F5] rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-7 h-7 text-white" />
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <h2 className="text-2xl font-normal text-center mb-8 leading-tight">
          Moving from Savings to<br />Current account
        </h2>

        {/* Important Information Section */}
        <div className="flex-1">
          <h3 className="text-base font-normal mb-4">Important things to know:</h3>
          
          <div className="space-y-4 mb-6">
            {/* Item 1 */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 flex-shrink-0">
                <TrendingDown className="w-8 h-8 text-[#A488F5]" />
              </div>
              <p className="text-base pt-1">You'll stop earning 4.2% interest on this amount once transferred.</p>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 flex-shrink-0">
                <Clock className="w-8 h-8 text-[#A488F5]" />
              </div>
              <p className="text-base pt-1">Funds will be available within 3-5 business days upon approval.</p>
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="space-y-4 pt-4">
          {/* Continue Button */}
          <Button 
            onClick={handleContinue}
            className="w-full h-14 bg-[#A488F5] hover:bg-[#9575e8] text-white font-medium text-base rounded-xl"
          >
            Submit request
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SavingsWarning;
