import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Star } from 'lucide-react';
import { useUIStore } from '../../store/uiStore';

export const WriteReviewModal = ({ isOpen, onClose, product, onSubmit }) => {
  const [rating, setRating] = useState(5);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [userName, setUserName] = useState('');
  const { addToast } = useUIStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !comment.trim() || !userName.trim()) {
      addToast('Please complete all fields', 'error');
      return;
    }

    const newReview = {
      id: 'rev-' + Date.now(),
      productId: product.id,
      userName,
      userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      rating,
      date: new Date().toISOString().split('T')[0],
      title,
      comment,
      verified: true,
      helpfulCount: 0
    };

    onSubmit(newReview);
    addToast('Review submitted successfully!', 'success');
    setTitle('');
    setComment('');
    setUserName('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Write a Review for ${product?.name}`} maxWidth="max-w-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">Overall Rating</label>
          <div className="flex items-center gap-1.5 text-amber-400 cursor-pointer">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                onClick={() => setRating(star)}
                className="p-1 hover:scale-125 transition-transform"
              >
                <Star
                  className={`w-6 h-6 ${
                    star <= rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300 dark:text-slate-700'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <Input
          label="Your Name"
          placeholder="e.g. Alex Vance"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />

        <Input
          label="Review Headline"
          placeholder="Summarize your experience..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Detailed Feedback</label>
          <textarea
            rows={4}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="What did you like or dislike about this product?"
            className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm p-3 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
            required
          />
        </div>

        <div className="pt-3 flex justify-end gap-3">
          <Button variant="outline" size="md" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" variant="primary" size="md">
            Submit Review
          </Button>
        </div>
      </form>
    </Modal>
  );
};
