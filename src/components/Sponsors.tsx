import React from 'react';

const Sponsors: React.FC = () => {
  return (
    <section className="py-6 border-y stripe-bg" style={{ borderColor: 'var(--border-color)' }}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-8 flex-wrap">
          <div className="text-neon-pink font-bold text-sm">POWERED BY</div>
          <div className="flex items-center gap-8">
            <div className="text-xl font-black" style={{ color: 'var(--text-primary)' }}>
              BASF
            </div>
            <div className="text-xl font-black" style={{ color: 'var(--text-primary)' }}>
              ECO PROTECT
            </div>
            <div className="text-xl font-black" style={{ color: 'var(--text-primary)' }}>
              PRAGNA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
