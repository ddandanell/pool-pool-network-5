import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200">
      <div className="section-container py-3">
        <ol className="flex items-center space-x-2 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/" className="text-pool hover:underline flex items-center" itemProp="item">
              <Home className="h-4 w-4 mr-1" aria-hidden="true" />
              <span itemProp="name">Home</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <ChevronRight className="h-4 w-4 text-gray-400 mx-1" aria-hidden="true" />
              {item.href ? (
                <Link href={item.href} className="text-pool hover:underline" itemProp="item">
                  <span itemProp="name">{item.label}</span>
                </Link>
              ) : (
                <span className="text-gray-600 font-medium" aria-current="page" itemProp="name">
                  {item.label}
                </span>
              )}
              <meta itemProp="position" content={`${index + 2}`} />
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
