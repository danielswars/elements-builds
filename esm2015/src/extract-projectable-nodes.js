/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// NOTE: This is a (slightly improved) version of what is used in ngUpgrade's
//       `DowngradeComponentAdapter`.
// TODO(gkalpak): Investigate if it makes sense to share the code.
import { isElement, matchesSelector } from './utils';
export function extractProjectableNodes(host, ngContentSelectors) {
    const nodes = host.childNodes;
    const projectableNodes = ngContentSelectors.map(() => []);
    let wildcardIndex = -1;
    ngContentSelectors.some((selector, i) => {
        if (selector === '*') {
            wildcardIndex = i;
            return true;
        }
        return false;
    });
    for (let i = 0, ii = nodes.length; i < ii; ++i) {
        const node = nodes[i];
        const ngContentIndex = findMatchingIndex(node, ngContentSelectors, wildcardIndex);
        if (ngContentIndex !== -1) {
            projectableNodes[ngContentIndex].push(node);
        }
    }
    return projectableNodes;
}
function findMatchingIndex(node, selectors, defaultIndex) {
    let matchingIndex = defaultIndex;
    if (isElement(node)) {
        selectors.some((selector, i) => {
            if ((selector !== '*') && matchesSelector(node, selector)) {
                matchingIndex = i;
                return true;
            }
            return false;
        });
    }
    return matchingIndex;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0cmFjdC1wcm9qZWN0YWJsZS1ub2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2VsZW1lbnRzL3NyYy9leHRyYWN0LXByb2plY3RhYmxlLW5vZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILDZFQUE2RTtBQUM3RSxxQ0FBcUM7QUFDckMsa0VBQWtFO0FBRWxFLE9BQU8sRUFBQyxTQUFTLEVBQUUsZUFBZSxFQUFDLE1BQU0sU0FBUyxDQUFDO0FBRW5ELE1BQU0sa0NBQWtDLElBQWlCLEVBQUUsa0JBQTRCO0lBQ3JGLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDOUIsTUFBTSxnQkFBZ0IsR0FBYSxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEUsSUFBSSxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFdkIsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3RDLElBQUksUUFBUSxLQUFLLEdBQUcsRUFBRTtZQUNwQixhQUFhLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUMsQ0FBQyxDQUFDO0lBRUgsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTtRQUM5QyxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEIsTUFBTSxjQUFjLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxFQUFFLGtCQUFrQixFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRWxGLElBQUksY0FBYyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ3pCLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM3QztLQUNGO0lBRUQsT0FBTyxnQkFBZ0IsQ0FBQztBQUMxQixDQUFDO0FBRUQsMkJBQTJCLElBQVUsRUFBRSxTQUFtQixFQUFFLFlBQW9CO0lBQzlFLElBQUksYUFBYSxHQUFHLFlBQVksQ0FBQztJQUVqQyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNuQixTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzdCLElBQUksQ0FBQyxRQUFRLEtBQUssR0FBRyxDQUFDLElBQUksZUFBZSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsRUFBRTtnQkFDekQsYUFBYSxHQUFHLENBQUMsQ0FBQztnQkFDbEIsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQUM7S0FDSjtJQUVELE9BQU8sYUFBYSxDQUFDO0FBQ3ZCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8vIE5PVEU6IFRoaXMgaXMgYSAoc2xpZ2h0bHkgaW1wcm92ZWQpIHZlcnNpb24gb2Ygd2hhdCBpcyB1c2VkIGluIG5nVXBncmFkZSdzXG4vLyAgICAgICBgRG93bmdyYWRlQ29tcG9uZW50QWRhcHRlcmAuXG4vLyBUT0RPKGdrYWxwYWspOiBJbnZlc3RpZ2F0ZSBpZiBpdCBtYWtlcyBzZW5zZSB0byBzaGFyZSB0aGUgY29kZS5cblxuaW1wb3J0IHtpc0VsZW1lbnQsIG1hdGNoZXNTZWxlY3Rvcn0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0UHJvamVjdGFibGVOb2Rlcyhob3N0OiBIVE1MRWxlbWVudCwgbmdDb250ZW50U2VsZWN0b3JzOiBzdHJpbmdbXSk6IE5vZGVbXVtdIHtcbiAgY29uc3Qgbm9kZXMgPSBob3N0LmNoaWxkTm9kZXM7XG4gIGNvbnN0IHByb2plY3RhYmxlTm9kZXM6IE5vZGVbXVtdID0gbmdDb250ZW50U2VsZWN0b3JzLm1hcCgoKSA9PiBbXSk7XG4gIGxldCB3aWxkY2FyZEluZGV4ID0gLTE7XG5cbiAgbmdDb250ZW50U2VsZWN0b3JzLnNvbWUoKHNlbGVjdG9yLCBpKSA9PiB7XG4gICAgaWYgKHNlbGVjdG9yID09PSAnKicpIHtcbiAgICAgIHdpbGRjYXJkSW5kZXggPSBpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGlpID0gbm9kZXMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICBjb25zdCBuZ0NvbnRlbnRJbmRleCA9IGZpbmRNYXRjaGluZ0luZGV4KG5vZGUsIG5nQ29udGVudFNlbGVjdG9ycywgd2lsZGNhcmRJbmRleCk7XG5cbiAgICBpZiAobmdDb250ZW50SW5kZXggIT09IC0xKSB7XG4gICAgICBwcm9qZWN0YWJsZU5vZGVzW25nQ29udGVudEluZGV4XS5wdXNoKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9qZWN0YWJsZU5vZGVzO1xufVxuXG5mdW5jdGlvbiBmaW5kTWF0Y2hpbmdJbmRleChub2RlOiBOb2RlLCBzZWxlY3RvcnM6IHN0cmluZ1tdLCBkZWZhdWx0SW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gIGxldCBtYXRjaGluZ0luZGV4ID0gZGVmYXVsdEluZGV4O1xuXG4gIGlmIChpc0VsZW1lbnQobm9kZSkpIHtcbiAgICBzZWxlY3RvcnMuc29tZSgoc2VsZWN0b3IsIGkpID0+IHtcbiAgICAgIGlmICgoc2VsZWN0b3IgIT09ICcqJykgJiYgbWF0Y2hlc1NlbGVjdG9yKG5vZGUsIHNlbGVjdG9yKSkge1xuICAgICAgICBtYXRjaGluZ0luZGV4ID0gaTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hpbmdJbmRleDtcbn1cbiJdfQ==