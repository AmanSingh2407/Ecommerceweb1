import React, { useState } from 'react';
import { Rating } from '../ui/Rating';
import { Button } from '../ui/Button';
import { CheckCircle2, ThumbsUp, PenSquare } from 'lucide-react';
import { mockReviews } from '../../data/reviews';
import { WriteReviewModal } from './WriteReviewModal';

export const ReviewSection = ({ product }) => {
  const [reviews, setReviews] = useState(
    mockReviews.filter(r => r.productId === product.id)
  );
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);

  const handleAddReview = (newReview) => {
    setReviews([newReview, ...reviews]);
  };

  // Rating breakdown calculation
  const totalReviews = reviews.length || 1;
  const ratingCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  reviews.forEach(r => {
    if (ratingCounts[r.rating] !== undefined) ratingCounts[r.rating]++;
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800">
        
        {/* Left Rating Overall */}
        <div className="flex items-center gap-6">
          <div className="text-center bg-slate-100 dark:bg-slate-800/60 px-6 py-4 rounded-2xl">
            <span className="text-4xl font-extrabold text-slate-900 dark:text-slate-100 block">
              {product.rating.toFixed(1)}
            </span>
            <Rating rating={product.rating} showValue={false} size="sm" className="my-1 justify-center" />
            <span className="text-xs text-slate-400 font-medium">{product.reviewCount} Ratings</span>
          </div>

          {/* Rating Breakdown Bars */}
          <div className="space-y-1.5 w-48 sm:w-64">
            {[5, 4, 3, 2, 1].map((star) => {
              const count = ratingCounts[star] || 0;
              const percentage = Math.round((count / totalReviews) * 100);
              return (
                <div key={star} className="flex items-center gap-2 text-xs">
                  <span className="w-8 text-slate-500 font-medium">{star} ★</span>
                  <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-400 rounded-full" style={{ width: `${percentage}%` }} />
                  </div>
                  <span className="w-8 text-right text-slate-400">{count}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Write Review Button */}
        <div>
          <Button
            variant="outline"
            size="md"
            icon={PenSquare}
            onClick={() => setIsWriteModalOpen(true)}
          >
            Write a Review
          </Button>
        </div>
      </div>

      {/* Review List */}
      <div className="space-y-6">
        {reviews.length === 0 ? (
          <div className="p-8 text-center text-sm text-slate-500 bg-slate-50 dark:bg-slate-900/50 rounded-2xl">
            No customer reviews yet. Be the first to share your experience!
          </div>
        ) : (
          reviews.map((rev) => (
            <div key={rev.id} className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-subtle space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={rev.userAvatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80'}
                    alt={rev.userName}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h5 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                      <span>{rev.userName}</span>
                      {rev.verified && (
                        <span className="text-[10px] bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 font-semibold px-1.5 py-0.5 rounded flex items-center gap-0.5">
                          <CheckCircle2 className="w-3 h-3" /> Verified Buyer
                        </span>
                      )}
                    </h5>
                    <span className="text-xs text-slate-400">{rev.date}</span>
                  </div>
                </div>
                <Rating rating={rev.rating} showValue={false} size="xs" />
              </div>

              <h6 className="font-bold text-sm text-slate-800 dark:text-slate-200">{rev.title}</h6>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{rev.comment}</p>

              <div className="flex items-center gap-4 text-xs text-slate-400 pt-1">
                <button className="flex items-center gap-1 hover:text-brand-600 transition-colors">
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>Helpful ({rev.helpfulCount || 0})</span>
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <WriteReviewModal
        isOpen={isWriteModalOpen}
        onClose={() => setIsWriteModalOpen(false)}
        product={product}
        onSubmit={handleAddReview}
      />
    </div>
  );
};
