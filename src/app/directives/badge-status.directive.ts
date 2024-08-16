import { Directive, HostBinding, Input } from '@angular/core';

export const BadgeColor = {
  Neutral: 'neutral',
  Positive: 'positive',
  Critical: 'critical',
  Warning: 'warning',
  Purples: 'purples',
  Primary: 'primary',
} as const;

export const BadgeVariant = {
  Fill: 'fill',
  Light: 'light',
  Outline: 'outline',
} as const;

type BadgeColorType = (typeof BadgeColor)[keyof typeof BadgeColor];
type BadgeVariantType = (typeof BadgeVariant)[keyof typeof BadgeVariant];

@Directive({
  exportAs: 'statusBadge',
  selector: `status-badge, [status-badge], [statusBadge]`,
  standalone: true,
})
export class BadgeStatusDirective {
  @Input() color: BadgeColorType = BadgeColor.Neutral;
  @Input() variant: BadgeVariantType = BadgeVariant.Fill;

  @HostBinding('class') get getClasses() {
    return ['status-badge', `${this.color}-${this.variant}-badge`];
  }
}
